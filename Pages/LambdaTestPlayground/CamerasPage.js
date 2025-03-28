const { expect } = require('@playwright/test');
const { baseURLPalmSearch } = require('../../playwright.config');
const { baseURLCamerasPage2 } = require('../../playwright.config');
const { baseURLCamerasPage } = require('../../playwright.config');
const { baseURLLastPage } = require('../../playwright.config');

class Cameras {
    constructor(page) {
        this.page = page;

        // Locators as variables
        this.locators = {

            //#region manufacturer locators
            manufacturerBtnApple: '//label[@for="mz-fm-0-8"]',
            manufacturerBtnCanon: '//label[@for="mz-fm-0-9"]',
            manufacturerBtnHewlettPackard: '//label[@for="mz-fm-0-7"]',
            manufacturerBtnHTC: '//label[@for="mz-fm-0-5"]',
            manufacturerBtnNikon: '//label[@for="mz-fm-0-11"]',
            manufacturerBtnPalm: '//label[@for="mz-fm-0-6"]',
            manufacturerBtnSony: '//label[@for="mz-fm-0-10"]',
            //#endregion

            //#region other locators
            headerCameras: "//a[contains(text(), 'Cameras') and contains(text(), '(')]",
            minimumPriceField: "//div[@id='mz-filter-panel-0-0']//input[@placeholder='Minimum Price']",
            maximumPriceField: "//div[@id='mz-filter-panel-0-0']//input[@placeholder='Maximum Price']",
            productFilterDropdown: "//select[@id='input-limit-212402']",
            sortByFilterDropdown: "//select[@id='input-sort-212403']",
            leftHandle: "//*[@id='mz-filter-panel-0-0']/div/div[1]/span[1]",
            rightHandle : "//*[@id='mz-filter-panel-0-0']/div/div[1]/span[2]",
            headerManufacturer: '//div[contains(@class, "mz-filter-group") and contains(@class, "manufacturer")]',
            headerColor: '//div[@class="mz-filter-group-header "][normalize-space()="Color"][1]',
            headerSize: '//div[@class="mz-filter-group-header "][normalize-space()="Size"][1]',
            searchField: '//*[@id="mz-filter-panel-0-3"]/div/input',
            sizeLarge: '//label[@for="mz-fc-0-38"]',
            sizeMedium: '//label[@for="mz-fc-0-39"]',
            sizeSmall: '//label[@for="mz-fc-0-40"]',
            sizeXLarge: '//label[@for="mz-fc-0-36"]',
            sizeXXLarge: '//label[@for="mz-fc-0-37"]',
            nextPage: '(//a[@class="page-link"][contains(.,">")])[1]',
            previousPage: '(//a[@class="page-link"][contains(.,"<")])[2]',
            lastPage: '//a[contains(text(),">|")]',
            firstPage: '//a[contains(text(),"|<")]',
            gridViewBtn: '//button[@id="grid-view"]',
            listViewBtn: '//button[@id="list-view"]',
            listView: '(//div[@class="product-layout product-list col-12"])[1]',
            colorPicker: (color) => `(//img[@alt="${color}"])[2]`,
            availabilitySelection: (availability) => `(//label[contains(text(), "${availability}")])[2]`,
            //#endregion

            //#region product action carousel buttons
            navActionCarousel1: '(//div[contains(@class, "carousel-item active")])[1]',
            navActionCarousel2: '(//div[contains(@class, "carousel-item active")])[2]',
            navActionCarousel3: '(//div[contains(@class, "carousel-item active")])[3]',
            navActionCarousel8: '(//div[contains(@class, "carousel-item active")])[8]',
            addToCartButton: '(//div[contains(@class, "product-action")])[1]//button[1]',
            addToWishListButton: '(//div[contains(@class, "product-action")])[1]//button[2]',
            quickViewButtonItem1: '(//div[contains(@class, "product-action")])[1]//button[3]',
            quickViewButtonItem3: '(//div[contains(@class, "product-action")])[3]//button[3]',
            quickViewButtonItem8: '(//div[contains(@class, "product-action")])[8]//button[3]',
            quickViewModal: '//div[@id="product-quick-view"]',
            compareButtonItem1: '(//div[contains(@class, "product-action")])[1]//button[4]',
            compareButtonItem2: '(//div[contains(@class, "product-action")])[2]//button[4]',
            //#endregion

            //#region quickview modal locators
            labelBrand: '//span[contains(text(),"Brand:")]',
            labelProductCode: '//span[contains(text(),"Product Code:")]',
            labelRewardPoints: '//span[contains(text(),"Reward Points:")]',
            labelAvailability: '//span[contains(text(),"Availability:")]',
            addToCart: '//button[contains(text(),"Add to Cart")]',
            buyNow: '//button[contains(text(),"Buy now")]',
            minusBtn: '//i[@class="fas fa-minus-circle"]',
            plusBtn: '//i[@class="fas fa-plus-circle"]',
            buttonCloseX: '//button[@aria-label="close"]'
            //#endregion
        };
    }

