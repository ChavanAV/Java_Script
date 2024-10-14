
let obj = {
    name: "Akhsay",
    age: 23,
    ph: 3456789876,
    balance: -0,
    loc: 'Pune'
}

//we cannot add, delete exisiting properties into object but we can modify the existing properties
Object.seal(obj);

obj.loc = 'Pandharpur' //modified
console.log(obj);     //modified

obj.add = "Address" // not added
console.log(obj);  // not added

delete obj.balance // not deleted
console.log(obj); // not deleted

console.log(Object.isSealed(obj)); // true
console.log(Object.isFrozen(obj)); //false


let obj2 = {
    name: "Akhsay",
    age: 23,
    ph: 3456789876,
    balance: -0,
    loc: 'Pune'
}

//we cannot add, delete exisiting properties into object but we can modify the existing properties
Object.freeze(obj2);

obj2.loc = 'Pandharpur' //not modified
console.log(obj2);     //not modified

obj2.add = "Address" // not added
console.log(obj2);  // not added

delete obj2.balance // not deleted
console.log(obj2); // not deleted

console.log(Object.isFrozen(obj2)); //true
console.log(Object.isSealed(obj2)); //true


