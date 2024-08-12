const boardMenuLocators = {
    closeBoard: 'a.js-close-board',
    confirmCloseBoard: 'input[data-testid="close-board-confirm-button"]',
    deleteBoard: 'button[data-testid="close-board-delete-board-button"]',
    confirmDelBoard: 'button[data-testid="close-board-delete-board-confirm-button"]',
    settings: 'a.js-open-settings',
    permissionsAddRemoveMembers: 'a[data-testid="add-remove-members-item"]',
    permissionsForAdminsAddRemoveMembers: 'a[name="admins"]',
    addRemoveMembers: 'a[data-testid="add-remove-members-item"] span.Ok1H3hZ4AitKti',
    closeMenuPopUp: 'a.board-menu-header-close-button'
}

export class MenuBoardComponent{

    get closeBoard() {
        return $(boardMenuLocators.closeBoard)
    }

    get confirmCloseBoard() {
        return $(boardMenuLocators.confirmCloseBoard)
    }

    get deleteBoard() {
        return $(boardMenuLocators.deleteBoard)
    }

    get confirmDelBoard() {
        return $(boardMenuLocators.confirmDelBoard)
    }

    get settings() {
        return $(boardMenuLocators.settings)
    }

    get permissionsAddRemoveMembers() {
        return $(boardMenuLocators.permissionsAddRemoveMembers)
    }

    get permissionsForAdminsAddRemoveMembers() {
        return $(boardMenuLocators.permissionsForAdminsAddRemoveMembers)
    }

    get addRemoveMembers() {
        return $(boardMenuLocators.addRemoveMembers)
    }

    get closeMenuPopUp() {
        return $(boardMenuLocators.closeMenuPopUp)
    }

    async closeAndDeleteBaord() {
        await this.closeBoard.scrollIntoView({block:'end'})
        await this.closeBoard.click()
        await this.confirmCloseBoard.click()
        await this.deleteBoard.scrollIntoView({block:'end'})
        await this.deleteBoard.click()
        await this.confirmDelBoard.click()
        await browser.pause(2000)
    }

    async changePermission() {
        await this.permissionsAddRemoveMembers.click()
        await this.permissionsForAdminsAddRemoveMembers.click()
        await browser.pause(2000)
   }
}

