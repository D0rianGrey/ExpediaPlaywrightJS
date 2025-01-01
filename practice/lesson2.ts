
class Person {

    name: string;
    private age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}`);
    }

    get getName() {
        return this.name;
    }

    set setName(name: string) {
        this.name = name;
    }

    get getAge() {
        return this.age;
    }

    set setAge(age: number) {
        this.age = age;
    }
}

const person1 = new Person('Alice', 30);
person1.setAge = 12;
const age = person1.getAge;
console.log(age);