function User(name, email){
    this.name = name;
    this.email = email;

    this.getEmail = function(){
        return this.email;
    }

    this.getName = function(){
        return this.name;
    }
};

/**
 * When you use the new keywork a new empty object {} is created and in
 * the function it will use this empty object in place of this keyword
 * Now when you say this.name = name the new empty object gets a property with name as name
 * and value as the value from the function argument.
 */
let teja = new User("Teja", "teja463@gmail.com");
console.log(teja.getName());

/**
 * Here we are calling the User function without the new keyword. In this case no new empty 
 * object is created so the this refernece here will be the global object.
 * Because you are calling this method in global scope.
 */
let imran = User("Imran", "imranapple6@gmail.com");
console.log(global.getEmail());
