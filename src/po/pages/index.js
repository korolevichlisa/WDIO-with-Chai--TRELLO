import { BoardPage } from "./board.page.js";
import { HomePage } from "./home.page.js"
import { SignIn } from "./signIn.page.js"
import { StartPage } from "./start.page.js" 

/**
 * 
 * @param {'board' | 'startPage' | 'signInPage' | 'homePage'} name 
 * @returns {BoardPage | HomePage | SignIn | StartPage}
 */

 export default function pages(name) {
    const items = {
        boardPage: new BoardPage(),
        startPage: new StartPage(),
        signInPage: new SignIn(),
        homePage: new HomePage()
    }

    return items[name]
}


