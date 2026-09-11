import { test, expect } from '@playwright/test';
import { uk5Login,backofficeLogin } from '../utils/uk5_fix';

test(
  'Validate JJCC Order in Backoffice',
  async ({ page, context }, testInfo) => {
    // Login to JJCC
    await uk5Login(page);

    // Open Orders
    await page
      .locator('#cx-header')
      .getByRole('link', { name: 'Orders' })
      .click();

    const page2Promise = page.waitForEvent('popup');

    // Open Order Details
    await page.getByText('5002293640').click();

    const page2 = await page2Promise;

    // Extract SAP Order Number
    const orderText = await page2
      .getByRole('heading')
      .textContent();

    const sapOrderNumber = orderText
      ?.replace('Order #', '')
      .trim();

    console.log(
      'SAP Order Number:',
      sapOrderNumber
    );

    expect(sapOrderNumber).toBeTruthy();

    // Open Backoffice

     const backoffice = await context.newPage();
      await backofficeLogin(backoffice);
    
    // Navigate to Orders
    await backoffice.getByText('Order').click();
    await backoffice.getByText('Orders').click();

    // Verify SAP Order
    const orderCell = backoffice.getByText(
      sapOrderNumber!,
      { exact: true }
    );

    await orderCell.scrollIntoViewIfNeeded();

    await expect(orderCell).toBeVisible({
      timeout: 30000,
    });

    // Capture Full Backoffice Page Screenshot
    const backofficeScreenshot =
      await backoffice.screenshot({
        fullPage: true,
      });

    // Attach Screenshot to Playwright Report
    await testInfo.attach(
      `Backoffice_Page_With_Order_${sapOrderNumber}`,
      {
        body: backofficeScreenshot,
        contentType: 'image/png',
      }
    );

    console.log(
      `SAP Order Number ${sapOrderNumber} found in Backoffice`
    );
  }
);