const { expect } = require('@playwright/test');
const { Actions, wrapAsyncMethods } = require('../../Utilities/BaseActions/Actions'); 
const actions = wrapAsyncMethods(new Actions());

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
            colorPicker: (color) => `(//img[@alt="${color}"])[2]`,
            availabilitySelection: (availability) => `(//label[contains(text(), "${availability}")])[2]`,
        };
    }

    async sendKeysToSearch(text)
    {
      const sendKeysSearch = await actions.sendKeys(this.locators.searchField, text);
      return sendKeysSearch;
      
    }
    
    async pressEnterKeyOnSearchField() {
      await this.locators.searchField.press('Enter');
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
          await actions.click(this.locators.manufacturerBtnApple);
          break;

        case 'Canon':
          await actions.click(this.locators.manufacturerBtnCanon);
          break;

        case 'Hewlett-Packard':
          await actions.click(this.locators.manufacturerBtnHewlettPackard);
          break;
    }
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