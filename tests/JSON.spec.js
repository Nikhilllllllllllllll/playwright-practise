const{test,expect}=require('@playwright/test')
test("read json file ",async({page})=>{
  const testdata=  JSON.parse(    JSON.stringify( require("../testdata.json")) )
  await page.goto("https://freelance-learn-automation.vercel.app/login")
  await page.locator("//input[@id='email1']").fill(testdata.username)
  await page.locator("//input[@id='password1']").fill(testdata.password)
await page.pause()

})