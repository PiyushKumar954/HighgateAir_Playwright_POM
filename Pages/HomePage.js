exports.HomePage = class HomePage{

    constructor(page)
    {
        this.page= page
        this.Accept_welcome_cookie=page.locator('text=Accept')
        this.Decline_welcome_Cookie =page.locator('text=Decline')
        this.Signin_Button= page.locator('button:has-text("SIGN IN")')
    }
    async GotoURL()
    {
        await this.page.goto('https://highgateair-development.site')
    }
    async AcceptCookie()
    {
         await this.Accept_welcome_cookie.click()
    }
    async DeclineCookie()
    {
        await this.Decline_welcome_Cookie.click()
    }
    async SignIn_Button()
    {
        await this.Signin_Button.click()
    }
}