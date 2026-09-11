import { Page, expect } from '@playwright/test';

export async function uk5Login(page: Page) {
  const email = process.env.UK5_EMAIL!;
  const password = process.env.UK5_PASSWORD!;

  await page.goto(
    'https://uk-s5.jjcustomerconnect.com/uk-store/en/GBP/login',
    {
      waitUntil: 'domcontentloaded'
    }
  );

  const acceptCookieBtn = page.locator(
    '#onetrust-accept-btn-handler'
  );

  await expect(acceptCookieBtn).toBeVisible({
    timeout: 30000
  });

  await acceptCookieBtn.click({ force: true });

  await expect(acceptCookieBtn).toBeHidden({
    timeout: 30000
  });

  await page.getByRole('textbox', {
    name: 'Email'
  }).fill(email);

  await page.getByRole('textbox', {
    name: 'Password'
  }).fill(password);

  await Promise.all([
    page.waitForURL(/^(?!.*\/login).*$/),
    page.getByRole('button', {
      name: 'Sign In',
      exact: true
    }).click()
  ]);

  await expect(
    page.getByText('Welcome back')
  ).toBeVisible({
    timeout: 30000
  });
}
export default uk5Login;

/**
 * Open Order History, apply filters, search for an order and open its details popup.
 * Returns the popup Page for further interactions.
 * Usage: const page2 = await uk5OpenOrderHistory(page, '5002286643')
 */
export async function uk5OpenOrderHistory(page: Page, orderNumber = '5002286643') {
  await page.goto(
    'https://uk-s5.jjcustomerconnect.com/uk-store/en/GBP/orderHistory',
    {
      waitUntil: 'domcontentloaded'
    }
  );

  await page.getByRole('heading', {
    name: 'Start-End Date'
  }).click();

  await page.getByRole('button', {
    name: 'action button'
  }).nth(3).click();

  await page.getByLabel('Select year').selectOption('2025');

  await page.getByText('4', { exact: true }).click();

  await page.getByText('Apply Filters').click();

  await page.getByRole('textbox', {
    name: 'Enter Search Details'
  }).fill(orderNumber);

  await page.locator('button')
    .filter({ hasText: 'Search Orders' })
    .click();

  const page2Promise = page.waitForEvent('popup');

  await page.getByText(orderNumber).click();

  const page2 = await page2Promise;

  return page2;
}

// Backoffice Login

export async function backofficeLogin(page: Page) {

const username = process.env.BACKOFFICE_USER!;

const password = process.env.BACKOFFICE_PASSWORD!;

await page.goto(

'https://backoffice.c4fai9-johnsonan4-d6-public.model-t.cc.commerce.ondemand.com/backoffice/login.zul'

);

await page.getByRole('textbox', {

name: 'Enter user name',

}).fill(username);
await page.getByRole('textbox', {

name: 'Enter password',

}).fill(password);

await page.getByRole('button', {
name: 'Sign In',
}).click();
72
}
