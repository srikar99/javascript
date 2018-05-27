let a = [2,3,4,5,6];

a.forEach((t) => {
    console.log(t);
});

let aa = a.map((t) => {
    return t*2;
});

console.log(aa);

let fa = a.filter((t) => {
    return t%2 == 0;
});

console.log(fa);

let sa = a.some((t) => {
    return t > 3;
});

console.log(sa);