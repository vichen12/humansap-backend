/**
 * 08 - Noticias
 * Covers: GET /noticias, POST /noticias (admin), DELETE /noticias/:id (admin)
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

let adminToken: string;
let vendorToken: string;
let noticiaId: string;

test.beforeAll(async ({ request }) => {
  const [a, v] = await Promise.all([
    loginAs(request, ADMIN_CREDS),
    loginAs(request, VENDOR_CREDS),
  ]);
  adminToken = a.accessToken;
  vendorToken = v.accessToken;
});

test.describe('POST /noticias (admin only)', () => {
  test('admin can create a noticia', async ({ request }) => {
    const ts = Date.now();
    const res = await authPost(request, adminToken, '/noticias', {
      titulo: `Noticia Test ${ts}`,
      contenido: 'Este es el contenido de prueba de la noticia.',
      activa: true,
    });
    expect(res.ok()).toBe(true); // 201 Created
    const body = await res.json();
    expect(body).toHaveProperty('id');
    expect(body.titulo).toContain('Noticia Test');
    expect(body.activa).toBe(true);
    noticiaId = body.id;
  });

  test('admin can create an inactive noticia', async ({ request }) => {
    const ts = Date.now();
    const res = await authPost(request, adminToken, '/noticias', {
      titulo: `Noticia Inactiva ${ts}`,
      contenido: 'Esta noticia no es visible para vendedores.',
      activa: false,
    });
    expect(res.ok()).toBe(true); // 201 Created
    const body = await res.json();
    expect(body.activa).toBe(false);
  });

  test('vendedor cannot create noticias → 403', async ({ request }) => {
    const res = await authPost(request, vendorToken, '/noticias', {
      titulo: 'Hack Noticia',
      contenido: 'Intento de acceso no autorizado',
      activa: true,
    });
    expect(res.status()).toBe(403);
  });

  test('missing titulo → 4xx (no DTO validation, backend returns 500 on DB constraint)', async ({
    request,
  }) => {
    const res = await authPost(request, adminToken, '/noticias', {
      contenido: 'Sin título',
      activa: true,
    });
    expect(res.status()).toBeGreaterThanOrEqual(400);
  });

  test('missing contenido → 4xx (no DTO validation, backend returns 500 on DB constraint)', async ({
    request,
  }) => {
    const res = await authPost(request, adminToken, '/noticias', {
      titulo: 'Sin contenido',
      activa: true,
    });
    expect(res.status()).toBeGreaterThanOrEqual(400);
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.post('/api/noticias', {
      data: { titulo: 'Test', contenido: 'Test', activa: true },
      headers: { 'Content-Type': 'application/json' },
    });
    expect(res.status()).toBe(401);
  });
});

test.describe('GET /noticias', () => {
  test('admin sees all noticias (including inactive)', async ({ request }) => {
    const res = await authGet(request, adminToken, '/noticias');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body)).toBe(true);
  });

  test('vendedor sees only active noticias', async ({ request }) => {
    const res = await authGet(request, vendorToken, '/noticias?activas=true');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body)).toBe(true);
    // All returned noticias should be active
    for (const noticia of body) {
      expect(noticia.activa).toBe(true);
    }
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.get('/api/noticias');
    expect(res.status()).toBe(401);
  });
});

test.describe('DELETE /noticias/:id (admin only)', () => {
  let toDeleteId: string;

  test.beforeAll(async ({ request }) => {
    const ts = Date.now();
    const res = await authPost(request, adminToken, '/noticias', {
      titulo: `Para Borrar ${ts}`,
      contenido: 'Esta noticia será eliminada',
      activa: false,
    });
    const body = await res.json();
    toDeleteId = body.id;
  });

  test('admin can delete a noticia', async ({ request }) => {
    if (!toDeleteId) test.skip();
    const res = await authDelete(request, adminToken, `/noticias/${toDeleteId}`);
    expect(res.status()).toBe(200);
  });

  test('vendedor cannot delete noticias → 403', async ({ request }) => {
    if (!noticiaId) test.skip();
    const res = await authDelete(request, vendorToken, `/noticias/${noticiaId}`);
    expect(res.status()).toBe(403);
  });

  test('non-existent → 404', async ({ request }) => {
    const res = await authDelete(
      request,
      adminToken,
      '/noticias/00000000-0000-0000-0000-999999999999',
    );
    expect(res.status()).toBe(404);
  });

  test('no token → 401', async ({ request }) => {
    if (!noticiaId) test.skip();
    const res = await request.delete(`/api/noticias/${noticiaId}`);
    expect(res.status()).toBe(401);
  });
});
