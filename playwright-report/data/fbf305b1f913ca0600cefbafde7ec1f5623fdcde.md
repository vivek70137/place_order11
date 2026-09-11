# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests\placeOrder.spec.ts >> place order flow (smoke)
- Location: src\tests\placeOrder.spec.ts:3:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('xpath=(//a[text()=\'CONTINUE TO PAYMENT\' or contains(translate(normalize-space(.),\'ABCDEFGHIJKLMNOPQRSTUVWXYZ\',\'abcdefghijklmnopqrstuvwxyz\'),\'continue to payment\')])[1]').first()
Expected: visible
Received: undefined

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - navigation [ref=e7]:
      - generic [ref=e8]:
        - generic [ref=e10]:
          - generic [ref=e11]:
            - generic [ref=e13]: vivek vardhan
            - generic [ref=e15]:
              - link "My Profile" [ref=e16] [cursor=pointer]:
                - /url: /store/en/my-account/personalInformation
                - generic [ref=e17]: 
                - text: My Profile
              - text: "|"
              - link "Sign Out" [ref=e18] [cursor=pointer]:
                - /url: /store/en/logout
                - generic [ref=e19]: 
                - text: Sign Out
          - generic [ref=e26]: 532597-Pharmaceutical , A+ SECURE PACKAGING
        - list [ref=e32]:
          - listitem [ref=e33]:
            - table [ref=e35]:
              - rowgroup [ref=e36]:
                - row "Home Order History Catalog Build An Order Reports Helpful Resources" [ref=e37]:
                  - cell "Home Order History Catalog Build An Order Reports Helpful Resources" [ref=e38]:
                    - generic [ref=e39]:
                      - list [ref=e40]:
                        - listitem [ref=e41] [cursor=pointer]:
                          - generic [ref=e42]: 
                          - link "Home" [ref=e43]:
                            - /url: /store/en/home
                      - list [ref=e44]:
                        - listitem [ref=e45] [cursor=pointer]:
                          - generic [ref=e46]: 
                          - link "Order History" [ref=e47]:
                            - /url: /store/en/order-history
                      - list [ref=e48]:
                        - listitem [ref=e49] [cursor=pointer]:
                          - generic [ref=e50]: 
                          - link "Catalog" [ref=e51]:
                            - /url: /store/en/c/Categories
                      - list [ref=e52]:
                        - listitem [ref=e53] [cursor=pointer]:
                          - generic [ref=e54]: 
                          - link "Build An Order" [ref=e55]:
                            - /url: /store/en/home/buildCart
                      - list [ref=e56]:
                        - listitem [ref=e57] [cursor=pointer]:
                          - generic [ref=e58]: 
                          - link "Reports" [ref=e59]:
                            - /url: /store/en/reports?name=customerStatementReport
                      - list [ref=e60]:
                        - listitem [ref=e61] [cursor=pointer]:
                          - generic [ref=e62]: 
                          - link "Helpful Resources" [ref=e63]:
                            - /url: /store/en/resources/usefullinks
    - generic [ref=e64]:
      - banner [ref=e65]:
        - generic [ref=e67]:
          - link "logo" [ref=e70] [cursor=pointer]:
            - /url: /store/en/home
            - img "logo" [ref=e71]
          - generic:
            - generic [ref=e74]:
              - link "" [ref=e75] [cursor=pointer]:
                - /url: /store/en/cart/reviseOrder
              - generic [ref=e76]: "7"
            - generic [ref=e79]:
              - textbox "Search Products" [ref=e80]
              - button "" [ref=e81] [cursor=pointer]
              - text: 
        - generic: 
        - text: 
      - generic [ref=e85]:
        - generic [ref=e86]:
          - list [ref=e87]:
            - listitem [ref=e88]:
              - link "Home" [ref=e89] [cursor=pointer]:
                - /url: /store/en/home
            - listitem [ref=e90]:
              - text: /
              - link "Shopping Cart" [ref=e91] [cursor=pointer]:
                - /url: "#"
          - generic [ref=e92]:
            - generic [ref=e93]: Shopping Cart
            - button "Checkout" [ref=e96] [cursor=pointer]
          - generic [ref=e102]:
            - generic [ref=e103]: 
            - strong [ref=e104]: Your order was successfully validated
          - generic [ref=e105]:
            - generic [ref=e109]:
              - generic [ref=e110]:
                - strong [ref=e111]: Order Type
                - text: Standard Order
              - generic [ref=e112]:
                - strong [ref=e113]: Account Number
                - text: 532597-Pharmaceutical
            - generic [ref=e115]:
              - generic [ref=e117]:
                - list [ref=e119]:
                  - listitem:
                    - link "<" [ref=e120]:
                      - /url: "#"
                  - listitem:
                    - link ">" [ref=e121]:
                      - /url: "#"
                - status [ref=e122]: 1 - 1 of 1 Results
                - generic [ref=e126]:
                  - text: Show
                  - generic [ref=e127]:
                    - button "Show 10 Items" [ref=e128] [cursor=pointer]:
                      - generic [ref=e129]: 10 Items
                    - text:     
                    - combobox [ref=e130]:
                      - option "10 Items" [selected]
                      - option "25 Items"
                      - option "50 Items"
                      - option "100 Items"
                      - option "500 Items"
                - table [ref=e134]:
                  - rowgroup [ref=e135]:
                    - row "# Product QUANTITY (EACH) Update All UNIT PRICE TOTAL" [ref=e136]:
                      - columnheader "#" [ref=e137]
                      - columnheader "Product" [ref=e138]
                      - columnheader "QUANTITY (EACH) Update All" [ref=e139]: QUANTITY (EACH)
                      - columnheader "UNIT PRICE" [ref=e140]
                      - columnheader "TOTAL" [ref=e141]
                  - rowgroup [ref=e142]:
                    - 'row "1 BALVERSA 3MG 84 TBL BOTTLE USA BALVERSA 3MG 84 TBL BOTTLE USA NDC: 5967603084 7 Case Size: 12 Each Remove $0.00 $0.00" [ref=e143]':
                      - cell "1" [ref=e144]
                      - 'cell "BALVERSA 3MG 84 TBL BOTTLE USA BALVERSA 3MG 84 TBL BOTTLE USA NDC: 5967603084" [ref=e145]':
                        - generic [ref=e146]:
                          - text: +
                          - img "BALVERSA 3MG 84 TBL BOTTLE USA" [ref=e148]
                          - generic [ref=e150]:
                            - paragraph [ref=e151]:
                              - link "BALVERSA 3MG 84 TBL BOTTLE USA" [ref=e152] [cursor=pointer]:
                                - /url: /store/en/Catalog/Branded-Pharmaceuticals-%28Janssen-Actelion%29/BALVERSA/BALVERSA-3MG-84-TBL-BOTTLE-USA/p/5967603084
                            - paragraph [ref=e153]: "NDC: 5967603084"
                            - paragraph
                      - 'cell "7 Case Size: 12 Each Remove" [ref=e154]':
                        - generic [ref=e155]:
                          - textbox [ref=e157]: "7"
                          - paragraph [ref=e158]: "Case Size: 12 Each"
                          - paragraph [ref=e159]:
                            - link "Remove" [ref=e160] [cursor=pointer]:
                              - /url: javascript:void();
                      - cell "$0.00" [ref=e161]
                      - cell "$0.00" [ref=e162]
              - text:      +
              - table [ref=e167]:
                - rowgroup [ref=e168]:
                  - row "Sub Total $0.00" [ref=e169]:
                    - cell "Sub Total" [ref=e170]
                    - cell "$0.00" [ref=e171]
                  - 'row "Fees: $0.00 " [ref=e172]':
                    - cell "Fees:" [ref=e173]
                    - cell "$0.00" [ref=e174]
                    - cell "" [ref=e175]:
                      - link "" [ref=e176] [cursor=pointer]:
                        - /url: "#fee-mobile-collpase"
                        - generic [ref=e177]: 
                  - row:
                    - cell
                  - 'row "Tax: $0.00" [ref=e178]':
                    - cell "Tax:" [ref=e179]
                    - cell "$0.00" [ref=e180]
                  - row "Total $0.00" [ref=e181]:
                    - cell "Total" [ref=e182]
                    - cell "$0.00" [ref=e183]
          - generic [ref=e185]:
            - generic [ref=e186]:
              - button "CLEAR CART" [ref=e187] [cursor=pointer]
              - link "Continue Shopping" [ref=e190] [cursor=pointer]:
                - /url: /store/en/home
            - button "Checkout" [ref=e192] [cursor=pointer]
        - text: 
      - contentinfo [ref=e194]:
        - generic [ref=e197]:
          - generic [ref=e199]:
            - paragraph [ref=e201]:
              - generic [ref=e202]:
                - link "Privacy Policy" [ref=e203] [cursor=pointer]:
                  - /url: "#"
                - text: "|"
                - link "Cookie Policy" [ref=e204] [cursor=pointer]:
                  - /url: "#"
                - text: "|"
                - link "Legal Notice" [ref=e205] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=e206]:
                - text: Use of this site is subject to its
                - link "Terms & Conditions" [ref=e207] [cursor=pointer]:
                  - /url: "#"
                - text: .
              - text: "Site Last Updated: 04/30/2021"
            - generic [ref=e208]:
              - heading "Do you have any questions?" [level=4] [ref=e209]
              - text: "Pharmaceuticals: Call us at"
              - strong [ref=e210]: 1-800-631-5273
              - text: "Consumer Products: Send us a message through"
              - link "Contact Us" [ref=e211] [cursor=pointer]:
                - /url: "#"
              - paragraph
          - generic [ref=e212]:
            - paragraph [ref=e213]: This website is intended for authorized users from the United States and the Caribbean or employees of the Johnson & Johnson Family of Companies. Johnson & Johnson and its affiliates, LLC, does not sell products. All commercial transactions are conducted with Johnson & Johnson Health Care Systems Inc. or Johnson & Johnson Consumer Inc. on behalf of the participating Johnson & Johnson Family of Companies identified as Participating Companies on this website.
            - paragraph [ref=e214]: ©Johnson & Johnson and its affiliates, LLC 2021 All rights reserved. This site is published by Johnson & Johnson and its affiliates, LLC, which is solely responsible for its content. Capitalized product names are trademarks of Johnson & Johnson or its affiliated companies. Third party trademarks used herein are trademarks of their respective owners.
  - text:             
  - generic:
    - iframe
    - iframe
