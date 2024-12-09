//https://ecommerce-playground.lambdatest.io/index.php?route=account/login
const { expect } = require('@playwright/test');
const { Actions, wrapAsyncMethods } = require('../../Utilities/BaseActions/Actions'); 
const actions = wrapAsyncMethods(new Actions());

class LoginPage
{
    constructor(page) {
        this.page = page;
        actions.page = page;

        this.locators = {
            textFieldEmailAddress: '//input[@id="input-email"]',
            textFieldPassword: '//input[@id="input-password"]',
            buttonLogin: '//input[contains(@type,"submit") and @value="Login"]',
        }
    }

    async goTo()
    {
      await this.page.goTo("https://ecommerce-playground.lambdatest.io")
    }
    
    async sendKeysToLogin(text) 
    { 
        const sendKeysEmail = await actions.sendKeys(this.locators.textFieldEmailAddress, text); 
        const sendKeysPassword = await actions.sendKeys(this.locators.textFieldPassword, text);
        return sendKeysEmail & sendKeysPassword;
    }

    async clickLoginButton()
    {
        const click = await actions.click(this.locators.buttonLogin)
        return click;
    }
}

module.exports = { LoginPage }