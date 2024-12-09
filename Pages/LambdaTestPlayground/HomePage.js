//https://ecommerce-playground.lambdatest.io/
const { expect } = require('@playwright/test');
const { Actions, wrapAsyncMethods } = require('../../Utilities/BaseActions/Actions'); 
const actions = wrapAsyncMethods(new Actions());

class HomePage 
{
    constructor(page) {
        this.page = page;
        actions.page = page;

        this.locators = {
            buttonPreviousCarousel: '',
            buttonNextCarousel: '',
        }
    }

}