const{test,expect}=require('@playwright/test')
test("Verify Text", async ({page})=>{
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await page.getByPlaceholder("Username").fill("Admin")
  await page.getByPlaceholder("Password").fill("adbcde")
  await page.locator("button[type='submit']").click()
  const errorMessage =await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent()
    console.log("error mesaage is "+errorMessage);
    // expect(errorMessage.includes("Invalid")).toBeTruthy
    expect(errorMessage==="Invalid credentials").toBeTruthy()
})