const{test,expect}=require('@playwright/test')
test("file upload",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("#file-upload").setInputFiles("./uplaod/image1.png")
    await page.locator("#file-submit").click()
    expect (await page.locator("div[class='example'] h3")).toHaveText("File Uploaded!")
})