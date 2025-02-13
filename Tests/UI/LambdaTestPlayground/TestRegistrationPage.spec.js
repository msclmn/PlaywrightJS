const { test, expect } = require('@playwright/test');
const { baseURLRegistration } = require('../../../playwright.config');
const { Registration } = require('../../../../PlaywrightJS/Pages/LambdaTestPlayground/RegistrationPage');
const { runTest } = require('../../SetupTest');
const { generateRandomUserData } = require('../../../Utilities/randomDataGenerator')
const { generateRandomUserDataWithDifferentPasswords } = require('../../../Utilities/randomDataGenerator')
const messages = require('../../../data/messages.json')


let registrationMenu;
let goToPage;

test.beforeEach(async ({ page }) => { 
  goToPage = await page.goto(baseURLRegistration); 
  registrationMenu = new Registration(page);
});

test('@Functional Verify a new user can be registered', runTest(async () => {
  const userData = generateRandomUserData();
  await registrationMenu.register(
    userData.firstName,
    userData.lastName,
    userData.email,
    userData.phone,
    userData.password,
    userData.passwordConfirm
  )
  const successMessage = await registrationMenu.getRegistrationSuccessMessage()
  expect(successMessage).toBe(messages.register.registrationSuccessful)
}));

test('@Functional Verify an error message is displayed when there is a password mismatch', runTest(async () => {
  const userData = generateRandomUserDataWithDifferentPasswords();
  await registrationMenu.register(
    userData.firstName,
    userData.lastName,
    userData.email,
    userData.phone,
    userData.password,
    userData.passwordConfirm
  )
  const mismatchPassword = await registrationMenu.getPasswordMismatchMessage()
  expect(mismatchPassword).toBe(messages.register.passwordMismatch)
}));

// This includes the privacy policy checkbox as well
test('@Functional Verify an error message is displayed when required fields are not filled in', runTest(async () => {
  await registrationMenu.clickContinueBtn();
  await registrationMenu.requiredFieldMessagesVisible();
}));

test('@Functional Verify the Newsletter Subscribe radio buttons are functional', runTest(async () => {
  await registrationMenu.clickSubscribe('Yes');
  await registrationMenu.clickSubscribe('No');
}));

test('@UI Verify all correct labels are displayed for the input fields', runTest(async () => {
  let isVisible = await registrationMenu.fieldLabelsDisplayed('First Name');
  expect(isVisible).toBe(true, 'First Name should be displayed');
  isVisible = await registrationMenu.fieldLabelsDisplayed('Last Name');
  expect(isVisible).toBe(true, 'Last Name should be displayed');
  isVisible = await registrationMenu.fieldLabelsDisplayed('E-Mail');
  expect(isVisible).toBe(true, 'E-Mail should be displayed');
  isVisible = await registrationMenu.fieldLabelsDisplayed('Telephone');
  expect(isVisible).toBe(true, 'Telephone should be displayed');
  isVisible = await registrationMenu.fieldLabelsDisplayed('Password');
  expect(isVisible).toBe(true, 'Password should be displayed');
  isVisible = await registrationMenu.fieldLabelsDisplayed('Password Confirm');
  expect(isVisible).toBe(true, 'Password Confirm should be displayed');
  isVisible = await registrationMenu.fieldLabelsDisplayed('Subscribe');
  expect(isVisible).toBe(true, 'Subscribe should be displayed');
}));

test('@UI Verify all correct links are displayed on the page', runTest(async () => {
  let isVisible = await registrationMenu.linksDisplayed('Login');
  expect(isVisible).toBe(true, 'Login should be displayed');
  isVisible = await registrationMenu.linksDisplayed('Register');
  expect(isVisible).toBe(true, 'Register should be displayed');
  isVisible = await registrationMenu.linksDisplayed('Forgotten Password');
  expect(isVisible).toBe(true, 'Forgotten Password should be displayed');
  isVisible = await registrationMenu.linksDisplayed('My Account');
  expect(isVisible).toBe(true, 'My Account should be displayed');
  isVisible = await registrationMenu.linksDisplayed('Address Book');
  expect(isVisible).toBe(true, 'Address Book should be displayed');
  isVisible = await registrationMenu.linksDisplayed('Wish List');
  expect(isVisible).toBe(true, 'Wish List should be displayed');
  isVisible = await registrationMenu.linksDisplayed('Order History');
  expect(isVisible).toBe(true, 'Order History should be displayed');
  isVisible = await registrationMenu.linksDisplayed('Downloads');
  expect(isVisible).toBe(true, 'Downloads should be displayed');
  isVisible = await registrationMenu.linksDisplayed('Recurring payments');
  expect(isVisible).toBe(true, 'Recurring payments should be displayed');
  isVisible = await registrationMenu.linksDisplayed('Reward Points');
  expect(isVisible).toBe(true, 'Reward Points should be displayed');
  isVisible = await registrationMenu.linksDisplayed('Returns');
  expect(isVisible).toBe(true, 'Returns should be displayed');
  isVisible = await registrationMenu.linksDisplayed('Transactions');
  expect(isVisible).toBe(true, 'Transactions should be displayed');
  isVisible = await registrationMenu.linksDisplayed('Newsletter');
  expect(isVisible).toBe(true, 'Newsletter should be displayed');
}));