

const BasePage = require('./base.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage extends BasePage {
    /**
    * Returns a selector for an element which is local to the Home Page
    * @param element User-friendly name of the element we would like to identify (e.g `Login Button`)
    * @example Step: When I click the "Login Button"
    */
    getSelector(element,identifier,identifierValue){
        switch(element){
            case(`Sort Dropdown`): return `.product_sort_container`;
            case(`Shopping Cart Bedge`): return `.shopping_cart_badge`;
            case(`Dropdown Option`): 
                switch(identifier){
                    case ("Option"):
                        switch (identifierValue){
                            case (`Price (high to low)`) : return `//*[@value="hilo"]`;
                        } 
                }
            case(`Product Add to Cart Button`):
                switch(identifier){
                    case (`Product`):
                        switch (identifierValue){
                            case ("Most Expensive Product"): return `(//*[text() = "Add to cart"])[1]`;
                            case ("Cheapest Product") : return `(//*[text() = "Add to cart"])[5]`;
                        } 
                }
            case(`Login Button`): return `#login-button`;
            default:
                throw `${InventoryPage.name}.${this.getSelector.name}: element ("${element}") was not configured`;
        }
    }


}

module.exports = new InventoryPage();
