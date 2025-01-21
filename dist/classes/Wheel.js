class Wheel {
    constructor(diameter = 18, tireBrand = "GoodYear") {
        this.diameter = diameter;
        this.tireBrand = tireBrand;
    }
    get getDiameter() {
        return this.diameter;
    }
    get getTireBrand() {
        return this.tireBrand;
    }
}
export default Wheel;
