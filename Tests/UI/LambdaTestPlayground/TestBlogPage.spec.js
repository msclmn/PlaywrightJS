const { test, expect } = require('@playwright/test');
const { baseURLBlogPage } = require('../../../playwright.config');
const { BlogPage } = require('../../../../PlaywrightJS/Pages/LambdaTestPlayground/BlogPage');
const { runTest } = require('../../SetupTest');


let blogPage;
let goToPage;

test.beforeEach(async ({ page }) =>
{
    goToPage = await page.goto(baseURLBlogPage);
    blogPage = new BlogPage(page);
});

test('Verify the primary headers are displayed on the Blog Page', runTest(async () => {

    // Primary Section headers 
    expect(await blogPage.isLatestArticleTitleDisplayed()).toBe(true);
    expect(await blogPage.isMostViewedTitleDisplayed()).toBe(true);
    // Side Category section titles displayed
    
    expect(await blogPage.isBlogSideCategoryDisplayed('Business (16)')).toBe(true);
    expect(await blogPage.isBlogSideCategoryDisplayed('Electronics (16)')).toBe(true);
    expect(await blogPage.isBlogSideCategoryDisplayed('Technology (16)')).toBe(true);
    expect(await blogPage.isBlogSideCategoryDisplayed('Fashion (16)')).toBe(true);
    
    // Latest Side header
    expect(await blogPage.isSideMenuTitleDisplayed()).toBe(true);

}));