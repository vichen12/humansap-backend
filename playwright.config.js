"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
exports.default = (0, test_1.defineConfig)({
    testDir: './playwright-tests',
    timeout: 30_000,
    retries: 0,
    workers: 1,
    reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],
    use: {
        baseURL: 'http://localhost:3001',
        extraHTTPHeaders: { 'Content-Type': 'application/json' },
    },
});
//# sourceMappingURL=playwright.config.js.map