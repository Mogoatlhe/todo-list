

export class Element{

    #element;

    constructor(name, attributes, className, textContent){
        this.createElement(name, attributes, className, textContent);
    }
    
    createElement(name, attributes, className, textContent){
        this.#element = document.createElement(name);

        attributes.map(attr => this.#element.setAttribute(attr.getName(), attr.getValue()));

        if(className !== undefined){

            if(className.includes(" ")){
                const classNames = className.split(" ");

                classNames.map(name => this.#element.classList.add(name));
            }else{
                this.#element.classList.add(className);
            }

        }

        if(textContent !== undefined){
            this.setTextContent(textContent);
        }
    }

    setTextContent(textContent){
        this.#element.textContent = textContent;
    }

    getElement(){
        return this.#element;
    }
}