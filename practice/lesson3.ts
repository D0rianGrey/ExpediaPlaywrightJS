class Human {
    name: string;

    test() {
        console.log('test parent');
    }
}

class Student extends Human {
    classRoom: string;
    test() {
        console.log('test child');
    }
}

const student1 = new Student();
student1.test();

