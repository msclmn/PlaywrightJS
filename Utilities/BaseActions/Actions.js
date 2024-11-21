const { chromium } = require('playwright');

class Actions {
    constructor() 
    {
        this.browser = null;
        this.page = null;
        this.context = null;
    }

    async launchBrowser(headless = true) 
    {
        this.browser = await chromium.launch({ headless });
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage();
    }

    async closeBrowser() 
    {
        if (this.browser) await this.browser.close();
    }

    async navigateTo(url) 
    {
        try {
            await this.page.goto(url, { waitUntil: 'load' });
            return true;
        } catch (error) {
            console.error(`Navigation to ${url} failed:`, error);
            return false;
        }
    }

    async getTitle() 
    {
        const title = await this.page.title()
        return title;
    }
    
    async click(selector)
    {
        const click = await this.page.click(selector);
        return click;
    }
    
    async sendKeys(selector, text)
    {
        const sendKeys = await this.page.fill(selector, text);
        return sendKeys;
    }
    
    async selectOption(selector, value)
    {
        const selectOption = await this.page.selectOption(selector, value);
        return selectOption;
    }
    
    async check(selector)
    {
        const check = await this.page.check(selector);
        return check;
    }
    
    async uncheck(selector)
    {
        const uncheck = await this.page.uncheck(selector);
        return uncheck;
    }
    
    async waitForSelector(selector, waitTime = 30000)
    {
        const waitForSelector = await this.page.waitForSelector(selector, { waitTime });
        return waitForSelector;
    }

    async getText(selector) {
        const text = await this.page.textContent(selector);
        return text;
    }

    async getAttribute(selector, attribute) {
        const attributeValue = await this.page.getAttribute(selector, attribute);
        return attributeValue;
    }

    async isVisible(selector) {
        const visible = await this.page.isVisible(selector);
        return visible;
    }

    async isEnabled(selector) {
        const enabled = await this.page.isEnabled(selector);
        return enabled;
    }

    async takeScreenshot(path) {
        const screenshot = await this.page.screenshot({ path });
        return screenshot;
    }

    async dragAndDrop(sourceSelector, targetSelector) {
        const dragAndDrop = await this.page.dragAndDrop(sourceSelector, targetSelector);
        return dragAndDrop;
    }

    async hover(selector) {
        const hover = await this.page.hover(selector);
        return hover;
    }

    async waitForTimeout(waitTime) {
        const timeoutWait = await this.page.waitForTimeout(waitTime);
        return timeoutWait;
    }

    async pressKey(selector, key) {
        const press = await this.page.press(selector, key);
        return press;
    }

    async reloadPage() {
        const reload = await this.page.reload();
        return reload;
    }

    async goBack() {
        const back = await this.page.goBack();
        return back;
    }

    async goForward() {
        const forward = await this.page.goForward();
        return forward;
    }

    async setViewportSize(width, height) {
        const viewport = await this.page.setViewportSize({ width, height });
        return viewport;
    }

    async executeScript(script) {
        const scriptResult = await this.page.evaluate(script);
        return scriptResult;
    }


}

// Helper wrapper to automatically resolve async methods
function wrapAsyncMethods(actionsInstance) {
    return new Proxy(actionsInstance, {
        get(target, prop) {
            const original = target[prop];
            if (typeof original === 'function') {
                return (...args) => {
                    const result = original.apply(target, args);
                    // Automatically resolve the promise and return its value
                    return result instanceof Promise ? result.then((res) => res) : result;
                };
            }
            return original;
        },
    });
}


module.exports = { Actions, wrapAsyncMethods };
