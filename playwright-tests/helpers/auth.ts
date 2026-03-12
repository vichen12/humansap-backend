import { APIRequestContext } from '@playwright/test';

const BASE = '/api';

export const ADMIN_CREDS = { email: 'admin@crmseguros.com', password: 'Admin1234!' };
export const VENDOR_CREDS = { email: 'vendedor@crmseguros.com', password: 'Vendedor1234!' };

export async function loginAs(
  request: APIRequestContext,
  creds: { email: string; password: string },
): Promise<{ accessToken: string; refreshToken: string }> {
  // Retry up to 3 times — sequential specs can cause transient Prisma 500s
  let res = await request.post(`${BASE}/auth/login`, { data: creds });
  for (let attempt = 1; attempt < 3 && !res.ok(); attempt++) {
    await new Promise((r) => setTimeout(r, 300 * attempt));
    res = await request.post(`${BASE}/auth/login`, { data: creds });
  }
  if (!res.ok()) {
    const body = await res.text();
    throw new Error(`Login failed (${res.status()}): ${body}`);
  }
  const body = await res.json();
  // SnakeCaseInterceptor converts all responses to snake_case
  return {
    accessToken: body.access_token as string,
    refreshToken: body.refresh_token as string,
  };
}

export function authHeaders(token: string) {
  return { Authorization: `Bearer ${token}` };
}

/** Make an authenticated GET */
export async function authGet(
  request: APIRequestContext,
  token: string,
  path: string,
) {
  return request.get(`${BASE}${path}`, { headers: authHeaders(token) });
}

/** Make an authenticated POST */
export async function authPost(
  request: APIRequestContext,
  token: string,
  path: string,
  data: unknown,
) {
  return request.post(`${BASE}${path}`, { headers: authHeaders(token), data });
}

/** Make an authenticated PATCH */
export async function authPatch(
  request: APIRequestContext,
  token: string,
  path: string,
  data: unknown,
) {
  return request.patch(`${BASE}${path}`, { headers: authHeaders(token), data });
}

/** Make an authenticated DELETE */
export async function authDelete(
  request: APIRequestContext,
  token: string,
  path: string,
) {
  return request.delete(`${BASE}${path}`, { headers: authHeaders(token) });
}
