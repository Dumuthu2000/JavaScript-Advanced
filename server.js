class Vehicle{
    #engineStatus;
    _price;

    constructor(brand, model){
        this.brand = brand;
        this.model = model;
        this.#engineStatus = false;
    }

    startEngine(){
        this.#engineStatus = true;
        console.log("Engine is start");
    }

    getEngineStatus(){
        return this.#engineStatus;
    }
}

//Inheritance
class Car extends Vehicle{
    constructor(brand, model, isRegeistered){
        super(brand, model);
        this.isRegeistered = isRegeistered;
    }

    buyCar(){
        console.log(`I was buy a ${this.brand} ${this.model} and that is registered ${this.isRegeistered}`);
    }
}

// let myVehicle = new Vehicle("Toyota", "Prius");
// myVehicle.startEngine();
// console.log(myVehicle.getEngineStatus());
let myCar = new Car("Honda", "Civic", true);
myCar.buyCar();