/**
 * 06 - Ventas
 * Covers: GET /ventas, POST /ventas, GET /ventas/:id, GET /ventas/resumen
 *
 * Notes: DTOs use camelCase (montoPrima, fechaVenta, leadId, etc.)
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
let ventaId: string;
let leadId: string;
let clienteId: string;

test.beforeAll(async ({ request }) => {
  const [a, v] = await Promise.all([
    loginAs(request, ADMIN_CREDS),
    loginAs(request, VENDOR_CREDS),
  ]);
  adminToken = a.accessToken;
  vendorToken = v.accessToken;

  // Create a lead and have vendedor take it (for sales linking)
  const zonas = await (await authGet(request, adminToken, '/zonas')).json();
  const zonaId = zonas[0]?.id;
  const ts = Date.now();

  const leadRes = await authPost(request, adminToken, '/leads', {
    nombre: 'Venta',
    apellido: `Lead${ts}`,
    telefono: '1155001100',
    origen: 'web',
    zonaId,
  });
  const lead = await leadRes.json();
  leadId = lead.id;
  await authPatch(request, vendorToken, `/leads/${leadId}/tomar`, {});

  // Create a cliente
  const cliRes = await authPost(request, vendorToken, '/clientes', {
    nombre: 'Cliente',
    apellido: `Venta${ts}`,
    telefono: '1155002200',
  });
  const cliente = await cliRes.json();
  clienteId = cliente.id;
});

test.describe('POST /ventas', () => {
  test('vendedor can create a venta (minimal fields)', async ({ request }) => {
    const res = await authPost(request, vendorToken, '/ventas', {
      producto: 'Seguro Vida',
      compania: 'ACME Seguros',
      montoPrima: 15000,
      montoComision: 2250,
      porcentajeComision: 15,
      fechaVenta: '2026-03-01',
      estado: 'vigente',
    });
    expect(res.ok()).toBe(true); // 201 Created
    const body = await res.json();
    expect(body).toHaveProperty('id');
    expect(body.producto).toBe('Seguro Vida');
    ventaId = body.id;
  });

  test('vendedor can create a venta linked to lead + cliente', async ({ request }) => {
    const res = await authPost(request, vendorToken, '/ventas', {
      leadId,
      clienteId,
      producto: 'Seguro Auto',
      compania: 'Beta Seguros',
      montoPrima: 25000,
      montoComision: 3750,
      porcentajeComision: 15,
      fechaVenta: '2026-03-05',
      estado: 'vigente',
    });
    expect(res.ok()).toBe(true); // 201 Created
    const body = await res.json();
    expect(body).toHaveProperty('id'); // sale was created
  });

  test('missing producto → 400', async ({ request }) => {
    const res = await authPost(request, vendorToken, '/ventas', {
      compania: 'ACME',
      fechaVenta: '2026-03-01',
    });
    expect(res.status()).toBe(400);
  });

  test('missing fechaVenta → 400', async ({ request }) => {
    const res = await authPost(request, vendorToken, '/ventas', {
      producto: 'Seguro Hogar',
      compania: 'ACME',
    });
    expect(res.status()).toBe(400);
  });

  test('invalid estado → 400', async ({ request }) => {
    const res = await authPost(request, vendorToken, '/ventas', {
      producto: 'Seguro Hogar',
      compania: 'ACME',
      fechaVenta: '2026-03-01',
      estado: 'invalid_estado',
    });
    expect(res.status()).toBe(400);
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.post('/api/ventas', {
      data: { producto: 'Test', compania: 'X', fechaVenta: '2026-03-01' },
      headers: { 'Content-Type': 'application/json' },
    });
    expect(res.status()).toBe(401);
  });
});

test.describe('GET /ventas', () => {
  test('vendedor gets own ventas', async ({ request }) => {
    const res = await authGet(request, vendorToken, '/ventas');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThanOrEqual(1);
  });

  test('admin gets all ventas', async ({ request }) => {
    const res = await authGet(request, adminToken, '/ventas');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body)).toBe(true);
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.get('/api/ventas');
    expect(res.status()).toBe(401);
  });
});

test.describe('GET /ventas/:id', () => {
  test('vendedor can get own venta by id', async ({ request }) => {
    if (!ventaId) test.skip();
    const res = await authGet(request, vendorToken, `/ventas/${ventaId}`);
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.id).toBe(ventaId);
  });

  test('non-existent → 404', async ({ request }) => {
    const res = await authGet(request, vendorToken, '/ventas/00000000-0000-0000-0000-999999999999');
    expect(res.status()).toBe(404);
  });

  test('no token → 401', async ({ request }) => {
    if (!ventaId) test.skip();
    const res = await request.get(`/api/ventas/${ventaId}`);
    expect(res.status()).toBe(401);
  });
});

test.describe('GET /ventas/resumen', () => {
  test('vendedor gets monthly summary', async ({ request }) => {
    const res = await authGet(request, vendorToken, '/ventas/resumen?mes=3&anio=2026');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body).toHaveProperty('cantidad');
    expect(body).toHaveProperty('prima_total');
    expect(body).toHaveProperty('comision_total');
  });

  test('vendedor gets summary without params (defaults to current month)', async ({ request }) => {
    const res = await authGet(request, vendorToken, '/ventas/resumen');
    expect(res.status()).toBe(200);
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.get('/api/ventas/resumen');
    expect(res.status()).toBe(401);
  });
});
