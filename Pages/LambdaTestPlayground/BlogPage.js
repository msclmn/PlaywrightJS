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
            //Buttons
            blogLatestArticlesPreviousButton: '//*[contains(@class, "title") and normalize-space(text())="Latest Articles"]/following-sibling::div/div/a[contains(@class, "mz-swiper-nav-prev")]', 
            blogMostViewedPreviousButton: '//*[contains(@class, "title") and normalize-space(text())="Most viewed"]/following-sibling::div/div/a[contains(@class, "mz-swiper-nav-prev")]',           
            blogSideColumnLatestPreviousButton: '//*[contains(@class, "title") and normalize-space(text())="Latest"]/following-sibling::div/div/a[contains(@class, "mz-swiper-nav-prev")]', 
            blogLatestArticlesNextButton: '//*[contains(@class, "title") and normalize-space(text())="Latest Articles"]/following-sibling::div/div/a[contains(@class, "mz-swiper-nav-next")]', 
            blogMostViewedNextButton: '//*[contains(@class, "title") and normalize-space(text())="Most viewed"]/following-sibling::div/div/a[contains(@class, "mz-swiper-nav-next")]',           
            blogSideColumnLatestNextButton: '//*[contains(@class, "title") and normalize-space(text())="Latest"]/following-sibling::div/div/a[contains(@class, "mz-swiper-nav-next")]', 
            //Click Buttons
            blogClickLatestArticlesNextButton: '//*[contains(@class, "title") and normalize-space(text())="Latest Articles"]/following-sibling::div/div/a[2]',
            blogClickMostViewedNextButton: '//*[contains(@class, "title") and normalize-space(text())="Most viewed"]/following-sibling::div/div/a[2]',
            blogClickLatestNextButton: '//*[contains(@class, "title") and normalize-space(text())="Latest"]/following-sibling::div/div/a[2]',
            blogClickLatestArticlesPreviousButton: '//*[contains(@class, "title") and normalize-space(text())="Latest Articles"]/following-sibling::div/div/a[1]',
            blogClickMostViewedPreviousButton: '//*[contains(@class, "title") and normalize-space(text())="Most viewed"]/following-sibling::div/div/a[1]',
            blogClickSideColumnLatestPreviousButton: '//*[contains(@class, "title") and normalize-space(text())="Latest"]/following-sibling::div/div/a[1]',
            //Unformatted Locators
            unformattedBlogSideCategory: `//*[contains(@class, 'list-group-item') and contains(normalize-space(text()), '{0}')]`


        }
    }

    //Methods to click the various buttons on the page
    async clickBlogPage() 
    { 
        const click = await actions.click(this.locators.navBlog); 
        return click;
    } 

    //Click Button Methods
    async clickLatestArticlesNextButton() 
    {
        const click = await actions.click(this.locators.blogClickLatestArticlesNextButton);
        return click;
    }
    async clickMostViewedNextButton() 
    {
        const click = await actions.click(this.locators.blogClickMostViewedNextButton);
        return click;
    }
    async clickSideColumnLatestNextButton() 
    {
        const click = await actions.click(this.locators.blogSideColumnLatestNextButton);
        return click;
    }
    async clickLatestArticlesPrevButton() 
    {
        const click = await actions.click(this.locators.blogClickLatestArticlesPreviousButton);
        return click;
    }
    async clickMostViewedPrevButton() 
    {
        const click = await actions.click(this.locators.blogClickMostViewedPreviousButton);
        return click;
    }
    async clickSideColumnLatestPrevButton() 
    {
        const click = await actions.click(this.locators.blogClickSideColumnLatestPreviousButton);
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

    //Methods to verify if previous and next navigation buttons are displayed
    async isLatestArticlesPrevButtonDisplayed() {
        const isDisplayed = await actions.isVisible(this.locators.blogLatestArticlesPreviousButton);
        return isDisplayed;
    }

    async isMostViewedPrevButtonDisplayed() {
        const isDisplayed = await actions.isVisible(this.locators.blogMostViewedPreviousButton);
        return isDisplayed;
    }

    async isSideColumnPrevButtonDisplayed() {
        const isDisplayed = await actions.isVisible(this.locators.blogSideColumnLatestPreviousButton);
        return isDisplayed;
    }

    async isLatestArticlesNextButtonDisplayed() {
        const isDisplayed = await actions.isVisible(this.locators.blogLatestArticlesNextButton);
        return isDisplayed;
    }

    async isMostViewedNextButtonDisplayed() {
        const isDisplayed = await actions.isVisible(this.locators.blogMostViewedNextButton);
        return isDisplayed;
    }

    async isSideColumnNextButtonDisplayed() {
        const isDisplayed = await actions.isVisible(this.locators.blogSideColumnLatestNextButton);
        return isDisplayed;
    }
}

module.exports = { BlogPage }