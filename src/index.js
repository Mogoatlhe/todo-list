import './DOM/style/style.css';
import { CategoryItem } from './DOM/main/categoryItem';
import { Category } from './DOM/side-panel/category';
import { SidePanel } from './DOM/side-panel/sidePanel';
import { Main } from './DOM/main/main';

const LoadPages = (() => {

    const content = document.getElementById("content");

    const inboxCategoryItem = new CategoryItem("Inbox");
    const todayCategoryItem = new CategoryItem("Today");
    const upcomingCategoryItem = new CategoryItem("Upcoming");

    const allCategoryItem = new CategoryItem("All");
    const hobbiesCategoryItem = new CategoryItem("Hobbies");
    const workCategoryItem = new CategoryItem("Work");
    const familyCategoryItem = new CategoryItem("Family");
    const friendsCategoryItem = new CategoryItem("Friends");
    const travelCategoryItem = new CategoryItem("Travel");

    const categoryItems = [inboxCategoryItem, hobbiesCategoryItem, workCategoryItem,
    familyCategoryItem, friendsCategoryItem, travelCategoryItem];
    
    const byTimeItems = new Array(inboxCategoryItem, todayCategoryItem, upcomingCategoryItem);
    const byTime = new Category("Time", byTimeItems);
    const userDefinedItems = new Array(allCategoryItem, hobbiesCategoryItem,workCategoryItem, 
        familyCategoryItem, friendsCategoryItem, travelCategoryItem);
    const userDefinedCategories = new Category("My Categories", userDefinedItems);
    
    const sidePanel = new SidePanel(byTime.getCategory(), userDefinedCategories.getCategory());
    const sidePanelNode = sidePanel.getSidePanel();
    
    const main = new Main(inboxCategoryItem, categoryItems);
    const mainNode = main.getMain();

    content.append(sidePanelNode);
    content.append(mainNode);

    main.removeToDo();
    // main.editToDosEvent();
})();