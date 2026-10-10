const { expect } = require("allure-playwright")

class Homepage{
     constructor(page){
        this.page=page
        this.menu="//img[@alt='menu']"
        this.signout="//button[normalize-space()='Sign out']"
        this.manage="//span[normalize-space()='Manage']"
     }
     async logoutToApplication(){
        await this.page.click(this.menu)
        await this.page.click(this.signout)
     }
     async verifyManage(){
        await expect(this.page.locator(this.manage)).toBeVisible()
     }
    
} 
module.exports=Homepage