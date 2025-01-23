// https://ecommerce-playground.lambdatest.io/index.php?route=account/account
const { expect } = require('@playwright/test');
const { Actions, wrapAsyncMethods } = require('../../Utilities/BaseActions/Actions'); 
const actions = wrapAsyncMethods(new Actions());

class MyAccount
{
    constructor(page) {
        this.page = page;
        actions.page = page;

        this.locators = {
            buttonMyAccountSideColumn: '//aside//div/a[1]',
            buttonEditAccountSideColumn: '//aside//div/a[2]',
            buttonPasswordSideColumn: '//aside//div/a[3]',
            buttonAddressBookSideColumn: '//aside//div/a[4]',
            buttonWishListSideColumn: '//aside//div/a[5]',
            buttonNotificationSideColumn: '//aside//div/a[6]',
            buttonOrderHistorySideColumn: '//aside//div/a[7]',
            buttonDownloadsSideColumn: '//aside//div/a[8]',
            buttonRecurringPaymentsSideColumn: '//aside//div/a[9]',
            buttonRewardPointsSideColumn: '//aside//div/a[10]',
            buttonReturnsSideColumn: '//aside//div/a[11]',
            buttonTransactionsSideColumn: '//aside//div/a[12]',
            buttonNewsletterSideColumn: '//aside//div/a[13]',
            buttonLogoutSideColumn: '//aside//div/a[14]',
            headerMyAccount: '//h2[text()="My Account"]',
            buttonIconEditAccount: '//a[contains(text(),"Edit your account")]',
        }
    }
}
module.exports = { MyAccountPage }