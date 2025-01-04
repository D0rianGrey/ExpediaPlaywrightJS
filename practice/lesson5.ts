

class Car {

    private static wheels: number;

    static {
        this.setWheels(4);
    }

    static setWheels(wheels: number) {
        Car.wheels = wheels;
    }

    static getWheels() {
        return Car.wheels;
    }

}


const a = Car.getWheels();
console.log(a);
const car = new Car();
const wheels = Car.getWheels();
console.log(wheels);