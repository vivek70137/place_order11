import { test, expect } from '@playwright/test';
import { uk5Login, uk5OpenOrderHistory } from '../utils/uk5_fix';

test('Return Order Flow', async ({ page }, testInfo) => {
  // Login
  await uk5Login(page);

  // Open Order Details Popup
  const page2 = await uk5OpenOrderHistory(
    page,
    '5002286643'
  );

  // Start Return
  await page2.getByText('Start a Return').click();

  // Scroll to Reason for Return section
  await page2
    .getByText('Reason for Return')
    .scrollIntoViewIfNeeded();

  // Select Return Reason
  await page2.locator('.ng-arrow-wrapper')
    .first()
    .click();

  await page2.getByText(
    'Damaged in Transit',
    { exact: true }
  ).click();

  // Validate proof message
  const proofMessage = page2.getByText(
    'Please provide proof (such as photos) to support the return request for the damaged package.'
  );

  await expect(proofMessage).toBeVisible({
    timeout: 30000
  });

  // Screenshot for Playwright Report
  const validationScreenshot = await page2.screenshot({
    fullPage: true
  });

  await testInfo.attach(
    'Damaged-In-Transit-Validation',
    {
      body: validationScreenshot,
      contentType: 'image/png'
    }
  );

  // Select Item
  await page2.getByRole('checkbox')
    .first()
    .check();

  // Continue Return
  await page2.getByRole('button', {
    name: 'Continue Return'
  }).click();

  // Screenshot after Continue
  const continueScreenshot = await page2.screenshot({
    fullPage: true
  });

  await testInfo.attach(
    'After-Continue-Return',
    {
      body: continueScreenshot,
      contentType: 'image/png'
    }
  );

  // Next Continue Return
  await page2.getByRole('button', {
    name: 'Continue Return'
  }).click();

  // Final Validation
  await expect(
    page2.locator(
      'app-return-details-breadcrumb'
    )
  ).toBeVisible({
    timeout: 30000
  });

  // Final Screenshot
  const finalScreenshot = await page2.screenshot({
    fullPage: true
  });

  await testInfo.attach(
    'Return-Details-Page',
    {
      body: finalScreenshot,
      contentType: 'image/png'
    }
  );

  console.log(
    'Return Order Flow completed successfully'
  );
});