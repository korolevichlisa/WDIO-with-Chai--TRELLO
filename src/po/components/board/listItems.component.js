/* eslint-disable no-undef */
const listItemsLocators = {
  createList: 'button[data-testid="list-composer-button"]',
  lastListTitle: 'ol#board li:last-of-type h2[data-testid="list-name"]',
  textArea: 'form textarea[data-testid="list-name-textarea"]',
  btn: 'button[data-testid="list-composer-add-list-button"]',
};

export class ListItemsComponent {
  get createListBtn() {
    return $(listItemsLocators.createList);
  }

  get lastListTitle() {
    return $(listItemsLocators.lastListTitle);
  }

  get textArea() {
    return $(listItemsLocators.textArea);
  }

  get addListBtn() {
    return $(listItemsLocators.btn);
  }

  async createList() {
    await $('div.board-canvas').click();
    await this.createListBtn.click();
    await this.textArea.setValue('test log');
    await this.addListBtn.click();
    // await browser.pause(2000)
  }
}
