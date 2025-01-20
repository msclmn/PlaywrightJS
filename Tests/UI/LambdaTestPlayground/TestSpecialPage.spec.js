const { test, expect } = require('@playwright/test');
const { baseURLSpecialPage } = require('../../../playwright.config');
const { SpecialMenu } = require('../../../../PlaywrightJS/Pages/LambdaTestPlayground/SpecialsPage');
const { runTest } = require('../../SetupTest');

let specialMenu;
let goToPage;

test.describe.configure({mode:'parallel'});

test.beforeEach(async ({ page }) => { 
  goToPage = await page.goto(`${baseURLSpecialPage}`); 
  specialMenu = new SpecialMenu(page); });

test('@UI Verify the primary headers are displayed on the Special page', runTest(async () => {

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