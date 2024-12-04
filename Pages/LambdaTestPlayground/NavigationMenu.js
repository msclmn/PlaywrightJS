//https://ecommerce-playground.lambdatest.io/
const { expect } = require('@playwright/test');
const { Actions, wrapAsyncMethods } = require('../../Utilities/BaseActions/Actions'); 
const actions = wrapAsyncMethods(new Actions());

class NavigationMenu //Top navigation area of the website
{
    constructor(page) {
        this.page = page;
        actions.page = page;

        this.locators = {
            navHome: '//span[contains(text(),"Home")]',
            navSpecial: '(//*[contains(@class, "title") and normalize-space(text())="Special"])[2]',
            navBlog: '(//*[contains(@class, "title") and normalize-space(text())="Blog"])[2]',
            navMegaMenu: '//span[contains(text(),"Mega Menu")]',
            navAddOns: '//span[contains(text(),"AddOns")]',
            navMyAccount: '(//span[contains(text(),"My account")])[2]',
            navShopByCategory: '//*[@aria-label="Shop by Category"]',
            buttonAllCategories: '(//button[@class="btn dropdown-toggle" and text()="All Categories"])[1]', 
            buttonSearch: '//button[contains(text(),"Search")]',
            textFieldSearchForProducts: '(//input[@aria-label="Search For Products"])[1]',
            linkCompare: '//a[@aria-label="Compare"]',
            linkWishList: '//a[@aria-label="Wishlist"]',
            linkShoppingCart: '(//a[@href="#cart-total-drawer" and contains(@class, "cart")])[1]',
            optionLoginInMyAccount: '//span[contains(text(),"Login")]',
            optionRegisterInMyAccount: '//span[contains(text(),"Register")]',
            optionDashboardInMyAccount: '//*[contains(@class, "title") and normalize-space(text())="Dashboard"]',
            optionMyOrderInMyAccount: '//*[contains(@class, "title") and normalize-space(text())="My order"]',
            optionReturnInMyAccount: '//*[contains(@class, "title") and normalize-space(text())="Return"]',
            optionMyVoucherInMyAccount: '//*[contains(@class, "title") and normalize-space(text())="My voucher"]',
            optionLogoutInMyAccount: '//*[contains(@class, "title") and normalize-space(text())="Logout"]',

        }
    }

    async clickShopByCategory() 
    { 
        const click = await actions.click(this.locators.navShopByCategory); 
        return click;
    } 

    async clickHome() 
    { 
        const click = await actions.click(this.locators.navHome); 
        return click;
    } 

    async clickSpecial() 
    { 
        const click = await actions.click(this.locators.navSpecial); 
        return click;
    } 

    async clickBlog() 
    { 
        const click = await actions.click(this.locators.navBlog); 
        return click;
    } 

    async clickMegaMenu() 
    { 
        const click = await actions.click(this.locators.navMegaMenu); 
        return click;
    } 

    async clickAddOns() 
    { 
        const click = await actions.click(this.locators.navAddOns); 
        return click;
    }

    async clickMyAccount() 
    { 
        const click = await actions.click(this.locators.navMyAccount); 
        return click;
    } 

    async clickSearchButton() 
    { 
        const click = await actions.click(this.locators.buttonSearch); 
        return click;
    } 

    async clickCompareLink() 
    { 
        const click = await actions.click(this.locators.linkCompare); 
        return click;
    } 

    async clickWishListLink() 
    { 
        const click = await actions.click(this.locators.linkWishList); 
        return click;
    } 

    async clickShoppingCartLink() 
    { 
        const click = await actions.click(this.locators.linkShoppingCart); 
        return click;
    }

    async clickLoginOptionInMyAccount() 
    { 
        const click = await actions.click(this.locators.optionLoginInMyAccount); 
        return click;
    }

    async clickRegisterOptionInMyAccount() 
    { 
        const click = await actions.click(this.locators.optionRegisterInMyAccount); 
        return click;
    }

    async clickLogoutOptionInMyAccount() 
    { 
        const click = await actions.click(this.locators.optionLogoutInMyAccount); 
        return click;
    }

    async hoverMyAccountNav()
    {
        const hover = await actions.hover(this.locators.navMyAccount);
        return hover;
    }

    async isLoginDisplayed()
    {
        const displayed = await actions.isVisible(this.locators.optionLoginInMyAccount)
        return displayed;
    }

    async isRegisterDisplayed()
    {
        const displayed = await actions.isVisible(this.locators.optionRegisterInMyAccount)
        return displayed;
    }

    async isDashboardDisplayed()
    {
        const displayed = await actions.isVisible(this.locators.optionDashboardInMyAccount)
        return displayed;
    } 

    async isLogoutNotDisplayed()
    {
        try
        {
            const displayed = await actions.isNotVisible(this.locators.optionLogoutInMyAccount);
            return displayed;
        }
        catch(error)
        {
            return false;
        }
    }


    '//*[contains(@class, "title") and normalize-space(text())="Dashboard"]'
}

module.exports = { NavigationMenu }