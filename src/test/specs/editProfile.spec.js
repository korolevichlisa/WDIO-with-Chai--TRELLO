import pages from "../../po/index.js"
pages()

describe('Edit profile', () => {

    before(async () => {
        await pages('signInPage').open()
        await pages('startPage').headerStart.loginLocators.click()
        await pages('signInPage').signIn()
    })

    it('Edit profile page @edit', async () => {
        await pages('homePage').header.userName.click()
        await pages('homePage').profilePopUpComponent.openProfileStings()
        await expect(browser).toHaveUrl('https://trello.com/u/jijis24506/account')
    })
})