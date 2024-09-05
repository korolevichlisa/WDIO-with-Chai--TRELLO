import { assert, should, expect as expectChai } from "chai"
should()
import {SignIn, HomePage, BoardPage} from "../../po/pages/index.js"

describe('Card filtering', () => {

    const signInPage = new SignIn()
    const homePage = new HomePage()
    const boardPage = new BoardPage()
    
    before(async () => {
        await signInPage.open()
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
        assert.equal(await boardPage.workSpace.boardHeaderComponent.title.getText(), 'test-board')
    })

    it('Create 5 cards @filter', async () => {
        await boardPage.workSpace.cardItemsComponent.createCardBtn.click()

        for (let times = 1; times <= 5; times++) {
            await boardPage.workSpace.cardItemsComponent.textArea.setValue('test task '+times)
            await boardPage.workSpace.cardItemsComponent.addCardBtn.click()
        }
        
        const result = await boardPage.workSpace.cardItemsComponent.firstCard.getText()
        result.should.to.be.equal('test task 1')
    })

    it('Filter a card @filter', async () => {
        await boardPage.workSpace.boardHeaderComponent.filterBtn.click()
        await boardPage.workSpace.filterPopUpComponent.filterPopUp()
        await boardPage.workSpace.cardItemsComponent.firstCard.waitForExist({timeout:2000})
        const result = await boardPage.workSpace.cardItemsComponent.listCard.map(function(element){
            return element.getText()
        })
        expectChai(result).to.eql(['test task 1','test task 2','test task 3','test task 4','test task 5'])
    })
})