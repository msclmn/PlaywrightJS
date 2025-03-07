const { expect } = require('@playwright/test');

class SpecialMenu {
    constructor(page) {
        this.page = page;

        // Locators as variables 
        this.locators = {
            specialOffersHeader: '//h1[text()="Special Offers"]',
            gridViewIconBtn: "//button[@id='grid-view']",
            listViewIconBtn: "//button[@id='list-view']",
            productCompareLink: "//a[contains(text(),'Product Compare')]",
            copyrightText: "//p[contains(text(),'© LambdaTest - Powered by OpenCart')]",
            minimumPriceField: "//div[@id='mz-filter-panel-0-0']//input[@placeholder='Minimum Price']",
            maximumPriceField: "//div[@id='mz-filter-panel-0-0']//input[@placeholder='Maximum Price']",
            allCollapsingArrows: "//i[@class='fas fa-angle-up ml-auto']",

            //#region header locators
            headerFilter: '//h3[contains(text(),"Filter")]',
            headerPrice: '//div[contains(@class, "mz-filter-group") and contains(@class, "price")]',
            headerSearch: '//div[contains(@class, "mz-filter-group") and contains(@class, "search")]',
            headerAvailability: '//div[contains(@class, "mz-filter-group") and contains(@class, "stock_status")]',
            headerDiscount: '//div[contains(@class, "mz-filter-group") and contains(@class, "discount")]',
            headerRating: '//div[contains(@class, "mz-filter-group") and contains(@class, "rating")]',
            headerDesktops: "//a[contains(text(), 'Desktops') and contains(text(), '(')]",
            headerLaptops: "//a[contains(text(), 'Laptops') and contains(text(), '(')]",
            headerComponents: "//a[contains(text(), 'Components') and contains(text(), '(')]",
            headerTablets: "//a[contains(text(), 'Tablets') and contains(text(), '(')]",
            headerSoftware: "//a[contains(text(), 'Software') and contains(text(), '(')]",
            headerPhoneAndPDA: "//a[contains(text(), 'Phones') and contains(text(), '(')]",
            headerCameras: "//a[contains(text(), 'Cameras') and contains(text(), '(')]",
            headerMP3Players: "//a[contains(text(), 'MP3') and contains(text(), '(')]"
            //#endregion
        };
    }

    async isSpecialOffersHeaderVisible() {
        return await this.page.isVisible(this.locators.specialOffersHeader);
    }

    async allCollapsingArrowsVisible() {
        return await this.page.isVisible(this.locators.allCollapsingArrows);
    }

    async isMinimumPriceFieldVisible() {
        return await this.page.isVisible(this.locators.minimumPriceField);
    }

    async isMaximumPriceFieldVisible() {
        return await this.page.isVisible(this.locators.maximumPriceField);
    }

    async isGridViewIconVisible() {
        return await this.page.isVisible(this.locators.gridViewIconBtn);
    }

    async isListViewIconVisible() {
        return await this.page.isVisible(this.locators.listViewIconBtn);
    }

    async isProductCompareLinkVisible() {
        return await this.page.isVisible(this.locators.productCompareLink);
    }

    async isCopyrightTextVisible() {
        return await this.page.isVisible(this.locators.copyrightText);
    }

    async allsidebarHeadersDisplayed(headerName) {
        let isVisible;
        switch (headerName) {
            case 'Filter':
                isVisible = await this.page.isVisible(this.locators.headerFilter);
                break;
            case 'Price':
                isVisible = await this.page.isVisible(this.locators.headerPrice);
                break;
            case 'Search':
                isVisible = await this.page.isVisible(this.locators.headerSearch);
                break;
            case 'Availability':
                isVisible = await this.page.isVisible(this.locators.headerAvailability);
                break;
            case 'Discount':
                isVisible = await this.page.isVisible(this.locators.headerDiscount);
                break;
            case 'Rating':
                isVisible = await this.page.isVisible(this.locators.headerRating);
                break;
            case 'Desktops':
                isVisible = await this.page.isVisible(this.locators.headerDesktops);
                break;
            case 'Laptops':
                isVisible = await this.page.isVisible(this.locators.headerLaptops);
                break;
            case 'Components':
                isVisible = await this.page.isVisible(this.locators.headerComponents);
                break;
            case 'Tablets':
                isVisible = await this.page.isVisible(this.locators.headerTablets);
                break;
            case 'Software':
                isVisible = await this.page.isVisible(this.locators.headerSoftware);
                break;
            case 'Phones & PDAs':
                isVisible = await this.page.isVisible(this.locators.headerPhoneAndPDA);
                break;
            case 'Cameras':
                isVisible = await this.page.isVisible(this.locators.headerCameras);
                break;
            case 'MP3 Players':
                isVisible = await this.page.isVisible(this.locators.headerMP3Players);
                break;
            default:
                isVisible = false;
        }
        return isVisible;
    }
}

module.exports = { SpecialMenu };