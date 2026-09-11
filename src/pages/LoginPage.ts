import { Page } from '@playwright/test';
import { LOGIN_URL, PASSWORD, USERNAME } from '../env/index';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput = '#j_username';
  readonly passwordInput = '#j_password';

  constructor(page: Page) {
    this.page = page;
  }

  async login(username = 'spk@jnj.its.com', password = '1') {
    await this.page.goto(LOGIN_URL);
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.press(this.passwordInput, 'Enter');
    await this.page.waitForURL('**/store/en/**', { timeout: 30000 });
  }
}
