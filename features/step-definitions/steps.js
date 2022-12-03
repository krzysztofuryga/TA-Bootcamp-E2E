const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("Open the home page", async () => {
    await browser.url("https://www.newegg.com");
});

// When("Promo banners appears", async () => {
//     const banner = await $("#modal-Website > div.modal-dialog.modal-dialog-centered > div");
//     await expect(banner).toBeExisting();
// })

// Then("Close the promo banner", async () => {
//     await $("#modal-Website > div.modal-dialog.modal-dialog-centered > div > button").click();
// })

//First scenario

When("Enter the word {word} in the search bar", async(windows) => {
    await $('#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex > form > div > div.header2021-search-box.auto-flex > input[type=search]').setValue(windows);
})

Then("Click the search button", async() => {
    await $('#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-search.auto-flex > form > div > div.header2021-search-button > button').click();
})

Then("I see at least one item", async() => {
    const itemList = await $("#app > div.page-content > section > div > div > div.row-body > div:nth-child(1) > div > div > div.row-body > div.row-body-inner > div.list-wrap");
    await expect(itemList).toBeExisting()
})

//Second scenario

When("I click the Today's Best Deals button", async() => {
    await $("#trendingBanner_720202").click()
})

Then("I see Today's Best Deals tab", async() => {
    await expect(browser).toHaveUrlContaining("todays-deals")
})

When("I click on the Internet shop logo", async() => {
    await $("#app > header > div.page-content-inner > div:nth-child(1) > div.section-left.auto-flex > div.header2021-logo > a").click()
})

Then("I see the home page", async() => {
    await expect(browser).toHaveUrl("https://www.newegg.com/")
})