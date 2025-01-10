const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    baseURL: 'https://ecommerce-playground.lambdatest.io/',
    baseURLSpecialPage: 'https://ecommerce-playground.lambdatest.io/index.php?route=product/special',
    baseURLCamerasPage: 'https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33',
    baseURLAppleProductsPage: 'https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33&mz_fm=8',
    baseURLCanonProductsPage: 'https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33&mz_fm=9',
    baseURLHewlettPackardProductsPage: 'https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33&mz_fm=7',
    baseURLBlogPage: 'https://ecommerce-playground.lambdatest.io/index.php?route=extension/maza/blog/home',
    testDir: './Tests',
    timeout: 30000,
    retries: 5, //Will retry a test up to 5x, if it fails.
    use: {
        browserName: 'chromium',
        //browserName: 'firefox',
        //browserName: 'webkit',
        headless: true,
        viewport: { width: 1280, height: 720 },
        screenshot: 'off', // I have manual screenshot in testLogic
        trace: 'on-first-retry', // Capture trace for failed tests on first retry
    },
    reporter: [
        ['list'],
        ['html', { outputFolder: `html-report` }], //HTML Reporter
        ['github'], // Reporter for GitHub Actions annotations
    ],
});
