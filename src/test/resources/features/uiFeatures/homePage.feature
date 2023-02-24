@run
Feature: Home Page elements validation
Background:
  Given user logged in to SwabLabs home page

  Scenario: Validation items on SwabLabs homePage

    Then user clicks on SwabLab product's image
    And add the item to shopping cart by clicking on Add To Cart button
    Then number of items in the cart should appear next to the cart icon