
import { Element } from "../element";
import { Attribute } from "../attribute";

export class Input extends Element{

    #input;

    constructor(className, type, id, maxLength){
        let idAttr;
        const attrArr = [];
        const typeAttr = new Attribute("type", type);
        attrArr.push(typeAttr);
        
        if(id !== undefined){
            idAttr = new Attribute("id", id);
            attrArr.push(idAttr);
        }

        if(maxLength !== undefined){
            attrArr.push(new Attribute("maxlength", maxLength));
        }
        super("input", attrArr, className);
    }

    getInput(){
        return this.getElement();
    }

}