
import { Attribute } from "../attribute";
import { Element } from "../element";
import { Div } from "../html-elements/div";
import { LogoContainer } from './logo';

export class SidePanel{

    #sidePanel;
    #logoContainer;

    constructor(categories){
        this.setSidePanel(categories);
    }

    setSidePanel(categories){
        const logoContainer = new LogoContainer();
        this.#logoContainer  = logoContainer.getLogoContainer();
        const sidePanelAttribute = new Attribute("id", "side-panel");
        const sidePanelAttributes = [sidePanelAttribute];
        const sidePanel = new Div(undefined, sidePanelAttributes);

        this.#sidePanel = sidePanel.getDiv();
        this.#sidePanel.append(this.#logoContainer);
        this.#sidePanel.append(categories.getCategories());
    }

    getSidePanel(){
        return this.#sidePanel;
    }
}