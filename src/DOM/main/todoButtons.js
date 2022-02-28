
import { Element } from "../element";
import { Attribute } from "../attribute";
import { PriorityFlags } from "./priorityFlags";

export class TodoButtons{

    #categoryButton;
    #todoButtonsContainer;

    constructor(categoryItems){
        this.setToDoButtons(categoryItems);
    }

    setToDoButtons(categoryItems){

        const today = this.#getTodayDate();
        const priorityFlags = new PriorityFlags();
        const toDoButtonsContainerId = new Attribute("id", "to-do-buttons-container");
        const dueDateId = new Attribute("id", "due-date");
        const dueDateType = new Attribute("type", "datetime-local");
        const dueDateValue = new Attribute("value", today);
        const dueDateMin = new Attribute("min", today);
        const categoryButtonId = new Attribute("id", "category-button");
        
        const toDoButtonsAttrArr = [toDoButtonsContainerId];
        const dueDateAttrArr = [dueDateId, dueDateType, dueDateValue, dueDateMin];
        const categoryButtonAttrArr = [categoryButtonId];

        const toDoButtonsContainer = new Element("div", toDoButtonsAttrArr);
        const dueDate = new Element("input", dueDateAttrArr);
        const categoryButton = new Element("select", categoryButtonAttrArr);
        
        this.#todoButtonsContainer = toDoButtonsContainer.getElement();
        const dueDateNode = dueDate.getElement();
        this.#categoryButton = categoryButton.getElement();
        const priorityFlagsNode = priorityFlags.getPriorityFlags();

        this.#setSelectionOptions(categoryItems);
        this.#todoButtonsContainer.append(dueDateNode);
        this.#todoButtonsContainer.append(this.#categoryButton);
        this.#todoButtonsContainer.append(priorityFlagsNode);
    }

    #getTodayDate(){
        const today = new Date();
        const day = String(today.getDate()).padStart(2, '0');
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const year = today.getFullYear();

        return `${year}-${month}-${day}T23:20`;
    }

    #setSelectionOptions(categories){

        let categoryName, optionValue, optionArr, option, optionNode;
        
        categories.map(category => {
            categoryName = category.getName();
            optionValue = new Attribute("value", categoryName);
            optionArr = [optionValue];
            option = new Element("option", optionArr, undefined, categoryName);
            optionNode = option.getElement();
            this.#categoryButton.append(optionNode);
        });

    }

    getToDoButtons(){
        return this.#todoButtonsContainer;
    }
}