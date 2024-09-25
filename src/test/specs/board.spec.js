/* eslint-disable no-undef */
import { SignIn, HomePage, BoardPage } from '../../po/pages/index.js';

describe('Operations with board elements', function() {
  const signInPage = new SignIn();
  const homePage = new HomePage();
  const boardPage = new BoardPage();

  before(async function() {
    await signInPage.open();
    await signInPage.signIn();
  });

  after(async function() {
    await boardPage.workSpace.boardHeaderComponent.menuBtn.click();
    await boardPage.workSpace.menuBoardComponent.closeAndDeleteBaord();
  });

  it('Create a board @e2e', async function() {
    await homePage.header.createMenuBtn.click();
    await homePage.popUpComponent.createBoardMenuPopOver();
    await expect(await boardPage.workSpace.boardHeaderComponent.title.getText()).toEqual(
      'test-board'
    );
  });

  it('Create a list @e2e', async function() {
    await boardPage.workSpace.listItemsComponent.createList();
    await boardPage.workSpace.listItemsComponent.lastListTitle.waitForExist({ timeout: 2000 });
    await expect(await boardPage.workSpace.listItemsComponent.lastListTitle.getText()).toEqual(
      'test log'
    );
  });

  it('Create a card @e2e', async function() {
    await boardPage.workSpace.cardItemsComponent.createCard();
    await boardPage.workSpace.workSpace.click();
    await expect(await boardPage.workSpace.cardItemsComponent.createdCardName.getText()).toEqual(
      'test task'
    );
  });

  it('Chage a permissions @e2e', async function() {
    await boardPage.workSpace.boardHeaderComponent.menuBtn.click();
    await boardPage.workSpace.menuBoardComponent.settings.click();
    const startPermission = await boardPage.workSpace.menuBoardComponent.addRemoveMembers.getText();
    await boardPage.workSpace.menuBoardComponent.changePermission();
    const changedPermission =
      await boardPage.workSpace.menuBoardComponent.addRemoveMembers.getText();
    await boardPage.workSpace.menuBoardComponent.closeMenuPopUp.click();
    await expect(changedPermission).not.toEqual(startPermission);
  });
});
