

const BasePage = require('./base.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckOutStepOnePage extends BasePage {
    /**
    * Returns a selector for an element which is local to the Home Page
    * @param element User-friendly name of the element we would like to identify (e.g `Login Button`)
    * @example Step: When I click the "Login Button"
    */
    getSelector(element,identifier,identifierValue){
        switch(element){
            case(`First Name Field`): return `#first-name`;
            case(`Last Name Field`): return `#last-name`;
            case(`Zip/Postal Code Field`): return `#postal-code`;
            case(`Continue Button`): return `#continue`;
            default:
                throw `${CheckOutStepOnePage.name}.${this.getSelector.name}: element ("${element}") was not configured`;
        }
    }


}

module.exports = new CheckOutStepOnePage();
