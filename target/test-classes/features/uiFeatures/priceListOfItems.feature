@run
Feature: PriceList of all items

  Scenario: Retrieving price list of items
    Given user logged in to SwabLabs home page
    Then select (price Low to High) in filter section
    And verifies prices for all items