const cardItemsLocators = {
    createCardBtn: 'ol#board > li:last-of-type  div[data-testid="list-footer"] > button:first-of-type',
    // createCardBtn: '(//button[@data-testid="list-add-card-button"])[last()]',
    createdCardName: 'a[data-testid="card-name"]',
    textArea: 'form textarea[data-testid="list-card-composer-textarea"]',
    btn: 'form button[data-testid="list-card-composer-add-card-button"]'
}

export class CardItemsComponent{

    get createCardBtn() {
        return $(cardItemsLocators.createCardBtn)
    }

    get createdCardName() {
        return $(cardItemsLocators.createdCardName)
    }

    get textArea() {
        return $(cardItemsLocators.textArea)
    }

    get addCardBtn() {
        return $(cardItemsLocators.btn)
    }

    async createCard() {
        await this.createCardBtn.click()
        await this.textArea.setValue('test task')
        await browser.pause(2000)
        await this.addCardBtn.click()
    }
}