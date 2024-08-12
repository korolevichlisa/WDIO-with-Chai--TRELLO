import { HeaderHomeComponent } from "../components/header.home.component.js";
import { PopUpComponent } from "../components/home/pop-up.component.js";
import { BoardListComponent } from "../components/home/boardList.js";
import { ProfilePopUp } from "../components/home/profile-pop-up.component.js";

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