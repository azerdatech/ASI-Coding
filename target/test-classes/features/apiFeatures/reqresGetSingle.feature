Feature: Reqres Get Single request


  Scenario: API Single User execution
    Given User gets single from reqres API
    Then Validate if status code is 200
