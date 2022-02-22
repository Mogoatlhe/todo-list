
import { Attribute } from "../attribute";
import { Element } from "../element";
import CleanToiletImageSrc from "./../images/clean-toilet.png";

export class CleanToilet{

    #cleanToiletContainer;

    constructor(){
        this.setCleanToilet();
    }

    setCleanToilet(){

        const cleanToiletAlt = new Attribute("alt", "image of a clean toilet");
        const cleanToiletId = new Attribute("id", "clean-toilet");
        const cleanToiletSrc = new Attribute("src", CleanToiletImageSrc);
        const cleanToiletAttrArr = [cleanToiletAlt, cleanToiletId, cleanToiletSrc];
        const cleanToiletContainerId = new Attribute("id", "clean-toilet-container");
        const cleanToiletContainerAttrArr = [cleanToiletContainerId];
        const headingText = "All clean, nothing to see here";

        const cleanToiletHeadingId = new Attribute("id", "clean-toilet-heading");
        const cleanToiletHeadingAttrArr = [cleanToiletHeadingId];

        const cleanToiletContainer = new Element("div", cleanToiletContainerAttrArr);
        const cleanToiletHeading = new Element("h3", cleanToiletHeadingAttrArr, undefined, headingText);
        const cleanToiletImage = new Element("img", cleanToiletAttrArr);
        
        this.#cleanToiletContainer = cleanToiletContainer.getElement();
        const cleanToiletHeadingNode = cleanToiletHeading.getElement();
        const cleanToiletImageNode = cleanToiletImage.getElement();

        this.#cleanToiletContainer.append(cleanToiletHeadingNode);
        this.#cleanToiletContainer.append(cleanToiletImageNode);
    }

    getCleanToilet(){
        return this.#cleanToiletContainer;
    }

}