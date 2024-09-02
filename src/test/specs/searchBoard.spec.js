import pages from "../../po/index.js"
pages()

describe('Search board', () => {

    before(async () => {
        await pages('signInPage').open()
        await pages('startPage').headerStart.loginLocators.click()
        await pages('signInPage').signIn()
    })
    
    after(async () => {
        for (let i = 1; i <= 2; i++){
                
            await pages('homePage').header.logo.click()
            await pages('homePage').boardList.firstBoard.click()
            await pages('boardPage').workSpace.boardHeaderComponent.menuBtn.waitForExist({timeout:2000})
            await pages('boardPage').workSpace.boardHeaderComponent.menuBtn.click()
            await pages('boardPage').workSpace.menuBoardComponent.closeAndDeleteBaord()
        }
        
        })
   
    it('Create 2 boards @search', async () => {

        for (let i = 1; i <= 2; i++){
            await pages('homePage').header.createMenuBtn.click()
            await pages('homePage').popUpComponent.createBoardMenuPopOver()
        }

    })

    it('Search a board @search', async () => {
        await pages('homePage').header.logo.click()
        await pages('homePage').header.searchField.setValue('test')
        await expect(await $('div.css-jzn3n4')).toBeDisplayed()
    })
})
