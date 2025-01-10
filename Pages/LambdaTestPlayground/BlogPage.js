const { expect } = require('@playwright/test');
const { Actions, wrapAsyncMethods } = require('../../Utilities/BaseActions/Actions'); 
const actions = wrapAsyncMethods(new Actions());

class BlogPage 
{
    constructor(page) {
        this.page = page;
        actions.page = page;

        this.locators = {
            //Navigation
            navHome: '//*[contains(@class, "title") and normalize-space(text())="Home"]',
            navSpecial: '(//*[contains(@class, "title") and normalize-space(text())="Special"])[2]',
            navBlog: '(//*[contains(@class, "title") and normalize-space(text())="Blog"])[2]',
            navMegaMenu: '//*[contains(@class, "title") and normalize-space(text())="Mega Menu"]',
            //Titles
            blogLatestArticlesTitle:  '//*[contains(@class, "title") and normalize-space(text())="Latest Articles"]',
            blogMostViewedTitle:  '//*[contains(@class, "title") and normalize-space(text())="Most viewed"]',
            blogSideMenuTitle: '//*[contains(@class, "title") and normalize-space(text())="Latest"]',
            //Unformatted Locators
            unformattedBlogSideCategory: `//*[contains(@class, 'list-group-item') and contains(normalize-space(text()), '{0}')]`


        }
    }

    //Method to Click the Blog Page 
    async clickBlogPage() 
    { 
        const click = await actions.click(this.locators.navBlog); 
        return click;
    } 

    //Method using a unformatted locator to check that each category is displayed
    async isBlogSideCategoryDisplayed(blogCategory)
    {   
        let locator = `//*[contains(@class, 'list-group-item') and contains(normalize-space(text()), '${blogCategory}')]`;
        const result = await actions.getText(locator);

        if(await actions.isVisible(locator) === true)
             {

                if(result === blogCategory)
                     {
                        return true;
                     } else 
                    {
                        return false;
                    }
            } else return false;

    }

    //Method to verify if section Header Titles are displayed
    async isLatestArticleTitleDisplayed() {
        const isDisplayed = await actions.isVisible(this.locators.blogLatestArticlesTitle);
        return isDisplayed;
    }

    async isMostViewedTitleDisplayed() {
        const isDisplayed = await actions.isVisible(this.locators.blogMostViewedTitle);
        return isDisplayed;
    }

    async isSideMenuTitleDisplayed() {
        const isDisplayed = await actions.isVisible(this.locators.blogSideMenuTitle);
        return isDisplayed;
    }
}

module.exports = { BlogPage }