import { test, expect } from '@playwright/test';

test('Place Order and Navigate Through Pages', async ({ page }) => {

  // Login
  await page.goto('https://us-qa1.jjcustomerconnect.com/store/en/');

  await page.getByRole('textbox', { name: /email/i }).fill('spk@its.jnj.com');
  await page.getByRole('textbox', { name: /password/i }).fill('1');
  await page.getByRole('button', { name: /login/i }).click();
await expect(page.getByText('Quick Add to Cart')).toBeVisible();
// Open Quick Add To Cart
await page.locator('text=QUICK ADD TO CART').click();

// First Product Number field
const productField = page
  .locator('input[placeholder="Product Number"]')
  .first();

await productField.waitFor({ state: 'visible' });
await productField.fill('5045814030');

// First Quantity field
const quantityField = page
  .locator('input[placeholder="Quantity"]')
  .first();

await quantityField.fill('1');

await page.getByRole('button', { name: /add to cart/i }).click();

  // Cart Validation
  await page.getByRole('link', {
    name: /item currently in your cart/i
  }).click();

  await page
.locator('app-na-cart-item-list')

.getByRole('button', { name: /validate/i })

.click();
// Wait until Checkout button appears
// const checkoutBtn = page.getByRole('button', {
// name: /checkout/i,

// });
// await expect(checkoutBtn).toBeVisible({
// timeout: 60000,
// });
const checkoutBtn = page.locator('text=CHECKOUT').first();

await checkoutBtn.scrollIntoViewIfNeeded();
// await expect(checkoutBtn).toBeVisible({
// timeout: 60000,
// });
await checkoutBtn.click();
 

  await page
    .locator('app-checkout-shipping-details')
    .getByRole('button', { name: /continue to payment/i })
    .click();

  // PO Number
  // await page.locator('input[type="text"]').last().fill('p1');
const randomPO = `PO${Math.floor(Math.random() * 1000000)}`;

await page.locator('#purchaseOrder input').fill(randomPO);
  await page
    .locator('app-checkout-payment')
    .getByRole('button', { name: /continue to review/i })
    .click();

  await page
    .locator('app-checkout-order-review-summary')
    .getByRole('button', { name: /place order/i })
    .click();

  // Order Confirmation
  await expect(
    page.getByText('Thank you for your order!')
  ).toBeVisible();

  // const orderLink = page.locator('a[href*="order-details"]').first();
  // await orderLink.click();

  // await expect(
  //   page.getByRole('heading', { name: /order details/i })
  // ).toBeVisible();

  // Navigation Checks
  // await page.getByRole('link', { name: /catalog/i }).click();
  // await page.getByRole('link', { name: /build an order/i }).click();
  // await page.getByRole('link', { name: /reports/i }).click();
  // await page.getByRole('link', { name: /user management/i }).click();
});