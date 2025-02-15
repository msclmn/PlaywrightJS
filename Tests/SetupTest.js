//Wrapper for test execution to handle browser lifecycle
function runTest(testLogic) {
    return async ({ page }, testInfo) => {
        try {
            console.log(`Starting test: ${testInfo.title}`);
            // Execute the test logic with the existing page instance
            await testLogic(page); 
        } catch (error) {
            console.error('Test failed: ', error);
            await captureScreenshotOnFailure(page, testInfo);
            throw error; // Re-throw error to mark test as failed
        } finally {
            // Close the browser context instead of using actions.closeBrowser
            await page.context().close();
        }
    };
}

//Function to capture a screenshot on test failure
async function captureScreenshotOnFailure(page, testInfo) {
    try {
        const screenshotPath = `test-results/screenshots/error-${testInfo.title.replace(/\s+/g, '_')}.png`;
        await page.screenshot({ path: screenshotPath });
        testInfo.attachments.push({
            name: 'Screenshot on Failure',
            path: screenshotPath,
            contentType: 'image/png',
        });
    } catch (screenshotError) {
        console.error('Failed to capture screenshot: ', screenshotError);
    }
}

module.exports = { runTest };
