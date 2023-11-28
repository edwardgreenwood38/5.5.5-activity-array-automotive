// //this includes the vehicle class as a module
// const VehicleModule = require("./vehicleBaseClass.js")

// //this shows how to call from this module...
// let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
// console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

// You have been assigned the task of developing a new class for the new A28 Mercury sedan. The class will be written in JavaScript and will contain vehicle properties and methods that have previously been defined in the base class named vehicle.js. The new class is required to have the following properties and methods added.

// A28 Mercury Sedan
class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximumPassengers = 5;
        this.passengers = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

    loadPassenger(num) {
        if (this.passengers < this.maximumPassengers){
            if(this.passengers + num < this.maximumPassengers) {
                this.passengers += num;
                console.log(this.year + " " + this.make + " sedan has " + this.passengers + " loaded now");
                return this.passengers;
            }
            else {
                let total = this.passengers + num
                console.log(this.year + " " + this.make + " sedan cannot hold " + total + " passengers.");
            }
             
        }
        else {
            console.log(this.year + this.make + " can only have " + this.maximumPassengers + " passengers");
        }
    }

    start() {
        if(this.fuel > 0) {
            console.log(this.make + " started");
            return this.start = true;
        }
        else {
            console.log(this.make + " is out of fuel");
            return this.start = false;
        }
    }

    checkService(due) {
        if(this.mileage >= 30000){
            console.log("Services are due");
            return this.scheduleService = true;
        }
        else {
            console.log("No services are due right now");
            return this.scheduleService = false;
        }
    }
}


let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)


let myCar2 = new Car('chevy', 'sedan', '2019', 'silver', 4000)


myCar2.start()
myCar2.loadPassenger(3)
myCar2.stop()
myCar2.checkService()

console.log(myCar2)



//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
