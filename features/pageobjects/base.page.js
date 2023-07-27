/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class BasePage {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    goToPageUrl(page){
        try{
            const baseUrl = `https://www.saucedemo.com`;
            switch (page){
                case(`Login Page`): return browser.url(`${baseUrl}/`);
                default:
                    throw `${BasePage.name}.${this.goToPageUrl.name}: page ("${page}") was not configured`;
            }
        }
        catch(error){
            throw `${BasePage.name}.${this.goToPageUrl.name}: ${error.message}`;
        }
    }

    /**
    * Gets current page URL with the Base URL not included
    * @example Step: Then the page URL is "cart"
    */
    async getCurrentPage(){
        try{
            const pageUrl = await browser.getUrl();
            let page = pageUrl.split(`.com/`).pop().split(`.html`).shift();
            console.log(page)
            return page;
        }
        catch(error){
            throw `${BasePage.name}.${this.getCurrentPage.name}: ${error.message}`;
        }
    }

    /**
    * Waits for an element to be clickable before clicking the element
    * @param element The element we want to click
    * @param selector The selector for the element we want to click
    * @example Step: When I click the "Checkout Button"
    */
    async clickElement(element, selector){
        try{
             await this.waitForElementAndScroll(selector, `Displayed`);
             await $(selector).click();
        }
        catch(error){
            throw `${BasePage.name}.${this.clickElement.name}: ${error.message.replace(selector, element)}`;
        }
    }
    // async clickDropdownOption(element, selector){
    //     try{
    //          await this.waitForElementAndScroll(selector, `Displayed`);
    //         $(selector).click();
    //         // await browser.pause(3000)
    //     }
    //     catch(error){
    //         throw `${BasePage.name}.${this.clickDropdownOption.name}: ${error.message.replace(selector, element)}`;
    //     }
    // }

    /**
    * Waits for an element to be clickable before setting the value of the element
    * @param element The element we want to set the value of
    * @param selector The selector for the element we want to set the value of
    * @param value The value we wish to set the element to
    * @example Step: When I set the "Last Name Field" to "Bloggs"
    */
    async setElementValue(element, selector, value){
        try{
            await this.waitForElementAndScroll(selector, `Clickable`);
            $(selector).setValue(value);
        }
        catch(error){
            throw `${BasePage.name}.${this.setElementValue.name}: ${error.message.replace(selector, element)}`;
        }
    }
    /**
    * Waits for an element to reach a certain state before scrolling it to the center of the page
    * @param selector The selector for the element we would like to wait for and scroll to the center
    * @param state The state we want the element to reach before scrolling
    */
    async waitForElementAndScroll(selector, state){
        await this.waitForElement(selector, state);
        if(!state.includes(`Not`)){
            await this.scrollToElement(selector);
        }
    }

    /**
    * Waits for an element to reach a defined state
    * @param selector The selector for the element we want to wait for to reach some state
    * @param state The state we wait for the element to reach
    */
    async waitForElement(selector, state){
        switch(state){
            case(`Clickable`): await $(selector).waitForClickable({ timeout: 2000 });
            break;
            case(`Displayed`): await $(selector).waitForDisplayed({ timeout: 2000 });
            break;
            case(`Not Clickable`): await browser.waitUntil(() => !$(selector).isClickable(), { timeout: 2000 });
            break;
            case(`Not Displayed`): await browser.waitUntil(() => !$(selector).isDisplayed(), { timeout: 2000 });
            break;
            default:
                throw `${BasePage.name}.${this.waitForElement.name}: ${state} was not configured`;
        }
    }

    /**
    * Scrolls the element to the center of the page
    * @param selector The selector for the element we want to scroll to the center
    */
    async scrollToElement(selector){
        await $(selector).scrollIntoView({
            behaviour: `instant`,
            block: `center`,
            inline: `center`
        });
    }
    /**
    * Returns true if an element is the provided state and false otherwise
    * @param element The element we want to verify if it is the provided state or not
    * @param selector The selector for the element we want to verify if it is the provided state or not
    * @param state The provided state we want to verify that the element is in
    * @example Step: Then the "Checkout Button" is displayed
    */
    async isElementState(element, selector, state){
        try{
            await this.waitForElementAndScroll(selector, state);
            const stateMethod = state.split(`Not `).pop();
            switch(stateMethod){
                case(`Clickable`): return await $(selector).isClickable();
                case(`Displayed`): return await $(selector).isDisplayed();
                default:
                    throw `${BasePage.name}.${this.isElementState.name}: state ("${state}") was not configured`;
            }
        }
        catch(error){
            throw `${BasePage.name}.${this.isElementState.name}: ${error.message.replace(selector, element)}`;
        }
    }
}
