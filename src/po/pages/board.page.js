import { WorkspaceComponent } from "../components/board/workspace.component.js";
import { HeaderHomeComponent } from "../components/header.home.component.js";

export class BoardPage{
    
    get header() {
        return new HeaderHomeComponent(this.container)
    }

    get workSpace() {
        return new WorkspaceComponent(this.container)
    }
}