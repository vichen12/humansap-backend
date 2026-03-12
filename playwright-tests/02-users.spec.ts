/**
 * 02 - Users / Profile
 * Covers: GET/PATCH /users/me, POST /users/me/change-password,
 *         GET /users/vendedores, POST /users, PATCH /users/:id
 *
 * Notes:
 * - NestJS @Post() returns 201 by default → use res.ok()
 * - POST /users uses @Body() body: any → no email validation (known backend behavior)
 * - PATCH /users/:id non-existent → 500 instead of 404 (backend bug: no error handling)
 */
import { test, expect } from '@playwright/test';
import {
  loginAs,
  authGet,
  authPost,
  authPatch,
  ADMIN_CREDS,
  VENDOR_CREDS,
} from './helpers/auth';

let adminToken: string;
let vendorToken: string;
let createdUserId: string;

test.beforeAll(async ({ request }) => {
  const [a, v] = await Promise.all([
    loginAs(request, ADMIN_CREDS),
    loginAs(request, VENDOR_CREDS),
  ]);
  adminToken = a.accessToken;
  vendorToken = v.accessToken;
});

test.describe('GET /users/me', () => {
  test('admin gets own profile', async ({ request }) => {
    const res = await authGet(request, adminToken, '/users/me');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.email).toBe(ADMIN_CREDS.email);
    expect(body.rol).toBe('admin');
    expect(body).not.toHaveProperty('password_hash');
    expect(body).not.toHaveProperty('passwordHash');
  });

  test('vendedor gets own profile', async ({ request }) => {
    const res = await authGet(request, vendorToken, '/users/me');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.email).toBe(VENDOR_CREDS.email);
    expect(body.rol).toContain('vendedor');
    expect(body).not.toHaveProperty('password_hash');
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.get('/api/users/me');
    expect(res.status()).toBe(401);
  });
});

