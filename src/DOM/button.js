
import { Element } from "./element";

export class Button extends Element{

    constructor(className, attr = []){
        super("button", attr, className);
    }

    getButton(){
        return this.getElement();
    }

}