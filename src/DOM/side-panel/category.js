
import { Element } from "../element";
import { Button } from "../html-elements/button";
import { IdiomaticText } from "../html-elements/idiomaticText";
import { Div } from "../html-elements/div";
import { CategoryItem } from "../main/categoryItem";
import { Attribute } from "../attribute";
import { Input } from "../html-elements/input";

export class Categories{

    #container;
    #categories;
    #categoryItem;
    #itemContainer;
    #categoryHeading;
    #addCategoryButton;
    #categoriesContainer;

    constructor(category){
        let categories = [
            {
                "category": "Time",
                "items": ["Inbox", "Today", "Upcoming"],
                "current": -1
            },{
                "category": "My Categories",
                "items": ["All", "Hobbies", "Work", "Family", "Friends", "Travel"],
                "current": 0
            }
        ];

        let sessionCategories = JSON.parse(sessionStorage.getItem("categories"));

        this.#categories = sessionCategories === null ? categories: sessionCategories;
        sessionStorage.setItem("categories", JSON.stringify(this.#categories));
        
        this.#categoryItem = category;
        this.#setCategories();
    }

    getCategories(){
        return this.#categoriesContainer;
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
                this.#categoryHeading = headingContainerNode;
                this.#container = containerNode;
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
        this.#addCategoryButton = addCategoryButton.getButton();
        const removeSymbolNode = removeSymbol.getIdiomaticText();
        const addSymbolNode = addSymbol.getIdiomaticText();

        removeCategoryButtonNode.append(removeSymbolNode);
        this.#addCategoryButton.append(addSymbolNode);
        buttonsContainerNode.append(removeCategoryButtonNode);
        buttonsContainerNode.append(this.#addCategoryButton);

        return buttonsContainerNode;
    }

    getAddCategoryButton(){
        return this.#addCategoryButton;
    }

    #setInitialItems(category){

        const itemContainer = new Div("category-items-container");
        this.#itemContainer = itemContainer.getDiv();
        
        category.items.forEach(item => {
            const idiomaticText = new IdiomaticText("fa-solid fa-minus");
            const idiomaticTextNode = idiomaticText.getIdiomaticText();

            idiomaticTextNode.addEventListener("click", () => {
                this.#categoryItem.removeItem(idiomaticTextNode);
            });

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

    addCategoryItemInput(){

        const container = document.getElementsByClassName("category-item-input-container")[0];

        if(container !== undefined){
            return;
        }

        const itemInputContainer = new Div("category-item-input-container");
        const cancelItemInput = new IdiomaticText("cancel-item-input fa-solid fa-xmark");
        const saveItem = new IdiomaticText("save-item fa-solid fa-floppy-disk");
        const itemInput = new Input("item-input", "text", undefined, "10");

        const itemInputContainerNode = itemInputContainer.getDiv();
        const cancelItemInputNode = cancelItemInput.getIdiomaticText();
        const saveItemNode = saveItem.getIdiomaticText();
        const itemInputNode = itemInput.getInput();

        itemInputContainerNode.append(cancelItemInputNode);
        itemInputContainerNode.append(itemInputNode);
        itemInputContainerNode.append(saveItemNode);
        
        this.#categoryHeading.after(itemInputContainerNode);
        itemInputNode.focus();

    }
}