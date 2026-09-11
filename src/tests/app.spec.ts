import { test, expect } from '../fixtures/baseFixture';

test('smoke: login and close popup', async ({ app, loginPage, homePage }) => {
  // perform login using the app helper (which delegates to LoginPage)
  await app.login();

  // assert we reached the store home
  await expect(loginPage.page).toHaveURL(/.*\/store\/en\/?.*/);

  // close popup if present
  await app.closePopup();

  // small sanity wait to ensure popup closed handling ran
  await loginPage.page.waitForTimeout(500);
});
