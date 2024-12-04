const { chromium } = require('playwright');

class Actions {
    constructor() {
        this.browser = null;
        this.page = null;
        this.context = null;
    }

    async launchBrowser(headless = true) {
        try 
        {
            this.browser = await chromium.launch({ headless });
            this.context = await this.browser.newContext();
            this.page = await this.context.newPage();
            return true;
        } 
        catch (error) 
        {
            console.error('Failed to launch browser:', error);
            return false;
        }
    }

    async closeBrowser() {
        try 
        {
            if (this.browser) await this.browser.close();
            return true;
        } 
        catch (error) 
        {
            console.error('Failed to close browser:', error);
            return false;
        }
    }

    async navigateTo(url) {
        try 
        {
            await this.page.goto(url, { waitUntil: 'load' });
            return true;
        } 
        catch (error) 
        {
            console.error(`Navigation to ${url} failed:`, error);
            return false;
        }
    }

    async getTitle() {
        try 
        {
            return await this.page.title();
        } 
        catch (error) 
        {
            console.error('Failed to get title:', error);
            return false;
        }
    }

    async click(selector) {
        try 
        {
            await this.page.click(selector);
            return true;
        } 
        catch (error) 
        {
            console.error(`Failed to click on selector ${selector}:`, error);
            return false;
        }
    }

    async sendKeys(selector, text) {
        try 
        {
            await this.page.fill(selector, text);
            return true;
        } catch (error) 
        {
            console.error(`Failed to send keys to ${selector}:`, error);
            return false;
        }
    }

    async selectOption(selector, value) {
        try 
        {
            await this.page.selectOption(selector, value);
            return true;
        } 
        catch (error) 
        {
            console.error(`Failed to select option ${value} in ${selector}:`, error);
            return false;
        }
    }

    async check(selector) {
        try 
        {
            await this.page.check(selector);
            return true;
        } 
        catch (error) 
        {
            console.error(`Failed to check ${selector}:`, error);
            return false;
        }
    }

    async uncheck(selector) {
        try 
        {
            await this.page.uncheck(selector);
            return true;
        } 
        catch (error) 
        {
            console.error(`Failed to uncheck ${selector}:`, error);
            return false;
        }
    }

    async waitForSelector(selector, waitTime = 30000) {
        try 
        {
            await this.page.waitForSelector(selector, { timeout: waitTime });
            return true;
        } 
        catch (error) 
        {
            console.error(`Failed to wait for selector ${selector}:`, error);
            return false;
        }
    }

    async getText(selector) {
        try 
        {
            return await this.page.textContent(selector);
        } 
        catch (error) 
        {
            console.error(`Failed to get text of ${selector}:`, error);
            return false;
        }
    }

    async getValue(selector) {
      try 
      {
          return await this.page.inputValue(selector);
      } 
      catch (error) 
      {
          console.error(`Failed to get value of ${selector}:`, error);
          return false;
      }
  }

    async getAttribute(selector, attribute) {
        try 
        {
            return await this.page.getAttribute(selector, attribute);
        } 
        catch (error) 
        {
            console.error(`Failed to get attribute ${attribute} of ${selector}:`, error);
            return false;
        }
    }

    async isVisible(selector) {
        try 
        {
            await this.page.isVisible(selector);
            return true;
        } 
        catch (error) 
        {
            console.error(`Failed to check visibility of ${selector}:`, error);
            return false;
        }
    }

    async isNotVisible(selector, timeout = 30000) { 
        try 
        { 
            await this.page.waitForSelector(selector, { state: 'hidden', timeout }); 
            return true; 
        } 
        catch (error) 
        { 
            console.error(`Failed to confirm ${selector} is not visible:`, error); 
            return false; 
        } 
    }

    async isEnabled(selector) {
        try 
        {
            return await this.page.isEnabled(selector);
        } 
        catch (error) 
        {
            console.error(`Failed to check enabled state of ${selector}:`, error);
            return false;
        }
    }

    async takeScreenshot(path) {
        try 
        {
            await this.page.screenshot({ path });
            return true;
        } 
        catch (error) 
        {
            console.error(`Failed to take screenshot:`, error);
            return false;
        }
    }

    async dragAndDrop(sourceSelector, targetSelector) {
        try 
        {
            await this.page.dragAndDrop(sourceSelector, targetSelector);
            return true;
        } 
        catch (error) 
        {
            console.error(`Failed to drag and drop from ${sourceSelector} to ${targetSelector}:`, error);
            return false;
        }
    }

    async hover(selector) {
        try 
        {
            await this.page.hover(selector);
            return true;
        } 
        catch (error) 
        {
            console.error(`Failed to hover over ${selector}:`, error);
            return false;
        }
    }

    async waitForTimeout(waitTime) {
        try 
        {
            await this.page.waitForTimeout(waitTime);
            return true;
        } 
        catch (error) 
        {
            console.error(`Failed to wait for timeout of ${waitTime}ms:`, error);
            return false;
        }
    }

    async pressKey(selector, key) {
        try 
        {
            await this.page.press(selector, key);
            return true;
        } 
        catch (error) 
        {
            console.error(`Failed to press key ${key} on ${selector}:`, error);
            return false;
        }
    }

    async reloadPage() {
        try 
        {
            await this.page.reload();
            return true;
        } 
        catch (error) 
        {
            console.error(`Failed to reload page:`, error);
            return false;
        }
    }

    async goBack() {
        try 
        {
            await this.page.goBack();
            return true;
        } 
        catch (error) 
        {
            console.error(`Failed to go back:`, error);
            return false;
        }
    }

    async goForward() {
        try 
        {
            await this.page.goForward();
            return true;
        } 
        catch (error) 
        {
            console.error(`Failed to go forward:`, error);
            return false;
        }
    }

    async setViewportSize(width, height) {
        const viewport = await this.page.setViewportSize({ width, height });
        return viewport;
    }

    async executeScript(script) {
        try 
        {
            return await this.page.evaluate(script);
        } 
        catch (error) 
        {
            console.error(`Failed to execute script:`, error);
            return false;
        }
    }
}

// Helper wrapper to automatically resolve async methods
function wrapAsyncMethods(actionsInstance) 
{
    return new Proxy(actionsInstance, 
        {
        get(target, prop) 
        {
            const original = target[prop];
            if (typeof original === 'function') 
            {
                return (...args) => 
                {
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