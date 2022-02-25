

export class ToDo{

    #name;
    #date;
    #priority;
    #description;
    #categoryName;

    constructor(name, description, date, categoryName, priority){
        this.setToDo(name, description, date, categoryName, priority);
    }

    setToDo(name, description, date, categoryName, priority){
        this.#name = name;
        this.#description = description;
        this.#date = date;
        this.#categoryName = categoryName;
        this.#priority = priority;
    }

    getName(){
        return this.#name;
    }

    getDescription(){
        return this.#description;
    }

    getDate(){
        return this.#date;
    }

    getCategoryName(){
        return this.#categoryName;
    }

    getPriority(){
        return this.#priority;
    }

}