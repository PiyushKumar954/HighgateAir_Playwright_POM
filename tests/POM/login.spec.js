import { test, expect } from '@playwright/test'
import { HomePage } from '../../Pages/HomePage'
import { SignIn } from '../../Pages/SignIn'
import { Dashboard } from '../../Pages/Dashboard';
import loginData from '../../test-data/loginData.json'

test.describe('TC01_NormalSignin - Data Driven', () => {
    loginData.forEach((data, index) => {
        test(`Login Test ${index + 1} - ${data.username}`, async ({ page }) => {

            console.log("*** Starting TC01_NormalSignin ***")
            console.log(`Test Data -> Email: ${data.username}, Password: ${data.password}, Expected: ${data.expectedResult}`)
            try {
                const Homepage = new HomePage(page)
                const Signin = new SignIn(page)
                const dashboard = new Dashboard(page)
                console.log(`Executing Login ${index + 1} for ${data.username}`)
                await Homepage.GotoURL()
                await expect(page).toHaveTitle('Highgate Air - Home')
                await Homepage.AcceptCookie()
                await Homepage.SignIn_Button()

                await Signin.EmailField(data.username)
                await Signin.PasswordFiled(data.password)
                await Signin.SignInBtn()
                console.log("Login form submitted")
                const expected = data.expectedResult?.toLowerCase().trim()
                const dashboardURL = 'https://highgateair-development.site/account/dashboard'

                if (expected === "valid") {
                    await page.waitForURL('**/account/dashboard', { timeout: 10000 })
                    const currentURL = page.url()
                    console.log("Current URL:", currentURL)
                    await expect(page).toHaveURL(dashboardURL)

                    console.log("Login Successful - Dashboard URL Matched")
                    await dashboard.SkipWidget();
                    await dashboard.UserIconButton();
                    await dashboard.LogoutButton();
                }
                else {
                    const errorLocator = page.getByText(
                        /We are unable to find an account with this email\.|The account sign-in was incorrect or your account is disabled temporarily\./
                    )

                    await expect(errorLocator).toBeVisible({ timeout: 5000 })

                    console.log("❌ Invalid Login Verified")
                    test.fail(true, "Invalid login case - Marked as FAIL as per requirement")
                }
            }
            catch (error) {
                console.error("Test failed due to exception:", error.message)
                throw error
            }
        })
    })

})
