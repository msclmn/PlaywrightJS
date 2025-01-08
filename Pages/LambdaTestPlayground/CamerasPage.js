const { expect } = require('@playwright/test');
const { Actions, wrapAsyncMethods } = require('../../Utilities/BaseActions/Actions'); 
const actions = wrapAsyncMethods(new Actions());
const { baseURLPalmSearch } = require('../../playwright.config');

class Cameras
{
    constructor(page) {
        this.page = page;
        actions.page = page;

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
            headerColor: '//div[@class="mz-filter-group-header collapsed"][normalize-space()="Color"]',
            headerSize: '//div[@class="mz-filter-group-header collapsed"][normalize-space()="Size"]',
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
            //colorPickerBlue: '//label[@for='mz-fc-0-32']//img[@alt='Blue']',
            //colorPickerPink: '//label[@for='mz-fc-0-28']//img[@alt='Pink']',
            colorPicker: (color) => `(//img[@alt="${color}"])[2]`,
            availabilitySelection: (availability) => `(//label[contains(text(), "${availability}")])[2]`,

            // product action carousel buttons
            productActionCarousel: '//div[contains(@class, "product-action")]',
            addToCartButton: '(//div[contains(@class, "product-action")])[1]//button[1]',
            addToWishListButton: '(//div[contains(@class, "product-action")])[1]//button[2]',
            quickViewButton: '(//div[contains(@class, "product-action")])[1]//button[3]',
            compareButton: '(//div[contains(@class, "product-action")])[1]//button[4]',
        };
    }

    async productActionCarouselVisible() { 
      const productCarousel = await actions.isVisible(this.locators.productActionCarousel);
      return productCarousel;
    }

    async sendKeysToSearch(text) {
      const sendKeysSearch = await actions.sendKeys(this.locators.searchField, text);
      return sendKeysSearch; 
    }
    
    async pressEnterKeyOnSearchField() {
      const searchField = this.page.locator(this.locators.searchField);
      await searchField.focus();
      await searchField.press('Enter');
    }

    async sendKeysToSearch(text) {
      const sendKeysSearch = await actions.sendKeys(this.locators.searchField, text);
      return sendKeysSearch;
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
      const sendText = await actions.sendKeys(selector, value.toString());
      return sendText;
    }

    // Method to get field value
    async getPriceFieldValue(field) {
      const selector = field === 'min' ? this.locators.minimumPriceField : this.locators.maximumPriceField;
      const getValue = actions.getValue(selector);
      return getValue;
    }

    async productFilterDropdown(dropdown) {
      
      let isVisible
      switch (dropdown) {
          case '15':
            isVisible = await actions.isVisible(this.locators.productFilterDropdown);
            break;

          case '25':
            isVisible = await actions.isVisible(this.locators.productFilterDropdown);
            break;

          case '50':
            isVisible = await actions.isVisible(this.locators.productFilterDropdown);
            break;

          case '75':
            isVisible = await actions.isVisible(this.locators.productFilterDropdown);
            break;

          case '100':
            isVisible = await actions.isVisible(this.locators.productFilterDropdown);
            break;

    }
    return isVisible;
  }

  async sortByFilterDropdown(dropdown) {
    
    let isVisible
    switch (dropdown) {
        case 'Default':
          isVisible = await actions.isVisible(this.locators.sortByFilterDropdown);
          break;

        case 'Best Sellers':
          isVisible = await actions.isVisible(this.locators.sortByFilterDropdown);
          break;

        case 'Popular':
          isVisible = await actions.isVisible(this.locators.sortByFilterDropdown);
          break;

        case 'Newest':
          isVisible = await actions.isVisible(this.locators.sortByFilterDropdown);
          break;

        case 'Name (A - Z)':
          isVisible = await actions.isVisible(this.locators.sortByFilterDropdown);
          break;

        case 'Name (Z - A)':
          isVisible = await actions.isVisible(this.locators.sortByFilterDropdown);
          break;

        case 'Price (Low > High)':
          isVisible = await actions.isVisible(this.locators.sortByFilterDropdown);
          break;

        case 'Price (High > Low)':
          isVisible = await actions.isVisible(this.locators.sortByFilterDropdown);
          break;

        case 'Rating (Lowest)':
          isVisible = await actions.isVisible(this.locators.sortByFilterDropdown);
          break;

        case 'Model (A - Z)':
          isVisible = await actions.isVisible(this.locators.sortByFilterDropdown);
          break;

        case 'Model (Z - A)':
          isVisible = await actions.isVisible(this.locators.sortByFilterDropdown);
          break;
        
    }
    return isVisible;
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
  
    let isVisible
    switch (headerTitle) {
        case 'Manufacturer':
          isVisible = await actions.isVisible(this.locators.headerManufacturer);
          break;

        case 'Color':
          isVisible = await actions.isVisible(this.locators.headerColor);
          break;

        case 'Size':
          isVisible = await actions.isVisible(this.locators.headerSize);
          break;
    }
    return isVisible;
  }

  async clickManufacturers(btn) {
    switch (btn) {
        case 'Apple':
          await this.page.waitForSelector();
          await actions.click(this.locators.manufacturerBtnApple);
          break;
        case 'Canon':
          await actions.click(this.locators.manufacturerBtnCanon);
          break;
        case 'Hewlett-Packard':
          await actions.click(this.locators.manufacturerBtnHewlettPackard);
          break;
        case 'HTC':
          await actions.click(this.locators.manufacturerBtnHTC);
          break;
        case 'Nikon':
          await actions.click(this.locators.manufacturerBtnNikon);
          break;
        case 'Palm':
          await actions.click(this.locators.manufacturerBtnPalm);
          break;
        case 'Sony':
          await actions.click(this.locators.manufacturerBtnSony);
          break;
    }
  }

  async manufacturersDisplayed(btn) {
    switch (btn) {
        case 'Apple':
          await actions.isVisible(this.locators.manufacturerBtnApple);
          break;
        case 'Canon':
          await actions.isVisible(this.locators.manufacturerBtnCanon);
          break;
        case 'Hewlett-Packard':
          await actions.isVisible(this.locators.manufacturerBtnHewlettPackard);
          break;
        case 'HTC':
          await actions.isVisible(this.locators.manufacturerBtnHTC);
          break;
        case 'Nikon':
          await actions.isVisible(this.locators.manufacturerBtnNikon);
          break;
        case 'Palm':
          await actions.isVisible(this.locators.manufacturerBtnPalm);
          break;
        case 'Sony':
          await actions.isVisible(this.locators.manufacturerBtnSony);
          break;
    }
  }

  async sizeAvailable(size) {
  
    let isVisible
    switch (size) {
        case 'Large':
          isVisible = await actions.isVisible(this.locators.sizeLarge);
          break;
        case 'Medium':
          isVisible = await actions.isVisible(this.locators.sizeMedium);
          break;
        case 'Small':
          isVisible = await actions.isVisible(this.locators.sizeSmall);
          break;
        case 'XLarge':
          isVisible = await actions.isVisible(this.locators.sizeXLarge);
          break;
        case 'XXLarge':
          isVisible = await actions.isVisible(this.locators.sizeXXLarge);
          break;
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

module.exports = { Cameras }