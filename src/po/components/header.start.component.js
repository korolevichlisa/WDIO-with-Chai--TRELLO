const headerStartPageLocators = {
    login: 'a[data-uuid="MJFtCCgVhXrVl7v9HA7EH_login"]',
    signUp: 'a[data-uuid="MJFtCCgVhXrVl7v9HA7EH_signup"]'
}

export class HeaderStartComponent{

    get loginLocators() {
        return $(headerStartPageLocators.login)
    }

    get signUpLocators() {
        return $(headerStartPageLocators.signUp)
    }
}