
import { Element } from "../element";
import { CategoryItem } from "../main/categoryItem";


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
        const removeCategoryButton = new Element("buttons", [], "remove-category-button");
        const addCategoryButton = new Element("buttons", [], "add-category-button");
        const removeSymbol = new Element("i", [], "fa-solid fa-minus");
        const addSymbol = new Element("i", [], "fa-solid fa-plus");

        const categoryButtonsContainerNode = categoryButtonsContainer.getElement();
        const removeCategoryButtonNode = removeCategoryButton.getElement();
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
            this.#categoryItemContainer.append(item.getItem());
            this.#items.push();
        });

    }
}