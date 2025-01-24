const { expect } = require('@playwright/test');

class LoginPage {
    constructor(page) {
        this.page = page;

        this.locators = {
            textFieldEmailAddress: '//input[@id="input-email"]',
            textFieldPassword: '//input[@id="input-password"]',
            buttonLogin: '//input[contains(@type,"submit") and @value="Login"]',
        };
    }

    async goTo() {
        await this.page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    }
    
    async sendKeysToLogin(email, password) {
        await this.page.fill(this.locators.textFieldEmailAddress, email);
        await this.page.fill(this.locators.textFieldPassword, password);
    }

    async clickLoginButton() {
        await this.page.click(this.locators.buttonLogin);
    }
}

module.exports = { LoginPage };