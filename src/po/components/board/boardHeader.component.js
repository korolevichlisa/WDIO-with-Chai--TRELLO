const boardHeaderLocators = {
    menuBtn: 'div.RPO6eTW4FLJhI0 span[data-testid="OverflowMenuHorizontalIcon"]',
    filterBtn: 'div.RPO6eTW4FLJhI0 button[data-testid="filter-popover-button"]',
    title:'div.RPO6eTW4FLJhI0 h1[data-testid="board-name-display"]'
}

export class BoardHeaderComponent{

    get menuBtn() {
        return $(boardHeaderLocators.menuBtn)
    }

    get filterBtn() {
        return $(boardHeaderLocators.filterBtn)
    }

    get title() {
        return $(boardHeaderLocators.title)
    }
}