"use strict";
class Personne {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    getName() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    tellMyName() {
        console.log(`My name is :` + this._name);
    }
    tellMyAge() {
        console.log(`I'm ` + this._age + `years old.`);
    }
}
const John = new Personne("John", 40);
const Mary = new Personne("Mary", 35);
console.log(John.tellMyName());
console.log(John.tellMyAge());
console.log(Mary.tellMyName());
console.log(Mary.tellMyAge());
