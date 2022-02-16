
import { Attribute } from "../attribute";
import { Element } from "../element";


export class Category{

    #category;
    #categoryContainer;
    #categoryItemContainer;

    constructor(textContent, items){
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

        items.map(item => {
            const newItem = new Element("input",
                new Array(new Attribute("type", "button"),
                new Attribute("value", item)),
                `${item} category-item`);
            
            this.#categoryItemContainer.append(newItem.getElement());
        });

    }
}