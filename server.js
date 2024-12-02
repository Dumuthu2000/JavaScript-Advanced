class Car{
    #engineStatus;

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

let myCar = new Car("Toyota", "Prius");
myCar.startEngine();
console.log(myCar.getEngineStatus());