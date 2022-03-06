
import { Element } from "../element";
import { Button } from "../html-elements/button";
import { IdiomaticText } from "../html-elements/idiomaticText";
import { Div } from "../html-elements/div";
import { CategoryItem } from "../main/categoryItem";

export class Categories{

    #categories;
    #categoryItem;
    #itemContainer;
    #categoriesContainer;

    constructor(){
        this.#categories = [
            {
                "category": "Time",
                "items": ["Inbox", "Today", "Upcoming"],
                "current": -1
            },{
                "category": "My Categories",
                "items": ["All", "Hobbies", "Work", "Family", "Friends", "Travel"],
                "current": 4
            }
        ];
        

        sessionStorage.setItem("categories", JSON.stringify(this.#categories));
        
        this.#categoryItem = new CategoryItem();
        this.#setCategories();
    }
    
    #setCategories(){
        const categories = [`Time`, `My Categories`];
        const categoriesContainer = new Div();
        this.#categoriesContainer = categoriesContainer.getDiv();

        categories.forEach((category, index) => {
            const headingContainer = new Div(`category-heading-container`);
            const headingText = new Element("h5", [], "category-heading", category);
            const container = new Div("category-container");
            
            const headingContainerNode = headingContainer.getDiv();
            const headingTextNode = headingText.getElement();
            const containerNode = container.getDiv();

            headingContainerNode.append(headingTextNode);

            if(category === "My Categories"){
                headingContainerNode.append(this.#addCategoryManagementButtons());
            }

            containerNode.append(headingContainerNode);
            this.#setInitialItems(this.#categories[index]);
            containerNode.append(this.#itemContainer);
            
            this.#categoriesContainer.append(containerNode);
        });
    }

    #addCategoryManagementButtons(){

        const buttonsContainer = new Div("category-buttons-container");
        const removeCategoryButton = new Button("remove-category-button");
        const addCategoryButton = new Button("add-category-button");
        const removeSymbol = new IdiomaticText("fa-solid fa-minus");
        const addSymbol = new IdiomaticText("fa-solid fa-plus");

        const buttonsContainerNode = buttonsContainer.getDiv();
        const removeCategoryButtonNode = removeCategoryButton.getButton();
        const addCategoryButtonNode = addCategoryButton.getElement();
        const removeSymbolNode = removeSymbol.getElement();
        const addSymbolNode = addSymbol.getElement();

        removeCategoryButtonNode.append(removeSymbolNode);
        addCategoryButtonNode.append(addSymbolNode);
        buttonsContainerNode.append(removeCategoryButtonNode);
        buttonsContainerNode.append(addCategoryButtonNode);

        return buttonsContainerNode;
    }

    #setInitialItems(category){

        const itemContainer = new Div("category-items-container");
        this.#itemContainer = itemContainer.getDiv();
        
        category.items.forEach(item => {
            const idiomaticText = new IdiomaticText("fa-solid fa-minus");
            const idiomaticTextNode = idiomaticText.getIdiomaticText();
            this.#itemContainer.append(idiomaticTextNode);
            this.#categoryItem.setCategoryItem(item);
            const itemNode = this.#categoryItem.getItem();
            this.#itemContainer.append(itemNode);
        });

    }

    getCategoryItem(){
        return this.#categoryItem;
    }

    getAllItems(){
        const items = [];

        this.#categories.forEach(category => {
            category.items.forEach(item => items.push(item));
        });

        return items;
    }

    getCategories(){
        return this.#categoriesContainer;
    }
}