Feature: Bootcamp E2E

    Background: Opening page and closing banner
        Given Open the home page
    # When Promo banner appears
    # Then Close the promo banner

    Scenario: Search bar
        When Enter the word Windows in the search bar
        Then Click the search button
        Then I see at least one item

    Scenario: Internet shop logo button
        When I click the Today's Best Deals button
        Then I see Today's Best Deals tab
        When I click on the Internet shop logo
        Then I see the home page