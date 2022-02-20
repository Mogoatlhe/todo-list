
import { Element } from "../element";

export class Main{

    #main;

    constructor(){
        this.setMain();
    }

    setMain(){

        const main = new Element("main", []);
        this.#main = main.getElement();

    }

    getMain(){
        return this.#main;
    }

}
