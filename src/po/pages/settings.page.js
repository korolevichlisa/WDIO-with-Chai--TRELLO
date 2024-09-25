/* eslint-disable no-undef */
import { StartPage } from './start.page.js';

const userName = 'div.tabbed-pane-header-details';

export class SettingsPage extends StartPage {
  get userName() {
    return $(userName);
  }
  async open() {
    return await super.open('u/jijis24506/account');
  }
}
