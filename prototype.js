/*

let n = 34.234;
console.log(n.__proto__);

let b = true;
console.log(b.__proto__);

let s = "sdfs"
console.log(s.__proto__);

let bg = 3456734567n
console.log(bg.__proto__);

let sym = Symbol(435)
console.log(sym.__proto__);

// let nl = null
// console.log(nl.__proto__);

// let un = undefined
// console.log(un.__proto__);



let obj = {
    name: "Akshay",
    ph: 8734456777
}

console.log(obj);

let a = [1, 343]
console.log(a);


//Inheritance: 
let obj1 = {
    name: "Akshay"
}
let obj2 = {
    sername: "Chavan"
}

console.log(obj1.name);
console.log(obj2.name);

obj2.__proto__ = obj1;

console.log(obj2.name);

*/
let bagPack = {
    i1: "Water bottle",
    i2: "Tiffin",
    i3: "Camera",
    i4: "Pant",
    i5: "Charger"
}

// console.log(i2); Error

let { i4, i2, i5 } = bagPack;

console.log(i2);
console.log(i4);
console.log(i5);


