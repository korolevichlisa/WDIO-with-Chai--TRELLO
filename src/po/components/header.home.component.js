const headerHomePageLocators = {
    createMenuBtn: 'button[data-testid="header-create-menu-button"]',
    searchField: 'input[data-testid="cross-product-search-input-skeleton"]',
    userName: 'div[title="test_user (jijis24506)"]',
    logo: 'div.qsCZSrobO7JoSv'
}

export class HeaderHomeComponent{
    
    get createMenuBtn() {
        return $(headerHomePageLocators.createMenuBtn)
    }

    get searchField() {
        return $(headerHomePageLocators.searchField)
    }

    get userName() {
        return $(headerHomePageLocators.userName)
    }
    
    get logo() {
        return $(headerHomePageLocators.logo)
    }
}