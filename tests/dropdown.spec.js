const{test,expect}=require('@playwright/test')
test("selct dropdown", async ({page})=>{
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
  
    await page.locator("#state").selectOption({label:"Assam"})
    // await page.waitForTimeout(3000)
 
    await page.locator("#state").selectOption({value:"Haryana"})
        // await page.waitForTimeout(1000)
 
    await page.locator("#state").selectOption({index:10})
       // await page.waitForTimeout(3000)

    // const value=await page.locator("#state").textContent()
    // await expect(value.includes("Delhi")).toBeTruthy()


    let state= await page.$("#state")
    let allelement=await state.$$("option")
   let dropdown=false
    for(let i=0;i<allelement.length;i++){
        let element=allelement[i]
        let value=await element.textContent()
        console.log("values of Element"+value);
        if(value.includes("Rajasthan"))
        {
            dropdown=true
            break
        }
    }

//-----------------WE CAN USE THIS METHOD FOR (FOR-LOOP) ITERATION USING LOCATOR-------------
 /*   const options = page.locator("#state option");

for (let i = 0; i < await options.count(); i++) {
    const value = await options.nth(i).textContent();
    
    console.log("values of Element " + value);

    if (value.includes("Rajasthan")) {
        dropdown = true;
        break;
    }
}
    await expect(dropdown).toBeTruthy()

*/
//----------------------------------------------------------------------------------------
})