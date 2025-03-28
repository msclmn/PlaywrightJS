const { defineConfig } = require('@playwright/test');
const { devices } = require('@playwright/test');

module.exports = defineConfig({
    baseURL: 'https://ecommerce-playground.lambdatest.io/',
    baseURLSpecialPage: 'https://ecommerce-playground.lambdatest.io/index.php?route=product/special',
    baseURLCamerasPage: 'https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33',
    baseURLCamerasPage2: 'https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33&page=2',
    baseURLPalmSearch: 'https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33&mz_fq=Palm&description=1',
    baseURLAppleProductsPage: 'https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33&mz_fm=8',
    baseURLCanonProductsPage: 'https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33&mz_fm=9',
    baseURLHewlettPackardProductsPage: 'https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33&mz_fm=7',
    baseURLBlogPage: 'https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home',
    baseURLRegistration: 'https://ecommerce-playground.lambdatest.io/index.php?route=account/register',
    baseURLLastPage: 'https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33&page=5',
    testDir: './Tests',
    timeout: 30000,
    workers: 6, // Will run 6 tests in parallel
    fullyParallel: true,
    retries: 5, // Will retry a test up to 5x, if it fails.

    reporter: [
        ['list'],
        ['html', { outputFolder: `html-report` }], //HTML Reporter
        ['github'], // Reporter for GitHub Actions annotations
    ],

    projects: [
        {
          name: 'safari',
          use: {
              browserName: 'webkit',
              headless: false,
              viewport: { width: 1280, height: 720 },
              screenshot: 'off', // I have manual screenshot in testLogic
              video: 'retain-on-failure', // Save videos for failed tests
              trace: 'on-first-retry', // Capture trace for failed tests on first retry
            }
        },
        {
          name: 'chrome',
          use: {
              browserName: 'chromium',
              headless: false,
              viewport: { width: 1280, height: 720 },
              screenshot: 'off', // I have manual screenshot in testLogic
              video: 'retain-on-failure', // Save videos for failed tests
              trace: 'on-first-retry', // Capture trace for failed tests on first retry
              //...devices['Galaxy S9+'],
              //...devices['iPhone 13']
            }
        },
        {
          name: 'edge',
          use: {
              browserName: 'chromium',
              channel: 'msedge',
              headless: false,
              viewport: { width: 1280, height: 720 },
              screenshot: 'off', // I have manual screenshot in testLogic
              video: 'retain-on-failure', // Save videos for failed tests
              trace: 'on-first-retry', // Capture trace for failed tests on first retry
            }
        },
        {
          name: 'firefox',
          use: {
              browserName: 'firefox',
              headless: false,
              viewport: { width: 1280, height: 720 },
              screenshot: 'off', // I have manual screenshot in testLogic
              video: 'retain-on-failure', // Save videos for failed tests
              trace: 'on-first-retry', // Capture trace for failed tests on first retry
            }
        },
    ],
});