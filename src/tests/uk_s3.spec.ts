import { test, expect } from '@playwright/test';
import { uk5Login, uk5OpenOrderHistory } from '../utils/uk5_fix';

test('Return Order Flow', async ({ page }, testInfo) => {
  // Login
  await uk5Login(page);

  // Open order details popup
  const page2 = await uk5OpenOrderHistory(page);

  await page2.getByText('Start a Return').click();

  // Scroll to the reason section
  await page2.getByText('Reason for Return').scrollIntoViewIfNeeded();

  // Open dropdown
  await page2.locator('.ng-arrow-wrapper').first().click();

  // Select reason
  const duplicateOrder = page2.getByText('Duplicate Order', {
    exact: true
  });

  await duplicateOrder.waitFor({
    state: 'visible',
    timeout: 30000
  });

  await duplicateOrder.click();

  // Select return item
  await page2
    .getByRole('cell', { name: 'input field' })
    .getByLabel('input field')
    .check();

  // Continue Return
  await page2.getByRole('button', {
    name: 'Continue Return'
  }).click();

  // Validation
  const validationMessage = page2.locator(
    'app-validate-returns-breadcrumb'
  );

  await expect(validationMessage).toContainText(
    'This return cannot be accepted as the minimum return value of 1000 GBP is not reached.'
  );

  // Screenshot
  const screenshot = await page2.screenshot({
    fullPage: true
  });

  await testInfo.attach('Minimum Return Value Validation', {
    body: screenshot,
    contentType: 'image/png'
  });
});