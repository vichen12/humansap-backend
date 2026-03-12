"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VENDOR_CREDS = exports.ADMIN_CREDS = void 0;
exports.loginAs = loginAs;
exports.authHeaders = authHeaders;
exports.authGet = authGet;
exports.authPost = authPost;
exports.authPatch = authPatch;
exports.authDelete = authDelete;
const BASE = '/api';
exports.ADMIN_CREDS = { email: 'admin@crmseguros.com', password: 'Admin1234!' };
exports.VENDOR_CREDS = { email: 'vendedor@crmseguros.com', password: 'Vendedor1234!' };
async function loginAs(request, creds) {
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
    return {
        accessToken: body.access_token,
        refreshToken: body.refresh_token,
    };
}
function authHeaders(token) {
    return { Authorization: `Bearer ${token}` };
}
async function authGet(request, token, path) {
    return request.get(`${BASE}${path}`, { headers: authHeaders(token) });
}
async function authPost(request, token, path, data) {
    return request.post(`${BASE}${path}`, { headers: authHeaders(token), data });
}
async function authPatch(request, token, path, data) {
    return request.patch(`${BASE}${path}`, { headers: authHeaders(token), data });
}
async function authDelete(request, token, path) {
    return request.delete(`${BASE}${path}`, { headers: authHeaders(token) });
}
//# sourceMappingURL=auth.js.map