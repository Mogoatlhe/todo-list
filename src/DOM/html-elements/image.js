
import { Element } from "../element";

export class Image extends Element{

    constructor(attrs = [], className = undefined){
        super("img", attrs, className);
    }

    getImage(){
        return this.getElement();
    }

}