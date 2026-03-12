import { test, expect } from '@playwright/test'
import { HomePage } from '../../Pages/HomePage'
import { SignIn } from '../../Pages/SignIn'
import { Dashboard } from '../../Pages/Dashboard';


test('Verify OnAccount order flow with multiple Scenerios',async({page})=>{
    const Homepage = new HomePage(page)
    const Signin = new SignIn(page)
    const dashboard = new Dashboard(page)

    await Homepage.GotoURL()
    await Homepage.AcceptCookie()
    await Homepage.SignIn_Button()
    await Signin.EmailField('piyush.k+3@codilar.com')
    await Signin.PasswordFiled('Piyush@codilar123')
    await Signin.SignInBtn()
    await dashboard.SkipWidget();
    await dashboard.ProductCatalogue();

    const category = await page.$$("//div[@class='mui-style-11to6je']//ul/div/div/span")
    for (const Category_name  of category)
    {
        const Categoryname= await Category_name.textContent();
        console.log(Categoryname)
    }
    await page.getByText('Compressors').click()

})