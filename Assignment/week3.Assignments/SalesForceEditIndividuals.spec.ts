import test from '@playwright/test'

test("Edit Individuals",async ({page}) => {
    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("dilipkumar.rajendran@testleaf.com")
    await page.locator("#password").fill("TestLeaf@2025")
    await page.locator("#Login").click()
    await page.locator(".appLauncher.slds-context-bar__icon-action").click()
    await page.locator("//button[@aria-label='View All Applications']").click()
    await page.locator("//a[@data-label='Individuals']").click()
    await page.locator("//input[@name='Individual-search-input']").fill("saraja1")
    await page.locator('//div[@class="slds-table_header-fixed_container slds-scrollable_x"]').click()
    await page.locator('span').filter({ hasText: 'Show Actions' }).first().click()
    await page.locator("//a[@title='Edit']").click()
    //const comboBox = page.locator('a.select').click()
    //const comboBox1 = page.getByRole('combobox', { name: 'Mr.' });
    await page.locator("//a[@title='Mr.']").click()
    await page.locator('//input[@placeholder="First Name"]').fill("Sathya")
    await page.locator("//span[text()='Save']").click()
})