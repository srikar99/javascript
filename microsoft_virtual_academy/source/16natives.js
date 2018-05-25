/**
 * Boxing
 * Boxing is done automatically by the JS compiler whenever you use primitives
 */ 
const nativeStr = new String('Howdy');
const primitiveStr = "Sample String";

console.log(`nativeStr typeof ${typeof nativeStr}`);
console.log(`primitiveStr typeof ${typeof primitiveStr}`);

/** 
 * Unboxing is also done automatically by the JS compiler when you use 
 * But when you want to conver the native to a prmitive  
 * you can use .valueOf method on that object
*/
const nativeNum = new Number(7);
console.log(`nativeNum typeof ${typeof nativeNum}`);

const primitiveNum = nativeNum.valueOf();
console.log(`primitveNum typeof ${typeof primitiveNum}`);
