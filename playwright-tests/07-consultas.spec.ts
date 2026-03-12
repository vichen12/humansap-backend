/**
 * 07 - Consultas
 * Covers: GET/POST /consultas, GET/PATCH/DELETE /consultas/:id
 *
 * Notes: DTOs use camelCase (clienteId, leadId)
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
let consultaId: string;
let clienteId: string;

test.beforeAll(async ({ request }) => {
  const [a, v] = await Promise.all([
    loginAs(request, ADMIN_CREDS),
    loginAs(request, VENDOR_CREDS),
  ]);
  adminToken = a.accessToken;
  vendorToken = v.accessToken;

  // Create a cliente for linkage
  const ts = Date.now();
  const res = await authPost(request, vendorToken, '/clientes', {
    nombre: 'Consulta',
    apellido: `Cliente${ts}`,
    telefono: '1133445566',
  });
  const body = await res.json();
  clienteId = body.id;
});

test.describe('POST /consultas', () => {
  test('vendedor can create a consulta', async ({ request }) => {
    const res = await authPost(request, vendorToken, '/consultas', {
      clienteId, // camelCase
      tipo: 'informacion',
      descripcion: 'El cliente quiere saber sobre coberturas de vida',
    });
    expect(res.ok()).toBe(true); // 201 Created
    const body = await res.json();
    expect(body).toHaveProperty('id');
    expect(body.tipo).toBe('informacion');
    expect(body.estado).toBe('pendiente');
    consultaId = body.id;
  });

  test('create consulta without clienteId (standalone)', async ({ request }) => {
    const res = await authPost(request, vendorToken, '/consultas', {
      tipo: 'nueva_poliza',
      descripcion: 'Consulta sin cliente previo',
    });
    expect(res.ok()).toBe(true); // 201 Created
  });

  test('invalid tipo → 400', async ({ request }) => {
    const res = await authPost(request, vendorToken, '/consultas', {
      tipo: 'tipo_invalido',
      descripcion: 'Consulta con tipo inválido',
    });
    expect(res.status()).toBe(400);
  });

  test('missing descripcion → 400', async ({ request }) => {
    const res = await authPost(request, vendorToken, '/consultas', {
      tipo: 'reclamo',
    });
    expect(res.status()).toBe(400);
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.post('/api/consultas', {
      data: { tipo: 'informacion', descripcion: 'Test' },
      headers: { 'Content-Type': 'application/json' },
    });
    expect(res.status()).toBe(401);
  });
});

test.describe('GET /consultas', () => {
  test('vendedor gets own consultas', async ({ request }) => {
    const res = await authGet(request, vendorToken, '/consultas');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body)).toBe(true);
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.get('/api/consultas');
    expect(res.status()).toBe(401);
  });
});

test.describe('GET /consultas/:id', () => {
  test('vendedor can get own consulta', async ({ request }) => {
    if (!consultaId) test.skip();
    const res = await authGet(request, vendorToken, `/consultas/${consultaId}`);
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.id).toBe(consultaId);
  });

  test('non-existent → 404', async ({ request }) => {
    const res = await authGet(
      request,
      vendorToken,
      '/consultas/00000000-0000-0000-0000-999999999999',
    );
    expect(res.status()).toBe(404);
  });
});

test.describe('PATCH /consultas/:id', () => {
  test('vendedor can update estado to en_proceso', async ({ request }) => {
    if (!consultaId) test.skip();
    const res = await authPatch(request, vendorToken, `/consultas/${consultaId}`, {
      estado: 'en_proceso',
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.estado).toBe('en_proceso');
  });

  test('vendedor can resolve consulta with resolution text', async ({ request }) => {
    if (!consultaId) test.skip();
    const res = await authPatch(request, vendorToken, `/consultas/${consultaId}`, {
      estado: 'resuelta',
      resolucion: 'Se envió la información al cliente via email',
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.estado).toBe('resuelta');
    expect(body.resolucion).toBeTruthy();
  });

  test('invalid estado → 400', async ({ request }) => {
    if (!consultaId) test.skip();
    const res = await authPatch(request, vendorToken, `/consultas/${consultaId}`, {
      estado: 'estado_raro',
    });
    expect(res.status()).toBe(400);
  });
});

test.describe('DELETE /consultas/:id', () => {
  let toDeleteId: string;

  test.beforeAll(async ({ request }) => {
    const res = await authPost(request, vendorToken, '/consultas', {
      tipo: 'otro',
      descripcion: 'Consulta a eliminar',
    });
    const body = await res.json();
    toDeleteId = body.id;
  });

  test('vendedor can delete own consulta', async ({ request }) => {
    if (!toDeleteId) test.skip();
    const res = await authDelete(request, vendorToken, `/consultas/${toDeleteId}`);
    expect(res.status()).toBe(200);
  });

  test('deleted consulta not accessible', async ({ request }) => {
    if (!toDeleteId) test.skip();
    const res = await authGet(request, vendorToken, `/consultas/${toDeleteId}`);
    expect(res.status()).toBe(404);
  });

  test('no token → 401', async ({ request }) => {
    if (!toDeleteId) test.skip();
    const res = await request.delete(`/api/consultas/${toDeleteId}`);
    expect(res.status()).toBe(401);
  });
});
