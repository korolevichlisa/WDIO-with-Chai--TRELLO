import { HomePage } from "../../po/pages/home.page.js"
import { SignIn } from "../../po/pages/signIn.page.js"
import { StartPage } from "../../po/pages/start.page.js" 
import { BoardPage } from "../../po/pages/board.page.js"

const startPage = new StartPage()
const signInPage = new SignIn()
const homePage = new HomePage()
const boardPage = new BoardPage()

describe('Search board', () => {

    before(async () => {
        await signInPage.open()
        await startPage.headerStart.loginLocators.click()
        await signInPage.signIn()
    })
    
    after(async () => {
        for (let i = 1; i <= 2; i++){
                
            await homePage.header.logo.click()
            await homePage.boardList.firstBoard.click()
            await browser.pause(2000)
            await boardPage.workSpace.boardHeaderComponent.menuBtn.click()
            await boardPage.workSpace.menuBoardComponent.closeAndDeleteBaord()
        }
        
        })
   
    it('Create 2 boards @search', async () => {

        for (let i = 1; i <= 2; i++){
            await homePage.header.createMenuBtn.click()
            await homePage.popUpComponent.createBoardMenuPopOver()
        }

    })

    it('Search a board @search', async () => {
        await homePage.header.logo.click()
        await homePage.header.searchField.setValue('test')
        await expect(await $('//div[@class="css-jzn3n4"]')).toBeDisplayed()
    })
})
