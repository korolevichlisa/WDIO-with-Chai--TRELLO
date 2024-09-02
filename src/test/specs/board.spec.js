import pages from "../../po/index.js"
pages()

describe('Operations with board elements', () => {
    before(async () => {
        await pages('signInPage').open()
        await pages('startPage').headerStart.loginLocators.click()
        await pages('signInPage').signIn()
    })

    after(async () => {
        await pages('boardPage').workSpace.boardHeaderComponent.menuBtn.click()
        await pages('boardPage').workSpace.menuBoardComponent.closeAndDeleteBaord()
    })

    it('Create a board @e2e', async () => {
        await pages('homePage').header.createMenuBtn.click()
        await pages('homePage').popUpComponent.createBoardMenuPopOver()
        await expect(await pages('boardPage').workSpace.boardHeaderComponent.title.getText()).toEqual('test-board')
    })

    it('Create a list @e2e', async () => {
        await pages('boardPage').workSpace.listItemsComponent.createList()
        await pages('boardPage').workSpace.listItemsComponent.lastListTitle.waitForExist({timeout:2000})
        await expect(await pages('boardPage').workSpace.listItemsComponent.lastListTitle.getText()).toEqual('test log')
    })

    it('Create a card @e2e', async () => {
        await pages('boardPage').workSpace.cardItemsComponent.createCardBtn.click()
        await pages('boardPage').workSpace.cardItemsComponent.textArea.setValue('test task ')
        await $('div.board-canvas').click()
        await expect(await pages('boardPage').workSpace.cardItemsComponent.createdCardName.getText()).toEqual('test task')
    })

    it('Chage a permissions @e2e', async () => {
        await pages('boardPage').workSpace.boardHeaderComponent.menuBtn.click()
        await pages('boardPage').workSpace.menuBoardComponent.settings.click()
        const startPermission = await pages('boardPage').workSpace.menuBoardComponent.addRemoveMembers.getText()
        await pages('boardPage').workSpace.menuBoardComponent.changePermission()
        const changedPermission = await pages('boardPage').workSpace.menuBoardComponent.addRemoveMembers.getText()
        await pages('boardPage').workSpace.menuBoardComponent.closeMenuPopUp.click()
        await expect(changedPermission).not.toEqual(startPermission)
    })
})