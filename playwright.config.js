const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './Tests',
    timeout: 30000,
    use: {
        browserName: 'chromium',
        headless: true,
        viewport: { width: 1280, height: 720 },
        screenshot: 'off', // I have manual screenshot in testLogic
        trace: 'on-first-retry', // Capture trace for failed tests on first retry
    },
    reporter: [
        ['list'],
        ['html', { outputFolder: `test-results/html-report-${Date.now()}` }],
    ],
});