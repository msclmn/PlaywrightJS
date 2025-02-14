const { test, expect } = require('@playwright/test');
const { baseURLSpecialPage } = require('../../../playwright.config');
const { SpecialMenu } = require('../../../../PlaywrightJS/Pages/LambdaTestPlayground/SpecialsPage');
const { runTest } = require('../../SetupTest');

let specialMenu;
let goToPage;

test.beforeEach(async ({ page }) => { 
  goToPage = await page.goto(`${baseURLSpecialPage}`); 
  specialMenu = new SpecialMenu(page); });

test('@UI Verify the primary headers are displayed on the Special page', runTest(async () => {

  // Headers on sidebar left side
  let isVisible = await specialMenu.isSpecialOffersHeaderVisible('Filter');
  expect(isVisible).toBe(true, 'Filter should be visible');
  isVisible = await specialMenu.allCollapsingArrowsVisible('Price');
  expect(isVisible).toBe(true, 'Price should be visible');
  isVisible = await specialMenu.allsidebarHeadersDisplayed('Search');
  expect(isVisible).toBe(true, 'Search should be visible');
  isVisible = await specialMenu.allsidebarHeadersDisplayed('Availability');
  expect(isVisible).toBe(true, 'Availability should be visible');
  isVisible = await specialMenu.allsidebarHeadersDisplayed('Discount');
  expect(isVisible).toBe(true, 'Discount should be visible');
  isVisible = await specialMenu.allsidebarHeadersDisplayed('Rating');
  expect(isVisible).toBe(true, 'Rating should be visible');
  isVisible = await specialMenu.allsidebarHeadersDisplayed('Desktops');
  expect(isVisible).toBe(true, 'Desktops should be visible');
  isVisible = await specialMenu.allsidebarHeadersDisplayed('Laptops');
  expect(isVisible).toBe(true, 'Laptops should be visible');
  isVisible = await specialMenu.allsidebarHeadersDisplayed('Components');
  expect(isVisible).toBe(true, 'Components should be visible');
  isVisible = await specialMenu.allsidebarHeadersDisplayed('Tablets');
  expect(isVisible).toBe(true, 'Tablets should be visible');
  isVisible = await specialMenu.allsidebarHeadersDisplayed('Software');
  expect(isVisible).toBe(true, 'Software should be visible');
  isVisible = await specialMenu.allsidebarHeadersDisplayed('Phones & PDAs');
  expect(isVisible).toBe(true, 'Phones & PDAs should be visible');
  isVisible = await specialMenu.allsidebarHeadersDisplayed('Cameras');
  expect(isVisible).toBe(true, 'Cameras should be visible');
  isVisible = await specialMenu.allsidebarHeadersDisplayed('MP3 Players');
  expect(isVisible).toBe(true, 'MP3 Players should be visible');
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