
import { Element } from "../element";
import { Button } from "../html-elements/button";
import { Attribute } from "../attribute";
import { CleanToilet } from "./cleanToilet";
import { TodoButtons } from "./todoButtons";
import { Paragraph } from "../html-elements/paragraph";
import { IdiomaticText } from "../html-elements/idiomaticText";
import { Div } from "../html-elements/div";

export class Main{

    #toDoId;
    #main;
    #cleanToilet;
    #categoryName;
    #categoryItem;
    #categoryItems;
    #addTaskButton;
    #cancelTaskBtn;
    #tasksContainer;
    #categoryNameNode;
    #toDoInputContainer;

    constructor(currentCategoryItem, categoryItems){
        this.#categoryName = currentCategoryItem.getName();

        this.#categoryItems = categoryItems;
        this.#categoryItem = this.getCurrentCategoryItem();
        
        this.#categoryItem.assignTodos();

        this.setMain();
    }

    setMain(){

        const tasksContainer = new Attribute("id", "tasks-container");
        
        const main = new Element("main", []);
        const todosDisplay = new Div(undefined, [tasksContainer]);
        this.#main = main.getElement();
        this.#tasksContainer = todosDisplay.getDiv();
        this.#setCategoryName();
        this.#setAddTask();
        this.#setCancelTask();

        this.appendToMain();
    }
    
    #setCategoryName(){
        const categoryName = new Element("h4", [], "current-category", this.#categoryName);
        this.#categoryNameNode = categoryName.getElement();
    }

    #setAddTask(){

        const addTaskAtrributes = [new Attribute("id", "add-task")];
        const addTaskButton = new Button("add-task-button");
        const addTaskIcon = new IdiomaticText("fa-solid fa-circle-plus");
        const addTaskText = new Paragraph("Add task", addTaskAtrributes);
        
        this.#addTaskButton = addTaskButton.getElement();
        const addTaskIconNode = addTaskIcon.getIdiomaticText();
        const addTaskTextNode = addTaskText.getElement();
        
