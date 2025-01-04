
interface IFly {
    fly(): void;
}

function sing(text: string) {
    return function (constructor: Function) {
        console.log(text);
    };
}

function changeAge() {
    return function (constructor: Function) {
        constructor.prototype.age = 10;
    };
}

@sing('I am a bird')
@changeAge()
class Bird {
    age: number;

    constructor(age?: number) {
        this.age = age !== undefined ? age : (this.constructor as any).prototype.age;
    }
}

const bird = new Bird();
console.log(bird.age); // 10

const anotherBird = new Bird(5);
console.log(anotherBird.age); // 5