const { test, expect } = require('@playwright/test');
const { baseURLCamerasPage } = require('../../../playwright.config');
const { Cameras } = require('../../../../PlaywrightJS/Pages/LambdaTestPlayground/CamerasPage');
const { Cart } = require('../../../../PlaywrightJS/Pages/LambdaTestPlayground/CartPage');
const { runTest } = require('../../SetupTest');

let camerasMenu;
let cartMenu;
let goToPage;

test.beforeEach(async ({ page }) => { 
  goToPage = await page.goto(baseURLCamerasPage); 
  camerasMenu = new Cameras(page);
  cartMenu = new Cart(page);
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
}));

test('@Functional Verify the price slider is functional', runTest(async() =>{
  await camerasMenu.adjustLeftHandle(50); // Move left handle by 50px
  await camerasMenu.adjustRightHandle(-30); // Move right handle by 30px

  // Validate the slider values
  const leftValue = await camerasMenu.getLeftHandleValue();
  const rightValue = await camerasMenu.getRightHandleValue();
  console.log(`Left Handle Value: ${leftValue}, Right Handle Value: ${rightValue}`);
}));

test('@UI Verify the product filter dropdown displays the proper options', runTest(async() => {
  const options = ['15', '25', '50', '75', '100'];
  for (const option of options) {
    expect(await camerasMenu.productFilterDropdown(option)).toBe(true);
  }
}));

test('@UI Verify all the correct options are displayed in the sort by dropdown', runTest(async() => {
  const options = [
    'Default', 'Best Sellers', 'Popular', 'Name (A - Z)', 'Name (Z - A)',
    'Price (Low > High)', 'Price (High > Low)', 'Rating (Lowest)', 'Model (A - Z)', 'Model (Z - A)'
  ];
  for (const option of options) {
    expect(await camerasMenu.sortByFilterDropdown(option)).toBe(true);
  }
}));

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
}));

test('@UI Verify all manufacturers are displayed in the sidebar', runTest(async() => {
  let isVisible = await camerasMenu.manufacturersDisplayed('Apple');
  expect(isVisible).toBe(true, 'Apple should be displayed');
  isVisible = await camerasMenu.manufacturersDisplayed('Canon');
  expect(isVisible).toBe(true, 'Canon should be displayed');
  isVisible = await camerasMenu.manufacturersDisplayed('Hewlett-Packard');
  expect(isVisible).toBe(true, 'Hewlett-Packard should be displayed');
  isVisible = await camerasMenu.manufacturersDisplayed('HTC');
  expect(isVisible).toBe(true, 'HTC should be displayed');
  isVisible = await camerasMenu.manufacturersDisplayed('Nikon');
  expect(isVisible).toBe(true, 'Nikon should be displayed');
  isVisible = await camerasMenu.manufacturersDisplayed('Palm');
  expect(isVisible).toBe(true, 'Palm should be displayed');
  isVisible = await camerasMenu.manufacturersDisplayed('Sony');
  expect(isVisible).toBe(true, 'Sony should be displayed');
}));

test('@Functional Verify all colors can be selected from the color picker', runTest(async({}) => {
  const colors = ['Blue', 'Pink', 'Black', 'Orange', 'Red', 'Brown', 'Green', 'Yellow'];

  for (const color of colors) {
    await camerasMenu.selectColor(color);
  }
  
}));

test('@Functional Verify all types of availability can be checked', runTest(async({}) => {
  const availabilities = ['In stock', 'Out Of Stock', '2-3 Days', 'Pre-Order'];

  for (const availability of availabilities) {
    await camerasMenu.selectAvailability(availability);
  }
  
}));

test('@UI Verify the different sizes are displayed in the sidebar', runTest(async() => {
  let isVisible = await camerasMenu.sizeAvailable('Large');
  expect(isVisible).toBe(true, 'Large should be displayed');
  isVisible = await camerasMenu.sizeAvailable('Medium');
  expect(isVisible).toBe(true, 'Medium should be displayed');
  isVisible = await camerasMenu.sizeAvailable('Small');
  expect(isVisible).toBe(true, 'Small should be displayed');
  isVisible = await camerasMenu.sizeAvailable('XLarge');
  expect(isVisible).toBe(true, 'XLarge should be displayed');
  isVisible = await camerasMenu.sizeAvailable('XXLarge');
  expect(isVisible).toBe(true, 'XXLarge should be displayed');
}));

test('@UI Verify the product action carousel is present on the page', runTest(async() => {
  expect(await camerasMenu.productActionCarouselVisible()).toBe(true);
}));

test('@UI Verify navigating via the left and right arrows for next and previous screen is functional', runTest(async () => {
  await camerasMenu.clickNextPage()
  expect(await camerasMenu.isNextPageDisplayed()).toBe(true);
  await camerasMenu.clickPreviousPage()
  expect(await camerasMenu.isPreviousPageDisplayed()).toBe(true);
}));

test('@UI Verify navigating via the left and right arrows for last and first page is functional', runTest(async () => {
	await camerasMenu.clickLastPage()
  expect(await camerasMenu.isLastPageDisplayed()).toBe(true);
  await camerasMenu.clickFirstPage()
  expect(await camerasMenu.isFirstPageDisplayed()).toBe(true);
}));

