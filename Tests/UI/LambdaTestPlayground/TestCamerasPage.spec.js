const { test, expect } = require('@playwright/test');
const { baseURLCamerasPage } = require('../../../playwright.config');
const { Cameras } = require('../../../../PlaywrightJS/Pages/LambdaTestPlayground/CamerasPage');
const { runTest } = require('../../SetupTest');

let camerasMenu;
let goToPage;

test.describe.configure({mode:'parallel'});

test.beforeEach(async ({ page }) => { 
  goToPage = await page.goto(baseURLCamerasPage); 
  camerasMenu = new Cameras(page); 
});

test('@Functional Verify a price range can be selected from the fields', runTest(async() => {
  // Fill the minimum price field and verify
  await camerasMenu.sendKeysPriceField('min', 100);
  const minPriceValue = await camerasMenu.getPriceFieldValue('min');
  expect(minPriceValue).toBe('100');
  
  // Fill the maximum price field and verify
  await camerasMenu.sendKeysPriceField('max', 500);
  const maxPriceValue = await camerasMenu.getPriceFieldValue('max');
  expect(maxPriceValue).toBe('500');
}))

test('@Functional Verify the price slider is functional', runTest(async() =>{
  await camerasMenu.adjustLeftHandle(50); // Move left handle by 50px
  await camerasMenu.adjustRightHandle(-30); // Move right handle by 30px

  // Validate the slider values
  const leftValue = await camerasMenu.getLeftHandleValue();
  const rightValue = await camerasMenu.getRightHandleValue();
  console.log(`Left Handle Value: ${leftValue}, Right Handle Value: ${rightValue}`);
}))

test('@UI Verify the product filter dropdown displays the proper options', runTest(async() => {
  const options = ['15', '25', '50', '75', '100'];
  for (const option of options) {
    expect(await camerasMenu.productFilterDropdown(option)).toBe(true);
  }
}))

test('@UI Verify all the correct options are displayed in the sort by dropdown', runTest(async() => {
  const options = [
    'Default', 'Best Sellers', 'Popular', 'Name (A - Z)', 'Name (Z - A)',
    'Price (Low > High)', 'Price (High > Low)', 'Rating (Lowest)', 'Model (A - Z)', 'Model (Z - A)'
  ];
  for (const option of options) {
    expect(await camerasMenu.sortByFilterDropdown(option)).toBe(true);
  }
}))

test('@UI Verify the rest of the headers are displayed in the sidebar', runTest(async (page) => {
  let isVisible = await camerasMenu.sidebarHeadersDisplayed('Manufacturer');
  expect(isVisible).toBe(true, 'Manufacturer header should be visible');

  isVisible = await camerasMenu.sidebarHeadersDisplayed('Color');
  expect(isVisible).toBe(true, 'Color header should be visible');

  isVisible = await camerasMenu.sidebarHeadersDisplayed('Size');
  expect(isVisible).toBe(true, 'Size header should be visible');
}));


test('@Functional Verify an item can be searched via the search field', runTest(async() => {
  await camerasMenu.sendKeysToSearch('Palm');
  await camerasMenu.pressEnterKeyOnSearchField(); // Press Enter
  expect(await camerasMenu.isCurrentURLPalmSearch()).toBe(true);
}))

test('@UI Verify all manufacturers are displayed in the sidebar', runTest(async() => {
  await camerasMenu.manufacturersDisplayed('Apple');
  await camerasMenu.manufacturersDisplayed('Canon');
  await camerasMenu.manufacturersDisplayed('Hewlett-Packard');
  await camerasMenu.manufacturersDisplayed('HTC');
  await camerasMenu.manufacturersDisplayed('Palm');
  await camerasMenu.manufacturersDisplayed('Sony');
}))

test('@Functional Verify all colors can be selected from the color picker', runTest(async({}) => {
  const colors = ['Blue', 'Pink', 'Black', 'Orange', 'Red', 'Brown', 'Green', 'Yellow'];

  for (const color of colors) {
    await camerasMenu.selectColor(color);
  }
  
}))

test('@Functional Verify all types of availability can be checked', runTest(async({}) => {
  const availabilities = ['In stock', 'Out Of Stock', '2-3 Days', 'Pre-Order'];

  for (const availability of availabilities) {
    await camerasMenu.selectAvailability(availability);
  }
  
}))

test('@UI Verify the different sizes are displayed in the sidebar', runTest(async() => {
  expect(await camerasMenu.sizeAvailable('Large')).toBe(true);
  expect(await camerasMenu.sizeAvailable('Medium')).toBe(true);
  expect(await camerasMenu.sizeAvailable('Small')).toBe(true);
  expect(await camerasMenu.sizeAvailable('XLarge')).toBe(true);
  expect(await camerasMenu.sizeAvailable('XXLarge')).toBe(true);
}))

test('@UI Verify the product action carousel is present on the page', runTest(async() => {
  expect(await camerasMenu.productActionCarouselVisible()).toBe(true);
}))

test('@Functional Verify an item can be added via the product action carousel ', runTest(async() => {
  await camerasMenu.hoverActionCarousel();
  await camerasMenu.clickActionAddToCart();
}))