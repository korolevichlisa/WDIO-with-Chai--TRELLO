import { HeaderHomeComponent, PopUpComponent, BoardListComponent, ProfilePopUp } from "../components/index.js";

export class HomePage{
    
    get popUpComponent() {
        return new PopUpComponent(this.container)
    }

    get header() {
        return new HeaderHomeComponent(this.container)
    }

    get boardList() {
        return new BoardListComponent(this.container)
    }

    get profilePopUpComponent() {
        return new ProfilePopUp(this.container)
    }
    
}