    async quickViewModalAddToCart() {
        await this.page.click(this.locators.addToCart);
    }

    async clickListView() {
        await this.page.click(this.locators.listViewBtn);
    }

    async clickXBtn() {
        await this.page.click(this.locators.buttonCloseX);
        await this.page.waitForSelector(this.locators.quickViewModal, { state: 'hidden' });
    }

    async clickNextPage() {
        await this.page.click(this.locators.nextPage);
    }
  
    async clickPreviousPage() {
        await this.page.click(this.locators.previousPage);
    }

    async isNextPageDisplayed() {
        const currentURL = await this.page.url();
        return currentURL === baseURLCamerasPage2;
    }

    async isPreviousPageDisplayed() {
        const currentURL = await this.page.url();
        return currentURL === baseURLCamerasPage;
    }

    async clickLastPage() {
        await this.page.click(this.locators.lastPage);
    }

    async clickFirstPage() {
        await this.page.click(this.locators.firstPage);
    }

    async isLastPageDisplayed() {
        const currentURL = await this.page.url();
        return currentURL === baseURLLastPage;
    }

    async isFirstPageDisplayed() {
        const currentURL = await this.page.url();
        return currentURL === baseURLCamerasPage;
    }

    async hoverActionCarousel1() {
        await this.page.hover(this.locators.navActionCarousel1);
    }

    async hoverActionCarousel2() {
        await this.page.hover(this.locators.navActionCarousel2);
    }

    async hoverActionCarousel3() {
        await this.page.hover(this.locators.navActionCarousel3);
    }

    async hoverActionCarousel8() {
        await this.page.hover(this.locators.navActionCarousel8);
    }
    
    async clickActionAddToCart() {
        await this.page.click(this.locators.addToCartButton);
    }

    async clickActionWhishList() {
        await this.page.click(this.locators.addToWishListButton);
    }

    async clickActionQuickViewItem1() {
        await this.page.click(this.locators.quickViewButtonItem1);
    }

    async clickActionQuickViewItem3() {
        await this.page.click(this.locators.quickViewButtonItem3);
    }

    async clickActionQuickViewItem8() {
        await this.page.click(this.locators.quickViewButtonItem8);
    }

    async clickCompareItem1() {
        await this.page.click(this.locators.compareButtonItem1);
    }

    async clickCompareItem2() {
        await this.page.click(this.locators.compareButtonItem2);
    }

    async productActionCarouselVisible() {
        return await this.page.isVisible(this.locators.navActionCarousel1);
    }

    async listViewPageDisplayed() {
      return await this.page.isVisible(this.locators.listView);
    }

    async quickViewModalVisible() {
        return await this.page.isVisible(this.locators.quickViewModal);
    }

    async waitForquickViewModal() {
      await this.page.waitForSelector(this.locators.quickViewModal, { state: 'visible', timeout: 3000 });
    }

    async sendKeysToSearch(text) {
        await this.page.fill(this.locators.searchField, text);
    }
    
    async pressEnterKeyOnSearchField() {
        const searchField = this.page.locator(this.locators.searchField);
        await searchField.focus();
        await searchField.press('Enter');
    }

    async isCurrentURLPalmSearch() {
        const currentURL = await this.page.url();
        return currentURL === baseURLPalmSearch;
    }

    // Generalized function to fill either price field
    async sendKeysPriceField(field, value) {
        const selector = field === 'min' ? this.locators.minimumPriceField : this.locators.maximumPriceField;
        await this.page.fill(selector, value.toString());
    }

    // Method to get field value
    async getPriceFieldValue(field) {
        const selector = field === 'min' ? this.locators.minimumPriceField : this.locators.maximumPriceField;
        return await this.page.inputValue(selector);
    }

    async productFilterDropdown() {
        return await this.page.isVisible(this.locators.productFilterDropdown);
    }

    async sortByFilterDropdown() {
        return await this.page.isVisible(this.locators.sortByFilterDropdown);
    }

    async adjustLeftHandle(xOffset) {
        const leftHandle = await this.page.locator(this.locators.leftHandle);
        await leftHandle.hover();
        await this.page.mouse.down();
        const box = await leftHandle.boundingBox();
        if (box) {
            await this.page.mouse.move(box.x + xOffset, box.y + box.height / 2);
        }
        await this.page.mouse.up();
    }

    async adjustRightHandle(xOffset) {
        const rightHandle = await this.page.locator(this.locators.rightHandle);
        await rightHandle.hover();
        await this.page.mouse.down();
        const box = await rightHandle.boundingBox();
        if (box) {
            await this.page.mouse.move(box.x + xOffset, box.y + box.height / 2);
        }
        await this.page.mouse.up();
    }

    async getLeftHandleValue() {
        return await this.page.locator(this.locators.leftHandle).textContent();
    }

    async getRightHandleValue() {
        return await this.page.locator(this.locators.rightHandle).textContent();
    }

