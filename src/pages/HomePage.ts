import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly popupCloseButton = "xpath=//a[@class='close clsBtn accountSelectionCancel']";

  constructor(page: Page) {
    this.page = page;
  }

  async closePopup() {
    const popup = this.page.locator(this.popupCloseButton);
    if (await popup.count() > 0) {
      await popup.first().click().catch(() => {});
    }
  }
}
