
export class User {

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getDetails() {
        return `${this.name} email him at ${this.email}`;
    }
}

export function greet() {
    return "Hello Module";
}

var fruits = ['apple', 'banana'];
var animals = ['cat', 'dog'];
export { fruits, animals }
console.log('from module.js');