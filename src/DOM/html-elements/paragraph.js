
import { Element } from "../element";

export class Paragraph extends Element{

    constructor(textContent, attr = [], className = undefined){
        super("p", attr, className, textContent);
    }

    getParagraph(){
        return this.getElement();
    }

}