
import { Attribute } from "../attribute";
import { Element } from "../element";

export class SidePanel{

    #sidePanel;

    constructor(logoContainer, byTime, userDefinedCategory){
        this.setSidePanel(logoContainer, byTime, userDefinedCategory);
    }

    setSidePanel(logoContainer, byTime, userDefinedCategory){
        const sidePanelAttribute = new Attribute("id", "side-panel");
        const sidePanel = new Element("div", new Array(sidePanelAttribute));

        this.#sidePanel = sidePanel.getElement();
        this.#sidePanel.append(logoContainer);
        this.#sidePanel.append(byTime);
        this.#sidePanel.append(userDefinedCategory);
    }

    getSidePanel(){
        return this.#sidePanel;
    }
}