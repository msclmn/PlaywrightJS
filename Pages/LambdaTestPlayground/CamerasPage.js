const { expect } = require('@playwright/test');
<<<<<<< HEAD
const { Actions, wrapAsyncMethods } = require('../../Utilities/BaseActions/Actions'); 
const actions = wrapAsyncMethods(new Actions());
=======
>>>>>>> main
const { baseURLPalmSearch, timeout } = require('../../playwright.config');

class Cameras {
    constructor(page) {
        this.page = page;

        // Locators as variables
        this.locators = {
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
            manufacturerBtnApple: '//label[@for="mz-fm-0-8"]',
            manufacturerBtnCanon: '//label[@for="mz-fm-0-9"]',
            manufacturerBtnHewlettPackard: '//label[@for="mz-fm-0-7"]',
            manufacturerBtnHTC: '//label[@for="mz-fm-0-5"]',
            manufacturerBtnNikon: '//label[@for="mz-fm-0-11"]',
            manufacturerBtnPalm: '//label[@for="mz-fm-0-6"]',
            manufacturerBtnSony: '//label[@for="mz-fm-0-10"]',
            sizeLarge: '//label[@for="mz-fc-0-38"]',
            sizeMedium: '//label[@for="mz-fc-0-39"]',
            sizeSmall: '//label[@for="mz-fc-0-40"]',
            sizeXLarge: '//label[@for="mz-fc-0-36"]',
            sizeXXLarge: '//label[@for="mz-fc-0-37"]',
            notificationActionCarousel: '//div[@id="notification-box-top"]',
            colorPicker: (color) => `(//img[@alt="${color}"])[2]`,
            availabilitySelection: (availability) => `(//label[contains(text(), "${availability}")])[2]`,

            // product action carousel buttons
            navActionCarousel: '(//div[contains(@class, "carousel-item active")])[1]',
            addToCartButton: '(//div[contains(@class, "product-action")])[1]//button[1]',
            addToWishListButton: '(//div[contains(@class, "product-action")])[1]//button[2]',
            quickViewButton: '(//div[contains(@class, "product-action")])[1]//button[3]',
            compareButton: '(//div[contains(@class, "product-action")])[1]//button[4]',
            productQuickVieww: '//div[@id="product-quick-view"]'
        };
    }

    async hoverActionCarousel() {
        await this.page.hover(this.locators.navActionCarousel);
    }
    
    async clickActionAddToCart() {
        await this.page.click(this.locators.addToCartButton);
    }

    async productActionCarouselVisible() {
        return await this.page.isVisible(this.locators.navActionCarousel);
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
}

module.exports = { Cameras };