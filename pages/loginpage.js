const { expect } = require("allure-playwright")

class LoginPage
{
    constructor(page){
        this.page=page
        this.username="//input[@id='email1']"
        this.password="//input[@id='password1']"
        this.loginbutton="button[type='submit']"
        this.verify="//a[normalize-space()='New user? Signup']"
    }
    async loginToApplication(user,pass){
        await this.page.fill(this.username,user)
        await this.page.fill(this.password,pass)
        await this.page.click(this.loginbutton)
        
    }
    async verifyLogOut(){
       await  expect (this.page.locator(this.verify)).toBeVisible()
    }
    
}

module.exports={LoginPage};