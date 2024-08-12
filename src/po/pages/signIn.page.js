import { StartPage } from "./start.page.js"

const loginPageLocators = {
    username: 'input[data-testid="username"]',
    password: 'input[data-testid="password"]',
    loginBtn: '#login-submit'
}

export class SignIn extends StartPage{
    
    get usernameInput() {
        return $(loginPageLocators.username)
    }

    get passwordInput() {
        return $(loginPageLocators.password)
    }

    get loginSubmitBtn() {
        return $(loginPageLocators.loginBtn)
    }
   
    async signIn() {
        await this.usernameInput.setValue(process.env.user_email)
        await this.loginSubmitBtn.click()
        await this.passwordInput.waitForDisplayed({timeout: 3500})
        await this.passwordInput.setValue(process.env.user_pass)
        await this.loginSubmitBtn.click()        
    }

    open() {
        return super.open()
    }
}
