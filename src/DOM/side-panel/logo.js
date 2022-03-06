
import { Element } from "../element";
import { Attribute } from "../attribute";
import Logo from "./../images/logo.png";
import { Paragraph } from "../html-elements/paragraph";
import { Div } from "../html-elements/div";

export class LogoContainer{

    #logoContainer;

    constructor(){
        this.setLogoDetails();
    }

    setLogoDetails(){
        const logoContainerAttribute = new  Attribute("id", "logo-container");
        const logoContainer = new Div(undefined, new Array(logoContainerAttribute));

        const attrArr = new Array(new Attribute("src", Logo),
        new Attribute("alt", "doodoo-list logo")); 

        const nameAttributes = [new Attribute("id", "name")];
        const logo = new Element("img", attrArr, "logo");
        const name = new Paragraph("doodoo-list", nameAttributes);
        const tagline = new Element("h5", new Array(new Attribute("id", "tagline")),
        undefined, "Here to help you get your 💩 together");

        this.#logoContainer = logoContainer.getDiv();

        this.#logoContainer.append(logo.getElement());
        this.#logoContainer.append(name.getElement());
        this.#logoContainer.append(tagline.getElement());
    }

    getLogoContainer(){
        return this.#logoContainer;
    }
}