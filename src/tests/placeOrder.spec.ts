import { test, expect } from '../fixtures/baseFixture';

test('place order flow (smoke)', async ({ app, loginPage, cartPage }) => {
  // Login
  await app.login();

  // close popup if present
  await app.closePopup();

  // Run the place order orchestration
  await app.placeOrder();

  // Verify order complete message is visible
  await expect(loginPage.page.locator("xpath=//div[contains(text(),'Order Complete')]")).toBeVisible({ timeout: 30000 });
});
