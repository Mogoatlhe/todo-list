
import { Element } from "../element";
import { Attribute } from "../attribute";

export class Input extends Element{

    #input;

    constructor(className, type, id = undefined){
        let idAttr;
        const attrArr = [];
        const typeAttr = new Attribute("type", type);
        attrArr.push(typeAttr);
        
        if(id !== undefined){
            idAttr = new Attribute("id", id);
            attrArr.push(idAttr);
        }
        super("input", attrArr, className);
    }

    getInput(){
        return this.getElement();
    }

}