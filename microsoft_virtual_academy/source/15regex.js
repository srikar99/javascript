let pattern = /xyz/;
console.log(typeof pattern); // This is of type object

let value = 'This is xyz a test xyz';

// Checks wether the pattern found in the give input or not
console.log(pattern.test(value));

console.log(value.replace(pattern,'just'));

let res = value.match(pattern);
console.log(res);
console.log("index found at " + res.index);