
import { Element } from "../element";
import { Attribute } from "../attribute";
import { PriorityFlags } from "./priorityFlags";
import { Div } from "../html-elements/div";

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

        const toDoButtonsContainer = new Div(undefined, toDoButtonsAttrArr);
        const dueDate = new Element("input", dueDateAttrArr);
        const categoryButton = new Element("select", categoryButtonAttrArr);
        
        this.#todoButtonsContainer = toDoButtonsContainer.getDiv();
        const dueDateNode = dueDate.getElement();
        this.#categoryButton = categoryButton.getElement();
        const priorityFlagsNode = priorityFlags.getPriorityFlags();

        this.setSelectionOptions(categoryItems);
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

    setSelectionOptions(categories){

        let optionValue, options, option, optionNode;
        
        for (const category of categories) {

            if(category === "All" || category === "Upcoming" || category === "Today"){
                continue;
            }

            optionValue = new Attribute("value", category);
            options = [optionValue];
            option = new Element("option", options, undefined, category);
            optionNode = option.getElement();
            this.#categoryButton.append(optionNode);
        }

    }

    removeSelectionOption(category){
        const options = this.#categoryButton.childNodes;
        const toRemove = [...options].find(option => option.textContent === category);

        if(toRemove === undefined){
            return;
        }

        this.#categoryButton.removeChild(toRemove);
    }

    getToDoButtons(){
        return this.#todoButtonsContainer;
    }
}