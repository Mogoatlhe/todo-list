
import { Element } from "../element";
import { Attribute } from "../attribute";

export class ToDo{

    #todo;

    constructor(id, name, description, date, categoryName, priority){
        this.setToDo(id, name, description, date, categoryName, priority);
    }

    setToDo(id, name, description, date, categoryName, priority){

        this.#todo = {
            "id": id,
            "name": name,
            "description": description,
            "date": date,
            "category": categoryName,
            "priority": priority
        }
    }

    getToDo(){
        return this.#todo;
    }

    displayToDo(categoryName){

        if(categoryName !== undefined && categoryName !== this.#todo.category){
            return;
        }

        const toDoContainerId = new Attribute("data-id", this.#todo.id);
        const toDoContainerAttrArr = [toDoContainerId]; 
        const toDoContainer = new Element("div", toDoContainerAttrArr, "to-do-container");
        const toDoContainerNode = toDoContainer.getElement();

        const gripDots = new Element("i", [], "fa-solid fa-grip-vertical");
        const gripDotsNode = gripDots.getElement();

        const isCompleteContainer = new Element("div", [], "is-complete-container");
        const isCompleteContainerNode = isCompleteContainer.getElement();

        const check = new Element("i", [], "fa-solid fa-check");
        const checkNode = check.getElement();

        const name = new Element("h5", [], "to-do-name", this.#todo.name)
        const nameNode = name.getElement();

        const description = new Element("h6", [], "to-do-description", this.#todo.description);
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