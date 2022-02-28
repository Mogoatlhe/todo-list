
import { Attribute } from "../attribute";
import { Element } from "../element";
import { LogoContainer } from './logo';

export class SidePanel{

    #sidePanel;
    #logoContainer;

    constructor(byTime, userDefinedCategory){
        const logoContainer = new LogoContainer();
        this.#logoContainer  = logoContainer.getLogoContainer();
        this.setSidePanel(byTime, userDefinedCategory);
    }

    setSidePanel(byTime, userDefinedCategory){
        const sidePanelAttribute = new Attribute("id", "side-panel");
        const sidePanel = new Element("div", new Array(sidePanelAttribute));

        this.#sidePanel = sidePanel.getElement();
        this.#sidePanel.append(this.#logoContainer);
        this.#sidePanel.append(byTime);
        this.#sidePanel.append(userDefinedCategory);
    }

    getSidePanel(){
        return this.#sidePanel;
    }
}