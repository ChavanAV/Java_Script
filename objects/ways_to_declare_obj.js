
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
    constructor(name) {
        console.log(name);
        this.name = name
    }
}


let obj3 = new CreateObj("Ram")
let obj32 = new CreateObj("Raj")
console.log(obj3, obj32);


//Using factory function

let CreateObj2 = (name, add) => {
    let obj = {
        name: name,
        add: add
    }
    return obj;
}

let obj41 = CreateObj2("ABC", "adsfd")
let obj42 = CreateObj2("xyz", "adsfd")
let obj43 = CreateObj2("pqr", "adsfd")
console.log(obj41, obj42, obj43);
