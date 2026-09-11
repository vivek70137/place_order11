import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config();

  
dotenv.config({
  path: './src/.env'
});

const config: PlaywrightTestConfig = {
  testDir: './src/tests',
  // Increase overall test timeout
  timeout: 180000,

  expect: {
    timeout: 30000,
  },

  fullyParallel: true,

  reporter: [
    ['list'],
    [
      'html',
      {
        outputFolder: 'reports/playwright-report',
        open: 'on-failure',
      },
    ],
  ],

  use: {
    // Show browser during execution
    headless: false,

    ignoreHTTPSErrors: true,

    // Slow down actions so you can see what's happening
    launchOptions: {
      slowMo: 1000,
    },
    //  storageState: 'test_data/authentication.json',

    screenshot: 'only-on-failure',

    video: 'retain-on-failure',

    trace: 'retain-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        headless: false,
      },
    },
  ],
};

export default config;