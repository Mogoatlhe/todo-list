
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

    removeToDo(id){
        this.#todos.map((todo, index) => {
            if(todo.getToDo().id === id){
                this.#todos.splice(index, 1);
            }
        });

        sessionStorage.setItem("todos", this.#todos);
    }

    isToDosEmpty(){
        return this.#todos.length === 0 ? true : false;
    }

    getToDos(){
        return this.#todos;
    }

    assignTodos(){

        if(sessionStorage.getItem("todos") === null){
            return;
        }

        const todos = JSON.parse(sessionStorage.getItem("todos"));

        todos.map(todoData => {
            const toDoObject = new ToDo(todoData.id, todoData.name, todoData.description,
                todoData.date, todoData.categoryName, todoData.priority);
            
            this.#todos.push(toDoObject);
        });

    }

}