const { test, expect } = require('@playwright/test');
const { Actions, wrapAsyncMethods } = require('../../Utilities/BaseActions/Actions');

// Use wrapped Actions for test simplicity
const actions = wrapAsyncMethods(new Actions());

// Wrapper for test execution to handle browser lifecycle
function runTest(testLogic) {
    return async () => {
        try {
            await actions.launchBrowser(false); // True = headless
            await testLogic(actions); // Execute the test logic
        } catch (error) {
            console.error(error);
            throw error;
        } finally {
            await actions.closeBrowser(); // Close browser in any case
        }
    };
}

test('Navigate to Google and verify title.', runTest(async () => 
{
    const navigationSuccess = await actions.navigateTo('https://www.google.com');
    expect(navigationSuccess).toBe(true);

    const title = await actions.getTitle();
    expect(title).toBe('Google');
}));
