
import { Element } from "../element";
import { Attribute } from "../attribute";
import { CleanToilet } from "./cleanToilet";

export class Main{

    #main;
    #categoryName;
    #addTaskButton;
    #tasksContainer;
    #currentCategoryItem;

    constructor(currentCategoryItem){
        this.#currentCategoryItem = currentCategoryItem;
        this.setMain(currentCategoryItem.getName());
    }

    setMain(name){

        const tasksContainer = new Attribute("id", "tasks-container");
        
        const main = new Element("main", []);
        const todosDisplay = new Element("div", [tasksContainer]);
        this.#main = main.getElement();
        this.#tasksContainer = todosDisplay.getElement();
        this.#setCategoryName(name);
        this.#setAddTask();

        this.appendToMain();
    }
    
    appendToMain(){
        this.#main.append(this.#categoryName);
        this.#main.append(this.#addTaskButton);


        if(this.#currentCategoryItem.isToDosEmpty()){
            const cleanToilet = new CleanToilet();

            this.#tasksContainer.append(cleanToilet.getCleanToilet());   
        }

        this.#addTaskEvent();

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

    #addTaskEvent(){

        let toDoInputContainer;
        let toDoNameInput;

        this.#addTaskButton.addEventListener("click", () => {
            toDoInputContainer = this.#showToDoInput();
            toDoNameInput = toDoInputContainer.children[0];
            this.#main.insertBefore(toDoInputContainer, this.#addTaskButton);
            toDoNameInput.focus();
        });

    }

    getMain(){
        return this.#main;
    }

    #showToDoInput(){

        const toDoInputContainerId = new Attribute("id", "to-do-input-container");
        const toDoNameID = new Attribute("id", "to-do-name-input");
        const toDoNamePlaceholder = new Attribute("placeholder", "e.g, Renew Gym");
        const toDoNameContenteditable = new Attribute("contenteditable", "true");

        const toDoInputAttrArr = [toDoInputContainerId];
        const todoNameAttrArr = [toDoNameID, toDoNameContenteditable, toDoNamePlaceholder];

        const toDoInputContainer = new Element("div", toDoInputAttrArr);
        const toDoName = new Element("div", todoNameAttrArr);

        const toDoInputContainerNode = toDoInputContainer.getElement();
        const toDoNameNode = toDoName.getElement();
        
        // toDoNameNode.setAttribute("contenteditable", "true");

        toDoInputContainerNode.append(toDoNameNode);
        return toDoInputContainerNode;

        // https://www.speedtest.net/result/12796846649 - Monday

    }



}
