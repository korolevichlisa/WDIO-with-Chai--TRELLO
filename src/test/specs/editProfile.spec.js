import { HeaderHomeComponent } from "../../po/components/header.home.component.js"
import { ProfilePopUp } from "../../po/components/home/profile-pop-up.component.js"
import { SignIn } from "../../po/pages/signIn.page.js"
import { StartPage } from "../../po/pages/start.page.js"

const signInPage = new SignIn()
const startPage = new StartPage()
const headerHome = new HeaderHomeComponent()
const profilePopUp = new ProfilePopUp

describe('Edit profile', () => {

    before(async () => {
        await signInPage.open()
        await startPage.headerStart.loginLocators.click()
        await signInPage.signIn()
    })

    it('Edit profile page @edit', async () => {
        await headerHome.userName.click()
        await profilePopUp.openProfileStings()
        await expect(browser).toHaveUrl('https://trello.com/u/jijis24506/account')
    })
})