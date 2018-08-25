# ES6

## Modules [Tutorial](https://www.youtube.com/watch?v=fIP4pjAqCtQ)

### Rules for Export

* The default export should at the top
* You cannot conditionally export something. Below code won't work

```javascript
if(true){
    export function hello(){
        return "Hello"";
    }
}
```

### Rules for Import

* You cannot import from an unqualified path like below. It should be a fixed relative path.

```javascript
import * from 'myfile.js'
```

* Import statement should be at the top level. You can not enclose them in some blocks

```javascript
try{
    import { fruit } from './farm.js';
}catch(e){}
```

* You can not construct the import path dicrectly. Same as imports in other languages like Java, C++.

```javascript
import browser from './' + vendor + '.js';
```

> Its better to use rollup js or some transpiler to bundle up all the modules files into one file. If there are hundred moudles which are inter dependent your client needs to make hundred call to load all those modules. Its better to bundle up all your modules into one single file. With this you can also do tree shaking (remove unused functions from importing)

### Module execution

* Modules always run in strict mode. You can pretend  'use strict' added at the top of the file.
* Act as if executed in IIFE -  Does not run in global scope.
* Below is the sample syntax

```javascript
'use strict'
(function(){

with(foo){} // Gives error because with considered harmful in strict mode.
a = 10 // Error because a is assigedn value with out delcaring it in strict mode.

}).call();
```

### Nuaunces

* Modulesa are deferred. The are not allowed to run Synchronously.
* Modules are imported only one. Same like if you include same script twice `<script scr="sample.js">` it will be loaded only once by the browser
* If you want to load a module twice append query parameter like a date, so that it is considered as a new URL and browser loads the module again. Its kind of a hack.
* All the import statements are hoisted.
* Circular dependencies are allowed, but its better be careful.