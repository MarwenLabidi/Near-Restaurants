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
        const locator = await page.locator(homepageElement);
        // assert that it's visible
        await expect(locator).toBeVisible();
});

When("I enter the name of the restaurant in the search bar", async function () {
        await page.getByPlaceholder("Search by City or Town").click();
        await page.getByPlaceholder("Search by City or Town").fill("tuns");
});

Then("I should see the restaurant that I searched for", async function () {
        await page
                .getByText(
                        "The Three Tuns, Market Square, Uxbridge, London, Greater London, England, UB8 1J"
                )
                .click();
        await page.getByRole("button", { name: "submit button" }).click();
        await page.locator(".leaflet-pane > img:nth-child(2)").click();
        await page.getByRole("button", { name: "show details" }).click();
});
