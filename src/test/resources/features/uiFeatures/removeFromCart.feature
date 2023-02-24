@run
Feature: Remove item from Cart validation

  Scenario: User removes an item from the cart
    Given user logged in to SwabLabs home page
    Then user clicks on SwabLab product's image
    And add the item to shopping cart by clicking on Add To Cart button
    And user removes an item by clicking on remove button
