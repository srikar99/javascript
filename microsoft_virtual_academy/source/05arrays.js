let a = [ 1,2,3,4,5,6];
console.log(typeof a);
console.log(a[1]);

let b = ['teja','imran', 'pramod'];
console.log(b[2]);

console.log(a.length);

a[11] = 77;
console.log(a);
console.log(a.length); // because we are directly setting a value at a perticular index the length will return 12

// The best way to insert a value into an array is to use push method. It inserts value at the end of array
// To remove last element use pop method

a.push(22);
console.log(a);
console.log(a.length);

console.log(a.pop(2));
console.log(a);