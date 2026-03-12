exports.Dashboard= class Dashboard{

    constructor(page)
    {
        this.Widget_Bar = page.locator('//button[text()="Skip"]')
        this.User_icon=page.locator('xpath=//button[@class="dashboard-icon-btn MuiBox-root mui-style-ubenrz"]')
        this.logout =page.locator('xpath=//span[text()="Log out"]')
        this.Address_Book= page.locator('//button[text()="Address Book"]')
        this.Prod_catalog= page.locator('//button[text()="Product Catalogue"]')
    }
    async SkipWidget()
    {
        await this.Widget_Bar.click()
    }
    async UserIconButton()
    {
        await this.User_icon.click()
    }
    async LogoutButton()
    {
        await this.logout.click()
    }
    async AddressBook()
    {
        await this.Address_Book.click()
    }
    async ProductCatalogue()
    {
        await this.Prod_catalog.click()
    }

}