const { expect } = require('@playwright/test');

class BlogPage 
{
    constructor(page) {
        this.page = page;

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
        await this.page.click(this.locators.navBlog); 
    } 

    //Click Button Methods
    async clickLatestArticlesNextButton() 
    {
        await this.page.click(this.locators.blogClickLatestArticlesNextButton);
    }

    async clickMostViewedNextButton() 
    {
        await this.page.click(this.locators.blogClickMostViewedNextButton);
    }
    async clickSideColumnLatestNextButton() 
    {
        await this.page.click(this.locators.blogSideColumnLatestNextButton);
    }
    async clickLatestArticlesPrevButton() 
    {
        await this.page.click(this.locators.blogClickLatestArticlesPreviousButton);
    }
    async clickMostViewedPrevButton() 
    {
        await this.page.click(this.locators.blogClickMostViewedPreviousButton);
    }
    async clickSideColumnLatestPrevButton() 
    {
        await this.page.click(this.locators.blogClickSideColumnLatestPreviousButton);
    }

    //Method using a unformatted locator to check that each category is displayed
    async isBlogSideCategoryDisplayed(blogCategory)
    {   
        let locator = `//*[contains(@class, 'list-group-item') and contains(normalize-space(text()), '${blogCategory}')]`;

        let result = await this.page.textContent(locator);

        if(await this.page.isVisible(locator) === true)
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
        return await this.page.isVisible(this.locators.blogLatestArticlesTitle);
    }

    async isMostViewedTitleDisplayed() {
        return await this.page.isVisible(this.locators.blogMostViewedTitle);
    }

    async isSideMenuTitleDisplayed() {
        return await this.page.isVisible(this.locators.blogSideMenuTitle);
    }

    //Methods to verify if previous and next navigation buttons are displayed
    async isLatestArticlesPrevButtonDisplayed() {
        return await this.page.isVisible(this.locators.blogLatestArticlesPreviousButton);
    }

    async isMostViewedPrevButtonDisplayed() {
        return await this.page.isVisible(this.locators.blogMostViewedPreviousButton);
    }

    async isSideColumnPrevButtonDisplayed() {
        return await this.page.isVisible(this.locators.blogSideColumnLatestPreviousButton);
    }

    async isLatestArticlesNextButtonDisplayed() {
        return await this.page.isVisible(this.locators.blogLatestArticlesNextButton);
    }

    async isMostViewedNextButtonDisplayed() {
        return await this.page.isVisible(this.locators.blogMostViewedNextButton);
    }

    async isSideColumnNextButtonDisplayed() {
        return await this.page.isVisible(this.locators.blogSideColumnLatestNextButton);
    }
}

module.exports = { BlogPage }