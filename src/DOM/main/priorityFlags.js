
import { Element } from "../element";
import { Attribute } from "../attribute";

export class PriorityFlags{

    #priorityFlags;

    constructor(){
        this.setPriorityFlags();
    }

    setPriorityFlags(){

        let priority, priorityNode;
        const fontAwesomeClass = "fa-solid fa-font-awesome";
        const containerId = new Attribute("id", "priority-flags-container");
        const containerAttributes = [containerId];
        const priorityFlagsContainer = new Element("div", containerAttributes);
        this.#priorityFlags = priorityFlagsContainer.getElement();

        for(let i = 1; i < 5; i++){

            if(i === 1){
                priority = new Element("i", [], `priority-${i} fa-solid fa-flag`);
            }else{
                priority = new Element("i", [], `priority-${i} ${fontAwesomeClass}`);
            }

            priorityNode = priority.getElement();
            this.#priorityFlags.append(priorityNode);
        }

    }

    getPriorityFlags(){
        return this.#priorityFlags;
    }

}