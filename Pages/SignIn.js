exports.SignIn = class SignIn
{
    constructor(page)
    {
        this.page=page
        this.Email_Field= page.locator('id=:r0:')
        this.Password_Field=page.locator('id=current-password')
        this.Signin = page.locator('xpath=//button[@id=":r3:"]')

    }
    async EmailField(username)
    {
        await this.Email_Field.fill(username)
    }
    async PasswordFiled(password)
    {
        await this.Password_Field.fill(password)
    }
    async SignInBtn()
    {
        await this.Signin.click()
    }
}