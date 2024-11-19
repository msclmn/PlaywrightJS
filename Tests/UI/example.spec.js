const { test, expect } = require('@playwright/test');

test('Navigate to Google and verify title.', async ({ page }) => {
    await page.goto('https://google.com');
    const title = await page.title();
    expect(title).toBe('Google');
});
