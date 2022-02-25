
import { Element } from "../element";
import { Attribute } from "../attribute";
import { ToDo } from "./toDo";

export class CategoryItem{

    #name;
    #item;
    #todos;

    constructor(itemName){
        this.#name = itemName;
        this.#todos = new Array();
        this.setCategoryItem(itemName);
    }

    setCategoryItem(itemName){

        const item = new Element("input", new Array(new Attribute("type", "button"),
        new Attribute("value", itemName)), `${itemName} category-item`);

        this.#item = item.getElement();
    }

    getItem(){
        return this.#item;
    }

    getName(){
        return this.#name;
    }

    createToDo(name, description, date, categoryName, priority){
        const toDo = new ToDo(name, description, date, categoryName, priority);
        this.addToDo(toDo);
        console.log(toDo);
    }

    addToDo(todo){
        this.#todos.push(todo);
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