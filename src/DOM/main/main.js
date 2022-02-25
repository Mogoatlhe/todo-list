
import { Element } from "../element";
import { Attribute } from "../attribute";
import { CleanToilet } from "./cleanToilet";
import { TodoButtons } from "./todoButtons";

export class Main{

    #main;
    #categoryName;
    #addTaskButton;
    #cancelTaskBtn;
    #tasksContainer;
    #currentCategoryItem;

    constructor(currentCategoryItem, categoryItems){
        this.#currentCategoryItem = currentCategoryItem;
        this.setMain(currentCategoryItem.getName(), categoryItems);
    }

    setMain(name, categotyItems){

        const tasksContainer = new Attribute("id", "tasks-container");
        
        const main = new Element("main", []);
        const todosDisplay = new Element("div", [tasksContainer]);
        this.#main = main.getElement();
        this.#tasksContainer = todosDisplay.getElement();
        this.#setCategoryName(name);
        this.#setAddTask();
        this.#setCancelTask();

        this.appendToMain(categotyItems);
    }
    
    appendToMain(categoryItems){
        this.#main.append(this.#categoryName);
        this.#main.append(this.#addTaskButton);
        this.#main.append(this.#cancelTaskBtn);


        if(this.#currentCategoryItem.isToDosEmpty()){
            const cleanToilet = new CleanToilet();

            this.#tasksContainer.append(cleanToilet.getCleanToilet());   
        }

        this.#addTaskEvent(categoryItems);
        this.#cancelTaskEvent();

        this.#main.append(this.#tasksContainer);
    }
    
    #setCategoryName(name){
        const categoryName = new Element("h4", [], "current-category", name)
        this.#categoryName = categoryName.getElement();
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

    #addTaskEvent(categoryItems){

        let toDoInputContainer;
        let toDoNameInput;

        this.#addTaskButton.addEventListener("click", () => {

            if(!this.#addTaskButton.classList.contains("input-active")){
                this.#addTaskButton.classList.add("input-empty");
                this.#addTaskButton.classList.add("input-active");
                this.#addTaskButton.nextSibling.classList.add("display-cancel-btn");
            }else{

                this.#createToDo(toDoInputContainer, categoryItems);

                return;
            }

            toDoInputContainer = this.#showToDoInput(categoryItems);
            toDoNameInput = toDoInputContainer.children[0];
            this.#main.insertBefore(toDoInputContainer, this.#addTaskButton);
            toDoNameInput.focus();
        });

    }

    #createToDo(toDoInputContainer, categoryItems){
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
        
        const itemIndex = categoryItems
        .findIndex(item => item.getName() === categoryName);
        
        categoryItems[itemIndex]
            .createToDo(nameInput, description, dueDate, categoryName, priorityClasses);
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

    getMain(){
        return this.#main;
    }

    #showToDoInput(categoryItems){

        const toDoButtons = new TodoButtons(categoryItems);
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

        // https://www.speedtest.net/result/12796846649 - Monday
        // https://www.speedtest.net/result/12800664713 - Tuesday

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

}
