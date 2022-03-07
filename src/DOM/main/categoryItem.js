
import { Paragraph } from "../html-elements/paragraph";
import { Button } from "../html-elements/button";
import { ToDo } from "./toDo";

export class CategoryItem{

    #item;
    #items;
    #toDos;
    #itemName;
    
    constructor(){
        this.#items = [];
        this.#toDos = [];
        this.#itemName = this.getCurrentItem();
    }

    setCategoryItem(itemName){

        const button = new Button(`${itemName} category-item`);
        const paragraph = new Paragraph(itemName, [], "category-item-text");

        const buttonNode = button.getButton();
        const paragraphNode = paragraph.getParagraph();

        buttonNode.append(paragraphNode);
        this.#item = buttonNode;
        this.#items.push(this.#item);

    }

    selectItem(){

        this.#items.forEach(item => {
            item.addEventListener("click", () => {

                if(item.classList.contains("selected-category-item")){
                    return;
                }

                const prevSelected = document.getElementsByClassName("selected-category-item");

                [...prevSelected].forEach(curr => curr.classList.remove("selected-category-item"));

                item.classList.add("selected-category-item");
                item.previousSibling.classList.add("selected-category-item");
            });
        });
    }

    getItem(){
        return this.#item;
    }

    #getItems(){
        return JSON.parse(sessionStorage.getItem("categories"));
    }

    getCurrentItem(){
        const categories = this.#getItems();
        let currentItem;

        categories.forEach(category => {

            if(category.current !== -1){
                currentItem = category.items[category.current];
            }
        });

        return currentItem;
    }

    assignTodos(){

        if(sessionStorage.getItem("todos") === null){
            return;
        }

        const todos = JSON.parse(sessionStorage.getItem("todos"));

        todos.forEach(todoData => {
            const toDoObject = new ToDo(todoData.id, todoData.name, todoData.description,
                todoData.date, todoData.category, todoData.priority);
            
            this.#toDos.push(toDoObject);
        });

    }

    createToDo(name, description, date, categoryName, priority){
        let id;
        id = this.isToDosEmpty() ? 1 : this.#toDos[this.#toDos.length - 1].getToDo().id + 1;
        const toDo = new ToDo(id, name, description, date, categoryName, priority);
        
        this.#toDos.push(toDo);
        this.setSessionStorage();
    }

    removeToDo(id){

        const index = this.#toDos.findIndex(todo => todo.getToDo().id == id);
        this.#toDos.splice(index, 1);
        
        this.setSessionStorage();
    }

    setSessionStorage(){
        const todos = [];

        this.#toDos.map(toDo => todos.push(toDo.getToDo()))

        sessionStorage.setItem("todos", JSON.stringify(todos));   
    }

    isToDosEmpty(){
        return this.#toDos.length === 0 ? true : false;
    }

    getToDos(){

        let myTodos;
        if(this.#itemName === "All"){
            myTodos = this.#toDos;
        }else{
            myTodos = this.#toDos.filter(toDo => toDo.getToDo().category === this.#itemName);
        }

        return myTodos;
    }

    displayToDos(tasksContainer){
        const myTodos = this.getToDos();

        myTodos.forEach(toDo => tasksContainer.append(toDo.displayToDo(this.#itemName)));
    }

}