```

# Test source

```ts
  1  | import { expect, Page } from '@playwright/test';
  2  | 
  3  | export class CartPage {
  4  |   readonly page: Page;
  5  |   readonly catalogLink = "xpath=//a[text()='Catalog']";
  6  |   readonly balversaLink = "xpath=//a[text()='BALVERSA']";
  7  | 
  8  |   readonly productLink = "xpath=(//a[text()='BALVERSA 3MG 84 TBL BOTTLE USA'])[1]";
  9  |   readonly addToCartButton = 'xpath=//input[@id="addToCart" and contains(@class, "btnclsactive")]';
  10 |   readonly cartButton = '#cart-btn-holder';
  11 |   readonly validateButton = "xpath=//button[text()='Validate']";
  12 |   readonly shippingContinueButton = "xpath=(//button[contains(@class,'shippingPage')])[1]";
  13 |   readonly continueToPayment = "xpath=(//a[text()='CONTINUE TO PAYMENT' or contains(translate(normalize-space(.),'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'continue to payment')])[1]";
  14 |   readonly poField = '#purchOrder';
  15 |   readonly reviewButton = "xpath=(//button[contains(translate(normalize-space(.),'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'continue to review')] | //button[contains(translate(normalize-space(.),'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'review')])[1]";
  16 |   readonly placeOrderButton = "xpath=(//button[contains(translate(normalize-space(.),'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'place order')] | //input[contains(translate(@value,'ABCDEFGHIJKLMNOPQRSTUVWXYZ','abcdefghijklmnopqrstuvwxyz'),'place order')])[1]";
  17 |   readonly orderCompleteText = "xpath=//div[contains(text(),'Order Complete')]";
  18 | 
  19 |   constructor(page: Page) {
  20 |     this.page = page;
  21 |   }
  22 | 
  23 |   async navigateToCatalog() {
  24 |     await this.page.click(this.catalogLink);
  25 |   }
  26 | 
  27 |   async selectBalversa() {
  28 |     await this.page.click(this.balversaLink);
  29 |   }
  30 | 
  31 |   async openProductPage() {
  32 |     await this.page.click(this.productLink);
  33 |   }
  34 | 
  35 |   async addToCart() {
  36 |     const addToCart = this.page.locator(this.addToCartButton);
  37 |     await expect(addToCart).toBeVisible({ timeout: 30000 });
  38 |     await expect(addToCart).toBeEnabled({ timeout: 30000 });
  39 |     await addToCart.scrollIntoViewIfNeeded();
  40 |     await addToCart.click();
  41 |   }
  42 | 
  43 |   async proceedToPayment() {
  44 |     await this.page.click(this.cartButton);
  45 | 
  46 |     const validateBtn = this.page.locator(this.validateButton).first();
  47 |     await expect(validateBtn).toBeVisible({ timeout: 30000 });
  48 |     await expect(validateBtn).toBeEnabled({ timeout: 30000 });
  49 |     await validateBtn.click();
  50 | 
  51 |     const shippingContinueBtn = this.page.locator(this.shippingContinueButton).first();
  52 |     await expect(shippingContinueBtn).toBeVisible({ timeout: 30000 });
  53 |     await shippingContinueBtn.click();
  54 | 
  55 |     const continueToPaymentBtn = this.page.locator(this.continueToPayment).first();
> 56 |     await expect(continueToPaymentBtn).toBeVisible({ timeout: 30000 });
     |                                        ^ Error: expect(locator).toBeVisible() failed
  57 |     await continueToPaymentBtn.click();
  58 |   }
  59 | 
  60 |   async placeOrder() {
  61 |     const poNumber = `t-${Date.now()}`;
  62 |     const poField = this.page.locator(this.poField).first();
  63 |     const poError = this.page.getByText('Please enter the PO Number');
  64 |     const reviewBtn = this.page.getByRole('button', { name: /continue to review/i }).last();
  65 | 
  66 |     await expect(poField).toBeVisible({ timeout: 30000 });
  67 |     await poField.click({ clickCount: 3 });
  68 |     await poField.fill(poNumber);
  69 |     await expect(poField).toHaveValue(poNumber, { timeout: 10000 });
  70 |     await this.page.keyboard.press('Tab');
  71 | 
  72 |     await poError.waitFor({ state: 'hidden', timeout: 10000 });
  73 | 
  74 |     await expect(reviewBtn).toBeVisible({ timeout: 30000 });
  75 |     await expect(reviewBtn).toBeEnabled({ timeout: 30000 });
  76 |     await reviewBtn.scrollIntoViewIfNeeded();
  77 |     await reviewBtn.click();
  78 | 
  79 |     await this.page.waitForLoadState('networkidle').catch(() => {});
  80 |     await this.page.waitForTimeout(500);
  81 | 
  82 |     let placeOrderBtn = this.page.getByRole('button', { name: /place order/i }).first();
  83 |     if ((await placeOrderBtn.count()) === 0) {
  84 |       placeOrderBtn = this.page.locator('xpath=(//input[contains(translate(@value, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz"), "place order")])[1]');
  85 |     }
  86 | 
  87 |     await expect(placeOrderBtn).toBeVisible({ timeout: 30000 });
  88 |     await expect(placeOrderBtn).toBeEnabled({ timeout: 30000 });
  89 |     await placeOrderBtn.scrollIntoViewIfNeeded();
  90 |     await placeOrderBtn.click();
  91 | 
  92 |     await expect(this.page.locator(this.orderCompleteText)).toBeVisible({ timeout: 30000 });
  93 |   }
  94 | }
  95 | 
```