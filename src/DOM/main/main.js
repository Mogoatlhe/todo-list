
import { Element } from "../element";
import { Button } from "../html-elements/button";
import { Attribute } from "../attribute";
import { CleanToilet } from "./cleanToilet";
import { TodoButtons } from "./todoButtons";
import { Paragraph } from "../html-elements/paragraph";
import { IdiomaticText } from "../html-elements/idiomaticText";
import { Div } from "../html-elements/div";
import { SweetAlert } from "./sweetAlert";

export class Main{

    #toDoId;
    #main;
    #cleanToilet;
    #categoryItems;
    #cancelTaskBtn;
    #toDoInputContainer;
    
    #categories;
    #toDoButtons;
    #categoryName;
    #categoryItem;
    #addTaskButton;
    #tasksContainer;
    #categoryNameNode;
    #addCategoryButton;

    constructor(categories){
        this.#categories = categories;
        this.#categoryItem = this.#categories.getCategoryItem();
        this.#categoryName = this.#categoryItem.getCurrentItem();

        this.#toDoButtons = new TodoButtons(this.#categories.getAllItems());
        this.#categoryItem.setToDoButtons(this.#toDoButtons);
        this.#addCategoryButton = categories.getAddCategoryButton();
        this.#addCategoryButtonEvent();

        const cleanToilet = new CleanToilet();
        this.#cleanToilet = cleanToilet.getCleanToilet();
        
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

        this.#appendToMain();
    }
    
    preventDuplicateInputs(){
        if(this.#main.childNodes[1].id === "to-do-input-container"){
            this.#main.removeChild(this.#toDoInputContainer);
        }
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
        
        this.#addTaskButton = addTaskButton.getButton();
        const addTaskIconNode = addTaskIcon.getIdiomaticText();
        const addTaskTextNode = addTaskText.getParagraph();
        
        this.#addTaskButton.append(addTaskIconNode);
        this.#addTaskButton.append(addTaskTextNode);
    }

    #setCancelTask(){

        const cancelTaskBtn = new Button("cancel-task-button");
        const cancelTaskText = new Paragraph("Cancel");

        this.#cancelTaskBtn = cancelTaskBtn.getButton();
        const cancelTaskTextNode = cancelTaskText.getParagraph();

