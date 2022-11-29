// to run the test :  pnpm test-e2e tests/features/search.feature       ─╯

const { Given, When, Then } = require("@cucumber/cucumber");
// import expect for assertion
const { expect } = require("@playwright/test");
//launch url
const url = "http://localhost:5173/";

//define selectors
const homepageElement = "#root";
const searchInput = ".inputTextField";
const autocompleteList = ".autoComplete";
const searchButton = ".buttonSubmit";
const city = "tunis";

Given("that I am on the home page", async function () {
        // Write code here that turns the phrase above into concrete actions
        // navigate to the app
        await page.goto(url);
        // allow location with playwrite
        // await page.context().overridePermissions(url, ["geolocation"]);
        // wait for the homepage to load
        // await page.waitForSelector(homepageElement);

        // locate the element in the webUI
        const locator = await page.locator(homepageElement);
        // assert that it's visible
        await expect(locator).toBeVisible();
});

When("I enter the name of the restaurant in the search bar", async function () {
        // Write code here that turns the phrase above into concrete actions
        await page.fill(searchInput, city);
        // click the button
        // await page.click(searchButton);
});

Then("I should see the restaurant that I searched for", async function () {
        // locate the element in the webUI
        const locator = await page.locator(autocompleteList);
        // assert that it's visible
        await expect(locator).toBeVisible();
});