        this.#addTaskButton.append(addTaskIconNode);
        this.#addTaskButton.append(addTaskTextNode);
    }

    #setCancelTask(){

        const cancelTaskBtn = new Button("cancel-task-button");
        const cancelTaskText = new Paragraph("Cancel");

        this.#cancelTaskBtn = cancelTaskBtn.getElement();
        const cancelTaskTextNode = cancelTaskText.getElement();

        this.#cancelTaskBtn.append(cancelTaskTextNode);
    }
    
    appendToMain(){
        this.#main.append(this.#categoryNameNode);
        this.#main.append(this.#addTaskButton);
        this.#main.append(this.#cancelTaskBtn);

        if(sessionStorage.getItem("todos") === null || sessionStorage.getItem("todos") === ""){
            const cleanToilet = new CleanToilet();
            this.#cleanToilet = cleanToilet.getCleanToilet();

            this.#tasksContainer.append(this.#cleanToilet);   
        }else{
            this.#showToDos();
        }
        
        this.#addTaskEvent();
        this.#cancelTaskEvent();
        
        this.#main.append(this.#tasksContainer);
    }

    #showToDos(){

        if(this.#categoryItem === undefined){
            return;
        }
        
        this.#categoryItem.getToDos().map(todo => {
            const toDoContainerNode = todo.displayToDo(this.#categoryName);
            
            if(toDoContainerNode === undefined){
                return;
            }

            this.#tasksContainer.append(toDoContainerNode);
            this.#editToDoEvent(toDoContainerNode);
        });
        
    }

    #addTaskEvent(){

        this.#addTaskButton.addEventListener("click", () => {
            const symbol = this.#addTaskButton.childNodes[0];
            this.preventDuplicateInputs();
            
            if(this.#addTaskButton.classList.contains("input-empty")){
                return;
            }

            if(symbol.classList.contains("fa-edit")){
                this.#resetButtons();
                this.#editToDo();
                return;
            }
            
            if(this.#addTaskButton.classList.contains("input-active")){
                
                this.#createToDo(this.#toDoInputContainer);
                
                if(this.#tasksContainer.contains(this.#cleanToilet)){
                    this.#tasksContainer.removeChild(this.#cleanToilet);
                }

                this.#addTaskButton.classList.remove("input-active");
                this.#addTaskButton.nextSibling.classList.remove("display-cancel-btn");
                this.#appendToDo();
                this.removeLastToDo();

                return;
            }

            this.#manageButtons();

            let toDoNameInput;

            this.#toDoInputContainer = this.#showToDoInput();
            toDoNameInput = this.#toDoInputContainer.children[0];
            this.#main.insertBefore(this.#toDoInputContainer, this.#addTaskButton);
            toDoNameInput.focus();
        });

    }

    #manageButtons(){
        
        this.#addTaskButton.classList.add("input-empty");
        this.#addTaskButton.classList.add("input-active");
        this.#addTaskButton.nextSibling.classList.add("display-cancel-btn");
        
    }

    #cancelTaskEvent(){

        this.#cancelTaskBtn.addEventListener("click", () => {
            
            const toDoInputContainer = document.getElementById("to-do-input-container");
            const previousSibling = this.#cancelTaskBtn.previousSibling;
            
            if(toDoInputContainer === null){
                return;
            }

            this.#main.removeChild(toDoInputContainer);

            this.#cancelTaskBtn.classList.remove("display-cancel-btn");
            previousSibling.classList.remove("input-empty");
            previousSibling.classList.remove("input-active");

            this.#resetButtons();

        });

    }

    #getPriorityClass(container){
        const priorityFlagsContainer = container.children[2];

        const priorityFlag = [...priorityFlagsContainer.children]
            .find(flag => flag.classList.contains("fa-flag"));

        const priorityClasses = priorityFlag.className;
        const position = priorityClasses.indexOf("priority-");

        return priorityClasses.slice(position, 10);
    }

    #createToDo(toDoInputContainer){
        const nameInput = toDoInputContainer.children[0].value;
        const description = toDoInputContainer.children[1].value;
        const buttonsContainer = toDoInputContainer.children[2];
        const dueDate = buttonsContainer.children[0].value;
        const categoryName = buttonsContainer.children[1].value;
        
        const priorityClasses = this.#getPriorityClass(buttonsContainer);
        
        this.#categoryItem
        .createToDo(nameInput, description, dueDate, categoryName, priorityClasses);
        
    }

    getCurrentCategoryItem(){
        const itemIndex = this.#categoryItems
        .findIndex(item => item.getName() === this.#categoryName);
        
        return this.#categoryItems[itemIndex];
    }
    
    #appendToDo(){
        
        const toDos = this.#categoryItem.getToDos();
        const lastTodo = toDos[toDos.length - 1];
        const lastTodoCategory = lastTodo.getToDo().category;

        if(lastTodoCategory !== this.#categoryName){
            return;
        }

        const lastTodoNode = lastTodo.displayToDo();
        this.#tasksContainer.append(lastTodoNode);
        this.#editToDoEvent(lastTodoNode);

    }

    #showToDoInput(){

        const toDoButtons = new TodoButtons(this.#categoryItems);
        const toDoInputContainerId = new Attribute("id", "to-do-input-container");
        const toDoNameId = new Attribute("id", "to-do-name-input");
        const toDoNamePlaceholder = new Attribute("placeholder", "e.g, Renew Gym Membership");
        const toDoDescriptionId = new Attribute("id", "to-do-description-input");
        const toDoDescriptionPlaceholder = new Attribute("placeholder", "Description");

        const toDoInputAttrArr = [toDoInputContainerId];
        const todoNameAttrArr = [toDoNameId, toDoNamePlaceholder];
        const todoDescriptionAttrArr = [toDoDescriptionId, toDoDescriptionPlaceholder];

        const toDoInputContainer = new Div(undefined, toDoInputAttrArr);
        const toDoName = new Element("textarea", todoNameAttrArr);
        const toDoDescription = new Element("textarea", todoDescriptionAttrArr);

        const toDoInputContainerNode = toDoInputContainer.getDiv();
        const toDoNameNode = toDoName.getElement();
        const toDoDescriptionNode = toDoDescription.getElement();
        const toDoButtonsNode = toDoButtons.getToDoButtons();

        this.#preventMultipleEmptyLine(toDoNameNode);
        this.#preventMultipleEmptyLine(toDoDescriptionNode);

        toDoInputContainerNode.append(toDoNameNode);
        toDoInputContainerNode.append(toDoDescriptionNode);
        toDoInputContainerNode.append(toDoButtonsNode);
        
        return toDoInputContainerNode;

    }

    #preventMultipleEmptyLine(node){

        let returnPressCount = 0;
        
        node.addEventListener("keyup", (e) => {
            
            if(e.keyCode === 13){
                returnPressCount++;
            }else{
                returnPressCount = 0;
            }

            if(returnPressCount === 3){
                returnPressCount = 0;
                
                if(node.value.includes("\n\n\n")){
                    node.value = node.value.slice(0, node.value.length - 3);
                    node.blur();
                }
            }

            this.#checkEmptyFields(node);
            
        });

    }

    #checkEmptyFields(node){

        let otherNode;
        if(node.getAttribute("id") === "to-do-name-input"){
            otherNode = document.getElementById("to-do-description-input");
        }else{
            otherNode = document.getElementById("to-do-name-input");
        }

        const nodes = [otherNode.value, node.value];

        let empty = nodes.some(value => {

            let spaceLength = [...value].filter(ch => ch === " ").length;
            let newLineLength = [...value].filter(ch => ch === "\n").length;
            
            let emptyCharactersLength = spaceLength + newLineLength;

            if(value.length === 0 || emptyCharactersLength === value.length){
                return true;
            }

            return false;

        });

        this.#preventEmptyInput(empty);

    }

    #preventEmptyInput(isEmpty){

        if(isEmpty){

            if(!this.#addTaskButton.classList.contains("input-empty")){
                this.#addTaskButton.classList.add("input-empty");
            }

            return;
        }

        this.#addTaskButton.classList.remove("input-empty");
    }

    removeToDo(){

        const isComplete = document.getElementsByClassName("is-complete-container");
    
        [...isComplete].map(check => this.#removeToDoEvent(check, this.#categoryItem));

    }

    removeLastToDo(){
        const isComplete = document.getElementsByClassName("is-complete-container");
        const todoArr = [...isComplete];
        const lastTodo = todoArr[todoArr.length - 1];

        this.#removeToDoEvent(lastTodo, this.#categoryItem);
    }

    #removeToDoEvent(check, categoryItem){

        check.addEventListener("click", () => {
            const parent = check.parentNode;
            const grandparent = parent.parentNode;
            const id = parent.dataset.id;
            categoryItem.removeToDo(id);
            grandparent.removeChild(parent);
        });
    }

    #editToDoEvent(toDoContainer){

        toDoContainer.addEventListener("click", () => {
            
            this.preventDuplicateInputs();

            this.#toDoId = toDoContainer.dataset.id;
            const todos = this.getCurrentCategoryItem().getToDos();
            const index = todos.findIndex(todo => todo.getToDo().id == this.#toDoId);

            if(index === -1){
                return;
            }

            const toDoData = todos[index].getToDo();

            this.#toDoInputContainer = this.#showToDoInput();
            this.#main.insertBefore(this.#toDoInputContainer, this.#addTaskButton);

            this.#displayInputData(toDoData);
            this.#manageButtons();

            const symbol = this.#addTaskButton.childNodes[0];
            symbol.classList.remove("fa-circle-plus");
            symbol.classList.add("fa-edit");
            this.#addTaskButton.childNodes[1].textContent = "Edit task";
        });

    }

    #editToDo(){

        const todoData = this.#categoryItem.getToDos();
        const index = todoData.findIndex(todo => todo.getToDo().id == this.#toDoId);

        const toDoContainer = document.querySelector(`[data-id="${this.#toDoId}"]`);
        const buttonsContainer = this.#toDoInputContainer.children[2];
        const category = buttonsContainer.children[1].value;
        const tasksContainer = toDoContainer.parentNode;
        
        const name = toDoContainer.getElementsByClassName("to-do-name")[0];
        const description = toDoContainer.getElementsByClassName("to-do-description")[0];
        
        if(category !== this.#categoryName){
            tasksContainer.removeChild(toDoContainer);
        }else{
            name.textContent = this.#toDoInputContainer.children[0].value;
            description.textContent = this.#toDoInputContainer.children[1].value;
        }
        
        todoData[index].getToDo().name = name.textContent;
        todoData[index].getToDo().description = description.textContent;
        todoData[index].getToDo().date = buttonsContainer.children[0].value;
        todoData[index].getToDo().category = category;
        todoData[index].getToDo().priority = this.#getPriorityClass(buttonsContainer);

        this.#categoryItem.setSessionStorage();
    }

    #resetButtons(){
        const symbol = this.#addTaskButton.childNodes[0];

        if(!symbol.classList.contains("fa-edit")){
            return;
        }

        symbol.classList.remove("fa-edit");
        symbol.classList.add("fa-circle-plus");
        this.#addTaskButton.childNodes[1].textContent = "Add task";
        this.#addTaskButton.classList.remove("input-active");
        this.#addTaskButton.nextSibling.classList.remove("display-cancel-btn");
    }

    preventDuplicateInputs(){
        if(this.#main.childNodes[1].id === "to-do-input-container"){
            this.#main.removeChild(this.#toDoInputContainer);
        }
    }

    #displayInputData(data){

        document.getElementById("to-do-name-input").textContent = data.name;
        document.getElementById("to-do-description-input").textContent = data.description;
        document.getElementById("due-date").value = data.date;

        this.#setSelectedCategoryIndex(data.category);

        this.#setPriorityFlag(data.priority);
    }

    #setSelectedCategoryIndex(category){
        const selection = document.getElementById("category-button");
        const options = selection.options;

        const option = [...options].find(option => option.value === category);

        selection.index = option.index;
    }

    #setPriorityFlag(priority){

        const flagsContainer = document.getElementById("priority-flags-container");
        const flags = flagsContainer.children;

        const selectedFlag = [...flags].find(flag => flag.classList.contains(`${priority}`));
        const neutralFlags = [...flags].filter(flag => !flag.classList.contains(`${priority}`));

        selectedFlag.classList.remove("fa-font-awesome");
        selectedFlag.classList.add("fa-flag");
        neutralFlags.forEach(flag => {
            flag.classList.remove("fa-flag");
            flag.classList.add("fa-font-awesome");

        });
    }

    getMain(){
        return this.#main;
    }

}