    async sidebarHeadersDisplayed(headerTitle) {
        let isVisible;
        switch (headerTitle) {
            case 'Manufacturer':
                isVisible = await this.page.isVisible(this.locators.headerManufacturer);
                break;
            case 'Color':
                isVisible = await this.page.isVisible(this.locators.headerColor);
                break;
            case 'Size':
                isVisible = await this.page.isVisible(this.locators.headerSize);
                break;
            default:
                isVisible = false;
        }
        return isVisible;
    }

    async clickManufacturers(btn) {
        switch (btn) {
            case 'Apple':
                await this.page.click(this.locators.manufacturerBtnApple);
                break;
            case 'Canon':
                await this.page.click(this.locators.manufacturerBtnCanon);
                break;
            case 'Hewlett-Packard':
                await this.page.click(this.locators.manufacturerBtnHewlettPackard);
                break;
            case 'HTC':
                await this.page.click(this.locators.manufacturerBtnHTC);
                break;
            case 'Nikon':
                await this.page.click(this.locators.manufacturerBtnNikon);
                break;
            case 'Palm':
                await this.page.click(this.locators.manufacturerBtnPalm);
                break;
            case 'Sony':
                await this.page.click(this.locators.manufacturerBtnSony);
                break;
            default:
                break;
        }
    }

    async manufacturersDisplayed(btn) {
        let isVisible;
        switch (btn) {
            case 'Apple':
                isVisible = await this.page.isVisible(this.locators.manufacturerBtnApple);
                break;
            case 'Canon':
                isVisible = await this.page.isVisible(this.locators.manufacturerBtnCanon);
                break;
            case 'Hewlett-Packard':
                isVisible = await this.page.isVisible(this.locators.manufacturerBtnHewlettPackard);
                break;
            case 'HTC':
                isVisible = await this.page.isVisible(this.locators.manufacturerBtnHTC);
                break;
            case 'Nikon':
                isVisible = await this.page.isVisible(this.locators.manufacturerBtnNikon);
                break;
            case 'Palm':
                isVisible = await this.page.isVisible(this.locators.manufacturerBtnPalm);
                break;
            case 'Sony':
                isVisible = await this.page.isVisible(this.locators.manufacturerBtnSony);
                break;
            default:
                isVisible = false;
        }
        return isVisible;
    }

    async sizeAvailable(size) {
        let isVisible;
        switch (size) {
            case 'Large':
                isVisible = await this.page.isVisible(this.locators.sizeLarge);
                break;
            case 'Medium':
                isVisible = await this.page.isVisible(this.locators.sizeMedium);
                break;
            case 'Small':
                isVisible = await this.page.isVisible(this.locators.sizeSmall);
                break;
            case 'XLarge':
                isVisible = await this.page.isVisible(this.locators.sizeXLarge);
                break;
            case 'XXLarge':
                isVisible = await this.page.isVisible(this.locators.sizeXXLarge);
                break;
            default:
                isVisible = false;
        }
        return isVisible;
    }

    async selectColor(color) {
        const colorXPath = this.locators.colorPicker(color);
        const colorLabel = this.page.locator(colorXPath);

        try {
            // Wait for the element to be visible and interactable
            await colorLabel.waitFor({ state: 'visible' });
            console.log(`Selecting color: ${color}`);
            await colorLabel.click();
        } catch (error) {
            console.error(`Failed to select color: ${color}`, error);
            throw error;
        }
    }

    async selectAvailability(availability) {
      const availabilityXPath = this.locators.availabilitySelection(availability);
      const availabilityLabel = this.page.locator(availabilityXPath);

      try {
          // Wait for the element to be visible and interactable
          await availabilityLabel.waitFor({ state: 'visible' });
          console.log(`Selecting availability: ${availability}`);
          await availabilityLabel.click();
      } catch (error) {
          console.error(`Failed to select availability: ${availability}`, error);
          throw error;
      }

    }

    async quickViewModalLabels(label) {
      let isVisible;
      switch (label) {
          case 'Brand':
              isVisible = await this.page.isVisible(this.locators.labelBrand);
              break;
          case 'Product Code':
              isVisible = await this.page.isVisible(this.locators.labelProductCode);
              break;
          case 'Reward Points':
              isVisible = await this.page.isVisible(this.locators.labelRewardPoints);
              break;
          case 'Availability':
              isVisible = await this.page.isVisible(this.locators.labelAvailability);
              break;
          default:
              isVisible = false;
      }
      return isVisible;
    }

    async mainBtnsVisible() {
        const addToCartVisible = await this.page.isVisible(this.locators.addToCart);
        const buyNowVisible = await this.page.isVisible(this.locators.buyNow);
        return { addToCartVisible, buyNowVisible };
    }

    async minusPlusBtnsVisible() {
      const minusBtnVisible = await this.page.isVisible(this.locators.minusBtn);
      const plusBtnVisible = await this.page.isVisible(this.locators.plusBtn);
      return { minusBtnVisible, plusBtnVisible };
    }
}

module.exports = { Cameras };