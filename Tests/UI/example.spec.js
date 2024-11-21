const { test, expect } = require('@playwright/test');
const Actions = require('../../Utilities/BaseActions/Actions');
const actions = new Actions();

test('Navigate to Google and verify title.', async () => {

    await actions.launchBrowser(false); //true = headless browser
    await actions.navigateTo('https://google.com');

    const title = await actions.getTitle();
    await actions.closeBrowser();

    expect(title).toBe('Google');
});

