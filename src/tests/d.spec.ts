import { test, expect } from '@playwright/test';
import { uk5Login, uk5OpenOrderHistory } from '../utils/uk5_fix';

test('Return Order Flow', async ({ page }, testInfo) => {
  // Login
  await uk5Login(page);
});