let car = {
    make: 'BMW',
    model: '745li',
    year: 2010,
    getPrice: function () {
        return 50000;
    },

    printDescription: function () {
        console.log(`${this.make} ${this.model}`);
    }
}

let myObject = { value: 'myObject value' };

global.value = 'Global object value';

function third(name) {
    return `${this.value} ${name}`;
}

console.log(third('Teja'));

/* Bobth call and apply have the same effect but in apply you can send an array of values */
console.log(third.call(myObject, 'Teja'));
console.log(third.apply(myObject, ['Teja', 'Pramod']));

/** When you want to print values in a function without actually passing values to it.
    Here you can leverage this keyword. It will take the properties from the object 
    that is being invoked on.
*/
function fifth() {
    console.log(`${this.firstName} ${this.lastName}`);
}

let customer1 = {
    firstName: 'Teja',
    lastName: 'P',
    print: fifth
}

let customer2 = {
    firstName: 'Pramod',
    lastName: 'Cheekurthy',
    print: fifth
}

customer1.print();
customer2.print();