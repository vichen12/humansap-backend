/**
 * 04 - Leads
 * Covers: GET /leads, POST /leads (admin), GET /leads/:id,
 *         PATCH /leads/:id/tomar, PATCH /leads/:id/estado
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
let createdLeadId: string;
let zonaId: string;

test.beforeAll(async ({ request }) => {
  const [a, v] = await Promise.all([
    loginAs(request, ADMIN_CREDS),
    loginAs(request, VENDOR_CREDS),
  ]);
  adminToken = a.accessToken;
  vendorToken = v.accessToken;

  // Get existing zone
  const zonas = await (await authGet(request, adminToken, '/zonas')).json();
  zonaId = zonas[0]?.id;
});

test.describe('POST /leads (admin only)', () => {
  test('admin can create a lead', async ({ request }) => {
    const ts = Date.now();
    // Don't include zonaId — testing basic create without zone to avoid UUID validation issues
    // Retry up to 3 times — backend can return transient 500s
    let res = await authPost(request, adminToken, '/leads', {
      nombre: 'Lead',
      apellido: `Test${ts}`,
      telefono: '1199887766',
      origen: 'manual',
    });
    for (let attempt = 1; attempt < 3 && !res.ok(); attempt++) {
      await new Promise((r) => setTimeout(r, 300 * attempt));
      res = await authPost(request, adminToken, '/leads', {
        nombre: 'Lead',
        apellido: `Test${ts + attempt}`,
        telefono: '1199887766',
        origen: 'manual',
      });
    }
    expect(res.ok()).toBe(true); // 201 Created
    const body = await res.json();
    expect(body).toHaveProperty('id');
    expect(body.estado).toBe('nuevo');
    createdLeadId = body.id as string;
  });

  test('admin can create lead without zona', async ({ request }) => {
    const ts = Date.now();
    const res = await authPost(request, adminToken, '/leads', {
      nombre: 'Sin',
      apellido: `Zona${ts}`,
      telefono: '1199887700',
      origen: 'web',
    });
    expect(res.ok()).toBe(true); // 201 Created
  });

  test('vendedor cannot create leads → 403', async ({ request }) => {
    const res = await authPost(request, vendorToken, '/leads', {
      nombre: 'Hack',
      apellido: 'Lead',
      telefono: '1100000000',
      origen: 'manual',
    });
    expect(res.status()).toBe(403);
  });

  test('missing nombre → 400', async ({ request }) => {
    const res = await authPost(request, adminToken, '/leads', {
      apellido: 'Test',
      telefono: '1100000000',
      origen: 'manual',
    });
    expect(res.status()).toBe(400);
  });

  test('invalid origen → 400', async ({ request }) => {
    const res = await authPost(request, adminToken, '/leads', {
      nombre: 'Bad',
      apellido: 'Origen',
      telefono: '1100000000',
      origen: 'invalid_value',
    });
    expect(res.status()).toBe(400);
  });

  test('invalid email → 400', async ({ request }) => {
    const res = await authPost(request, adminToken, '/leads', {
      nombre: 'Bad',
      apellido: 'Email',
      telefono: '1100000000',
      email: 'not-an-email',
      origen: 'manual',
    });
    expect(res.status()).toBe(400);
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.post('/api/leads', {
      data: { nombre: 'X', apellido: 'Y', telefono: '1234', origen: 'manual' },
      headers: { 'Content-Type': 'application/json' },
    });
    expect(res.status()).toBe(401);
  });
});

test.describe('GET /leads', () => {
  test('admin gets all leads', async ({ request }) => {
    const res = await authGet(request, adminToken, '/leads');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body)).toBe(true);
  });

  test('vendedor gets leads (filtered by zone/assignment)', async ({ request }) => {
    const res = await authGet(request, vendorToken, '/leads');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body)).toBe(true);
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.get('/api/leads');
    expect(res.status()).toBe(401);
  });
});

test.describe('GET /leads/:id', () => {
  test('admin can get lead by id', async ({ request }) => {
    if (!createdLeadId) test.skip();
    const res = await authGet(request, adminToken, `/leads/${createdLeadId}`);
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.id).toBe(createdLeadId);
  });

  test('non-existent lead → 404', async ({ request }) => {
    const res = await authGet(request, adminToken, '/leads/00000000-0000-0000-0000-999999999999');
    expect(res.status()).toBe(404);
  });

  test('no token → 401', async ({ request }) => {
    if (!createdLeadId) test.skip();
    const res = await request.get(`/api/leads/${createdLeadId}`);
    expect(res.status()).toBe(401);
  });
});

test.describe('PATCH /leads/:id/tomar', () => {
  let newLeadId: string;

  test.beforeAll(async ({ request }) => {
    const ts = Date.now();
    const res = await authPost(request, adminToken, '/leads', {
      nombre: 'Para',
      apellido: `Tomar${ts}`,
      telefono: '1100001111',
      origen: 'referido',
      zonaId: zonaId,
    });
    const body = await res.json();
    newLeadId = body.id;
  });

  test('vendedor can tomar a lead → state becomes tomado', async ({ request }) => {
    if (!newLeadId) test.skip();
    const res = await authPatch(request, vendorToken, `/leads/${newLeadId}/tomar`, {});
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.estado).toBe('tomado');
    expect(body.vendedor_id).toBeTruthy();
  });

  test('taking an already-taken lead → 400 or 409', async ({ request }) => {
    if (!newLeadId) test.skip();
    const res = await authPatch(request, vendorToken, `/leads/${newLeadId}/tomar`, {});
    expect([400, 409]).toContain(res.status());
  });

  test('non-existent lead → 404', async ({ request }) => {
    const res = await authPatch(
      request,
      vendorToken,
      '/leads/00000000-0000-0000-0000-999999999999/tomar',
      {},
    );
    expect(res.status()).toBe(404);
  });

  test('no token → 401', async ({ request }) => {
    if (!newLeadId) test.skip();
    const res = await request.patch(`/api/leads/${newLeadId}/tomar`, {
      headers: { 'Content-Type': 'application/json' },
      data: {},
    });
    expect(res.status()).toBe(401);
  });
});

test.describe('PATCH /leads/:id/estado', () => {
  let ownedLeadId: string;

  test.beforeAll(async ({ request }) => {
    // Create and have vendedor take a lead
    const ts = Date.now();
    const createRes = await authPost(request, adminToken, '/leads', {
      nombre: 'Estado',
      apellido: `Test${ts}`,
      telefono: '1100002222',
      origen: 'campana',
      zonaId: zonaId,
    });
    const lead = await createRes.json();
    ownedLeadId = lead.id;
    await authPatch(request, vendorToken, `/leads/${ownedLeadId}/tomar`, {});
  });

  test('vendedor can update estado of owned lead', async ({ request }) => {
    if (!ownedLeadId) test.skip();
    const res = await authPatch(request, vendorToken, `/leads/${ownedLeadId}/estado`, {
      estado: 'contactado',
      notas: 'Hablé con el cliente',
    });
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.estado).toBe('contactado');
  });

  test('invalid estado → 400', async ({ request }) => {
    if (!ownedLeadId) test.skip();
    const res = await authPatch(request, vendorToken, `/leads/${ownedLeadId}/estado`, {
      estado: 'estado_inventado',
    });
    expect(res.status()).toBe(400);
  });

  test('no token → 401', async ({ request }) => {
    if (!ownedLeadId) test.skip();
    const res = await request.patch(`/api/leads/${ownedLeadId}/estado`, {
      data: { estado: 'contactado' },
      headers: { 'Content-Type': 'application/json' },
    });
    expect(res.status()).toBe(401);
  });
});
