const { expect } = require('@playwright/test');
const { Actions, wrapAsyncMethods } = require('../Utilities/BaseActions/Actions'); 
const actions = wrapAsyncMethods(new Actions());
class NavigationMenu 
{
    //https://qaplayground.dev/apps/links/
    constructor(page) {
        this.page = page;
        actions.page = page;
        this.goBackButton = page.locator("a.btn.btn-green[href='index.html']")

        // Locators as variables 
        this.locators = {
            homeLink: '#nav a:has-text("Home")',
            aboutLink: '#nav a[href="about.html"]',
            blogLink: '#nav a[href="blog.html"]',
            portfolioLink: '#nav a[href="portfolio.html"]',
            contactLink: '#nav a[href="contact.html"]',
            animatedDiv: '#nav .animation.start-home',
            //goBackButton: 'a.btn.btn-green[href="index.html"]',
            textPageTitle: '#title',
        };
    }

    async isPageTitleTextDisplayedCorrectly(expectedText) 
    {
        try {
            await this.page.waitForSelector(this.locators.textPageTitle, { timeout: 5000 });
            const actualText = await actions.getText(this.locators.textPageTitle);
            if (actualText.trim() === expectedText) {
                return true;
            } else {
                console.error(`Title is incorrect. Expected: "${expectedText}", but got: "${actualText}"`);
                return false;
            }
        } catch (error) {
            console.error(`Failed to check text for ${this.locators.textPageTitle}:`, error);
            return false;
        }
    }
        
        async navigateToNavigationMenu()
    {
        const navigateToMenuButton = await this.page.goto('https://qaplayground.dev/apps/links/');
        return navigateToMenuButton;
    }

    async clickHome() 
    { 
        const click = await actions.click(this.locators.homeLink); 
        return click;
    } 
    async clickAbout() 
    {
        const click = await actions.click(this.locators.aboutLink);
        return click;
    }

    async clickGoBackButton()
    {
        await this.goBackButton.click();
    }
    async clickBlog() 
    {
        const click = await actions.click(this.locators.blogLink); 
        return click;
    } 
    async clickPortfolio() 
    { 
        const click = await actions.click(this.locators.portfolioLink); 
        return click;
    } 
    async clickContact() 
    { 
        const click = await actions.click(this.locators.contactLink);
        return click;
    }
}

module.exports = { NavigationMenu }