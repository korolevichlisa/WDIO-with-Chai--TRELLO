import { BoardPage } from "../../po/pages/board.page.js"
import { HomePage } from "../../po/pages/home.page.js"
import { SignIn } from "../../po/pages/signIn.page.js"
import { StartPage } from"../../po/pages/start.page.js" 

const startPage = new StartPage()
const signInPage = new SignIn()
const homePage = new HomePage()
const boardPage = new BoardPage()

describe('Operations with board elements', () => {
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

    it('Create a board @e2e', async () => {
        await homePage.header.createMenuBtn.click()
        await homePage.popUpComponent.createBoardMenuPopOver()
        await expect(await boardPage.workSpace.boardHeaderComponent.title.getText()).toEqual('test-board')
    })

    it('Create a list @e2e', async () => {
        await boardPage.workSpace.listItemsComponent.createList()
        await expect(await boardPage.workSpace.listItemsComponent.lastListTitle.getText()).toEqual('test log')
    })

    it('Create a card @e2e', async () => {
        await boardPage.workSpace.cardItemsComponent.createCardBtn.click()
        await boardPage.workSpace.cardItemsComponent.textArea.setValue('test task ')
        await $('div.board-canvas').click()
        await expect(await boardPage.workSpace.cardItemsComponent.createdCardName.getText()).toEqual('test task')
    })

    it('Chage a permissions @e2e', async () => {
        await boardPage.workSpace.boardHeaderComponent.menuBtn.click()
        await boardPage.workSpace.menuBoardComponent.settings.click()
        const startPermission = await boardPage.workSpace.menuBoardComponent.addRemoveMembers.getText()
        await boardPage.workSpace.menuBoardComponent.changePermission()
        const changedPermission = await boardPage.workSpace.menuBoardComponent.addRemoveMembers.getText()
        await boardPage.workSpace.menuBoardComponent.closeMenuPopUp.click()
        await expect(changedPermission).not.toEqual(startPermission)
    })
})