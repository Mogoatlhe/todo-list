
import { Paragraph } from "../html-elements/paragraph";
import { Button } from "../html-elements/button";
import { ToDo } from "./toDo";

export class CategoryItem{

    #item;
    #items;
    #toDos;
    #itemName;
    #toDoButtons;

    constructor(){
        this.#items = [];
        this.#toDos = [];
        this.#itemName = this.getCurrentItem();
    }

    getCurrentItem(){
        const categories = this.getCategories();
        let currentItem;

        if(categories === null){
            return;
        }

        categories.forEach(category => {
            if(category.current !== -1){
                currentItem = category.items[category.current];
            }
        });

        return currentItem;
    }

    removeItem(node){
        const parent = node.parentNode;
        const sibling = node.nextSibling;
        const siblingName = sibling.classList[0];
        const categories = this.getCategories();
        const unRemovables = ["Inbox", "Today", "Upcoming", "All"];

        for (const category of categories) {
            const index = category.items.findIndex(item => item === siblingName);

            if(index === -1){
                continue;
            }

            this.#removeToDoByCategory(siblingName);
            const curr = this.getCurrentItem();

            if(siblingName === curr || curr === "All"){
                document.getElementsByClassName("Inbox")[0].click();
                document.getElementsByClassName("All")[0].click();
            }

            if(!unRemovables.some(unRemovable => unRemovable === siblingName)){
                category.items.splice(index, 1);
                sessionStorage.setItem("categories", JSON.stringify(categories));
                parent.removeChild(node);
                parent.removeChild(sibling);
                this.#toDoButtons.removeSelectionOption(siblingName);

            }

        }
    }

    setToDoButtons(toDoButtons){
        this.#toDoButtons = toDoButtons;
    }

    getToDoButtons(){
        return this.#toDoButtons;
    }

    changeCurrentItem(category){
        const categories = this.getCategories();

        categories.forEach(c => {
            const currentIndex = c.items.findIndex(item => item === category);
            c.current = currentIndex;
        });

        sessionStorage.setItem("categories", JSON.stringify(categories));
        this.setItem();
    }

    setItem(){
        this.#itemName = this.getCurrentItem();
        const categories = this.getCategories();
        
        for (const category of categories) {
            if(category.current === -1){
                continue;
            }

            this.#itemName = category.items[category.current];
            break;
        }
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

    displayToDos(tasksContainer){
        const myTodos = this.getToDos();

        myTodos.forEach(toDo => tasksContainer.append(toDo.displayToDo(this.#itemName)));
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

    getCategories(){
        return JSON.parse(sessionStorage.getItem("categories"));
    }

    #removeToDoByCategory(category){
        
        this.#toDos.forEach(todo => {
            if(todo.getToDo().category === category){
                this.removeToDo(todo.getToDo().id);
            }
        });

    }

    getItemNodes(){
        return this.#items;
    }

    getItem(){
        return this.#item;
    }

    createToDo(name, description, date, categoryName, priority){
        let id;
        id = this.isToDosEmpty() ? 1 : this.#toDos[this.#toDos.length - 1].getToDo().id + 1;
        const toDo = new ToDo(id, name, description, date, categoryName, priority);
        
        this.#toDos.push(toDo);
        this.setSessionStorage();
    }

    removeToDo(id){
        this.#toDos = this.#toDos.filter(todo => todo.getToDo().id != id);
        this.setSessionStorage();
    }

    setSessionStorage(){
        const todos = [];

        this.#toDos.map(toDo => todos.push(toDo.getToDo()));

        sessionStorage.setItem("todos", JSON.stringify(todos));   
    }

    isToDosEmpty(){
        return this.#toDos.length === 0 ? true : false;
    }

}