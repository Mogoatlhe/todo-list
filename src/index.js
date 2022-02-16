import './style/style.css';
import { Element } from './element';
import { Attribute } from './attribute';
import Logo from "./images/logo.png";

const Main = (() => {

    const content = document.getElementById("content");
    const sidePanelAttribute = new Attribute("id", "side-panel");
    let sidePanel = new Element("div", new Array(sidePanelAttribute));
    sidePanel = sidePanel.getElement();
    
    const logoContainerAttribute = new  Attribute("id", "logo-container"); 
    let logoContainer = new Element("div", new Array(logoContainerAttribute));
    logoContainer = logoContainer.getElement();

    let attrArr = new Array(new Attribute("src", Logo),
    new Attribute("alt", "doodoo-list logo")); 
    const logo = new Element("img", attrArr, "logo");

    let textContent = "doodoo-list";
    const name = new Element("p", new Array(new Attribute("id", "name")), undefined, textContent);

    const tagline = new Element("h5", new Array(new Attribute("id", "tagline")),
    undefined, "Here to help you get your 💩 together");

    logoContainer.append(logo.getElement());
    logoContainer.append(name.getElement());
    logoContainer.append(tagline.getElement());
    sidePanel.append(logoContainer);
    content.append(sidePanel);

})();