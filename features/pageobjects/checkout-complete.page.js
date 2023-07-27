

const BasePage = require('./base.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckOutCompletePage extends BasePage {
    /**
    * Returns a selector for an element which is local to the Home Page
    * @param element User-friendly name of the element we would like to identify (e.g `Login Button`)
    * @example Step: When I click the "Login Button"
    */
    getSelector(element,identifier,identifierValue){
        switch(element){
            case(`Thank you for your order!`): return `//*[@id = "checkout_complete_container"]//*[starts-with(.,"Thank you")]`;
            default:
                throw `${CheckOutCompletePage.name}.${this.getSelector.name}: element ("${element}") was not configured`;
        }
    }


}

module.exports = new CheckOutCompletePage();
