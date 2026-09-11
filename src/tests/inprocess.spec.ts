import { test, expect } from '@playwright/test';

test(
  'Return Order Flow',
  async ({ page }, testInfo) => {
    // =========================
    // LOGIN
    // =========================
    await page.goto(
      'https://uk-s5.jjcustomerconnect.com/uk-store/en/GBP/login',
      {
        waitUntil: 'domcontentloaded',
      }
    );

    const acceptCookieBtn = page.locator(
      '#onetrust-accept-btn-handler'
    );

    await expect(
      acceptCookieBtn
    ).toBeVisible({
      timeout: 30000,
    });

    await acceptCookieBtn.click({
      force: true,
    });

    await expect(
      acceptCookieBtn
    ).toBeHidden({
      timeout: 30000,
    });

    await page
      .getByRole('textbox', {
        name: 'Email',
      })
      .fill('vi@jnj.com');

    await page
      .getByRole('textbox', {
        name: 'Password',
      })
      .fill('jjcc1234');

    await Promise.all([
      page.waitForURL(
        /^(?!.*\/login).*$/,
        {
          timeout: 30000,
        }
      ),
      page
        .getByRole('button', {
          name: 'Sign In',
          exact: true,
        })
        .click(),
    ]);

    await expect(
      page.getByText('Welcome back')
    ).toBeVisible({
      timeout: 30000,
    });

    // =========================
    // OPEN ORDERS
    // =========================
    await page
      .locator('#cx-header')
      .getByRole('link', {
        name: 'Orders',
      })
      .click();

    // =========================
    // OPEN ORDER DETAILS
    // =========================
    const page2Promise =
      page.waitForEvent('popup');

    await page
      .getByText('5002293640')
      .click();

    const page2 =
      await page2Promise;

    // =========================
    // CAPTURE ORDER NUMBER
    // =========================
    const orderHeading =
      page2.getByRole(
        'heading',
        {
          name: /Order #/,
        }
      );

    await expect(
      orderHeading
    ).toBeVisible({
      timeout: 30000,
    });

    const orderText =
      await orderHeading.textContent();

    const customerOrderNumber =
      orderText
        ?.replace('Order #', '')
        .trim() || '';

    console.log(
      `Customer Order Number: ${customerOrderNumber}`
    );

    // =========================
    // SCREENSHOT
    // =========================
    const orderScreenshot =
      await page2.screenshot({
        fullPage: true,
      });

    await testInfo.attach(
      `Order_${customerOrderNumber}`,
      {
        body: orderScreenshot,
        contentType: 'image/png',
      }
    );

    // Optional local copy
    await page2.screenshot({
      path: `screenshots/Order_${customerOrderNumber}.png`,
      fullPage: true,
    });

    console.log(
      `✅ Order ${customerOrderNumber} opened successfully`
    );
  }
);