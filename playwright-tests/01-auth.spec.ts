/**
 * 01 - Authentication
 * Covers: login, refresh, logout, edge cases
 *
 * Notes on backend behavior:
 * - NestJS @Post() returns 201 by default (no @HttpCode set in AuthController)
 * - refresh/logout body params use camelCase: { refreshToken: "..." }
 * - Refresh with invalid token → 403 (ForbiddenException)
 * - Revoked token refresh → 403
 */
import { test, expect } from '@playwright/test';

const BASE = '/api';

test.describe('POST /auth/login', () => {
  test('returns 2xx + tokens on valid admin credentials', async ({ request }) => {
    const res = await request.post(`${BASE}/auth/login`, {
      data: { email: 'admin@crmseguros.com', password: 'Admin1234!' },
    });
    expect(res.ok()).toBe(true);
    const body = await res.json();
    expect(body).toHaveProperty('access_token');
    expect(body).toHaveProperty('refresh_token');
    expect(typeof body.access_token).toBe('string');
    expect(body.access_token.length).toBeGreaterThan(20);
  });

  test('returns 2xx + tokens on valid vendedor credentials', async ({ request }) => {
    const res = await request.post(`${BASE}/auth/login`, {
      data: { email: 'vendedor@crmseguros.com', password: 'Vendedor1234!' },
    });
    expect(res.ok()).toBe(true);
    const body = await res.json();
    expect(body).toHaveProperty('access_token');
    expect(body).toHaveProperty('refresh_token');
  });

  test('returns 401 on wrong password', async ({ request }) => {
    const res = await request.post(`${BASE}/auth/login`, {
      data: { email: 'admin@crmseguros.com', password: 'wrongpassword' },
    });
    expect(res.status()).toBe(401);
  });

  test('returns 401 on non-existent email', async ({ request }) => {
    const res = await request.post(`${BASE}/auth/login`, {
      data: { email: 'noexiste@crmseguros.com', password: 'Admin1234!' },
    });
    expect(res.status()).toBe(401);
  });

  test('returns 400 on missing email', async ({ request }) => {
    const res = await request.post(`${BASE}/auth/login`, {
      data: { password: 'Admin1234!' },
    });
    expect(res.status()).toBe(400);
  });

  test('returns 400 on missing password', async ({ request }) => {
    const res = await request.post(`${BASE}/auth/login`, {
      data: { email: 'admin@crmseguros.com' },
    });
    expect(res.status()).toBe(400);
  });

  test('returns 400 on password too short (< 6 chars)', async ({ request }) => {
    const res = await request.post(`${BASE}/auth/login`, {
      data: { email: 'admin@crmseguros.com', password: '123' },
    });
    expect(res.status()).toBe(400);
  });

  test('returns 400 on invalid email format', async ({ request }) => {
    const res = await request.post(`${BASE}/auth/login`, {
      data: { email: 'not-an-email', password: 'Admin1234!' },
    });
    expect(res.status()).toBe(400);
  });

  test('returns 400 on empty body', async ({ request }) => {
    const res = await request.post(`${BASE}/auth/login`, { data: {} });
    expect(res.status()).toBe(400);
  });

  test('response does not leak passwordHash', async ({ request }) => {
    const res = await request.post(`${BASE}/auth/login`, {
      data: { email: 'admin@crmseguros.com', password: 'Admin1234!' },
    });
    expect(res.ok()).toBe(true);
    const body = await res.json();
    expect(body).not.toHaveProperty('password_hash');
    expect(body).not.toHaveProperty('passwordHash');
    expect(body).not.toHaveProperty('password');
  });
});

