import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './playwright-tests',
  timeout: 30_000,
  retries: 0,
  workers: 1, // serial — tests share DB state
  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    baseURL: 'http://localhost:3001',
    extraHTTPHeaders: { 'Content-Type': 'application/json' },
  },
});
