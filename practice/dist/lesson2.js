"use strict";
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }
    get getName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
    get getAge() {
        return this.age;
    }
    set setAge(age) {
        this.age = age;
    }
}
const person1 = new Person('Alice', 30);
person1.setAge = 12;
const age = person1.getAge;
console.log(age);
//# sourceMappingURL=lesson2.js.map