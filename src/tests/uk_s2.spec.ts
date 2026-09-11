import { test, expect } from '@playwright/test';

test('Admin - View Only (No Price Information) role validation', async ({ page }) => {
  await page.goto(
    'https://uk-s5.jjcustomerconnect.com/uk-store/en/GBP/login'
  );

  // Cookie
  const acceptCookieBtn = page.locator('#onetrust-accept-btn-handler');
  await expect(acceptCookieBtn).toBeVisible({ timeout: 60000 });
  await acceptCookieBtn.click({ force: true });

  // Admin Login
  await page.getByRole('textbox', { name: 'Email' })
    .fill('sarita15@gmail.com');

  await page.getByRole('textbox', { name: 'Password' })
    .fill('Test@123');

  await page.getByRole('button', {
    name: 'Sign In',
    exact: true
  }).click();

  await Promise.all([
    page.waitForURL('**/GBP/**', {
      timeout: 90000
    }),
  
  ]);

  await page.getByRole('radio', {
    name: 'Sold-To'
  }).click();

  await page.locator('.close-icon').click();

  // User Management
  await page.getByRole('link', {
    name: 'Administration'
  }).click();

  await page.getByRole('link', {
    name: 'User Management'
  }).click();

  await page.locator(
    'input[placeholder="Enter Search Details"]'
  ).nth(3).fill('saritauk@gmail.com');

  await page.getByRole('button', {
    name: 'Search'
  }).click();

  await page.getByText('Sarita Devi').click();

  await page.getByRole('button', {
    name: 'Roles & Permissions'
  }).click();

   await page.locator(
    '.col-md-4 > .rebranded_dropdown > .form-group > .jj-select-wrap > .jj-select > .ng-select-container > .ng-arrow-wrapper'
  ).click();

  await page.getByText('View Only (No Price Information)').click();

  // Role Visible
  await expect(
    page.getByText(
      'View Only (No Price Information)'
    )
  ).toBeVisible();

  const orderTypeCheckbox = (
    label: RegExp,
    index = 1
  ) =>
    page
      .locator('div')
      .filter({ hasText: label })
      .nth(index)
      .locator('input[type="checkbox"]');

  // Order Types
  await expect(
    orderTypeCheckbox(/^Select All$/)
  ).toBeDisabled();

  await expect(
    orderTypeCheckbox(/^Consignment Invoice - 9SIS$/)
  ).toBeDisabled();

  await expect(
    orderTypeCheckbox(
      /^Consignment Shipment - 9SE2 - 9SE4 - 9SE7 - KB$/
    )
  ).toBeDisabled();

  await expect(
    orderTypeCheckbox(
      /^Consignment Invoice \+ Consignment Shipment - 9SIS \+ 9SE2 - 9SE4 - 9SE7 - KB$/
    )
  ).toBeDisabled();

  await expect(
    orderTypeCheckbox(/^Sales Order - ZOR$/)
  ).toBeDisabled();

  await expect(
    orderTypeCheckbox(/^Select All Account$/)
  ).toBeDisabled();

  // Notifications
  await page.getByRole('button', {
    name: 'Notifications'
  }).click();

  await expect(
    page.getByText(
      'Notification of Order Confirmation'
    )
  ).toBeVisible();

  await expect(
    page.getByText(
      'Notification of Backorder Report'
    )
  ).toBeVisible();

  await expect(
    page
      .getByText(
        'All disputes placed in J&J Customer Connect'
      )
      .first()
  ).toBeVisible();
});

test('View Only User - Portal Validation', async ({ page }) => {

  await page.goto(
    'https://uk-s5.jjcustomerconnect.com/uk-store/en/GBP/login'
  );

    const acceptCookieBtn = page.locator('#onetrust-accept-btn-handler');
  await expect(acceptCookieBtn).toBeVisible({ timeout: 60000 });
  await acceptCookieBtn.click({ force: true });


  // View Only User Login
  await page.getByRole('textbox', {
    name: 'Email'
  }).fill('saritauk@gmail.com');

  await page.getByRole('textbox', {
    name: 'Password'
  }).fill('Test@123');

  await page.getByRole('button', {
    name: 'Sign In',
    exact: true
  }).click();

{  waitUntil: 'domcontentloaded'}

  // Scenario 3
  await expect(
    page.getByRole('link', {
      name: 'item currently in your cart'
    })
  ).toHaveCount(0);

  await expect(
    page.getByRole('link', {
      name: 'Build an Order',
      exact: true
    })
  ).toHaveCount(0);

  // Scenario 4
  await expect(
    page.getByText('Create a New Order')
  ).toHaveCount(0);

  await expect(
    page.getByText('Price Enquiry')
  ).toHaveCount(0);

  await expect(
    page.getByText('Quick Add to Cart')
  ).toHaveCount(0);

  await expect(
    page.getByText('Order via Template')
  ).toHaveCount(0);

  await expect(
    page.getByText('Upload Excel to Place Order')
  ).toHaveCount(0);

  // Scenario 5
  await expect(
    page.getByText('Total')
  ).toHaveCount(0);
});