test('@UI Verify when clicking on the list view button the page is displayed accordingly', runTest(async () => {
  await camerasMenu.clickListView()
  expect(await camerasMenu.listViewPageDisplayed()).toBe(true);
}));

test('@Functional Verify an item can be added via the product action carousel', runTest(async() => {
  await camerasMenu.hoverActionCarousel1();
  await camerasMenu.clickActionAddToCart();

  // Wait for the buttons to appear before checking visibility
  await Promise.all([
    cartMenu.waitForViewCartBtn(),
    cartMenu.waitForCheckoutBtn()
  ]);

  const cartVisible = await cartMenu.viewCartVisibleBtn();
  const checkoutVisible = await cartMenu.checkoutVisibleBtn();
  expect(cartVisible).toBe(true); 
  expect(checkoutVisible).toBe(true);
}));

test('@Functional Verify an item can be added to the wishlist via the product action carousel', runTest(async() => {
  await camerasMenu.hoverActionCarousel1();
  await camerasMenu.clickActionWhishList();

  // Wait for the buttons to appear before checking visibility
  await Promise.all([
    cartMenu.waitForLoginBtn(),
    cartMenu.waitForRegisterBtn()
  ]);

  const loginVisible = await cartMenu.loginVisibleBtn();
  const registerVisible = await cartMenu.registerVisibleBtn();
  expect(loginVisible).toBe(true);
  expect(registerVisible).toBe(true);
}));

test('@Functional Verify the quickview modal appears via the product action carousel', runTest(async() => {
  await camerasMenu.hoverActionCarousel1();
  await camerasMenu.clickActionQuickViewItem1();
  await camerasMenu.waitForquickViewModal();
  expect(await camerasMenu.quickViewModalVisible()).toBe(true);
}));

test('@Functional Verify items can be compared via the product action carousel', runTest(async() => {
  await camerasMenu.hoverActionCarousel1();
  await camerasMenu.clickCompareItem1();
  await camerasMenu.hoverActionCarousel2();
  await camerasMenu.clickCompareItem2();

  // Wait for the buttons to appear before checking visibility
  await Promise.all([
    cartMenu.waitForCompareNotificationBtn(),
  ]);

  const compareNotificationVisible = await cartMenu.viewCompareNotificationVisibleBtn();
  expect(compareNotificationVisible).toBe(true);
}));

test('@UI Verify all the correct labels are displayed via the quickview modal from the product action carousel', runTest(async() => {
  await camerasMenu.hoverActionCarousel3();
  await camerasMenu.clickActionQuickViewItem3();
  await camerasMenu.waitForquickViewModal();
  let isVisible = await camerasMenu.quickViewModalLabels('Brand');
  expect(isVisible).toBe(true, 'Brand should be displayed');
  isVisible = await camerasMenu.quickViewModalLabels('Product Code');
  expect(isVisible).toBe(true, 'Product Code should be displayed');
  isVisible = await camerasMenu.quickViewModalLabels('Reward Points');
  expect(isVisible).toBe(true, 'Reward Points should be displayed');
  isVisible = await camerasMenu.quickViewModalLabels('Availability');
  expect(isVisible).toBe(true, 'Availability should be displayed');
}));

test('@UI Verify the Add To Cart and Buy Now buttons are displayed on the quickview modal', runTest(async() => {
  await camerasMenu.hoverActionCarousel3();
  await camerasMenu.clickActionQuickViewItem3();
  await camerasMenu.waitForquickViewModal();
  
  const { addToCartVisible, buyNowVisible } = await camerasMenu.mainBtnsVisible();
  expect(addToCartVisible).toBe(true);
  expect(buyNowVisible).toBe(true);
}));

test('@UI Verify - and + buttons are displayed on the quickview modal', runTest(async() => {
  await camerasMenu.hoverActionCarousel3();
  await camerasMenu.clickActionQuickViewItem3();
  await camerasMenu.waitForquickViewModal();
  
  const { minusBtnVisible, plusBtnVisible } = await camerasMenu.minusPlusBtnsVisible();
  expect(minusBtnVisible).toBe(true);
  expect(plusBtnVisible).toBe(true);
}));

test('@Functional Verify the quickview modal can be dismissed via the x button', runTest(async() => {
  await camerasMenu.hoverActionCarousel3();
  await camerasMenu.clickActionQuickViewItem3();
  await camerasMenu.waitForquickViewModal();
  await camerasMenu.clickXBtn();
  expect(await camerasMenu.quickViewModalVisible()).toBe(false);
}));

test('@Functional Verify an item can be added via the quickview modal', runTest(async() => {
  await camerasMenu.hoverActionCarousel8();
  await camerasMenu.clickActionQuickViewItem8();
  await camerasMenu.waitForquickViewModal();
  await camerasMenu.quickViewModalAddToCart();

  // Wait for the buttons to appear before checking visibility
  await Promise.all([
    cartMenu.waitForViewCartBtn(),
    cartMenu.waitForCheckoutBtn()
  ]);

  const cartVisible = await cartMenu.viewCartVisibleBtn();
  const checkoutVisible = await cartMenu.checkoutVisibleBtn();
  expect(cartVisible).toBe(true); 
  expect(checkoutVisible).toBe(true);
}));


// Verify an item can be added via the quickview modal