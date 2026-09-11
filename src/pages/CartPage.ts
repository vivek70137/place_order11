import { expect, Page } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly catalogLink = "xpath=//a[text()='Catalog']";
  readonly balversaLink = "xpath=//a[text()='BALVERSA']";

  readonly productLink = "xpath=(//a[text()='BALVERSA 3MG 84 TBL BOTTLE USA'])[1]";
  readonly addToCartButton = 'xpath=//input[@id="addToCart" and contains(@class, "btnclsactive")]';
  readonly cartButton = '#cart-btn-holder';
  readonly validateButton = "xpath=//button[text()='Validate']";
  readonly shippingContinueButton = "xpath=(//button[contains(@class,'shippingPage')])[1]";
  readonly continueToPayment = "xpath=(//a[text()='CONTINUE TO PAYMENT' or contains(translate(normalize-space(.),'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'continue to payment')])[1]";
  readonly poField = '#purchOrder';
  readonly reviewButton = "xpath=(//button[contains(translate(normalize-space(.),'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'continue to review')] | //button[contains(translate(normalize-space(.),'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'review')])[1]";
  readonly placeOrderButton = "xpath=(//button[contains(translate(normalize-space(.),'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'place order')] | //input[contains(translate(@value,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'place order')])[1]";
  readonly orderCompleteText = "xpath=//div[contains(text(),'Order Complete')]";

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToCatalog() {
    await this.page.click(this.catalogLink);
  }

  async selectBalversa() {
    await this.page.click(this.balversaLink);
  }

  async openProductPage() {
    await this.page.click(this.productLink);
  }

  async addToCart() {
    const addToCart = this.page.locator(this.addToCartButton);
    await expect(addToCart).toBeVisible({ timeout: 30000 });
    await expect(addToCart).toBeEnabled({ timeout: 30000 });
    await addToCart.scrollIntoViewIfNeeded();
    await addToCart.click();
  }

  async proceedToPayment() {
    await this.page.click(this.cartButton);

    const validateBtn = this.page.locator(this.validateButton).first();
    await expect(validateBtn).toBeVisible({ timeout: 30000 });
    await expect(validateBtn).toBeEnabled({ timeout: 30000 });
    await validateBtn.click();

    const shippingContinueBtn = this.page.locator(this.shippingContinueButton).first();
    await expect(shippingContinueBtn).toBeVisible({ timeout: 30000 });
    await shippingContinueBtn.click();

    const continueToPaymentBtn = this.page.locator(this.continueToPayment).first();
    await expect(continueToPaymentBtn).toBeVisible({ timeout: 30000 });
    await continueToPaymentBtn.click();
  }

  async placeOrder() {
    const poNumber = `t-${Date.now()}`;
    const poField = this.page.locator(this.poField).first();
    const poError = this.page.getByText('Please enter the PO Number');
    const reviewBtn = this.page.getByRole('button', { name: /continue to review/i }).last();

    await expect(poField).toBeVisible({ timeout: 30000 });
    await poField.click({ clickCount: 3 });
    await poField.fill(poNumber);
    await expect(poField).toHaveValue(poNumber, { timeout: 10000 });
    await this.page.keyboard.press('Tab');

    await poError.waitFor({ state: 'hidden', timeout: 10000 });

    await expect(reviewBtn).toBeVisible({ timeout: 30000 });
    await expect(reviewBtn).toBeEnabled({ timeout: 30000 });
    await reviewBtn.scrollIntoViewIfNeeded();
    await reviewBtn.click();

    await this.page.waitForLoadState('networkidle').catch(() => {});
    await this.page.waitForTimeout(500);

    let placeOrderBtn = this.page.getByRole('button', { name: /place order/i }).first();
    if ((await placeOrderBtn.count()) === 0) {
      placeOrderBtn = this.page.locator('xpath=(//input[contains(translate(@value, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "place order")])[1]');
    }

    await expect(placeOrderBtn).toBeVisible({ timeout: 30000 });
    await expect(placeOrderBtn).toBeEnabled({ timeout: 30000 });
    await placeOrderBtn.scrollIntoViewIfNeeded();
    await placeOrderBtn.click();

    await expect(this.page.locator(this.orderCompleteText)).toBeVisible({ timeout: 30000 });
  }
}
