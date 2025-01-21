// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
class Car extends Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, wheels) {
        {
            super();
            this.wheels = wheels.length === 2 ? wheels : [new Wheel(), new Wheel()];
        }
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        if (wheels.length !== 4) {
            this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
        }
        else {
            this.wheels = wheels;
        }
    }
    printDetails() {
        super.printDetails();
        console.log(`
      VIN: ${this.vin}
      Color: ${this.color}
      Make: ${this.make}
      Model: ${this.model}
      Year: ${this.year}
      Weight: ${this.weight}
      Top Speed: ${this.topSpeed}
      Wheels:
        1: ${this.wheels[0].getDiameter} inch width a ${this.wheels[0].getTireBrand} tire
        2: ${this.wheels[1].getDiameter} inch width a ${this.wheels[1].getTireBrand} tire
        3: ${this.wheels[2].getDiameter} inch width a ${this.wheels[2].getTireBrand} tire
        4: ${this.wheels[3].getDiameter} inch width a ${this.wheels[3].getTireBrand} tire
    `);
    }
}
export default Car;
