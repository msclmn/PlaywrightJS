const { chromium } = require('playwright');

class Actions {
    constructor() {
        this.browser = null;
        this.page = null;
        this.context = null;
    }

    async launchBrowser(headless = true) {
        this.browser = await chromium.launch({ headless });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    async closeBrowser() {
        await this.browser.close();
    }

    async navigateTo(url) {
        await this.page.goto(url);
    }

    async click(selector) {
        await this.page.click(selector);
    }

    async type(selector, text) {
        await this.page.fill(selector, text);
    }

    async selectOption(selector, value) {
        await this.page.selectOption(selector, value);
    }

    async check(selector) {
        await this.page.check(selector);
    }

    async uncheck(selector) {
        await this.page.uncheck(selector);
    }

    async waitForSelector(selector, timeout = 30000) {
        await this.page.waitForSelector(selector, { timeout });
    }
    
    async getTitle(){
        return await this.page.title();
    }

    async getText(selector) {
        return await this.page.textContent(selector);
    }

    async getAttribute(selector, attribute) {
        return await this.page.getAttribute(selector, attribute);
    }

    async isVisible(selector) {
        return await this.page.isVisible(selector);
    }

    async isEnabled(selector) {
        return await this.page.isEnabled(selector);
    }

    async takeScreenshot(path) {
        await this.page.screenshot({ path });
    }

    async dragAndDrop(sourceSelector, targetSelector) {
        await this.page.dragAndDrop(sourceSelector, targetSelector);
    }

    async hover(selector) {
        await this.page.hover(selector);
    }

    async waitForTimeout(timeout) {
        await this.page.waitForTimeout(timeout);
    }

    async pressKey(selector, key) {
        await this.page.press(selector, key);
    }

    async reloadPage() {
        await this.page.reload();
    }

    async goBack() {
        await this.page.goBack();
    }

    async goForward() {
        await this.page.goForward();
    }

    async setViewportSize(width, height) {
        await this.page.setViewportSize({ width, height });
    }

    async executeScript(script) {
        return await this.page.evaluate(script);
    }
}

module.exports = Actions;
