import { BoardHeaderComponent } from "./boardHeader.component.js"
import { CardItemsComponent } from "./cardItems.component.js"
import { FilterPopUpComponent } from "./filterPopUp.component.js"
import { ListItemsComponent } from "./listItems.component.js"
import { MenuBoardComponent } from "./menuBoard.component.js"

const workspase = 'div.board-canvas'

export class WorkspaceComponent{

    get workSpace() {
        return $(workspase)
    }

    get listItemsComponent() {
        return new ListItemsComponent(this.container)
    }
    
    get cardItemsComponent() {
       return new CardItemsComponent(this.container)
    }

    get filterPopUpComponent() {
        return new FilterPopUpComponent(this.container)
    }

    get boardHeaderComponent() {
        return new BoardHeaderComponent(this.container)
    }
    
    get menuBoardComponent() {
        return new MenuBoardComponent(this.container)
    }
}

