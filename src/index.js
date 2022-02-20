import './DOM/style/style.css';
import { Category } from './DOM/side-panel/category';
import { LogoContainer } from './DOM/side-panel/logo';
import { SidePanel } from './DOM/side-panel/sidePanel';
import { Main } from './DOM/main/main';

const LoadPages = (() => {

    const content = document.getElementById("content");
    const main = new Main();
    const mainNode = main.getMain();
    
    const logoContainer = new LogoContainer();
    const byTimeItems = new Array("Inbox", "Today", "Upcoming");
    const byTime = new Category("Time", byTimeItems);
    const userDefinedItems = new Array("All", "Hobbies", "Work", "Family", "Friends", "Travel");
    const userDefinedCategories = new Category("My Categories", userDefinedItems);
    
    const sidePanel = new SidePanel(logoContainer.getLogoContainer(),
    byTime.getCategory(), userDefinedCategories.getCategory());;
    const sidePanelNode = sidePanel.getSidePanel();
    
    content.append(sidePanelNode);
    content.append(mainNode);

})();