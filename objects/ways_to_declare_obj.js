console.log("---------------------------------------");

//1 literals

let obj = {
    key: "value"
}

console.log("---------------------------------------");
//2 new keyword class

let obj2 = new Object({ name: "Name" })
console.log(obj2);

console.log("---------------------------------------");
//3 using classes in js

class CreateObj {
    constructor(name, age) {
        console.log(name),
            this.name = name,
            this.age = age
    }
}


let obj3 = new CreateObj("Ram", 23)
let obj32 = new CreateObj("Raj", 12)
console.log(obj3, obj32);


console.log("---------------------------------------");
//4 Using factory function

let createObj2 = (name, add) => {
    let obj = {
        name: name,
        add: add,
    }
    return obj;
}

let obj41 = createObj2("ABC", "adsfd")
let obj42 = createObj2("xyz", "adsfd")
let obj43 = createObj2("pqr", "adsfd")
console.log(obj41, obj42, obj43);

console.log("---------------------------------------");
//5 using constructor function
//creating a objects in js using constructors class function

console.log(5);

function CreateObj3(name, age) {
    this.name = name,
        this.age = age
    this.greet = function () {
        console.log("dfss");

    }
}

let obj4 = new CreateObj3("Akshay", 23)
console.log(obj4)
obj4.greet()
console.log("---------------------------------------")