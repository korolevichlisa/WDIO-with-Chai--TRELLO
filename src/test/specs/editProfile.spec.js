import {SignIn, SettingsPage} from "../../po/pages/index.js"

describe('Edit profile', () => {

    const signInPage = new SignIn()
    const settingsPage = new SettingsPage() 

    before(async () => {
        await signInPage.open()
        await signInPage.signIn()
    })

    it('Edit profile page @edit', async () => {
        await settingsPage.open()
        await expect( await settingsPage.userName.getText()).toEqual('test_user@jijis24506')
        await expect(browser).toHaveUrl('https://trello.com/u/jijis24506/account').skip()
    })
})