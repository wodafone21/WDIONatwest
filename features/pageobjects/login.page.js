

const BasePage = require('./base.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends BasePage {
    /**
    * Returns a selector for an element which is local to the Home Page
    * @param element User-friendly name of the element we would like to identify (e.g `Login Button`)
    * @example Step: When I click the "Login Button"
    */
    getSelector(element){
        switch(element){
            // case(`Swag Labs Logo`): return `//*[contains(@class, 'logo')]`;
            case(`Username Field`): return `#user-name`;
            case(`Password Field`): return `#password`;
            case(`Login Button`): return `#login-button`;
            default:
                throw `${LoginPage.name}.${this.getSelector.name}: element ("${element}") was not configured`;
        }
    }


}

module.exports = new LoginPage();
