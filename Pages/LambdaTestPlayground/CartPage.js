const { expect } = require("@playwright/test");

class Cart {
    constructor(page) {
        this.page = page;

        // Locators as variables
        this.locators = {
            viewCart: '//a[contains(text(),"View Cart")]',
            checkoutCart: '//a[contains(text(),"Checkout")]',
            login: '//a[contains(text(),"Login")]',
            register: '//a[contains(text(),"Register")]',
            productCompareNotification: '//a[@class="btn btn-secondary btn-block"]'
        };
    }

    async waitForViewCartBtn() {
        await this.page.waitForSelector(this.locators.viewCart, { state: 'visible', timeout: 2000 });
    }

    async waitForCheckoutBtn() {
        await this.page.waitForSelector(this.locators.checkoutCart, { state: 'visible', timeout: 2000 });
    }

    async waitForLoginBtn() {
        await this.page.waitForSelector(this.locators.login, { state: 'visible', timeout: 2000 });
    }

    async waitForCompareNotificationBtn() {
        await this.page.waitForSelector(this.locators.productCompareNotification, { state: 'visible', timeout: 2000 });
    }

    async viewCompareNotificationVisibleBtn() {
        const isVisible = await this.page.isVisible(this.locators.productCompareNotification);
        return isVisible === true
  }

    async waitForRegisterBtn() {
      await this.page.waitForSelector(this.locators.register, { state: 'visible', timeout: 2000 });
    }

    async viewCartVisibleBtn() {
        const isVisible = await this.page.isVisible(this.locators.viewCart);
        //console.log('viewCartBtnVisible:', isVisible);
        return isVisible === true
    }

    async checkoutVisibleBtn() {
        const isVisible = await this.page.isVisible(this.locators.checkoutCart);
        return isVisible === true
    }

    async loginVisibleBtn() {
        const isVisible = await this.page.isVisible(this.locators.login);
        return isVisible === true
    }

    async registerVisibleBtn() {
        const isVisible = await this.page.isVisible(this.locators.register);
        return isVisible === true
    }
}

module.exports = { Cart };
