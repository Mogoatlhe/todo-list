
import { Element } from "../element";
import { Attribute } from "../attribute";
import { PriorityFlags } from "./priorityFlags";

export class TodoButtons{

    #todoButtonsContainer;

    constructor(){
        this.setToDoButtons();
    }

    setToDoButtons(){

        const priorityFlags = new PriorityFlags();
        const toDoButtonsContainerId = new Attribute("id", "to-do-buttons-container");
        const dueDateButtonId = new Attribute("id", "due-date-button");
        const categoryButtonId = new Attribute("id", "category-button");
        
        const toDoButtonsAttrArr = [toDoButtonsContainerId];
        const dueDateButtonAttrArr = [dueDateButtonId];
        const categoryButtonAttrArr = [categoryButtonId];

        const toDoButtonsContainer = new Element("div", toDoButtonsAttrArr);
        const calendarIcon = new Element("i", [], "fa-solid fa-calendar-day");
        const periodIcon = new Element("i", [], "fa-solid fa-circle-small");
        const dueDateButton = new Element("button", dueDateButtonAttrArr);
        const categoryButton = new Element("button", categoryButtonAttrArr);
        const dueDateButtonText = new Element("p", [], undefined, "Due Date");
        const categoryButtonName = new Element("p", [], undefined, "Inbox");
        
        this.#todoButtonsContainer = toDoButtonsContainer.getElement(); 
        const calendarIconNode = calendarIcon.getElement();
        const dueDateButtonTextNode = dueDateButtonText.getElement();
        const dueDateButtonNode = dueDateButton.getElement();
        const periodIconNode = periodIcon.getElement();
        const categoryButtonNode = categoryButton.getElement();
        const categoryButtonNameNode = categoryButtonName.getElement();
        const priorityFlagsNode = priorityFlags.getPriorityFlags();

        dueDateButtonNode.append(calendarIconNode);
        dueDateButtonNode.append(dueDateButtonTextNode);
        categoryButtonNode.append(periodIconNode);
        categoryButtonNode.append(categoryButtonNameNode);
        this.#todoButtonsContainer.append(dueDateButtonNode);
        this.#todoButtonsContainer.append(categoryButtonNode);
        this.#todoButtonsContainer.append(priorityFlagsNode);
    }

    getToDoButtons(){
        return this.#todoButtonsContainer;
    }
}