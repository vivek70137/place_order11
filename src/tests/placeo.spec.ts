import { test, Page } from '@playwright/test';

async function login(page: Page) {
  await page.goto(
    'https://jjcc:Password$123@us-stage1.jjcustomerconnect.com/store/en/login'
  );

  await page.fill('#j_username', 'vi@jnj.com');
  await page.fill('#j_password', 'Vivek@7013');
  await page.click('#loginButton');

  await page.waitForSelector("xpath=//a[text()='Catalog']");
}

async function closePopup(page: Page) {
  const popup = page.locator(
    "xpath=//a[@class='close clsBtn accountSelectionCancel']"
  );

  if (await popup.count() > 0) {
    await popup.first().click().catch(() => {});
  }
}

async function placeOrder(page: Page) {
  await page.click("xpath=//a[text()='Catalog']");
  await page.click("xpath=//a[text()='BALVERSA']");
  await page.click(
    "xpath=(//a[text()='BALVERSA 3MG 84 TBL BOTTLE USA'])[1]"
  );

  // Add to Cart
  const addToCart = page.locator(
    'xpath=//input[@id="addToCart" and @class="btnclsactive redButton primarybtn btn"]'
  );

  await addToCart.waitFor({ state: 'visible', timeout: 20000 });
  await addToCart.scrollIntoViewIfNeeded();
  await addToCart.click({ force: true });

  // Cart
  await page.click('#cart-btn-holder');

  // Validate
  await page.click("xpath=//button[text()='Validate']");

  // Shipping
  await page.click(
    "xpath=(//button[@class='btn btnclsactive shippingPage'])[1]"
  );

  // Continue to Payment
  await page.click("xpath=(//a[text()='CONTINUE TO PAYMENT'])[1]");

  // Purchase Order + Continue to Review.
  // The app requires the PO number to be entered and "continue to review"
  // clicked twice before it advances to the review page, so retry the pair
  // until the Place Order button appears (max 2 attempts).
  const poNumber = `t122-${Date.now()}`;
  const placeOrderBtn = page.locator(
    "xpath=(//button[normalize-space()='Place Order'])[1]"
  );

  for (let attempt = 1; attempt <= 2; attempt++) {
    // Enter the PO number
    const poField = page.locator('#purchOrder').first();
    await poField.waitFor({ state: 'visible', timeout: 30000 });
    await poField.click();
    await poField.fill('');
    await poField.pressSequentially(poNumber, { delay: 50 });
    await poField.press('Tab');

    // Wait for the PO validation error to clear before proceeding
    await page
      .getByText('Please enter the PO Number')
      .waitFor({ state: 'hidden', timeout: 10000 })
      .catch(() => {});

    // Click Continue to Review
    const reviewBtn = page
      .locator('button.continueToreviewBtn')
      .filter({ hasText: 'continue to review' })
      .first();

    await reviewBtn.waitFor({ state: 'visible', timeout: 30000 });
    await reviewBtn.scrollIntoViewIfNeeded();
    await reviewBtn.click();

    // If the review page has loaded (Place Order visible), stop retrying
    const advanced = await placeOrderBtn
      .waitFor({ state: 'visible', timeout: 15000 })
      .then(() => true)
      .catch(() => false);

    if (advanced) {
      break;
    }
  }

  // Place Order (review page renders in-place; wait for the Place Order button)
  await placeOrderBtn.waitFor({
    state: 'visible',
    timeout: 30000
  });

  await placeOrderBtn.scrollIntoViewIfNeeded();
  await placeOrderBtn.click();

  // Order Complete
  await page.waitForSelector(
    "xpath=//div[contains(text(),'Order Complete')]",
    { timeout: 30000 }
  );

  console.log('Order placed successfully');
}

test('order workflow on US stage site', async ({ page }) => {
  await login(page);
  await closePopup(page);
  await placeOrder(page);
});
 