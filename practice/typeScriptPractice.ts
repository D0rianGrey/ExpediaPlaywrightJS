function Logger1(target: Function) {
    console.log(`Класс ${target.name} был создан :: 1.`);
}

function Logger2(target: Function) {
    console.log(`Класс ${target.name} был создан :: 2.`);
}

@Logger1
@Logger2
class MyClass {
    constructor() {
        console.log('Объект MyClass создан');
    }
}

// const myClass = new MyClass();