        this.#cancelTaskBtn.append(cancelTaskTextNode);
    }
    
    #appendToMain(){
        this.#main.append(this.#categoryNameNode);
        this.#main.append(this.#addTaskButton);
        this.#main.append(this.#cancelTaskBtn);

        if(this.#categoryItem.getToDos().length === 0){
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

        if(this.#tasksContainer !== undefined){
            const todosNodes = this.#tasksContainer.childNodes;
            if(todosNodes !== null && todosNodes.length > 0){
                [...todosNodes].forEach(todoNode => this.#tasksContainer.removeChild(todoNode));
            }
        }

        this.#categoryItem.displayToDos(this.#tasksContainer);
        
        [...this.#tasksContainer.childNodes]
            .forEach(toDoContainerNode => this.#editToDoEvent(toDoContainerNode));

        if(this.#tasksContainer.childNodes.length === 0){
            this.#tasksContainer.append(this.#cleanToilet);
        }
        
        this.removeToDo();
    }

    #addTaskEvent(){

        this.#addTaskButton.addEventListener("click", () => {
            const symbol = this.#addTaskButton.childNodes[0];
            
            const cancelNode = document.getElementsByClassName("fa-xmark")[0];

            if(cancelNode !== undefined){
                cancelNode.click();
            }

            if(this.#addTaskButton.classList.contains("input-empty")){
                new SweetAlert("error", "oops!", "name and description cannot be empty");
                return;
            }
            this.preventDuplicateInputs();

            this.#tasksContainer.style.display = "grid";
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
                
                new SweetAlert("success", "success", "todo successfully added")

                this.#addTaskButton.classList.remove("input-active");
                this.#addTaskButton.nextSibling.classList.remove("display-cancel-btn");
                this.#showToDos();
                this.#tasksContainer.style.display = "grid";

                return;
            }

            this.#manageButtons();

            let toDoNameInput;

            this.#toDoInputContainer = this.#showToDoInput();
            toDoNameInput = this.#toDoInputContainer.children[0];
            this.#main.insertBefore(this.#toDoInputContainer, this.#addTaskButton);
            toDoNameInput.focus();
            this.#tasksContainer.style.display = "none";
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
            this.#tasksContainer.style.display = "grid";

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

    #isAllowedItem(category){

        const allowedItems = ["Today", "Upcoming", "Inbox", "All", category];

        return allowedItems.every(item => item !== this.#categoryName);

    }

    #showToDoInput(){

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
        const toDoButtonsNode = this.#toDoButtons.getToDoButtons();

        this.#preventMultipleEmptyLine(toDoNameNode);
        this.#preventMultipleEmptyLine(toDoDescriptionNode);

        toDoInputContainerNode.append(toDoNameNode);
        toDoInputContainerNode.append(toDoDescriptionNode);
        toDoInputContainerNode.append(toDoButtonsNode);
        
        this.#tasksContainer.style.display = "none";

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
    
        [...isComplete].forEach(check => this.#removeToDoEvent(check, this.#categoryItem));

    }

    #removeToDoEvent(check, categoryItem){

        check.addEventListener("click", () => {
            const parent = check.parentNode;
            const grandparent = parent.parentNode;
            const id = parent.dataset.id;
            categoryItem.removeToDo(id);
            grandparent.removeChild(parent);

            if(this.#categoryItem.getToDos().length === 0){
                const cleanToilet = new CleanToilet();
                this.#cleanToilet = cleanToilet.getCleanToilet();
    
                this.#tasksContainer.append(this.#cleanToilet);
            }
        });
    }

    #editToDoEvent(toDoContainer){

        toDoContainer.addEventListener("click", () => {
            
            this.preventDuplicateInputs();

            this.#toDoId = toDoContainer.dataset.id;
            const todos = this.#categoryItem.getToDos();
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
        let category = buttonsContainer.children[1].value;
        const tasksContainer = toDoContainer.parentNode;
        
        const name = toDoContainer.getElementsByClassName("to-do-name")[0];
        const description = toDoContainer.getElementsByClassName("to-do-description")[0];
        
        if(this.#isAllowedItem(category)){
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

        if(document.getElementsByClassName("Today")[0].classList.contains("selected-category-item")){
            category = "Today"
        }else if(document.getElementsByClassName("Upcoming")[0].classList.contains("selected-category-item")){
            category = "Upcoming"
        }
        
        document.getElementsByClassName("Inbox")[0].click();
        document.getElementsByClassName("Today")[0].click();
        document.getElementsByClassName(category)[0].click();

        new SweetAlert("success", "sucess", `${name.textContent} successfully edited.`);

        this.#categoryItem.setSessionStorage();
    }

    #resetButtons(){
        const symbol = this.#addTaskButton.childNodes[0];

        if(!symbol.classList.contains("fa-edit")){
            return;
        }

        symbol.classList.remove("fa-edit");
        symbol.classList.add("fa-circle-plus");
        symbol.nextSibling.textContent = "Add task";
        this.#addTaskButton.classList.remove("input-active");
        this.#addTaskButton.nextSibling.classList.remove("display-cancel-btn");
    }

    #displayInputData(data){

        document.getElementById("to-do-name-input").textContent = data.name;
        document.getElementById("to-do-description-input").textContent = data.description;
        document.getElementById("due-date").value = data.date;
        

        if(this.#categoryName !== "All"){
            this.#setSelectedCategoryIndex(data.category);
        }

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

    changeItem(){
        const itemNodes = this.#categoryItem.getItemNodes();

        [...itemNodes].forEach(itemNode => this.#changeItemEvent(itemNode));
    }

    #changeItemEvent(item){

        if(item.classList.contains(this.#categoryName)){
            item.classList.add("selected-category-item");
            item.previousSibling.classList.add("selected-category-item");
        }

        item.addEventListener("click", () => {
            const cancelNode = document.getElementsByClassName("fa-xmark")[0];

            if(cancelNode !== undefined){
                cancelNode.click();
            }
            
            if(item.classList.contains("selected-category-item")){
                return;
            }

            this.#categoryItem.changeCurrentItem(item.classList[0]);
            this.#categoryName = this.#categoryItem.getCurrentItem();
            this.#categoryNameNode.textContent = this.#categoryName;
            const prevSelected = document.getElementsByClassName("selected-category-item");

            [...prevSelected].forEach(curr => curr.classList.remove("selected-category-item"));

            item.classList.add("selected-category-item");
            item.previousSibling.classList.add("selected-category-item");
            this.#showToDos();
        });
    }

    #addCategoryButtonEvent(){
        this.#addCategoryButton.addEventListener("click", () => this.#categories.addCategoryItemInput(this));
    }

    setItem(){
        const itemName = this.#categoryName;
        document.getElementsByClassName("Inbox")[0].click();
        document.getElementsByClassName(itemName)[0].click();
    }

}
