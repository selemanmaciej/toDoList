Feature: ToDo List
    As a user
    I want to manage items in the to do list

    Background:
        Given User launches "listUrl" page

    Scenario: Add items to the list
        When User adds following items to the list
            | item              |
            | "buy some cheese" |
            | "feed the cat"    |
        Then "buy some cheese" item is displayed
        And "feed the cat" item is displayed
        And There are 2 items on the list
        And "2 items left" "is" displayed

    Scenario: Toggle item on
        When User adds following items to the list
            | item              |
            | "buy some cheese" |
            | "feed the cat"    |
        And User toggles item 1
        Then Item 1 "is" toggled
        And Item 2 "is not" toggled

    Scenario: Delete item
        When User adds following items to the list
            | item              |
            | "buy some cheese" |
            | "feed the cat"    |
            | "water the plant" |
            | "call the bank"   |
        When User deletes item "water the plant"
        Then "water the plant" "is not" displayed