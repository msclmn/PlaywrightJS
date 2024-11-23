const { test, expect } = require('@playwright/test');
const { runTest } = require('../SetupTest');

test('Navigate to Google and verify title.', runTest(async (actions) => {
    const navigationSuccess = await actions.navigateTo('https://www.google.com');
    expect(navigationSuccess).toBe(true);

    const title = await actions.getTitle();
    expect(title).toBe('Google');
}));
