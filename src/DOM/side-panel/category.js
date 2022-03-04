
import { Element } from "../element";
import { Button } from "../button";
import { IdiomaticText } from "../idiomaticText";

export class Category{

    #items;
    #category;
    #categoryContainer;
    #categoryItemContainer;

    constructor(textContent, items){
        this.#items = new Array();
        this.setCategory(textContent, items);
    }

    setCategory(textContent, items){
        const categoryHeadingContainer = new Element("div", [], `category-heading-container`);
        const categoryHeading = new Element("h5", [], `category-heading`, textContent);
        const categoryContainer = new Element("div", [], "category-container");
        this.#categoryContainer = categoryContainer.getElement();
        
        const categoryHeadingContainerNode = categoryHeadingContainer.getElement();
        categoryHeadingContainerNode.append(categoryHeading.getElement());

        if(textContent === "My Categories"){
            categoryHeadingContainerNode.append(this.#addCategoryManagementButtons());
        }

        this.#category = this.#categoryContainer;
        this.#category.append(categoryHeadingContainerNode);
        
        if(items !== undefined){
            this.setCategoryItems(items);
            this.#categoryContainer.append(this.#categoryItemContainer);
        }
    }

    #addCategoryManagementButtons(){

        const categoryButtonsContainer = new Element("div", [], "category-buttons-container");
        const removeCategoryButton = new Button("remove-category-button");
        const addCategoryButton = new Button("add-category-button");
        const removeSymbol = new Element("i", [], "fa-solid fa-minus");
        const addSymbol = new Element("i", [], "fa-solid fa-plus");

        const categoryButtonsContainerNode = categoryButtonsContainer.getElement();
        const removeCategoryButtonNode = removeCategoryButton.getButton();
        const addCategoryButtonNode = addCategoryButton.getElement();
        const removeSymbolNode = removeSymbol.getElement();
        const addSymbolNode = addSymbol.getElement();

        removeCategoryButtonNode.append(removeSymbolNode);
        addCategoryButtonNode.append(addSymbolNode);
        categoryButtonsContainerNode.append(removeCategoryButtonNode);
        categoryButtonsContainerNode.append(addCategoryButtonNode);

        return categoryButtonsContainerNode;
    }

    getCategory(){
        return this.#category;
    }

    setCategoryItems(items){

        const categoryItemContainer = new Element("div", [],
        "category-items-container");
        this.#categoryItemContainer = categoryItemContainer.getElement();

        items.map((item) => {
            const idiomaticText = new IdiomaticText("fa-solid fa-minus");
            const idiomaticTextNode = idiomaticText.getIdiomaticText();
            const itemNode = item.getItem();

            this.#categoryItemContainer.append(itemNode);
            this.#categoryItemContainer.append(idiomaticTextNode);
            this.#items.push();
        });

    }
}