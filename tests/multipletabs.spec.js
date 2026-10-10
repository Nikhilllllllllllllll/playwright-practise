const{test,expect}=require('@playwright/test')
test("handle multiple tabs",async ({browser})=>{
   const context= await browser.newContext()
   const page=await context.newPage() 
   await page.goto("https://freelance-learn-automation.vercel.app/login")
 
   const[newPage]=await Promise.all(
   [context.waitForEvent('page'),
     page.locator("//div[@class='container-child']//a[4]//*[name()='svg']//*[name()='path' and contains(@d,'M353.701,0')]").click()
  ]
)
  await newPage.locator("(//input[@name='email'])[2]").fill("admin@gmail.com")
  await page.waitForTimeout(3000)
  await newPage.close()
    await page.waitForTimeout(3000)
  await page.locator("#email1").fill("admin@gmail.com")
  await page.waitForTimeout(3000)
})