Feature:Search restaurant

              As a user I want to search for a restaurant so that I can find a restaurant that I want to eat at.

        Scenario:User search for a restaurant
            Given that I am on the home page
             When I enter the name of the restaurant in the search bar
             Then I should see the restaurant that I searched for
