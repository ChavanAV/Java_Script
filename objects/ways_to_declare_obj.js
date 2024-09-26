
//1

let obj = {
    key: "value"
}

//2

let obj2 = new Object({ name: "Name" })
console.log(obj2);

//3

// using classes in js

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


//4 Using factory function

let createObj2 = (name, add) => {
    let obj = {
        name: name,
        add: add
    }
    return obj;
}

let obj41 = createObj2("ABC", "adsfd")
let obj42 = createObj2("xyz", "adsfd")
let obj43 = createObj2("pqr", "adsfd")
console.log(obj41, obj42, obj43);