
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
        let id;
        id = this.isToDosEmpty() ? 1 : this.#todos[this.#todos.length - 1].getToDo().id + 1;
        const toDo = new ToDo(id, name, description, date, categoryName, priority);
        
        this.addToDo(toDo);
    }

    addToDo(todo){
        this.#todos.push(todo);

        const todos = [];

        this.#todos.map(toDo => todos.push(toDo.getToDo()))

        sessionStorage.setItem("todos", JSON.stringify(todos));

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

    getToDos(){
        return this.#todos;
    }

    displayToDos(container){

        console.log(sessionStorage.getItem("todos"));
        const todos = JSON.parse(sessionStorage.getItem("todos"));

        todos.map(todo => {
            container.append(this.#displayToDo(todo.id, todo.name, todo.description));
        });
    }

    #displayToDo(id, toDoName, toDoDescription){

        const toDoContainerId = new Attribute("data-id", id);
        const toDoContainerAttrArr = [toDoContainerId]; 
        const toDoContainer = new Element("div", toDoContainerAttrArr, "to-do-container");
        const toDoContainerNode = toDoContainer.getElement();

        const gripDots = new Element("i", [], "fa-solid fa-grip-vertical");
        const gripDotsNode = gripDots.getElement();

        const isCompleteContainer = new Element("div", [], "is-complete-container");
        const isCompleteContainerNode = isCompleteContainer.getElement();

        const check = new Element("i", [], "fa-solid fa-check");
        const checkNode = check.getElement();

        const name = new Element("h5", [], "to-do-name", toDoName)
        const nameNode = name.getElement();

        const description = new Element("h6", [], "to-do-description", toDoDescription);
        const descriptionNode = description.getElement();

        const hr = new Element("hr", []);
        const hrNode = hr.getElement();

        isCompleteContainerNode.append(checkNode);
        toDoContainerNode.append(gripDotsNode);
        toDoContainerNode.append(isCompleteContainerNode);
        toDoContainerNode.append(nameNode);
        toDoContainerNode.append(descriptionNode);
        toDoContainerNode.append(hrNode)
        
        return toDoContainerNode;

    }

}