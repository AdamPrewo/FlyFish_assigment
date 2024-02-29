Feature: Pet store, adding a pet 

Scenario: Pet creation
    Given user want to create a pet
    When they add the pet to the store
    Then pet is created
    And added to the store
