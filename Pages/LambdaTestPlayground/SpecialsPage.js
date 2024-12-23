const { expect } = require('@playwright/test');
const { Actions, wrapAsyncMethods } = require('../../Utilities/BaseActions/Actions'); 
const actions = wrapAsyncMethods(new Actions());

class SpecialMenu 
{
    constructor(page) {
        this.page = page;
        actions.page = page;

        // Locators as variables 
        this.locators = {
<<<<<<< HEAD
=======
            navSpecial: '(//*[contains(@class, "title") and normalize-space(text())="Special"])[2]',
>>>>>>> main
            specialOffersHeader: '//h1[text()="Special Offers"]',
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
            headerMP3Players: "//a[contains(text(), 'MP3') and contains(text(), '(')]",
            gridViewIconBtn: "//button[@id='grid-view']",
            listViewIconBtn: "//button[@id='list-view']",
            productCompareLink: "//a[contains(text(),'Product Compare')]",
            copyrightText: "//p[contains(text(),'© LambdaTest - Powered by OpenCart')]",
            minimumPriceField: "//div[@id='mz-filter-panel-0-0']//input[@placeholder='Minimum Price']",
            maximumPriceField: "//div[@id='mz-filter-panel-0-0']//input[@placeholder='Maximum Price']",
            allCollapsingArrows: "//i[@class='fas fa-angle-up ml-auto']"
            
        };
    }

<<<<<<< HEAD
=======
    async clickSpecialTab()
    {
      const specialTab = await actions.click(this.locators.navSpecial);
      return specialTab;
    }

>>>>>>> main
    async isSpecialOffersHeaderVisible()
    {
      const specialOfferTxt = await actions.isVisible(this.locators.specialOffersHeader);
      return specialOfferTxt;
    }

    async allCollapsingArrowsVisible()
    { 
      const collapsingArrows = await actions.isVisible(this.locators.allCollapsingArrows);
      return collapsingArrows;
    }

    async isMinimumPriceFieldVisible()
    {
      const minPriceField = await actions.isVisible(this.locators.minimumPriceField);
      return minPriceField;
    }

    async isMaximumPriceFieldVisible()
    {
      const maxPriceField = await actions.isVisible(this.locators.maximumPriceField);
      return maxPriceField
    }

    async isGridViewIconVisible()
    {
      const gridViewIcon = await actions.isVisible(this.locators.gridViewIconBtn);
      return gridViewIcon;
    }

    async isListViewIconVisible()
    {
      const listViewIcon = await actions.isVisible(this.locators.listViewIconBtn);
      return listViewIcon;
    }

    async isProductCompareLinkVisible() {
      const isVisible = await actions.isVisible(this.locators.productCompareLink);
      return isVisible;
<<<<<<< HEAD
    }
=======
  }
>>>>>>> main

    async isCopyrightTextVisible() {
      const isVisible = await actions.isVisible(this.locators.copyrightText);
      return isVisible;
<<<<<<< HEAD
    }
=======
}
>>>>>>> main

    async allsidebarHeadersDisplayed(headerName) {
      
      let isVisible
      switch (headerName) {
          case 'Filter':
            isVisible = await actions.isVisible(this.locators.headerFilter);
            break;

          case 'Price':
            isVisible = await actions.isVisible(this.locators.headerPrice);
            break;

          case 'Search':
            isVisible = await actions.isVisible(this.locators.headerSearch);
            break;

          case 'Availability':
            isVisible = await actions.isVisible(this.locators.headerAvailability);
            break;

          case 'Discount':
            isVisible = await actions.isVisible(this.locators.headerDiscount);
            break;

          case 'Rating':
            isVisible = await actions.isVisible(this.locators.headerRating);
            break;

          case 'Desktops':
            isVisible = await actions.isVisible(this.locators.headerDesktops);
            break;

          case 'Laptops':
            isVisible = await actions.isVisible(this.locators.headerLaptops);
            break;

          case 'Components':
            isVisible = await actions.isVisible(this.locators.headerComponents);
            break;

          case 'Tablets':
            isVisible = await actions.isVisible(this.locators.headerTablets);
            break;

          case 'Software':
            isVisible = await actions.isVisible(this.locators.headerSoftware);
            break;

          case 'Phones & PDAs':
            isVisible = await actions.isVisible(this.locators.headerPhoneAndPDA);
            break;

          case 'Cameras':
            isVisible = await actions.isVisible(this.locators.headerCameras);
            break;

          case 'MP3 Players':
            isVisible = await actions.isVisible(this.locators.headerMP3Players);
            break;

    }
    return isVisible;
  }

}

module.exports = { SpecialMenu }