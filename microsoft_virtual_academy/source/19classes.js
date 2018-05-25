// Expression style
let User = class{
    constructor(name){
        this.name = name;
    }

    print(){
        console.log(`${this.name}`);
    }
}

let teja = new User('Teja');
teja.print();

// Declaration style
class Car{

    constructor(make, year ){
        this.make = make;
        this.year = year;

    }

    print(){
        console.log(`${this.make} ${this.year}`);
    }
}

let bmw = new Car('bmw',2018);
bmw.print();

class SportsCar extends Car{
    revEngine(){
        console.log('Vrrrrrrrroom goes the ' +this.make);
    }
}

let ferrari = new SportsCar('Ferrari', 2018);
ferrari.revEngine();

/**
 * Below will not work because revEngine method is not available in parent class
 * Behind the screens JS will be using prototype chaining 
 */
let audi = new Car('Audi', 2018);
audi.revEngine();