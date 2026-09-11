import { test, expect } from '@playwright/test';

test('Return Order Flow', async ({ page, context }) => {
  // =========================
  // JJCC LOGIN
  // =========================
  await page.goto(
    'https://uk-s5.jjcustomerconnect.com/uk-store/en/GBP/login',
    { waitUntil: 'domcontentloaded' }
  );

  const acceptCookieBtn = page.locator(
    '#onetrust-accept-btn-handler'
  );

  await expect(acceptCookieBtn).toBeVisible({
    timeout: 30000,
  });

  await acceptCookieBtn.click({ force: true });

  await expect(acceptCookieBtn).toBeHidden({
    timeout: 30000,
  });

  await page.getByRole('textbox', {
    name: 'Email',
  }).fill('vi@jnj.com');

  await page.getByRole('textbox', {
    name: 'Password',
  }).fill('jjcc1234');

  await Promise.all([
    page.waitForURL(/^(?!.*\/login).*$/, {
      timeout: 30000,
    }),
    page.getByRole('button', {
      name: 'Sign In',
      exact: true,
    }).click(),
  ]);

  await expect(
    page.getByText('Welcome back')
  ).toBeVisible({
    timeout: 30000,
  });

  // =========================
  // SEARCH PRODUCT
  // =========================
  await page
    .getByPlaceholder(
      'Search Products, Orders, PO Numbers, or Invoices'
    )
    .fill('0.617.100');

  await page
    .getByPlaceholder(
      'Search Products, Orders, PO Numbers, or Invoices'
    )
    .press('Enter');

  // =========================
  // ADD TO CART
  // =========================
  await page
    .getByRole('button', {
      name: 'Add to Cart',
    })
    .first()
    .click();

  const cartIcon = page.locator('.jj-mini-cart-action');

  await expect(cartIcon).toBeVisible({
    timeout: 15000,
  });

  await cartIcon.click();

  await page.waitForURL(/cart/, {
    timeout: 15000,
  });

  // =========================
  // CHECKOUT
  // =========================
  await page
    .locator('app-cart-breadcrumb')
    .getByRole('button', {
      name: 'Proceed to Checkout',
    })
    .click();

  const poNumber = `PO${Date.now()}`;

  await page.getByRole('textbox', {
    name: 'Example: PO-09-0234-',
  }).fill(poNumber);

  console.log(`PO Number: ${poNumber}`);

  await page
    .locator('app-cart-breadcrumb')
    .getByRole('button', {
      name: 'Proceed to Checkout',
    })
    .click();

  // =========================
  // PLACE ORDER
  // =========================
  await page
    .locator('app-cart-breadcrumb')
    .getByRole('button', {
      name: 'Place Order',
    })
    .click();

  await expect(page).toHaveURL(
    /orderConfirmation\/\d+/,
    { timeout: 60000 }
  );

  // Dynamic Order Number
  const orderNumber = page.url().split('/').pop();

  console.log(`Order Number: ${orderNumber}`);

  // Screenshot of confirmation
  await page.screenshot({
    path: `screenshots/OrderConfirmation_${orderNumber}.png`,
    fullPage: true,
  });

  // =========================
  // SAP BACKOFFICE LOGIN
  // =========================
  const backoffice = await context.newPage();

  await backoffice.goto(
    'https://backoffice.c4fai9-johnsonan4-d6-public.model-t.cc.commerce.ondemand.com/backoffice/login.zul'
  );

  await backoffice
    .getByRole('textbox', {
      name: 'Enter user name',
    })
    .fill('admin_s2');

  await backoffice
    .getByRole('textbox', {
      name: 'Enter password',
    })
    .fill('JnjemeajjccS2@1');

  await backoffice
    .getByRole('button', {
      name: 'Sign In',
    })
    .click();

  // =========================
  // OPEN ORDERS
  // =========================
  await backoffice.getByText('Order').click();

  await backoffice.getByText(
    'Orders',
    { exact: true }
  ).click();

  // Wait for grid
  await backoffice.waitForLoadState('networkidle');

  // =========================
  // VERIFY ORDER EXISTS
  // =========================
  // =========================
// SEARCH CUSTOMER ORDER NUMBER
// =========================

const searchBox = backoffice.locator(
  'input[placeholder="Type to search"]'
);

await searchBox.fill(orderNumber!);

await backoffice.keyboard.press('Enter');

await backoffice.waitForTimeout(5000);

// =========================
// VERIFY ORDER.SapOrderNumber
// =========================

const sapOrderCell = backoffice.locator(
  `td[aria-label="Order.sapOrderNumber"]`
);

await expect(sapOrderCell.first()).toContainText(
  orderNumber!,
  {
    timeout: 30000,
  }
);

console.log(
  `✅ Customer Connect Order ${orderNumber} found in SAP Backoffice`
);

// Screenshot of matching result
await backoffice.screenshot({
  path: `screenshots/Backoffice_Order_${orderNumber}.png`,
  fullPage: true,
});

  
 
  console.log(
    `✅ Order ${orderNumber} found in SAP Backoffice`
  );
});