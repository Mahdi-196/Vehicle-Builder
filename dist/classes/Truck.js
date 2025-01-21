// Importing required classes/interfaces
import Vehicle from "./Vehicle.js";
import Wheel from "./Wheel.js";
class Truck extends Vehicle {
    constructor(vin, color, make, model, year, weight, topSpeed, wheels, towingCapacity) {
        super();
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels =
            wheels.length === 4
                ? wheels
                : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
        this.towingCapacity = towingCapacity;
    }
    tow(vehicle) {
        const { make, model, weight } = vehicle;
        if (weight <= this.towingCapacity) {
            console.log(`Towing ${make} ${model}.`);
        }
        else {
            console.log(`The ${make} ${model} is too heavy to tow.`);
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
        Towing Capacity: ${this.towingCapacity}
        Wheels:
          1: ${this.wheels[0].getDiameter} inch width a ${this.wheels[0].getTireBrand} tire
          2: ${this.wheels[1].getDiameter} inch width a ${this.wheels[1].getTireBrand} tire
          3: ${this.wheels[2].getDiameter} inch width a ${this.wheels[2].getTireBrand} tire
          4: ${this.wheels[3].getDiameter} inch width a ${this.wheels[3].getTireBrand} tire
      `);
    }
}
export default Truck;
