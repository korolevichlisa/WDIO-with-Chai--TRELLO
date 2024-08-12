const popUpLocators = {
    createBoardBtn: 'button[data-testid="header-create-board-button"]',
    nameBoard: 'input[data-testid="create-board-title-input"]',
    submitBoardBtn: 'button[data-testid="create-board-submit-button"]',
}

export class PopUpComponent{

    get createBoardBtn() {
        return $(popUpLocators.createBoardBtn)
    }

    get nameBoard() {
        return $(popUpLocators.nameBoard)
    }

    get submitBoardBtn() {
        return $(popUpLocators.submitBoardBtn)
    }
    
    async createBoardMenuPopOver() {
        await this.createBoardBtn.click()
        await browser.pause(2000)
        await this.nameBoard.setValue('test-board')
        await this.submitBoardBtn.click()
        await browser.pause(2000)
    }
}