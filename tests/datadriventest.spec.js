const{test,expect}=require('@playwright/test')

const testdata=JSON.parse(JSON.stringify(require("../login.json")))
test.describe("Data driven login test",function()
{
    for (const data of testdata ){
        test.describe(`login with user ${data.id}`,function(){
       
        test("read json file", async({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.locator("//input[@id='email1']").fill(data.username)
    await page.locator("//input[@id='password1']").fill(data.password)
                 })
    
        })
    }

})
