Feature: Swag Labs Checkout Step One Page

  Scenario: Scenario name: User added a "Sauce Labs Backpack" to the cart and was on the "Cart Page"
    When I go to the "Login Page" URL
    And I set the "Username Field" to "standard_user"
    And I set the "Password Field" to "secret_sauce"
    And I click the "Login Button"
    And I click the "Sort Dropdown"
    And I click "Dropdown Option" where the "Option" is "Price (high to low)"
    And I click "Product Add to Cart Button" where the "Product" is "Most Expensive Product"
    And I click "Product Add to Cart Button" where the "Product" is "Cheapest Product"
    And I click the "Shopping Cart Bedge"
    And I click the "Checkout Button"
    And I set the "First Name Field" to "Ahmet"
    And I set the "Last Name Field" to "Alver"
    And I set the "Zip/Postal Code Field" to "EN4 8SQ"
    And I click the "Continue Button"
    And I click the "Finish Button"
    Then The "Thank you for your order!" message is "Displayed"
