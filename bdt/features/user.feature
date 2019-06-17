@auth_server
Feature: User

  Manage user

  Scenario: test user feature
    Given we have auth server started
    When we get user list by the api
    Then we should get status 200 and no errors
