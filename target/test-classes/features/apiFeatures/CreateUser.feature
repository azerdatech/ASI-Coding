@run
Feature: Create User on reqres.in

  Scenario: Create User
    When user makes a POST call on reqres.in
    Then user should receive 201 response status code


