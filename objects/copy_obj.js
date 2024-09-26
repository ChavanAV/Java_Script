//changes
//deep copy
//json object
//convert json obj to normal obj


// 23-9-24


let obj1 = {
    name: "Sangram"
}
let obj2 = {
    age: 21
}

let obj3 = Object.assign({}, obj1, obj2);
console.log(obj3)

//2  ...............> ShallowCopy
let personl = {
    mobile_no: 9561638441
}
let office = {
    mobile_no1: 8237456196
}

let obj4 = Object.assign({}, personl, office)
console.log(obj4)

//3 convert Json  use stringify ---> DeepCoy

let student = {
    name: "Sangram",
    age: 22,
    add: "satara"
}
console.log(student)
let jsonfromat = JSON.stringify(student)
console.log(jsonfromat)

//4 Back to Jason to JavaScript Object

let back = JSON.parse(jsonfromat)
console.log(back)
///DeepCopy

back.add = "Shinde"
console.log("new", back)
//-------------
console.log("orignal", student)