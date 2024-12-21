const { test, expect } = require('@playwright/test');
const { HomePage } = require('../../../../PlaywrightJS/Pages/LambdaTestPlayground/HomePage');
const { runTest } = require('../../SetupTest');

const homePageLink = 'https://ecommerce-playground.lambdatest.io/';

let homepage;

test.beforeEach(async({page}) => {
    homepage = new HomePage(page);
    await page.goto(`${homePageLink}`);
});

test.only('Verify primary headers are displayed on the Home page', runTest(async ({ page }) => {
    expect(await homepage.SharedStep_isHeadersDisplayedCorrectly()).toBe(true, "Headers were not displayed correctly in the Home page.");
}));

test.only('Verify carousel behavior in the Home Page', runTest(async ({ page }) => {
    const isCarouselMoving = await homepage.isCarouselMovingCorrectly();
    expect(await homepage.isCarouselSlideDisplayed()).toBe(true, "Carousel did not display in the Home page.");
    expect(isCarouselMoving).toBe(true, "Carousel did not move correctly.");
}));
