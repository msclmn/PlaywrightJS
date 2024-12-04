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
            productFilterDropdown: "//select[@id='input-limit-212402']"
        };
    }

    // Generalized function to fill either price field
    async sendKeysPriceField(field, value) {
      const selector = field === 'min' ? this.locators.minimumPriceField : this.locators.maximumPriceField;
      await actions.sendKeys(selector, value.toString());
  }

    // Method to get field value
    async getPriceFieldValue(field) {
      const selector = field === 'min' ? this.locators.minimumPriceField : this.locators.maximumPriceField;
      return await actions.getValue(selector); // Assuming `actions.getValue` fetches input value
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
    console.log(`Visibility of ${dropdown}: ${isVisible}`);
    return isVisible;
  }
}

module.exports = { Cameras }