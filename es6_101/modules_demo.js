import { greet, User } from './module.js';
import {fruits as ff, animals} from './module.js';

let hello = greet();
console.log(hello);

let teja = new User("teja", "aslfd@adf.com");
console.log(teja.getDetails());

console.log(ff);
console.log(animals);