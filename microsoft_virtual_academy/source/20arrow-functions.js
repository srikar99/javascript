// functions without return type without parameters
let hi = () => { console.log('Hi...'); }
hi();

// functions without return type with parameters
let hello = (name) => { console.log(`Hello ${name}`); }
hello('Teja');

// functions with return type with parameters
let add = (a,b) => { return a+b; }
console.log(add(1,2));