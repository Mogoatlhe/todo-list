
import { Paragraph } from "../paragraph";
import { Button } from "../button";
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

        const button = new Button(`${itemName} category-item`);
        const paragraph = new Paragraph(itemName, [], "category-item-text");

        const buttonNode = button.getButton();
        const paragraphNode = paragraph.getParagraph();

        buttonNode.append(paragraphNode);
        this.#item = buttonNode;
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
        this.setSessionStorage();

    }

    removeToDo(id){

        const index = this.#todos.findIndex(todo => todo.getToDo().id == id);
        this.#todos.splice(index, 1);
        
        this.setSessionStorage();
    }

    setSessionStorage(){
        const todos = [];

        this.#todos.map(toDo => todos.push(toDo.getToDo()))

        sessionStorage.setItem("todos", JSON.stringify(todos));   
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
                todoData.date, todoData.category, todoData.priority);
            
            this.#todos.push(toDoObject);
        });

    }

}