test.describe('POST /auth/refresh', () => {
  // Note: refresh/logout use @Body('refreshToken') → camelCase in request body
  // Tests are self-contained to avoid beforeAll state issues

  test('returns new token pair on valid refresh token', async ({ request }) => {
    // Retry login up to 3 times — sequential tests can cause transient 500s in Prisma
    let loginRes = await request.post(`${BASE}/auth/login`, {
      data: { email: 'admin@crmseguros.com', password: 'Admin1234!' },
    });
    for (let attempt = 1; attempt < 3 && !loginRes.ok(); attempt++) {
      await new Promise((r) => setTimeout(r, 300 * attempt));
      loginRes = await request.post(`${BASE}/auth/login`, {
        data: { email: 'admin@crmseguros.com', password: 'Admin1234!' },
      });
    }
    expect(loginRes.ok()).toBe(true);
    const loginBody = await loginRes.json();
    // SnakeCaseInterceptor transforms all responses to snake_case
    const refreshToken = loginBody.refresh_token as string;
    expect(typeof refreshToken).toBe('string');

    const res = await request.post(`${BASE}/auth/refresh`, {
      data: { refreshToken }, // camelCase in request body
    });
    expect(res.ok()).toBe(true);
    const body = await res.json();
    expect(body).toHaveProperty('access_token');
    expect(body).toHaveProperty('refresh_token');
  });

  test('returns 4xx on invalid refresh token string', async ({ request }) => {
    const res = await request.post(`${BASE}/auth/refresh`, {
      data: { refreshToken: 'invalid.token.here' },
    });
    expect(res.status()).toBeGreaterThanOrEqual(400);
  });

  test('returns 4xx on missing refreshToken field', async ({ request }) => {
    const res = await request.post(`${BASE}/auth/refresh`, { data: {} });
    expect(res.status()).toBeGreaterThanOrEqual(400);
  });
});

test.describe('POST /auth/logout', () => {
  // Self-contained: get fresh token inside test

  test('returns 2xx on valid logout and token becomes invalid', async ({ request }) => {
    // Retry login — sequential tests can cause transient 500s
    let loginRes = await request.post(`${BASE}/auth/login`, {
      data: { email: 'admin@crmseguros.com', password: 'Admin1234!' },
    });
    for (let attempt = 1; attempt < 3 && !loginRes.ok(); attempt++) {
      await new Promise((r) => setTimeout(r, 300 * attempt));
      loginRes = await request.post(`${BASE}/auth/login`, {
        data: { email: 'admin@crmseguros.com', password: 'Admin1234!' },
      });
    }
    expect(loginRes.ok()).toBe(true);
    const refreshToken = (await loginRes.json()).refresh_token as string; // snake_case via SnakeCaseInterceptor

    // Logout
    const logoutRes = await request.post(`${BASE}/auth/logout`, {
      data: { refreshToken },
    });
    expect(logoutRes.ok()).toBe(true);

    // Revoked token cannot be used to refresh
    const refreshRes = await request.post(`${BASE}/auth/refresh`, {
      data: { refreshToken },
    });
    expect(refreshRes.status()).toBeGreaterThanOrEqual(400);
  });
});

test.describe('Security: protected routes without token', () => {
  const protectedGetRoutes = [
    '/users/me',
    '/leads',
    '/ventas',
    '/kpis/dashboard',
    '/clientes',
    '/consultas',
    '/noticias',
    '/documentos',
    '/notificaciones',
    '/zonas',
    '/ranking/activo',
  ];

  for (const route of protectedGetRoutes) {
    test(`GET ${route} → 401 without token`, async ({ request }) => {
      const res = await request.get(`${BASE}${route}`);
      expect(res.status()).toBe(401);
    });
  }

  test('GET /kpis/admin → 401 without token', async ({ request }) => {
    const res = await request.get(`${BASE}/kpis/admin`);
    expect(res.status()).toBe(401);
  });
});

test.describe('Security: tampered / expired JWT', () => {
  test('returns 401 on obviously forged token', async ({ request }) => {
    const fakeToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJoYWNrZWQifQ.fake';
    const res = await request.get(`${BASE}/users/me`, {
      headers: { Authorization: `Bearer ${fakeToken}` },
    });
    expect(res.status()).toBe(401);
  });

  test('returns 401 on malformed Bearer header', async ({ request }) => {
    const res = await request.get(`${BASE}/users/me`, {
      headers: { Authorization: 'NotBearer token' },
    });
    expect(res.status()).toBe(401);
  });

  test('returns 401 on empty Bearer value', async ({ request }) => {
    const res = await request.get(`${BASE}/users/me`, {
      headers: { Authorization: 'Bearer ' },
    });
    expect(res.status()).toBe(401);
  });
});
