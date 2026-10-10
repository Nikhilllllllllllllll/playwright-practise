const{test,expect}=require('@playwright/test')
test("Handle of autosugestion using keyboard", async({page})=>{
    await page.goto("https://google.com")
   await page.locator('#ti6dpd').fill("Nikhil khandelwal")
   await page.waitForSelector("//li[@role='presentation']")
   await page.keyboard.press("ArrowDown")
      await page.keyboard.press("ArrowDown")
    await page.keyboard.press("Enter")
})


test.only("Handle of autosugestion using keyboard dynamically", async({page})=>{
    await page.goto("https://google.com")
   await page.locator('#ti6dpd').fill("Nikhil khandelwal")
   await page.waitForSelector("//li[@role='presentation']")
   const elements=await page.$$("//li[@role='presentation']")
for(let i=0;i<elements.length;i++){
    const text= await elements[i].textContent()
        if(text.includes("linkedin")){
            await elements[i].click()
            break
        }
}

})