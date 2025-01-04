
// new version
function first() {
    console.log("first(): factory evaluated");
    return function (target: any, context: string) {
        console.log("first(): called");
    };
}

// new version
function second() {
    console.log("second(): factory evaluated");
    return function (target: any, context: string) {
        console.log("second(): called");
    };
}

//old version
function third(
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    descriptor.value = function (this: any) {
        console.log("third(): called"); // from decorator
        return originalMethod.apply(this); // from original method
    }
}

function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Вызов метода ${propertyKey} с аргументами: ${JSON.stringify(args)}`);
        const result = originalMethod.apply(this, args);
        console.log(`Результат: ${result}`);
        return result;
    };

    return descriptor;
}

function doubleResult(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        const result = originalMethod.apply(this, args);
        return result * 2;
    };

    return descriptor;
}

// new version
// function third(target: any, context: ClassMethodDecoratorContext) {
//     const originalMethod = target[context.name];
//     target[context.name] = function (this: any, ...args: any[]) {
//         console.log("third(): called"); // from decorator
//         return originalMethod.apply(this, args); // from original method
//     };
// }

class ExampleClass1 {

    name: string = "ExampleClass1";

    // @third
    // @first()
    // @second()
    @log
    method(): string {
        console.log("method(): called" + this.name);
        return "Hello, world!";
    }

    @log
    add(a: number, b: number): number {
        return a + b;
    }

    @doubleResult
    multiply(a: number, b: number): number {
        return a * b;
    }
}

const example1 = new ExampleClass1();
console.log(example1.multiply(2, 3));
console.log(example1.add(2, 3));