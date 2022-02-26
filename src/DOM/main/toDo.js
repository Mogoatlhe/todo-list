
import { Element } from "../element";
import { Attribute } from "../attribute";

export class ToDo{

    #id;
    #name;
    #date;
    #priority;
    #description;
    #categoryName;

    constructor(name, description, date, categoryName, priority){
        this.setToDo(name, description, date, categoryName, priority);
    }

    setToDo(name, description, date, categoryName, priority){
        this.#name = name;
        this.#description = description;
        this.#date = date;
        this.#categoryName = categoryName;
        this.#priority = priority;
    }

    setID(id){
        this.#id = id; 
    }

    getID(){
        return this.#id
    }

    getName(){
        return this.#name;
    }

    getDescription(){
        return this.#description;
    }

    getDate(){
        return this.#date;
    }

    getCategoryName(){
        return this.#categoryName;
    }

    getPriority(){
        return this.#priority;
    }

    displayToDo(){

        const toDoContainerId = new Attribute("data-id", this.getID());
        const toDoContainerAttrArr = [toDoContainerId]; 
        const toDoContainer = new Element("div", toDoContainerAttrArr, "to-do-container");
        const toDoContainerNode = toDoContainer.getElement();

        const gripDots = new Element("i", [], "fa-solid fa-grip-vertical");
        const gripDotsNode = gripDots.getElement();

        const isCompleteContainer = new Element("div", [], "is-complete-container");
        const isCompleteContainerNode = isCompleteContainer.getElement();

        const check = new Element("i", [], "fa-solid fa-check");
        const checkNode = check.getElement();

        const name = new Element("h5", [], "to-do-name", this.#name)
        const nameNode = name.getElement();

        const description = new Element("h6", [], "to-do-description", this.#description);
        const descriptionNode = description.getElement();

        const hr = new Element("hr", []);
        const hrNode = hr.getElement();

        isCompleteContainerNode.append(checkNode);
        toDoContainerNode.append(gripDotsNode);
        toDoContainerNode.append(isCompleteContainerNode);
        toDoContainerNode.append(nameNode);
        toDoContainerNode.append(descriptionNode);
        toDoContainerNode.append(hrNode)
        
        return toDoContainerNode;

    }

}