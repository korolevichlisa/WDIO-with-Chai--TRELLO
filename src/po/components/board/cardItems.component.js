const cardItemsLocators = {
    createCardBtn: 'ol#board > li:last-of-type  div[data-testid="list-footer"] > button:first-of-type',
    // createCardBtn: '(//button[@data-testid="list-add-card-button"])[last()]',
    createdCardName: 'a[data-testid="card-name"]',
    textArea: 'form textarea[data-testid="list-card-composer-textarea"]',
    btn: 'form button[data-testid="list-card-composer-add-card-button"]'
}
// const listCardLocators = {
//     allCards: 'ol[@data-testid="list-cards"] > li',
//     firstCard:
// }
const listCard = 'ol[data-testid="list-cards"] > li'

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

    get listCard() {
        return $$(listCard)
    }

    get firstCard() {
        return $(listCard + ':first-of-type')
    }

    async createCard() {
        await this.createCardBtn.click()
        await this.textArea.setValue('test task')
        await browser.pause(2000)
        await this.addCardBtn.click()
    }
}