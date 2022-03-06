
import { Element } from "../element";

export class Div extends Element{

    constructor(className, attr = []){
        super("div", attr, className);
    }

    getDiv(){
        return this.getElement();
    }

}