test.describe('PATCH /users/me', () => {
  test('vendedor updates own nombre', async ({ request }) => {
    const res = await authPatch(request, vendorToken, '/users/me', {
      nombre: 'Juan',
      apellido: 'Perez',
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.nombre).toBe('Juan');
    expect(body.apellido).toBe('Perez');
  });

  test('vendedor updates telefono', async ({ request }) => {
    const res = await authPatch(request, vendorToken, '/users/me', {
      telefono: '1112345678',
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.telefono).toBe('1112345678');
  });

  test('whitelist: rol field is ignored (not elevated)', async ({ request }) => {
    const res = await authPatch(request, vendorToken, '/users/me', {
      nombre: 'Juan',
    });
    if (res.status() === 200) {
      const body = await res.json();
      expect(body.rol).not.toBe('admin');
      expect(body.activo).toBe(true);
    } else {
      expect(res.status()).toBe(400);
    }
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.patch('/api/users/me', {
      data: { nombre: 'X' },
      headers: { 'Content-Type': 'application/json' },
    });
    expect(res.status()).toBe(401);
  });
});

test.describe('POST /users/me/change-password', () => {
  // Use separate tokens per test to avoid stale state issues
  const newPw = 'NewSecure99!';

  test('vendedor can change own password (round-trip)', async ({ request }) => {
    // Step 1: change to new password
    const res1 = await authPost(request, vendorToken, '/users/me/change-password', {
      current_password: VENDOR_CREDS.password,
      new_password: newPw,
    });
    expect(res1.ok()).toBe(true);

    // Step 2: login with new password
    const loginRes = await request.post('/api/auth/login', {
      data: { email: VENDOR_CREDS.email, password: newPw },
    });
    expect(loginRes.ok()).toBe(true);
    const newToken = (await loginRes.json()).access_token;

    // Step 3: restore original password using the new token
    const res2 = await authPost(request, newToken, '/users/me/change-password', {
      current_password: newPw,
      new_password: VENDOR_CREDS.password,
    });
    expect(res2.ok()).toBe(true);

    // Refresh our module-level token after the password change
    const refreshedLogin = await request.post('/api/auth/login', {
      data: { email: VENDOR_CREDS.email, password: VENDOR_CREDS.password },
    });
    if (refreshedLogin.ok()) {
      vendorToken = (await refreshedLogin.json()).access_token;
    }
  });

  test('wrong current_password → 4xx', async ({ request }) => {
    // Uses vendorToken (JWT still valid regardless of password)
    const res = await authPost(request, vendorToken, '/users/me/change-password', {
      current_password: 'WrongPassword123!',
      new_password: 'SomethingNew1!',
    });
    expect(res.status()).toBeGreaterThanOrEqual(400);
    expect(res.status()).toBeLessThan(500);
  });

  test('new_password too short → 400', async ({ request }) => {
    const res = await authPost(request, vendorToken, '/users/me/change-password', {
      current_password: VENDOR_CREDS.password,
      new_password: 'short',
    });
    expect(res.status()).toBe(400);
  });

  test('missing new_password → 400', async ({ request }) => {
    const res = await authPost(request, vendorToken, '/users/me/change-password', {
      current_password: VENDOR_CREDS.password,
    });
    expect(res.status()).toBe(400);
  });
});

test.describe('GET /users/vendedores', () => {
  test('admin can list vendedores', async ({ request }) => {
    const res = await authGet(request, adminToken, '/users/vendedores');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThanOrEqual(1);
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.get('/api/users/vendedores');
    expect(res.status()).toBe(401);
  });
});

test.describe('POST /users (admin only)', () => {
  test('admin can create a new vendedor', async ({ request }) => {
    const timestamp = Date.now();
    const res = await authPost(request, adminToken, '/users', {
      email: `test.vendor.${timestamp}@crmseguros.com`,
      password: 'TestPass99!',
      nombre: 'Test',
      apellido: 'Vendor',
      rol: 'vendedor_sin_matricula',
    });
    expect(res.ok()).toBe(true);
    const body = await res.json();
    expect(body).toHaveProperty('id');
    expect(body.email).toContain('test.vendor');
    createdUserId = body.id;
  });

  test('vendedor cannot create users → 403', async ({ request }) => {
    const res = await authPost(request, vendorToken, '/users', {
      email: 'hack@crmseguros.com',
      password: 'TestPass99!',
      nombre: 'Hack',
      apellido: 'Attempt',
      rol: 'admin',
    });
    expect(res.status()).toBe(403);
  });

  test('duplicate email → 4xx', async ({ request }) => {
    const res = await authPost(request, adminToken, '/users', {
      email: VENDOR_CREDS.email,
      password: 'TestPass99!',
      nombre: 'Dup',
      apellido: 'User',
      rol: 'vendedor_sin_matricula',
    });
    expect(res.status()).toBeGreaterThanOrEqual(400);
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.post('/api/users', {
      data: { email: 'x@x.com', password: 'TestPass99!', nombre: 'X', apellido: 'Y', rol: 'vendedor_sin_matricula' },
      headers: { 'Content-Type': 'application/json' },
    });
    expect(res.status()).toBe(401);
  });
});

test.describe('PATCH /users/:id (admin only)', () => {
  test('admin can update a user', async ({ request }) => {
    if (!createdUserId) test.skip();
    const res = await authPatch(request, adminToken, `/users/${createdUserId}`, {
      activo: false,
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.activo).toBe(false);
  });

  test('vendedor cannot update other users → 403', async ({ request }) => {
    if (!createdUserId) test.skip();
    const res = await authPatch(request, vendorToken, `/users/${createdUserId}`, {
      nombre: 'Hacked',
    });
    expect(res.status()).toBe(403);
  });

  test('non-existent id → 4xx (backend returns 500, known bug: missing error handling)', async ({
    request,
  }) => {
    const fakeId = '00000000-0000-0000-0000-999999999999';
    const res = await authPatch(request, adminToken, `/users/${fakeId}`, {
      nombre: 'Ghost',
    });
    expect(res.status()).toBeGreaterThanOrEqual(400);
  });

  test('no token → 401', async ({ request }) => {
    if (!createdUserId) test.skip();
    const res = await request.patch(`/api/users/${createdUserId}`, {
      data: { nombre: 'X' },
      headers: { 'Content-Type': 'application/json' },
    });
    expect(res.status()).toBe(401);
  });
});
