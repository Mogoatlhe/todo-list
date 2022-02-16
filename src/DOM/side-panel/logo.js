
import { Element } from "../element";
import { Attribute } from "../attribute";
import Logo from "./../images/logo.png";

export class LogoContainer{

    #logoContainer;

    constructor(){
        this.setLogoDetails();
    }

    setLogoDetails(){
        const logoContainerAttribute = new  Attribute("id", "logo-container");
        const logoContainer = new Element("div", new Array(logoContainerAttribute));

        const attrArr = new Array(new Attribute("src", Logo),
        new Attribute("alt", "doodoo-list logo")); 

        const logo = new Element("img", attrArr, "logo");
        const name = new Element("p", new Array(new Attribute("id", "name")), undefined, "doodoo-list");
        const tagline = new Element("h5", new Array(new Attribute("id", "tagline")),
        undefined, "Here to help you get your 💩 together");

        this.#logoContainer = logoContainer.getElement();

        this.#logoContainer.append(logo.getElement());
        this.#logoContainer.append(name.getElement());
        this.#logoContainer.append(tagline.getElement());
    }

    getLogoContainer(){
        return this.#logoContainer;
    }
}