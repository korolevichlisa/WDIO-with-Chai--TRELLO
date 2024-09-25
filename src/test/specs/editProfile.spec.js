/* eslint-disable no-undef */
import { SignIn, SettingsPage } from '../../po/pages/index.js';

describe('Edit profile', function() {
  const signInPage = new SignIn();
  const settingsPage = new SettingsPage();

  before(async function() {
    await signInPage.open();
    await signInPage.signIn();
  });

  it('Edit profile page @edit', async function() {
    await settingsPage.open();
    await expect(await settingsPage.userName.getText()).toEqual('test_user@jijis24506');
  });
});
