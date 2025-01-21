// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
class Motorbike extends Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, wheels = []) {
        super();
        this.wheels = wheels.length === 2 ? wheels : [new Wheel(), new Wheel()];
    }
    wheelie() {
        console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }
    printDetails() {
        super.printDetails();
        console.log(`
      Wheels: ${this.wheels.length},
      VIN: ${this.vin},
      Make: ${this.make},
      Model: ${this.model},
      Year: ${this.year},
      Weight: ${this.weight} kg,
      Top Speed: ${this.topSpeed} km/h,
      Color: ${this.color}
    `);
    }
}
export default Motorbike;
