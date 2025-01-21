class Vehicle {
    constructor() {
        this.started = false;
        this.currentSpeed = 0;
    }
    printDetails() {
        console.log(`vehicle started: ${this.started}`);
        console.log(`vehicle current speed: ${this.currentSpeed}`);
    }
    start() {
        this.started = true;
        console.log('Vehicle started');
    }
    accelerate(change) {
        if (this.started) {
            this.currentSpeed += change;
            console.log(`Vehicle accelerated to ${this.currentSpeed} mph`);
        }
        else {
            console.log('Start the vehicle first');
        }
    }
    decelerate(change) {
        if (this.started) {
            this.currentSpeed -= change;
            console.log(`Vehicle decelerated to ${this.currentSpeed} mph`);
        }
        else {
            console.log('Start the vehicle first');
        }
    }
    stop() {
        this.currentSpeed = 0;
        this.started = false;
        console.log('Vehicle stopped');
    }
    turn(direction) {
        if (this.started) {
            console.log(`Vehicle turned ${direction}`);
        }
        else {
            console.log('Start the vehicle first');
        }
    }
    reverse() {
        if (this.started) {
            console.log('Vehicle reversed');
        }
        else {
            console.log('Start the vehicle first');
        }
    }
}
export default Vehicle;
