import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

type AppHelpers = {
  login: () => Promise<void>;
  closePopup: () => Promise<void>;
  placeOrder: () => Promise<void>;
};

export type AppFixtures = {
  loginPage: LoginPage;
  homePage: HomePage;
  cartPage: CartPage;
  app: AppHelpers;
};

export const test = base.extend<AppFixtures>({
  loginPage: async ({ page }: { page: Page }, use: (value: LoginPage) => Promise<void>) => {
    await use(new LoginPage(page));
  },
  homePage: async ({ page }: { page: Page }, use: (value: HomePage) => Promise<void>) => {
    await use(new HomePage(page));
  },
  cartPage: async ({ page }: { page: Page }, use: (value: CartPage) => Promise<void>) => {
    await use(new CartPage(page));
  },
  app: async (
    { loginPage, homePage, cartPage }: { loginPage: LoginPage; homePage: HomePage; cartPage: CartPage },
    use: (value: AppHelpers) => Promise<void>
  ) => {
    async function login() {
      await loginPage.login();
    }

    async function closePopup() {
      await homePage.closePopup();
    }

    async function placeOrder() {
        await cartPage.navigateToCatalog();
        await cartPage.selectBalversa();
      await cartPage.openProductPage();
      await cartPage.addToCart();
      await cartPage.proceedToPayment();
      await cartPage.placeOrder();
    }

    await use({ login, closePopup, placeOrder });
  },
});

export const expect = test.expect;
