const { expect } = require('@playwright/test');
const { Actions, wrapAsyncMethods } = require('../../Utilities/BaseActions/Actions'); 
const actions = wrapAsyncMethods(new Actions());

class HomePage 
{
    constructor(page) {
        actions.page = page;
        this.page = page;

        this.locators = {
            buttonShopNow: '(//a[text()="SHOP NOW"])[1]',
            carouselSlide: '//*[@class="carousel slide "]',
            carouselIndicators: '.carousel-indicators li', // Added locator for carousel indicators
            headerMainSearchForProducts: '//div[@id="main-header"]',
            headerMainNavigation: '//div[@id="main-navigation"]',
            headerTopTrendingCategories: '//h3[contains(text(), "Top Trending Categories")]',
            headerTopProducts: '//h3[contains(text(), "Top Products")]',
            headerTopCollection: '//h3[contains(text(), "Top Collection")]',
            headerFromTheBlog: '//h3[contains(text(), "From The Blog")]'
        };

        this.activeClass = 'active';
    }

    async isCarouselSlideDisplayed() {
        const isDisplayed = await actions.isVisible(this.locators.carouselSlide);
        return isDisplayed;
    }

    async isHeaderMainSearchForProductsDisplayed() {
        const isDisplayed = await actions.isVisible(this.locators.headerMainSearchForProducts);
        return isDisplayed;
    }

    async isHeaderMainNavigationDisplayed() {
        const isDisplayed = await actions.isVisible(this.locators.headerMainNavigation);
        return isDisplayed;
    }

    async isHeaderTopTrendingCategoriesDisplayed() {
        const isDisplayed = await actions.isVisible(this.locators.headerTopTrendingCategories);
        return isDisplayed;
    }

    async isHeaderTopProductsDisplayed() {
        const isDisplayed = await actions.isVisible(this.locators.headerTopProducts);
        return isDisplayed;
    }

    async isHeaderTopCollectionsDisplayed() {
        const isDisplayed = await actions.isVisible(this.locators.headerTopCollection);
        return isDisplayed;
    }

    async isHeaderFromTheBlogDisplayed() {
        const isDisplayed = await actions.isVisible(this.locators.headerFromTheBlog);
        return isDisplayed;
    }

    // Shared Steps
    async SharedStep_isHeadersDisplayedCorrectly() {
        if (!await this.isHeaderMainSearchForProductsDisplayed()) return false;
        if (!await this.isHeaderMainNavigationDisplayed()) return false;
        if (!await this.isHeaderTopTrendingCategoriesDisplayed()) return false;
        if (!await this.isHeaderTopProductsDisplayed()) return false;
        if (!await this.isHeaderTopCollectionsDisplayed()) return false;
        if (!await this.isHeaderFromTheBlogDisplayed()) return false;
        return true;
    }

    // New method to verify carousel movement
    async isCarouselMovingCorrectly() {
        let currentIndex = await this.getActiveCarouselIndex();

        await this.page.waitForTimeout(6000);

        // Get the new active index from Helper method below
        let newIndex = await this.getActiveCarouselIndex();
        if (newIndex === currentIndex) return false;

        // Repeat for another cycle to ensure carousel is moving correctly
        currentIndex = newIndex;
        await this.page.waitForTimeout(6000);
        newIndex = await this.getActiveCarouselIndex();
        
        if (newIndex === currentIndex) return false;

        return true;
    }

    // Helper method to get the current active carousel index: 0, 1, or 2
    async getActiveCarouselIndex() {
    const activeElement = await this.page.$(`${this.locators.carouselIndicators}.${this.activeClass}`);
    if (!activeElement) {
        throw new Error('Active carousel element not found');
    }
    const index = await activeElement.getAttribute('data-slide-to');
    return parseInt(index, 10);
}
}

module.exports = { HomePage };
