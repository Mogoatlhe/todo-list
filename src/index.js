import './DOM/style/style.css';
import { Element } from './DOM/element';
import { Attribute } from './DOM/attribute';
import { LogoContainer } from './DOM/side-panel/logo';
import { Category } from './DOM/side-panel/category';

const Main = (() => {

    const content = document.getElementById("content");
    const sidePanelAttribute = new Attribute("id", "side-panel");
    let sidePanel = new Element("div", new Array(sidePanelAttribute));
    sidePanel = sidePanel.getElement();
    
    const logoContainer = new LogoContainer();
    const byTimeItems = new Array("Today", "Upcoming");
    const byTime = new Category("Time", byTimeItems);
    const userDefinedCategories = new Category("My Categories");

    sidePanel.append(logoContainer.getLogoContainer());
    sidePanel.append(byTime.getCategory());
    sidePanel.append(userDefinedCategories.getCategory());
    content.append(sidePanel);

})();