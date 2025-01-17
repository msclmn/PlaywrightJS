const { test, expect } = require('@playwright/test');
const { NavigationMenu } = require('../../../Pages/LambdaTestPlayground/NavigationMenu');
const { LoginPage } = require('../../../Pages/LambdaTestPlayground/LoginPage');
const { runTest } = require('../../SetupTest');
const dataSet = JSON.parse(JSON.stringify(require('../../../Utilities/TestTopNavigation.json')));

test('Navigate through the site using the top navigation bar.', runTest(async (page ) => {
    const navigationMenu = new NavigationMenu(page);
    const loginPage = new LoginPage(page);
    const websiteLink = 'https://ecommerce-playground.lambdatest.io/';
    await page.goto(`${websiteLink}`);

    await navigationMenu.clickSpecial();
    expect(await page.url()).toMatch('/index.php?route=product/special', 'Failed to navigate to Special page');

    await navigationMenu.clickBlog();
    expect(await page.url()).toMatch('/index.php?route=extension/maza/blog/home', 'Failed to navigate to Blog page');

    await navigationMenu.clickCompareLink();
    expect(await page.url()).toMatch('/index.php?route=product/compare', 'Failed to navigate to Compare page');

    //Verify a logged out user scenario
    await navigationMenu.hoverMyAccountNav();
    const loginOption = navigationMenu.isLoginDisplayed();
    const registerOption = navigationMenu.isRegisterDisplayed();

    if(loginOption && registerOption) //if user is not logged in
    {
        await navigationMenu.clickLoginOptionInMyAccount();
        expect(await page.url()).toMatch('/index.php?route=account/login', 'Failed to navigate to Login page');
        
        await navigationMenu.hoverMyAccountNav();
        await navigationMenu.clickRegisterOptionInMyAccount();
        expect(await page.url()).toMatch('/index.php?route=account/register', 'Failed to navigate to Register Account page');
    }
    else //logout user
    {
        await navigationMenu.hoverMyAccountNav();
        await navigationMenu.clickLogoutOptionInMyAccount;
        loginOption = navigationMenu.isLoginDisplayed();
        expect(loginOption).toBe(true, 'Login option in My account should be displayed after user logs out.')
    }

    //User Login
    await navigationMenu.hoverMyAccountNav();
    await navigationMenu.clickLoginOptionInMyAccount();
    await loginPage.sendKeysToLogin(dataSet.textFieldEmailAddress, dataSet.textFieldPassword);
    await loginPage.clickLoginButton();
    await navigationMenu.hoverMyAccountNav();
    const isDashboardDisplayed = await navigationMenu.isDashboardDisplayed();
    expect(isDashboardDisplayed).toBe(true, 'Dashboard option should be displayed after user is logged in.'); //using this for now until we get My Account page POMS up

    await navigationMenu.hoverMyAccountNav();
    navigationMenu.clickLogoutOptionInMyAccount;
    const loginOption2 = await navigationMenu.isLoginDisplayed();
    expect(loginOption2).toBe(true, 'Login option in My account should be displayed after user logs out.')
}));
