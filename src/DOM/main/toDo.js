
import { Element } from "../element";
import { Attribute } from "../attribute";
import { IdiomaticText } from "../html-elements/idiomaticText";
import { Div } from "../html-elements/div";

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

        if((categoryName !== "All") && 
            categoryName !== undefined && categoryName !== this.#todo.category){
            return;
        }

        const toDoContainerId = new Attribute("data-id", this.#todo.id);
        const toDoContainerAttrArr = [toDoContainerId]; 
        const toDoContainer = new Div("to-do-container", toDoContainerAttrArr);
        const toDoContainerNode = toDoContainer.getDiv();

        const gripDots = new IdiomaticText("fa-solid fa-grip-vertical");
        const gripDotsNode = gripDots.getIdiomaticText();

        const isCompleteContainer = new Div(`is-complete-container is-complete-p${this.#todo.priority[this.#todo.priority.length - 1]}`);
        const isCompleteContainerNode = isCompleteContainer.getDiv();

        const check = new IdiomaticText("fa-solid fa-check");
        const checkNode = check.getIdiomaticText();

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
        toDoContainerNode.append(hrNode);
        
        return toDoContainerNode;

    }

}