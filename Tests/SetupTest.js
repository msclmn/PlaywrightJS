const { Actions, wrapAsyncMethods } = require('../Utilities/BaseActions/Actions');
const actions = wrapAsyncMethods(new Actions());

//Wrapper for test execution to handle browser lifecycle
function runTest(testLogic) {
    return async ({ page }, testInfo) => {
        try {
            await actions.launchBrowser(false); // Headless browser
            await testLogic(actions); // Execute test logic
        } catch (error) {
            console.error('Test failed: ', error);

            // Capture and attach a screenshot to the test report
            try {
                const screenshotPath = `test-results/screenshots/error-${testInfo.title.replace(/\s+/g, '_')}.png`;
                await actions.page.screenshot({ path: screenshotPath });
                testInfo.attachments.push({
                    name: 'Screenshot on Failure',
                    path: screenshotPath,
                    contentType: 'image/png',
                });
            } catch (screenshotError) {
                console.error('Failed to capture screenshot: ', screenshotError);
            }

            throw error; // Re-throw error to mark test as failed
        } finally {
            await actions.closeBrowser(); // Close browser
        }
    };
}

module.exports = { runTest };