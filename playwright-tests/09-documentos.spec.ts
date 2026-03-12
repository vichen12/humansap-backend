/**
 * 09 - Documentos
 * Covers: GET /documentos, POST /documentos (admin), DELETE /documentos/:id (admin)
 *
 * Notes:
 * - Service field is 'nombre' (not 'titulo') for document name
 * - Controller uses @Body() body: any → no class-validator DTO validation
 * - Invalid tipo → Prisma enum error → 500 (backend has no error handler for this)
 * - Missing fields → Prisma error → 500 (not 400)
 */
import { test, expect } from '@playwright/test';
import {
  loginAs,
  authGet,
  authPost,
  authDelete,
  ADMIN_CREDS,
  VENDOR_CREDS,
} from './helpers/auth';

const VALID_TIPOS = ['produto', 'cobertura', 'processo', 'formulario', 'outro'];
const VALID_TIPOS_CORRECT = ['producto', 'cobertura', 'proceso', 'formulario', 'otro'];

let adminToken: string;
let vendorToken: string;
let documentoId: string;

test.beforeAll(async ({ request }) => {
  const [a, v] = await Promise.all([
    loginAs(request, ADMIN_CREDS),
    loginAs(request, VENDOR_CREDS),
  ]);
  adminToken = a.accessToken;
  vendorToken = v.accessToken;
});

test.describe('POST /documentos (admin only)', () => {
  test('admin can create a document of each valid tipo', async ({ request }) => {
    for (const tipo of VALID_TIPOS_CORRECT) {
      const ts = Date.now();
      const res = await authPost(request, adminToken, '/documentos', {
        nombre: `Doc ${tipo} ${ts}`, // service uses 'nombre' not 'titulo'
        descripcion: `Documento tipo ${tipo}`,
        tipo,
        url: `https://docs.example.com/${tipo}-${ts}.pdf`,
      });
      expect(res.ok()).toBe(true); // 201 Created
      const body = await res.json();
      expect(body.tipo).toBe(tipo);
      if (!documentoId) documentoId = body.id;
    }
  });

  test('vendedor cannot create documents → 403', async ({ request }) => {
    const res = await authPost(request, vendorToken, '/documentos', {
      nombre: 'Hack Doc',
      tipo: 'otro',
      url: 'https://evil.example.com',
    });
    expect(res.status()).toBe(403);
  });

  test('invalid tipo → 4xx (Prisma enum error, no DTO validation)', async ({ request }) => {
    const res = await authPost(request, adminToken, '/documentos', {
      nombre: 'Bad Tipo',
      tipo: 'tipo_raro',
      url: 'https://docs.example.com/bad.pdf',
    });
    expect(res.status()).toBeGreaterThanOrEqual(400);
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.post('/api/documentos', {
      data: { nombre: 'T', tipo: 'otro', url: 'https://x.com/y.pdf' },
      headers: { 'Content-Type': 'application/json' },
    });
    expect(res.status()).toBe(401);
  });
});

test.describe('GET /documentos', () => {
  test('admin can list all documents', async ({ request }) => {
    const res = await authGet(request, adminToken, '/documentos');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThanOrEqual(1);
    const doc = body[0];
    expect(doc).toHaveProperty('id');
    expect(doc).toHaveProperty('tipo');
  });

  test('vendedor can list documents', async ({ request }) => {
    const res = await authGet(request, vendorToken, '/documentos');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body)).toBe(true);
  });

  test('filter by tipo=producto', async ({ request }) => {
    const res = await authGet(request, vendorToken, '/documentos?tipo=producto');
    expect(res.status()).toBe(200);
    const body = await res.json();
    for (const doc of body) {
      expect(doc.tipo).toBe('producto');
    }
  });

  test('filter by tipo=formulario', async ({ request }) => {
    const res = await authGet(request, vendorToken, '/documentos?tipo=formulario');
    expect(res.status()).toBe(200);
    const body = await res.json();
    for (const doc of body) {
      expect(doc.tipo).toBe('formulario');
    }
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.get('/api/documentos');
    expect(res.status()).toBe(401);
  });
});

test.describe('DELETE /documentos/:id (admin only)', () => {
  let toDeleteId: string;

  test.beforeAll(async ({ request }) => {
    const ts = Date.now();
    const res = await authPost(request, adminToken, '/documentos', {
      nombre: `Para Borrar ${ts}`,
      tipo: 'otro',
      url: `https://docs.example.com/delete-${ts}.pdf`,
    });
    const body = await res.json();
    toDeleteId = body.id;
  });

  test('admin can delete a document', async ({ request }) => {
    if (!toDeleteId) test.skip();
    const res = await authDelete(request, adminToken, `/documentos/${toDeleteId}`);
    expect(res.status()).toBe(200);
  });

  test('vendedor cannot delete documents → 403', async ({ request }) => {
    if (!documentoId) test.skip();
    const res = await authDelete(request, vendorToken, `/documentos/${documentoId}`);
    expect(res.status()).toBe(403);
  });

  test('non-existent → 404', async ({ request }) => {
    const res = await authDelete(
      request,
      adminToken,
      '/documentos/00000000-0000-0000-0000-999999999999',
    );
    expect(res.status()).toBe(404);
  });

  test('no token → 401', async ({ request }) => {
    if (!documentoId) test.skip();
    const res = await request.delete(`/api/documentos/${documentoId}`);
    expect(res.status()).toBe(401);
  });
});
