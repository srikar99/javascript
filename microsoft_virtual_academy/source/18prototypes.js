let originalCar = {
    make: 'bmw',
    year: 2010
};

/**
 * Here we created object using the object literal syntax.
 * So the prototype of the object wil be the native Object() 
 */
console.log(Object.getPrototypeOf(originalCar));

/**
 * We can also create an empty object whoose prototype will be the object we passed
 * When you create an object like below the prototype of the object will be originalCar
 */
let newCar = Object.create(originalCar);

console.log("Prototype of the orginalCar below");
console.log(Object.getPrototypeOf(originalCar));

console.log("Prototype of the newCar below");
console.log(Object.getPrototypeOf(newCar));

/**
 * If you see below the newCar object it will be empty. Because we have just created an empty object
 * But the prototype of the newCar is origianCar. So eventhough newCar object is empty you can access
 * all properteis or originalCar. 
 */
console.log('originalCar object below');
console.log(originalCar);

console.log('newCar object below');
console.log(newCar);

/**
 * If you see even though the newCar object is empty we are able to access the property make
 * This is done by property chaining. When you access a property on an object JS compiler looks if that object has the property.
 * If it has it returns its value. If it does not it checks if that object prototype has that property if not it goes on chain till 
 * the native Object() whoose prototype is undefined, then it returns undefined.
 */
console.log(`originalCar make ${originalCar.make}`);
console.log(`newCar make ${newCar.make}`);

console.log(`newCar whatever ${newCar.whatever}`);
