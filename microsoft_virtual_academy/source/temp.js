function User(name){
    this.name = name;

    this.print = function(){
        console.log(this.name);
    }
};

let teja = new User("Teja");
console.log(teja.name);
teja.print();

class Car{
    constructor(make, year){
        this.make = make;
        this.year = year;
    }

    print(){
        console.log(`${this.make} ${this.year}`)
    }
}

let bmw = new Car('bmw', 2018);
console.log(bmw.make);
bmw.print();

