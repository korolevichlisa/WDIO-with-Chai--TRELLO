/* eslint-disable no-undef */
const firstBoardLocator = 'ul.boards-page-board-section-list li:first-of-type';

export class BoardListComponent {
  get firstBoard() {
    return $(firstBoardLocator);
  }
}
