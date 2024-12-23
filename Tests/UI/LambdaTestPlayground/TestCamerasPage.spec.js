const { test, expect } = require('@playwright/test');
const { baseURLCamerasPage } = require('../../../playwright.config');
const { baseURLAppleProductsPage } = require('../../../playwright.config');
const { baseURLCanonProductsPage } = require('../../../playwright.config');
const { baseURLHewlettPackardProductsPage } = require('../../../playwright.config');
const { Cameras } = require('../../../../PlaywrightJS/Pages/LambdaTestPlayground/CamerasPage');
const { runTest } = require('../../SetupTest');


let camerasMenu;
let goToPage;
test.beforeEach(async ({ page }) => 
  { goToPage = await page.goto(`${baseURLCamerasPage}`); camerasMenu = new Cameras(page); });

test('Verify a price range can be selected from the fields', runTest(async() => {
  // Fill the minimum price field and verify
  await camerasMenu.sendKeysPriceField('min', 100);
  const minPriceValue = await camerasMenu.getPriceFieldValue('min');
  expect(minPriceValue).toBe('100');
  
  // Fill the maximum price field and verify
  await camerasMenu.sendKeysPriceField('max', 500);
  const maxPriceValue = await camerasMenu.getPriceFieldValue('max');
  expect(maxPriceValue).toBe('500');
}))

test('Verify the price slider is functional', runTest(async() =>{
  await camerasMenu.adjustLeftHandle(50); // Move left handle by 50px
  await camerasMenu.adjustRightHandle(-30); // Move right handle by 30px

  // Validate the slider values
  const leftValue = await camerasMenu.getLeftHandleValue();
  const rightValue = await camerasMenu.getRightHandleValue();
  console.log(`Left Handle Value: ${leftValue}, Right Handle Value: ${rightValue}`);
}))

test('Verify the product filter dropdown displays the proper options', runTest(async() => {
  expect(await camerasMenu.productFilterDropdown('15')).toBe(true);
  expect(await camerasMenu.productFilterDropdown('25')).toBe(true);
  expect(await camerasMenu.productFilterDropdown('50')).toBe(true);
  expect(await camerasMenu.productFilterDropdown('75')).toBe(true);
  expect(await camerasMenu.productFilterDropdown('100')).toBe(true);
}))

test('Verify all the correct options are displayed in the sort by dropdown', runTest(async() => {
  expect(await camerasMenu.sortByFilterDropdown("Default")).toBe(true);
  expect(await camerasMenu.sortByFilterDropdown('Best Sellers')).toBe(true);
  expect(await camerasMenu.sortByFilterDropdown('Popular')).toBe(true);
  expect(await camerasMenu.sortByFilterDropdown('Name (A - Z)')).toBe(true);
  expect(await camerasMenu.sortByFilterDropdown('Name (Z - A)')).toBe(true);
  expect(await camerasMenu.sortByFilterDropdown('Price (Low > High)')).toBe(true);
  expect(await camerasMenu.sortByFilterDropdown('Price (High > Low)')).toBe(true);
  expect(await camerasMenu.sortByFilterDropdown('Rating (Lowest)')).toBe(true);
  expect(await camerasMenu.sortByFilterDropdown('Model (A - Z)')).toBe(true);
  expect(await camerasMenu.sortByFilterDropdown('Model (Z - A)')).toBe(true);
}))

test('Verify the rest of the headers are displayed in the sidebar', runTest(async() => {
  expect(await camerasMenu.sidebarHeadersDisplayed('Manufacturer')).toBe(true);
  expect(await camerasMenu.sidebarHeadersDisplayed('Color')).toBe(true);
  expect(await camerasMenu.sidebarHeadersDisplayed('Size')).toBe(true);
}))

test('Verify an item can be searched via the search field', runTest(async() => {
  await camerasMenu.sendKeysToSearch('Palm');
  await camerasMenu.pressEnterKeyOnSearchField(); // Press Enter
}))

test('Verify all manufacturers are displayed in the sidebar', runTest(async({page}) => {
  await camerasMenu.clickManufacturers(page, 'Apple');
  await expect(page).toHaveURL(baseURLAppleProductsPage);

  // Click and verify Canon products page
  //await camerasMenu.clickManufacturers('Canon');
  //await expect(page).toHaveURL(baseURLCanonProductsPage);

  // Click and verify Hewlett-Packard products page
  //await camerasMenu.clickManufacturers('Hewlett-Packard');
  //await expect(page).toHaveURL(baseURLHewlettPackardProductsPage);
}))

test('Verify all colors can be selected from the color picker', runTest(async({}) => {
  const colors = ['Blue', 'Pink', 'Black', 'Orange', 'Red', 'Brown', 'Green', 'Yellow'];

  for (const color of colors) {
    await camerasMenu.selectColor(color);
  }
  
}))

test('Verify all types of availability can be checked', runTest(async({}) => {
  const availabilities = ['In stock', 'Out Of Stock', '2-3 Days', 'Pre-Order'];

  for (const availability of availabilities) {
    await camerasMenu.selectAvailability(availability);
  }
  
}))