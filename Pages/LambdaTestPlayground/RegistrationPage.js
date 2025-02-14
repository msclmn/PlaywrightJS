const { expect } = require('@playwright/test')
const messages = require('../../data/messages.json')

class Registration {
    constructor(page) {
        this.page = page;

        // Locators as variables
        this.locators = {
          firstName: '//input[@id="input-firstname"]',
          lastName: '//input[@id="input-lastname"]',
          email: '//input[@id="input-email"]',
          phone: '//input[@id="input-telephone"]',
          password: '//input[@id="input-password"]',
          passwordConfirm: '//input[@id="input-confirm"]',
          privacyPolicyBox: '//label[@for="input-agree"]',
          continueBtn: '//input[@value="Continue"]',
          registrationSuccessMessage: '//*[text()="Your Account Has Been Created!"]',

          // Required field locators
          messageFirstName: '//*[text()="First Name must be between 1 and 32 characters!"]',
          messageLastName: '//*[text()="Last Name must be between 1 and 32 characters!"]',
          messageEmailAddress: '//*[text()="E-Mail Address does not appear to be valid!"]',
          messagePhone: '//*[text()="Telephone must be between 3 and 32 characters!"]',
          messagePassword: '//*[text()="Password must be between 4 and 20 characters!"]',
          messagePrivacyWarning: '//*[text()=" Warning: You must agree to the Privacy Policy!"]',
          messagePasswordMismatch: '//*[text()="Password confirmation does not match password!"]',

          // Label locators
          labelFirstName: '//label[contains(text(),"First Name")]',
          labelLastName: '//label[contains(text(),"Last Name")]',
          labelEmailAddress: '//label[contains(text(),"E-Mail")]',
          labelPhone: '//label[contains(text(),"Telephone")]',
          labelPassword: '//label[contains(@for,"input-password")]',
          labelPasswordConfirm: '//label[contains(text(),"Password Confirm")]',
          labelSubscribe: '//label[contains(text(),"Subscribe")]',

          // Link locators
          linkLogin: '//a[contains(text(),"Login")]',
          linkRegister: '//a[contains(text(),"Register")]',
          linkForgottenPassword: '//a[contains(text(),"Forgotten Password")]',
          linkMyAccount: '//a[contains(text(),"My Account")]',
          linkAddressBook: '//a[contains(text(),"Address Book")]',
          linkWishList: '//a[contains(text(),"Wish List")]',
          linkOrderHistory: '//a[contains(text(),"Order History")]',
          linkDownloads: '//a[contains(text(),"Downloads")]',
          linkRecurringPayments: '//a[contains(text(),"Recurring payments")]',
          linkRewardPoints: '//a[contains(text(),"Reward Points")]',
          linkReturns: '//a[contains(text(),"Returns")]',
          linkTransactions: '//a[contains(text(),"Transactions")]',
          linkNewsletter: '//a[contains(text(),"Newsletter")]'
        };
    }

    async register(firstName, lastName, email, phone, password, passwordConfirm) {
      await this.page.fill(this.locators.firstName, firstName);
      await this.page.fill(this.locators.lastName, lastName);
      await this.page.fill(this.locators.email, email);
      await this.page.fill(this.locators.phone, phone);
      await this.page.fill(this.locators.password, password);
      await this.page.fill(this.locators.passwordConfirm, passwordConfirm);
      await this.page.click(this.locators.privacyPolicyBox);
      await this.page.click(this.locators.continueBtn);
    }

    async clickContinueBtn() {
      await this.page.click(this.locators.continueBtn);
    }

    async clickSubscribe(option) {
      const optionText = option.charAt(0).toUpperCase() + option.slice(1).toLowerCase();
      const locator = `//label[contains(text(),"${optionText}")]`;
      await this.page.click(locator);
    }

    async getRegistrationSuccessMessage() {
      const message = await this.page.textContent(this.locators.registrationSuccessMessage);
      return message;
    }

    async getPasswordMismatchMessage() {
      const message = await this.page.textContent(this.locators.messagePasswordMismatch);
      return message;
    }

    async requiredFieldMessagesVisible() {
      await expect(this.page.locator(this.locators.messageFirstName)).toHaveText(messages.register.firstName);
      await expect(this.page.locator(this.locators.messageLastName)).toHaveText(messages.register.lastName);
      await expect(this.page.locator(this.locators.messageEmailAddress)).toHaveText(messages.register.email);
      await expect(this.page.locator(this.locators.messagePhone)).toHaveText(messages.register.phone);
      await expect(this.page.locator(this.locators.messagePassword)).toHaveText(messages.register.password);
      await expect(this.page.locator(this.locators.messagePrivacyWarning)).toHaveText(messages.register.privacyWarning);
    }

    async fieldLabelsDisplayed(data) {
      let isVisible;
      switch (data) {
          case 'First Name':
              isVisible = await this.page.isVisible(this.locators.labelFirstName);
              break;
          case 'Last Name':
              isVisible = await this.page.isVisible(this.locators.labelLastName);
              break;
          case 'E-Mail':
              isVisible = await this.page.isVisible(this.locators.labelEmailAddress);
              break;
          case 'Telephone':
              isVisible = await this.page.isVisible(this.locators.labelPhone);
              break;
          case 'Password':
              isVisible = await this.page.isVisible(this.locators.labelPassword);
              break;
          case 'Password Confirm':
              isVisible = await this.page.isVisible(this.locators.labelPasswordConfirm);
              break;
          case 'Subscribe':
              isVisible = await this.page.isVisible(this.locators.labelSubscribe);
              break;
          default:
              isVisible = false;
      }
      return isVisible;
  }

  async linksDisplayed(link) {
    let isVisible;
    switch (link) {
        case 'Login':
            isVisible = await this.page.isVisible(this.locators.linkLogin);
            break;
        case 'Register':
            isVisible = await this.page.isVisible(this.locators.linkRegister);
            break;
        case 'Forgotten Password':
            isVisible = await this.page.isVisible(this.locators.linkForgottenPassword);
            break;
        case 'My Account':
            isVisible = await this.page.isVisible(this.locators.linkMyAccount);
            break;
        case 'Address Book':
            isVisible = await this.page.isVisible(this.locators.linkAddressBook);
            break;
        case 'Wish List':
            isVisible = await this.page.isVisible(this.locators.linkWishList);
            break;
        case 'Order History':
            isVisible = await this.page.isVisible(this.locators.linkOrderHistory);
            break;
        case 'Downloads':
            isVisible = await this.page.isVisible(this.locators.linkDownloads);
            break;
        case 'Recurring payments':
            isVisible = await this.page.isVisible(this.locators.linkRecurringPayments);
            break;
        case 'Reward Points':
            isVisible = await this.page.isVisible(this.locators.linkRewardPoints);
            break;
        case 'Returns':
            isVisible = await this.page.isVisible(this.locators.linkReturns);
            break;
        case 'Transactions':
            isVisible = await this.page.isVisible(this.locators.linkTransactions);
            break;
        case 'Newsletter':
            isVisible = await this.page.isVisible(this.locators.linkNewsletter);
            break;
        default:
            isVisible = false;
    }
    return isVisible;
}
    
}

module.exports = { Registration };