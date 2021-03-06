
import { Paragraph } from "../html-elements/paragraph";
import { Button } from "../html-elements/button";
import { ToDo } from "./toDo";
import { isFuture, isToday } from 'date-fns';
import { SweetAlert } from "./sweetAlert";

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
        let message;
        const parent = node.parentNode;
        const sibling = node.nextSibling;
        const siblingName = sibling.classList[0];
        const categories = this.getCategories();
        const unRemovables = ["Inbox", "Today", "Upcoming", "All"];
        const isUnremovable = unRemovables.some(unRemovable => unRemovable === siblingName);

        for (const category of categories) {
            const index = category.items.findIndex(item => item === siblingName);

            if(index === -1){
                continue;
            }

            this.#removeToDoByCategory(siblingName);
            const curr = this.getCurrentItem();

            document.getElementsByClassName("Inbox")[0].click();

            if(siblingName === curr || curr === "All"){
                document.getElementsByClassName("All")[0].click();
            }
            
            if(siblingName === curr && isUnremovable){
                document.getElementsByClassName(siblingName)[0].click();
            }
            
            if(siblingName === "All" && siblingName !== curr){
                document.getElementsByClassName(curr)[0].click();
            }

            if(!isUnremovable){
                category.items.splice(index, 1);
                sessionStorage.setItem("categories", JSON.stringify(categories));
                parent.removeChild(node);
                parent.removeChild(sibling);
                this.#toDoButtons.removeSelectionOption(siblingName);
                message = `${siblingName} along with its todos have been removed`;
            }else{
                if(siblingName === "All"){
                    message = "All todos have been succesfully cleared"
                }else{
                    message = `All todos from "${siblingName}" have been cleared`;
                }
            }

            new SweetAlert("success", "success", message);

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
        }else if(this.#itemName === "Upcoming"){
            myTodos = this.#toDos.filter(toDo => isFuture(toDo.getDate()));
        }else if(this.#itemName === "Today"){
            myTodos = this.#toDos.filter(toDo => isToday(toDo.getDate()));
        }else{
            myTodos = this.#toDos.filter(toDo => toDo.getToDo().category === this.#itemName);
        }

        return myTodos;
    }

    getCategories(){
        return JSON.parse(sessionStorage.getItem("categories"));
    }

    #removeToDoByCategory(category){

        if(category === "All"){
            this.#toDos = [];
            this.setSessionStorage();
            return;
        }else if(category === "Today"){
            this.#toDos.forEach(todo => {
                if(isToday(todo.getDate())){
                    this.removeToDo(todo.getToDo().id);
                }
            });
            return;    
        }else if(category === "Upcoming"){
            this.#toDos.forEach(todo => {
                if(isFuture(todo.getDate())){
                    this.removeToDo(todo.getToDo().id);
                }
            });

            return;
        }
        
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