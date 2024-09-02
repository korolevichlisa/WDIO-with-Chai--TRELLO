import { assert, should, expect as expectChai } from "chai"
should()
import pages from "../../po/index.js"
pages()

describe('Card filtering', () => {
    
    before(async () => {
        await pages('signInPage').open()
        await pages('startPage').headerStart.loginLocators.click()
        await pages('signInPage').signIn()
    })

    after(async () => {
        await pages('boardPage').workSpace.boardHeaderComponent.menuBtn.click()
        await pages('boardPage').workSpace.menuBoardComponent.closeAndDeleteBaord()
        await expect(await pages('homePage').header.userName.isExisting()).toEqual(true)
    })

    it('Create a board @filter', async () => {
        await pages('homePage').header.createMenuBtn.click()
        await pages('homePage').popUpComponent.createBoardMenuPopOver()
        assert.equal(await pages('boardPage').workSpace.boardHeaderComponent.title.getText(), 'test-board')
    })

    it('Create 5 cards @filter', async () => {
        await pages('boardPage').workSpace.cardItemsComponent.createCardBtn.click()

        for (let times = 1; times <= 5; times++) {
            await pages('boardPage').workSpace.cardItemsComponent.textArea.setValue('test task '+times)
            await pages('boardPage').workSpace.cardItemsComponent.addCardBtn.click()
        }
        
        const result = await pages('boardPage').workSpace.cardItemsComponent.firstCard.getText()
        result.should.to.be.equal('test task 1')
    })

    it('Filter a card @filter', async () => {
        await pages('boardPage').workSpace.boardHeaderComponent.filterBtn.click()
        await pages('boardPage').workSpace.filterPopUpComponent.filterPopUp()
        await pages('boardPage').workSpace.cardItemsComponent.firstCard.waitForExist({timeout:2000})
        const result = await pages('boardPage').workSpace.cardItemsComponent.listCard.map(function(element){
            return element.getText()
        })
        expectChai(result).to.eql(['test task 1','test task 2','test task 3','test task 4','test task 5'])
    })
})