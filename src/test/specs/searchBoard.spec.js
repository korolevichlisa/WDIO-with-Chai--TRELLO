import {SignIn, HomePage, BoardPage} from "../../po/pages/index.js"

describe('Search board', () => {

    const signInPage = new SignIn()
    const homePage = new HomePage()
    const boardPage = new BoardPage()

    before(async () => {
        await signInPage.open()
        await signInPage.signIn()
    })
    
    after(async () => {
        for (let i = 1; i <= 2; i++){
            await homePage.header.logo.click()
            await homePage.boardList.firstBoard.click()
            await boardPage.workSpace.boardHeaderComponent.menuBtn.waitForExist({timeout:2000})
            await boardPage.workSpace.boardHeaderComponent.menuBtn.click()
            await boardPage.workSpace.menuBoardComponent.closeAndDeleteBaord()
        }
    })

    it('Search a board @search', async () => {
        for (let i = 1; i <= 2; i++){
            await homePage.header.createMenuBtn.click()
            await homePage.popUpComponent.createBoardMenuPopOver()
        }
        await homePage.header.logo.click()
        await homePage.header.searchField.setValue('test')
        await expect(homePage.header.findedBoard).toBeDisplayed()
    })
})
