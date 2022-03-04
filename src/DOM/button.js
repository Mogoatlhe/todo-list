
import { Element } from "./element";

export class Button extends Element{

    constructor(className, id = []){
        super("button", id, className);
    }

    getButton(){
        return this.getElement();
    }

}