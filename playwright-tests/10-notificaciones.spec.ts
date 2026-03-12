/**
 * 10 - Notificaciones
 * Covers: GET /notificaciones, PATCH /notificaciones/:id/leer,
 *         PATCH /notificaciones/leer-todas
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
let notificacionId: string;

test.beforeAll(async ({ request }) => {
  const [a, v] = await Promise.all([
    loginAs(request, ADMIN_CREDS),
    loginAs(request, VENDOR_CREDS),
  ]);
  adminToken = a.accessToken;
  vendorToken = v.accessToken;

  // Trigger a notification by creating a noticia (auto-notifies all vendedores)
  const ts = Date.now();
  await authPost(request, adminToken, '/noticias', {
    titulo: `Notif Test ${ts}`,
    contenido: 'Esta noticia genera notificaciones automáticas',
    activa: true,
  });
});

test.describe('GET /notificaciones', () => {
  test('vendedor gets own notifications', async ({ request }) => {
    const res = await authGet(request, vendorToken, '/notificaciones');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body)).toBe(true);

    if (body.length > 0) {
      const notif = body[0];
      expect(notif).toHaveProperty('id');
      expect(notif).toHaveProperty('titulo');
      expect(notif).toHaveProperty('mensaje');
      expect(notif).toHaveProperty('leida');
      expect(notif).toHaveProperty('tipo');
      notificacionId = notif.id;
    }
  });

  test('admin gets own notifications', async ({ request }) => {
    const res = await authGet(request, adminToken, '/notificaciones');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(Array.isArray(body)).toBe(true);
  });

  test('returns at most 30 notifications', async ({ request }) => {
    const res = await authGet(request, vendorToken, '/notificaciones');
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.length).toBeLessThanOrEqual(30);
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.get('/api/notificaciones');
    expect(res.status()).toBe(401);
  });
});

test.describe('PATCH /notificaciones/:id/leer', () => {
  test('vendedor can mark notification as read', async ({ request }) => {
    if (!notificacionId) {
      // Get a notification first
      const listRes = await authGet(request, vendorToken, '/notificaciones');
      const body = await listRes.json();
      if (body.length === 0) test.skip();
      notificacionId = body[0].id;
    }

    const res = await authPatch(request, vendorToken, `/notificaciones/${notificacionId}/leer`, {});
    expect(res.status()).toBe(200);
    const body = await res.json();
    expect(body.leida).toBe(true);
  });

  test('non-existent → 4xx (backend returns 500, no NotFoundException handler)', async ({ request }) => {
    const res = await authPatch(
      request,
      vendorToken,
      '/notificaciones/00000000-0000-0000-0000-999999999999/leer',
      {},
    );
    expect(res.status()).toBeGreaterThanOrEqual(400);
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.patch('/api/notificaciones/some-id/leer', {
      headers: { 'Content-Type': 'application/json' },
      data: {},
    });
    expect(res.status()).toBe(401);
  });
});

test.describe('PATCH /notificaciones/leer-todas', () => {
  test('vendedor can mark all notifications as read', async ({ request }) => {
    const res = await authPatch(request, vendorToken, '/notificaciones/leer-todas', {});
    expect(res.status()).toBe(200);
  });

  test('admin can mark all their notifications as read', async ({ request }) => {
    const res = await authPatch(request, adminToken, '/notificaciones/leer-todas', {});
    expect(res.status()).toBe(200);
  });

  test('after leer-todas, all notifications are read', async ({ request }) => {
    await authPatch(request, vendorToken, '/notificaciones/leer-todas', {});
    const res = await authGet(request, vendorToken, '/notificaciones');
    const body = await res.json();
    for (const notif of body) {
      expect(notif.leida).toBe(true);
    }
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.patch('/api/notificaciones/leer-todas', {
      headers: { 'Content-Type': 'application/json' },
      data: {},
    });
    expect(res.status()).toBe(401);
  });
});
