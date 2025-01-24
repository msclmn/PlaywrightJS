const { expect } = require('@playwright/test');

class NavigationMenu {
    constructor(page) {
        this.page = page;

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
        };
    }

    async clickShopByCategory() {
        await this.page.click(this.locators.navShopByCategory);
    }

    async clickHome() {
        await this.page.click(this.locators.navHome);
    }

    async clickSpecial() {
        await this.page.click(this.locators.navSpecial);
    }

    async clickBlog() {
        await this.page.click(this.locators.navBlog);
    }

    async clickMegaMenu() {
        await this.page.click(this.locators.navMegaMenu);
    }

    async clickAddOns() {
        await this.page.click(this.locators.navAddOns);
    }

    async clickMyAccount() {
        await this.page.click(this.locators.navMyAccount);
    }

    async clickSearchButton() {
        await this.page.click(this.locators.buttonSearch);
    }

    async clickCompareLink() {
        await this.page.click(this.locators.linkCompare);
    }

    async clickWishListLink() {
        await this.page.click(this.locators.linkWishList);
    }

    async clickShoppingCartLink() {
        await this.page.click(this.locators.linkShoppingCart);
    }

    async clickLoginOptionInMyAccount() {
        await this.page.click(this.locators.optionLoginInMyAccount);
    }

    async clickRegisterOptionInMyAccount() {
        await this.page.click(this.locators.optionRegisterInMyAccount);
    }

    async clickLogoutOptionInMyAccount() {
        await this.page.click(this.locators.optionLogoutInMyAccount);
    }

    async hoverMyAccountNav() {
        await this.page.hover(this.locators.navMyAccount);
    }

    async isLoginDisplayed() {
        return await this.page.isVisible(this.locators.optionLoginInMyAccount);
    }

    async isRegisterDisplayed() {
        return await this.page.isVisible(this.locators.optionRegisterInMyAccount);
    }

    async isDashboardDisplayed() {
        return await this.page.isVisible(this.locators.optionDashboardInMyAccount);
    }

    async isLogoutNotDisplayed() {
        try {
            await this.page.waitForSelector(this.locators.optionLogoutInMyAccount, { state: 'hidden' });
            return true;
        } catch (error) {
            return false;
        }
    }
}

module.exports = { NavigationMenu };