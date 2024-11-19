const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './Tests',
    timeout: 30000,
    use: {
        browserName: 'chromium',
        headless: true,
        viewport: { width: 1280, height: 720 },
    },
});