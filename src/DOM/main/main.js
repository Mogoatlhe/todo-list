
import { Attribute } from "../attribute";
import { Element } from "../element";

export class Main{

    #main;
    #categoryName;
    #addTaskButton;

    constructor(name){
        this.setMain(name);
    }

    setMain(name){

        const main = new Element("main", []);
        
        this.#main = main.getElement();
        this.#setCategoryName(name);
        this.#setAddTask();

        this.#main.append(this.#categoryName);
        this.#main.append(this.#addTaskButton);
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
        
        const inputValueAttr = new Attribute("value", addTaskIconNode)

        this.#addTaskButton.append(addTaskIconNode);
        this.#addTaskButton.append(addTaskTextNode);
    }

    getMain(){
        return this.#main;
    }

}
