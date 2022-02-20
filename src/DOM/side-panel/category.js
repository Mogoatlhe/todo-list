
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
        const categoryHeading = new Element("h5", [], `category-heading`, textContent);
        const categoryContainer = new Element("div", [], "category-container");
        this.#categoryContainer = categoryContainer.getElement();

        this.#category = this.#categoryContainer;
        this.#category.append(categoryHeading.getElement());
        
        if(items !== undefined){
            this.setCategoryItems(items);
            this.#categoryContainer.append(this.#categoryItemContainer);
        }
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