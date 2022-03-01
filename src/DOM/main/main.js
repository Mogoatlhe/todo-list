
import { Element } from "../element";
import { Attribute } from "../attribute";
import { CleanToilet } from "./cleanToilet";
import { TodoButtons } from "./todoButtons";

export class Main{

    #main;
    #cleanToilet;
    #categoryName;
    #categoryItem;
    #categoryItems;
    #addTaskButton;
    #cancelTaskBtn;
    #tasksContainer;
    #categoryNameNode;

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
        const todosDisplay = new Element("div", [tasksContainer]);
        this.#main = main.getElement();
        this.#tasksContainer = todosDisplay.getElement();
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

        const addTaskButton = new Element("button", [], "add-task-button");
        const addTaskIcon = new Element("i", [], "fa-solid fa-circle-plus");
        const addTaskText = new Element("p", [new Attribute("id", "add-task")], undefined, "Add task");
        
        this.#addTaskButton = addTaskButton.getElement();
        const addTaskIconNode = addTaskIcon.getElement();
        const addTaskTextNode = addTaskText.getElement();
        
        this.#addTaskButton.append(addTaskIconNode);
        this.#addTaskButton.append(addTaskTextNode);
    }

    #setCancelTask(){

        const cancelTaskBtn = new Element("button", [], "cancel-task-button");
        const cancelTaskText = new Element("p", [], undefined, "Cancel");

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
        });
        
    }

    #addTaskEvent(){

        let toDoInputContainer;
        let toDoNameInput;

        this.#addTaskButton.addEventListener("click", () => {
            
            if(this.#addTaskButton.classList.contains("input-empty")){
                return;
            }
            
            if(this.#addTaskButton.classList.contains("input-active")){
                
                this.#createToDo(toDoInputContainer);
                
                if(this.#tasksContainer.contains(this.#cleanToilet)){
                    this.#tasksContainer.removeChild(this.#cleanToilet);
                }

                this.#addTaskButton.classList.remove("input-active");
                this.#main.removeChild(toDoInputContainer);
                this.#addTaskButton.nextSibling.classList.remove("display-cancel-btn");
                this.#appendToDo();

                return;
            }

            this.#addTaskButton.classList.add("input-empty");
            this.#addTaskButton.classList.add("input-active");
            this.#addTaskButton.nextSibling.classList.add("display-cancel-btn");

            toDoInputContainer = this.#showToDoInput();
            toDoNameInput = toDoInputContainer.children[0];
            this.#main.insertBefore(toDoInputContainer, this.#addTaskButton);
            toDoNameInput.focus();
        });

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

        });

    }

    #createToDo(toDoInputContainer){
        const nameInput = toDoInputContainer.children[0].value;
        const description = toDoInputContainer.children[1].value;
        const buttonsContainer = toDoInputContainer.children[2];
        const dueDate = buttonsContainer.children[0].value;
        const categoryName = buttonsContainer.children[1].value;
        const priorityFlagsContainer = buttonsContainer.children[2];

        let priorityFlag = [...priorityFlagsContainer.children]
            .find(flag => flag.classList.contains("fa-flag"));

        let priorityClasses = priorityFlag.className;
        let position = priorityClasses.indexOf("priority-");
        priorityClasses = priorityClasses.slice(position, 10);
        
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
        this.#tasksContainer.append(lastTodo.displayToDo());

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

        const toDoInputContainer = new Element("div", toDoInputAttrArr);
        const toDoName = new Element("textarea", todoNameAttrArr);
        const toDoDescription = new Element("textarea", todoDescriptionAttrArr);

        const toDoInputContainerNode = toDoInputContainer.getElement();
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
    
        [...isComplete].map(check => {

            check.addEventListener("click", () => {
                const parent = check.parentNode;
                const id = parent.dataset.id;
                this.#categoryItem.removeToDo(id);
            })

        });

    }

    getMain(){
        return this.#main;
    }

}
