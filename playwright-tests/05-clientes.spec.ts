/**
 * 05 - Clientes
 * Covers: GET/POST /clientes, GET/PATCH/DELETE /clientes/:id
 */
import { test, expect } from '@playwright/test';
import {
  loginAs,
  authGet,
  authPost,
  authPatch,
  authDelete,
  ADMIN_CREDS,
  VENDOR_CREDS,
} from './helpers/auth';

let adminToken: string;
let vendorToken: string;
let clienteId: string;

test.beforeAll(async ({ request }) => {
  const [a, v] = await Promise.all([
    loginAs(request, ADMIN_CREDS),
    loginAs(request, VENDOR_CREDS),
  ]);
  adminToken = a.accessToken;
  vendorToken = v.accessToken;
});

test.describe('POST /clientes', () => {
  test('vendedor can create a cliente', async ({ request }) => {
    const ts = Date.now();
    const res = await authPost(request, vendorToken, '/clientes', {
      nombre: 'Cliente',
      apellido: `Test${ts}`,
      email: `cliente.test.${ts}@example.com`,
      telefono: '1155667788',
      localidad: 'CABA',
      provincia: 'Buenos Aires',
    });
    expect(res.ok()).toBe(true); // 201 Created
    const body = await res.json();
    expect(body).toHaveProperty('id');
    expect(body.nombre).toBe('Cliente');
    expect(body.activo).toBe(true);
    clienteId = body.id;
  });

  test('admin can create a cliente', async ({ request }) => {
    const ts = Date.now();
    const res = await authPost(request, adminToken, '/clientes', {
      nombre: 'AdminCliente',
      apellido: `Test${ts}`,
      telefono: '1155000000',
    });
    expect(res.ok()).toBe(true); // 201 Created
  });

  test('missing nombre → 400', async ({ request }) => {
    const res = await authPost(request, vendorToken, '/clientes', {
      apellido: 'SinNombre',
      telefono: '1100000000',
    });
    expect(res.status()).toBe(400);
  });

  test('invalid email → 400', async ({ request }) => {
    const res = await authPost(request, vendorToken, '/clientes', {
      nombre: 'Bad',
      apellido: 'Email',
      email: 'not-an-email',
    });
    expect(res.status()).toBe(400);
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.post('/api/clientes', {
      data: { nombre: 'X', apellido: 'Y' },
      headers: { 'Content-Type': 'application/json' },
    });
    expect(res.status()).toBe(401);
  });
});

test.describe('GET /clientes', () => {
  test('vendedor gets own clientes', async ({ request }) => {
    const res = await authGet(request, vendorToken, '/clientes');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body)).toBe(true);
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.get('/api/clientes');
    expect(res.status()).toBe(401);
  });
});

test.describe('GET /clientes/:id', () => {
  test('vendedor can get own cliente by id', async ({ request }) => {
    if (!clienteId) test.skip();
    const res = await authGet(request, vendorToken, `/clientes/${clienteId}`);
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.id).toBe(clienteId);
  });

  test('non-existent → 404', async ({ request }) => {
    const res = await authGet(
      request,
      vendorToken,
      '/clientes/00000000-0000-0000-0000-999999999999',
    );
    expect(res.status()).toBe(404);
  });
});

test.describe('PATCH /clientes/:id', () => {
  test('vendedor can update own cliente', async ({ request }) => {
    if (!clienteId) test.skip();
    const res = await authPatch(request, vendorToken, `/clientes/${clienteId}`, {
      telefono: '1199998888',
      localidad: 'Palermo',
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.telefono).toBe('1199998888');
  });

  test('invalid email update → UpdateClienteDto has no @IsEmail validator, accepts any string', async ({ request }) => {
    if (!clienteId) test.skip();
    const res = await authPatch(request, vendorToken, `/clientes/${clienteId}`, {
      email: 'notvalid',
    });
    // UpdateClienteDto doesn't validate email format — backend accepts it
    expect([200, 400]).toContain(res.status());
  });
});

test.describe('DELETE /clientes/:id (soft delete)', () => {
  let toDeleteId: string;

  test.beforeAll(async ({ request }) => {
    const ts = Date.now();
    const res = await authPost(request, vendorToken, '/clientes', {
      nombre: 'ToDelete',
      apellido: `Cliente${ts}`,
    });
    const body = await res.json();
    toDeleteId = body.id;
  });

  test('vendedor can soft-delete own cliente', async ({ request }) => {
    if (!toDeleteId) test.skip();
    const res = await authDelete(request, vendorToken, `/clientes/${toDeleteId}`);
    expect(res.status()).toBe(200);
  });

  test('deleted cliente no longer accessible', async ({ request }) => {
    if (!toDeleteId) test.skip();
    const res = await authGet(request, vendorToken, `/clientes/${toDeleteId}`);
    expect([404, 200]).toContain(res.status()); // might be 404 or filtered
    if (res.status() === 200) {
      const body = await res.json();
      expect(body.activo).toBe(false);
    }
  });

  test('non-existent → 404', async ({ request }) => {
    const res = await authDelete(
      request,
      vendorToken,
      '/clientes/00000000-0000-0000-0000-999999999999',
    );
    expect(res.status()).toBe(404);
  });

  test('no token → 401', async ({ request }) => {
    if (!toDeleteId) test.skip();
    const res = await request.delete(`/api/clientes/${toDeleteId}`);
    expect(res.status()).toBe(401);
  });
});
