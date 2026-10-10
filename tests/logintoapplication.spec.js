const{test,expect}=require('@playwright/test')
const {LoginPage}=require('../pages/Loginpage')
  const Homepage= require('../pages/homepage')
test('login to app using pom',async ({page})=>{
await page.goto("https://freelance-learn-automation.vercel.app/login")

   const loginpage=new LoginPage(page)
   await  loginpage.loginToApplication("admin@email.com","admin@123")

//   await page.pause()
const homepage=new Homepage(page)
await homepage.verifyManage()
await homepage.logoutToApplication()
await loginpage.verifyLogOut()
// await page.pause()

})