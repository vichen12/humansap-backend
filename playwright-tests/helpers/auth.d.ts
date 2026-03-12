import { APIRequestContext } from '@playwright/test';
export declare const ADMIN_CREDS: {
    email: string;
    password: string;
};
export declare const VENDOR_CREDS: {
    email: string;
    password: string;
};
export declare function loginAs(request: APIRequestContext, creds: {
    email: string;
    password: string;
}): Promise<{
    accessToken: string;
    refreshToken: string;
}>;
export declare function authHeaders(token: string): {
    Authorization: string;
};
export declare function authGet(request: APIRequestContext, token: string, path: string): Promise<import("playwright-core").APIResponse>;
export declare function authPost(request: APIRequestContext, token: string, path: string, data: unknown): Promise<import("playwright-core").APIResponse>;
export declare function authPatch(request: APIRequestContext, token: string, path: string, data: unknown): Promise<import("playwright-core").APIResponse>;
export declare function authDelete(request: APIRequestContext, token: string, path: string): Promise<import("playwright-core").APIResponse>;
