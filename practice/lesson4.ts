interface User {
    name: string;
    age: number;
}

class UserForm implements User {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getUserInfo(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const user1 = new UserForm('Alice', 30);
console.log(user1.getUserInfo());