
export function User(name, email){

    this.name = name;
    this.email = email;

    this.getDetails = function(){
        return `${this.name} can be reached at ${this.email}`;
    }

}

export function sayHello(){
    return "Hello Module";
}