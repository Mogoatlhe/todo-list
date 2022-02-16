

export class Attribute{

    _name;
    _value;

    constructor(name, value){
        this.setName(name);
        this.setValue(value);
    }

    setName(name){
        this._name = name;
    }

    setValue(value){
        this._value = value;
    }

    getName(){ return this._name; }
    getValue(){ return this._value; }

}