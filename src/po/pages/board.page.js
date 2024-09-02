import { HeaderHomeComponent, WorkspaceComponent } from "../components/index.js";

export class BoardPage{
    
    get header() {
        return new HeaderHomeComponent(this.container)
    }

    get workSpace() {
        return new WorkspaceComponent(this.container)
    }
}