const { Given, When, Then } = require("@cucumber/cucumber");
// import expect for assertion
const { expect } = require("@playwright/test");
//launch url
const url = "http://localhost:3000";

//define selectors
const homepageElement = ".searchApp";
const searchInput = ".search-input";
const searchButton = ".search-button";

Given("that I am on the home page", async function () {
        // Write code here that turns the phrase above into concrete actions
        // navigate to the app
        await page.goto(url);
        // locate the element in the webUI
        const locator = await page.locator(homepageElement);
        // assert that it's visible
        await expect(locator).toBeVisible();
});

When("I enter the name of the restaurant in the search bar", async function () {
        // Write code here that turns the phrase above into concrete actions
        await page.fill(searchInput, item);
        // click the button
        await page.click(searchButton);
});

Then("I should see the restaurant that I searched for", async function () {
        // Write code here that turns the phrase above into concrete actions
        const text = await page.innerText(todoItem);
        // assert that its name is similar to what we provided
        await expect(text).toBe(item);
});
