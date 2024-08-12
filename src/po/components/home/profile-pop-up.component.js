const profilePopUpLocators = {
    accountMenu: 'a[data-testid="account-menu-settings"]'
}

export class ProfilePopUp{
    
    get accountSettings() {
        return $(profilePopUpLocators.accountMenu)
    }

    async openProfileStings() {
        await this.accountSettings.scrollIntoView({block:'center'})
        await this.accountSettings.click() 
    }
}