import { HeaderStartComponent } from "../components/header.start.component.js"

export class StartPage{
    
    get headerStart() {
        return new HeaderStartComponent(this.container)
    }

    open() {
        return browser.url('/')
    }
}