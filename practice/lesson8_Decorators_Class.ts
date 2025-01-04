function logClassDefinition() {
    return function (constructor: Function) {
        console.log(`Class ${constructor.name} is defined`);
    };
}

@logClassDefinition()
class ExampleClass2 {

    method(): string {
        return "Hello, world!";
    }
}

const example2 = new ExampleClass2();
example2.method();