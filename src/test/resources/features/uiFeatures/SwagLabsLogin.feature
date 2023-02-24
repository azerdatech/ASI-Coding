@run
Feature: SwagLabsLogin with valid and invalid credentials
  Background:
    Given user lands on SwagLabs login page

  Scenario Outline: Positive and Negative Login scenario execution

    When User enters "<username>" username
    And User enters "<pwd>" pwd
    And user click login button
    Then if user entered correct credentials, user should be able to land on home page
    Then if user entered wrong credentials, user should be able to see "<message>" message
    Examples:
    |username                |pwd            |message                                                     |
    |standard_user           |  secret_sauce |                                                            |
    |locked_out_user         |  secret_sauce | Epic sadface: Sorry, this user has been locked out.                       |
    |problem_user            |  secret_sauce |                                                            |
    |performance_glitch_user |  secret_sauce |                                                            |
    |performanceglitchuser   |  secret_sauce | Epic sadface: Username and password do not match any user in this service|
    |performance_glitch_user |  secret_sauc  | Epic sadface: Username and password do not match any user in this service|
    |                        |  secret_sauce | Epic sadface: Username is required                                       |
    | standard_user          |               |  Epic sadface: Password is required                                      |
    |                        |               |  Epic sadface: Username is required                                      |


