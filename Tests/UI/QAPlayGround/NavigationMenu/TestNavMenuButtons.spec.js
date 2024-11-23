const { test, expect } = require('@playwright/test');
const { NavigationMenu } = require('../../../../Pages/NavigationMenu');
const { runTest } = require('../../../SetupTest');

test('Navigate through the site using navigation bar.', runTest(async ({ page }) => {
    const navigationMenu = new NavigationMenu(page);

    await navigationMenu.navigateToNavigationMenu();

    const aboutClicked = await navigationMenu.clickAbout();
    const titleAboutPageText = await navigationMenu.isPageTitleTextDisplayedCorrectly('Welcome to the About Page');
    expect(aboutClicked).toBe(true);
    expect(titleAboutPageText).toBe(true);
    expect(await page.url()).toBe('https://qaplayground.dev/apps/links/about');
    await navigationMenu.clickGoBackButton();

    const blogClicked = await navigationMenu.clickBlog();
    const titleBlogPageText = await navigationMenu.isPageTitleTextDisplayedCorrectly('Welcome to the Blog Page');
    expect(blogClicked).toBe(true);
    expect(titleBlogPageText).toBe(true);
    expect(await page.url()).toBe('https://qaplayground.dev/apps/links/blog');
    await navigationMenu.clickGoBackButton();

    const portfolioClicked = await navigationMenu.clickPortfolio();
    const titlePortfolioPageText = await navigationMenu.isPageTitleTextDisplayedCorrectly('Welcome to the Portfolio Page');
    expect(portfolioClicked).toBe(true);
    expect(titlePortfolioPageText).toBe(true);
    expect(await page.url()).toBe('https://qaplayground.dev/apps/links/portfolio');
    await navigationMenu.clickGoBackButton();

    const contactClicked = await navigationMenu.clickContact();
    const titleContactPageText = await navigationMenu.isPageTitleTextDisplayedCorrectly('Welcome to the Contact Page');
    expect(contactClicked).toBe(true);
    expect(titleContactPageText).toBe(true);
    expect(await page.url()).toBe('https://qaplayground.dev/apps/links/contact');
}));
