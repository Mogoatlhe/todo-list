
import { Element } from "../element";
import { Attribute } from "../attribute";
import { IdiomaticText } from "../html-elements/idiomaticText";
import { Div } from "../html-elements/div";

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
        const priorityFlagsContainer = new Div(undefined, containerAttributes);
        this.#priorityFlags = priorityFlagsContainer.getDiv();

        for(let i = 1; i < 5; i++){

            if(i === 1){
                priority = new IdiomaticText(`priority-${i} fa-solid fa-flag`);
            }else{
                priority = new IdiomaticText(`priority-${i} ${fontAwesomeClass}`);
            }

            priorityNode = priority.getIdiomaticText();
            this.#changePriority(priorityNode);
            this.#priorityFlags.append(priorityNode);
        }

    }

    getPriorityFlags(){
        return this.#priorityFlags;
    }

    #changePriority(node){

        node.addEventListener("click", () => {
            if(node.classList.contains("fa-flag")){
                return;
            }
            
            const flags = this.#priorityFlags.children;
            [...flags].map(flag => {
                if(flag.classList.contains("fa-flag")){
                    flag.classList.remove("fa-flag");
                    flag.classList.add("fa-font-awesome");
                }
            });

            node.classList.remove("fa-font-awesome");
            node.classList.add("fa-flag");
        });

    }

}