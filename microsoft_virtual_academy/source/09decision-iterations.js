let count = 4;

if (count == 4) {
    console.log("Its four");
} else {
    console.log("Its not four");
}

console.log(count == 4 ? "Yes its four" : "Its not four");


let hero = 'superman';
hero = 'batman'
switch (hero) {
    case 'superman':
        console.log('Super Strength');
        console.log('X-Ray Vision');
        break;
    case 'batman':
        console.log('He is Rich');
        break;
    default:
        console.log('normal guy');
        break;
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let a = [1,2,3,4,5,6,7,8,9];

for (let i = 0; i < a.length; i++) {
    const c = a[i];
    console.log(c);
    
}

let x = 10;
while (x<20) {
    console.log(x);
    x++;
}