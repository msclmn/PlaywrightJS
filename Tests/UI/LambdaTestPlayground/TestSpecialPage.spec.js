const { test, expect } = require('@playwright/test');
const { SpecialMenu } = require('../../../../PlaywrightJS/Pages/LambdaTestPlayground/SpecialsPage');
const { Cameras } = require('../../../../PlaywrightJS/Pages/LambdaTestPlayground/CamerasPage');
const { runTest } = require('../../SetupTest');

test.only('Verify the primary headers are displayed on the Special page', runTest(async ({ page }) => {

  const specialMenu = new SpecialMenu(page)
  const websiteLink = 'https://ecommerce-playground.lambdatest.io/';
  await page.goto(`${websiteLink}`);
  await specialMenu.clickSpecialTab();
  
  // Headers on sidebar left side
  expect(await specialMenu.isSpecialOffersHeaderVisible()).toBe(true);
  expect(await specialMenu.allsidebarHeadersDisplayed('Filter')).toBe(true);
  expect(await specialMenu.allsidebarHeadersDisplayed('Price')).toBe(true);
  expect(await specialMenu.allsidebarHeadersDisplayed('Search')).toBe(true);
  expect(await specialMenu.allsidebarHeadersDisplayed('Availability')).toBe(true);
  expect(await specialMenu.allsidebarHeadersDisplayed('Discount')).toBe(true);
  expect(await specialMenu.allsidebarHeadersDisplayed('Rating')).toBe(true);
  expect(await specialMenu.allsidebarHeadersDisplayed('Desktops')).toBe(true);
  expect(await specialMenu.allsidebarHeadersDisplayed('Laptops')).toBe(true);
  expect(await specialMenu.allsidebarHeadersDisplayed('Components')).toBe(true);
  expect(await specialMenu.allsidebarHeadersDisplayed('Tablets')).toBe(true);
  expect(await specialMenu.allsidebarHeadersDisplayed('Software')).toBe(true);
  expect(await specialMenu.allsidebarHeadersDisplayed('Phones & PDAs')).toBe(true);
  expect(await specialMenu.allsidebarHeadersDisplayed('Cameras')).toBe(true);
  expect(await specialMenu.allsidebarHeadersDisplayed('MP3 Players')).toBe(true);
  expect(await specialMenu.isMinimumPriceFieldVisible()).toBe(true);
  expect(await specialMenu.isMaximumPriceFieldVisible()).toBe(true);
  expect(await specialMenu.allCollapsingArrowsVisible()).toBe(true);

  // Other headers in middle of page
  expect(await specialMenu.isGridViewIconVisible()).toBeTruthy();
  expect(await specialMenu.isListViewIconVisible()).toBeTruthy();
  const productCompareLink = await specialMenu.isProductCompareLinkVisible();
  expect(productCompareLink).toBe(true);
  const copyrightText = await specialMenu.isCopyrightTextVisible();
  expect(copyrightText).toBe(true);
}));

  // Cameras Menu
test('Verify a price range can be selected from the fields', runTest(async({ page }) => {
  const camerasMenu = new Cameras(page)
  const websiteLink = 'https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33';
  await page.goto(`${websiteLink}`);

  // Fill the minimum price field and verify
  await camerasMenu.sendKeysPriceField('min', 100);
  const minPriceValue = await camerasMenu.getPriceFieldValue('min');
  expect(minPriceValue).toBe('100');
  
  // Fill the maximum price field and verify
  await camerasMenu.sendKeysPriceField('max', 500);
  const maxPriceValue = await camerasMenu.getPriceFieldValue('max');
  expect(maxPriceValue).toBe('500');
}))

test('Verify the product filter dropdown displays the proper options', runTest(async({ page }) => {
  const camerasMenu = new Cameras(page)
  const websiteLink = 'https://ecommerce-playground.lambdatest.io/index.php?route=product/category&path=33';
  await page.goto(`${websiteLink}`);

  expect(await camerasMenu.productFilterDropdown('15')).toBe(true);
  expect(await camerasMenu.productFilterDropdown('25')).toBe(true);
  expect(await camerasMenu.productFilterDropdown('50')).toBe(true);
  expect(await camerasMenu.productFilterDropdown('75')).toBe(true);
  expect(await camerasMenu.productFilterDropdown('100')).toBe(true);
}))