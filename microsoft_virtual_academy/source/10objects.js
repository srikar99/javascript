
// Object literal syntax.
let car = {
    make: 'BMW',
    model: '745li',
    year: 2010,
    getPrice: function(){
        return 50000;
    },

    printDescription: function(){
        console.log(`${this.make} ${this.model}`);
    }
}

car.printDescription();

let test = {
    100: "Hundred",
    "200": "Two hundred",
    another : "Another"
}

console.log(test[100]);
console.log(test["200"]);
console.log(test.another);