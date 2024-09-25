/* eslint-disable no-undef */
const filterPopUpItemsLocators = {
  input: 'input.nch-textfield__input',
  closeBtn: 'button[data-testid="popover-close"]',
};

export class FilterPopUpComponent {
  get filterInput() {
    return $(filterPopUpItemsLocators.input);
  }

  get closeBtn() {
    return $(filterPopUpItemsLocators.closeBtn);
  }

  async filterPopUp() {
    await this.filterInput.setValue('test');
    await this.closeBtn.waitForDisplayed({ timeout: 2000 });
    await this.closeBtn.click();
  }
}
