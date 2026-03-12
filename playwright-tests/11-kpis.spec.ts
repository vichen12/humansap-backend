/**
 * 11 - KPIs
 * Covers: GET /kpis/dashboard, GET /kpis/admin, POST /kpis/recalcular
 */
import { test, expect } from '@playwright/test';
import {
  loginAs,
  authGet,
  authPost,
  ADMIN_CREDS,
  VENDOR_CREDS,
} from './helpers/auth';

let adminToken: string;
let vendorToken: string;

test.beforeAll(async ({ request }) => {
  const [a, v] = await Promise.all([
    loginAs(request, ADMIN_CREDS),
    loginAs(request, VENDOR_CREDS),
  ]);
  adminToken = a.accessToken;
  vendorToken = v.accessToken;
});

test.describe('GET /kpis/dashboard', () => {
  test('vendedor gets own dashboard KPIs', async ({ request }) => {
    const res = await authGet(request, vendorToken, '/kpis/dashboard');
    expect(res.status()).toBe(200);
    const body = await res.json();
    // Backend returns { kpis: {...}, ranking, stats } — fields are nested under 'kpis'
    expect(body).toHaveProperty('kpis');
    const kpis = body.kpis;
    expect(kpis).toHaveProperty('leads_recibidos');
    expect(kpis).toHaveProperty('leads_tomados');
    expect(kpis).toHaveProperty('ventas_cerradas');
    expect(kpis).toHaveProperty('prima_total_vendida');
    expect(kpis).toHaveProperty('comision_generada');
    expect(kpis).toHaveProperty('tasa_conversion');
  });

  test('vendedor gets KPIs filtered by mes + anio', async ({ request }) => {
    const res = await authGet(request, vendorToken, '/kpis/dashboard?mes=3&anio=2026');
    expect(res.status()).toBe(200);
    const body = await res.json();
    // Dashboard returns { kpis: {...} }
    expect(body).toHaveProperty('kpis');
  });

  test('admin can also access dashboard KPIs', async ({ request }) => {
    const res = await authGet(request, adminToken, '/kpis/dashboard');
    expect(res.status()).toBe(200);
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.get('/api/kpis/dashboard');
    expect(res.status()).toBe(401);
  });
});

test.describe('GET /kpis/admin', () => {
  test('admin gets admin dashboard data', async ({ request }) => {
    const res = await authGet(request, adminToken, '/kpis/admin');
    expect(res.status()).toBe(200);
    const body = await res.json();
    // Admin KPIs have aggregate stats + top vendors
    expect(body).toHaveProperty('top_vendedores');
    expect(Array.isArray(body.top_vendedores)).toBe(true);
  });

  test('vendedor cannot access admin KPIs → 403', async ({ request }) => {
    const res = await authGet(request, vendorToken, '/kpis/admin');
    expect(res.status()).toBe(403);
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.get('/api/kpis/admin');
    expect(res.status()).toBe(401);
  });
});

test.describe('POST /kpis/recalcular (admin only)', () => {
  test('admin can trigger KPI recalculation', async ({ request }) => {
    const res = await authPost(request, adminToken, '/kpis/recalcular', {});
    // NestJS @Post returns 201 by default
    expect(res.ok()).toBe(true);
  });

  test('vendedor cannot trigger recalculation → 403', async ({ request }) => {
    const res = await authPost(request, vendorToken, '/kpis/recalcular', {});
    expect(res.status()).toBe(403);
  });

  test('no token → 401', async ({ request }) => {
    const res = await request.post('/api/kpis/recalcular', {
      data: {},
      headers: { 'Content-Type': 'application/json' },
    });
    expect(res.status()).toBe(401);
  });
});
