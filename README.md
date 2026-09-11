# Playwright tests (sample)

This repository uses a Playwright `test` extension defined in `src/fixtures/baseFixture.ts` that provides:

- `loginPage` — `LoginPage` page object (methods to login)
- `homePage` — `HomePage` page object (method `closePopup()`)
- `cartPage` — `CartPage` page object (catalog, product, checkout and place order)
- `app` — composed helpers: `login()`, `closePopup()`, `placeOrder()`

Environment
- Default credentials and URL live in `src/env/index.ts` and can be overridden with env vars:
  - `LOGIN_URL`, `APP_USERNAME`, `APP_PASSWORD`, `BASE_URL`

Install and run

```bash
npm install
npm run install:playwright   # installs browser binaries
npm test                     # run tests (headless)
npm test -- --headed       # run tests headed
```

Sample test files are in `src/tests/`. Use the `test` exported from `src/fixtures/baseFixture.ts`:

```ts
import { test, expect } from '../fixtures/baseFixture';

test('example', async ({ app }) => {
  await app.login();
  await app.closePopup();
  // ...
});
```

Notes
- Do not commit real credentials in production; set CI secrets or OS env vars instead.
- Report output and Playwright HTML report are under `reports/playwright-report` by default.
