
function sayHello(name){
    console.log('----------------------');
    console.log(`Hello World!! ${name}`);
    console.log('----------------------');
}

sayHello('Teja');

let a = sayHello; // having a reference to a function

let ret = a('Imran');
console.log('typeof ret:' + typeof ret);

function calculateTax(amount){
    return amount * 0.02;
}

let tax = calculateTax(1000);
console.log('tax ' + tax);