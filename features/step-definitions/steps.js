const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const CartPage = require('../pageobjects/cart.page');
const CheckOutStepOnePage = require('../pageobjects/checkout-step-one.page');
const CheckOutStepTwoPage = require('../pageobjects/checkout-step-two.page');
const CheckOutCompletePage = require('../pageobjects/checkout-complete.page');


const pages = {
    "": LoginPage,
    "inventory" : InventoryPage,
    "cart" : CartPage,
    "checkout-step-one" : CheckOutStepOnePage,
    "checkout-step-two" : CheckOutStepTwoPage,
    "checkout-complete" : CheckOutCompletePage

}
// I go to the "Login Page" URL
When("I go to the {string} URL", async (page) => {
    await LoginPage.goToPageUrl(page)
});

When("I set the {string} to {string}", async (element, elementValue) => {
    let page = await LoginPage.getCurrentPage();
    await LoginPage.setElementValue(element, pages[page].getSelector(element), elementValue);
});
When("I click the {string}", async (element) => {
    let page = await LoginPage.getCurrentPage();
    await LoginPage.clickElement(element, pages[page].getSelector(element));
});
When("I click {string} where the {string} is {string}", async (element,identifier,identifierValue) => {
    let page = await LoginPage.getCurrentPage();
    await LoginPage.clickElement(element, pages[page].getSelector(element,identifier,identifierValue));
});
Then("The {string} message is {string}", async (element,state) => {
    let page = await LoginPage.getCurrentPage();
    await LoginPage.isElementState(element, pages[page].getSelector(element),state)
});


