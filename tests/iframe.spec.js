const{test,expect}=require('@playwright/test')
test("handle iframe",async ({page})=>{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")

await page.frameLocator('[name="packageListFrame"]').getByRole('link', { name: 'java.applet' }).click()
await page.pause()
})