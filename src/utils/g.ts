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

