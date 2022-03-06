
import { Element } from "../element";

export class IdiomaticText extends Element{

    constructor(className){
        super("i", [], className);
    }

    getIdiomaticText(){
        return this.getElement();
    }

}