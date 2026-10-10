const{test,expect}=require('@playwright/test')
test("Handel Keyboard",async ({page})=>{
    await page.goto("https://www.google.com/")

  /*  
    await page.locator('#ti6dpd').fill("Nikhil Khandelwal")
    await page.keyboard.press("Control+A")
    await page.keyboard.press("Control+C")
    await page.keyboard.press("Control+V")
    await page.keyboard.press("Enter")
    */

  await page.locator('#ti6dpd').focus()
  await page.keyboard.type("Nikhil Khandelwal!")
  await page.keyboard.press("ArrowLeft")
  await page.keyboard.down("Shift")
  for(let i=0;i<10;i++){
    await page.keyboard.press("ArrowLeft")
  }
  await page.keyboard.up("Shift")
  await page.keyboard.press("Backspace")
})