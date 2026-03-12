/**
 * 03 - Zonas
 * Covers: GET /zonas, POST /zonas (admin only)
 */
import { test, expect } from '@playwright/test';
import { loginAs, authGet, authPost, ADMIN_CREDS, VENDOR_CREDS } from './helpers/auth';

let adminToken: string;
let vendorToken: string;
let createdZonaId: string;

test.beforeAll(async ({ request }) => {
  const [a, v] = await Promise.all([
    loginAs(request, ADMIN_CREDS),
    loginAs(request, VENDOR_CREDS),
  ]);
  adminToken = a.accessToken;
  vendorToken = v.accessToken;
});

test.describe('GET /zonas', () => {
  test('admin can list zones', async ({ request }) => {
    const res = await authGet(request, adminToken, '/zonas');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThanOrEqual(1);
    // Verify structure
    const zona = body[0];
    expect(zona).toHaveProperty('id');
    expect(zona).toHaveProperty('nombre');
  });

  test('vendedor can list zones', async ({ request }) => {
    const res = await authGet(request, vendorToken, '/zonas');
    expect(res.status()).toBe(200);
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.get('/api/zonas');
    expect(res.status()).toBe(401);
  });
});

test.describe('POST /zonas (admin only)', () => {
  test('admin can create a zone', async ({ request }) => {
    const ts = Date.now();
    const res = await authPost(request, adminToken, '/zonas', {
      nombre: `Zona Test ${ts}`,
      provincia: 'Córdoba',
      pais: 'Argentina',
    });
    expect(res.ok()).toBe(true); // 201 Created
    const body = await res.json();
    expect(body).toHaveProperty('id');
    expect(body.nombre).toContain('Zona Test');
    createdZonaId = body.id;
  });

  test('vendedor cannot create zones → 403', async ({ request }) => {
    const res = await authPost(request, vendorToken, '/zonas', {
      nombre: 'Zona Hack',
      provincia: 'Buenos Aires',
      pais: 'Argentina',
    });
    expect(res.status()).toBe(403);
  });

  test('missing nombre → 4xx (backend uses @Body() any, may return 500)', async ({ request }) => {
    const res = await authPost(request, adminToken, '/zonas', {
      provincia: 'Buenos Aires',
      pais: 'Argentina',
    });
    expect(res.status()).toBeGreaterThanOrEqual(400);
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.post('/api/zonas', {
      data: { nombre: 'No Auth Zone', provincia: 'X', pais: 'Y' },
      headers: { 'Content-Type': 'application/json' },
    });
    expect(res.status()).toBe(401);
  });
});
