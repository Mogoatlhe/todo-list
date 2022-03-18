import './DOM/style/style.css';
import { Categories } from './DOM/side-panel/category';
import { SidePanel } from './DOM/side-panel/sidePanel';
import { Main } from './DOM/main/main';
import { CategoryItem } from './DOM/main/categoryItem';

const LoadPages = (() => {

    const content = document.getElementById("content");
    
    const categoryItem = new CategoryItem();
    const categories = new Categories(categoryItem);
    
    const sidePanel = new SidePanel(categories);
    const sidePanelNode = sidePanel.getSidePanel();
    
    const main = new Main(categories);
    const mainNode = main.getMain();

    content.append(sidePanelNode);
    content.append(mainNode);

    main.removeToDo();
    main.changeItem();

})();