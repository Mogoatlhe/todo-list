

export class Element{

    _element;

    constructor(name, attributes, className, textContent){
        this.createElement(name, attributes, className, textContent);
    }
    
    createElement(name, attributes, className, textContent){
        this._element = document.createElement(name);

        attributes.map(attr => this._element.setAttribute(attr.getName(), attr.getValue()));

        if(className !== undefined){
            this._element.classList.add(className);
        }

        if(textContent !== undefined){
            this._element.textContent = textContent;
        }
    }

    getElement(){
        return this._element;
    }
}