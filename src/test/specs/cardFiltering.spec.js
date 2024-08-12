import { BoardPage } from "../../po/pages/board.page.js"
import { HomePage } from "../../po/pages/home.page.js"
import { SignIn } from "../../po/pages/signIn.page.js"
import { StartPage } from"../../po/pages/start.page.js" 

const startPage = new StartPage()
const signInPage = new SignIn()
const homePage = new HomePage()
const boardPage = new BoardPage()

describe('Card filtering', () => {
    
    before(async () => {
        await signInPage.open()
        await startPage.headerStart.loginLocators.click()
        await signInPage.signIn()
    })

    after(async () => {
        await boardPage.workSpace.boardHeaderComponent.menuBtn.click()
        await boardPage.workSpace.menuBoardComponent.closeAndDeleteBaord()
        await expect(await homePage.header.userName.isExisting()).toEqual(true)
    })

    it('Create a board @filter', async () => {
        await homePage.header.createMenuBtn.click()
        await homePage.popUpComponent.createBoardMenuPopOver()
        await expect(await boardPage.workSpace.boardHeaderComponent.title.getText()).toEqual('test-board')
    })

    it('Create 5 cards @filter', async () => {
        await boardPage.workSpace.cardItemsComponent.createCardBtn.click()

        for (let times = 1; times <= 5; times++) {
            await boardPage.workSpace.cardItemsComponent.textArea.setValue('test task '+times)
            await boardPage.workSpace.cardItemsComponent.addCardBtn.click()
        }
        
        const result = await $('(//ol[@data-testid="list-cards"]/descendant::li)[1]')
        await expect(result).toHaveText('test task 1')
        })

    it('Filter a card @filter', async () => {
        await boardPage.workSpace.boardHeaderComponent.filterBtn.click()
        await boardPage.workSpace.filterPopUpComponent.filterPopUp()
        const result = await $$('//ol[@data-testid="list-cards"]/descendant::li')
        await expect(result).toHaveText(['test task 1','test task 2','test task 3','test task 4','test task 5'])
    })
})