
import { Attribute } from "../attribute";
import { Element } from "../element";


export class Category{

    #todos;
    #category;
    #categoryContainer;
    #categoryItemContainer;

    constructor(textContent, items){
        this.#todos = new Array();
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

        items.map((item, index) => {
            const newItem = new Element("input",
                new Array(new Attribute("type", "button"),
                new Attribute("value", item)),
                `${item} category-item`);
            
            const newItemNode = newItem.getElement();
            if(index  === 0){
                newItemNode.addElementClass("active");
            }
            
            this.#categoryItemContainer.append(newItemNode);
        });

    }

    addToDo(todo){
        this.#todos.add(todo);
    }

    removeTodo(id){
        if(this.isToDosEmpty()){
            return;
        }

        this.#todos.map((todo, index) => {
            if(todo.id === id){
                this.#todos.splice(index, 1);
            }
        });
    }

    isToDosEmpty(){
        return this.#todos.length === 0 ? true : false;
    }
}