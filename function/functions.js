// 3 / 9 / 24
console.log("3/9/24");
console.log("");

let firstFun = function () {
    console.log("Function called and executed");
}
// firstFun();

let add = function (a, b) {
    console.log(`Addition of ${a} and ${b} is : ${a + b}`);
}

let sub = function (a, b) {
    console.log(`substraction of ${a} and ${b} is : ${a - b}`);

}

let mul = function (a, b) {
    console.log(`Multiplication of ${a} and ${b} is : ${a * b}`);
}

let div = function (a, b) {
    console.log(`Division of ${a} and ${b} is : ${a / b}`);
}
// add(10, 30);
// sub(12, 2);
// mul(10, 5);
// div(20, 5);

//get values from prompt

let add1 = function () {
    let a = Number(prompt());
    let b = Number(prompt());
    add(a, b);
}
let sub1 = function () {
    let a = Number(prompt());
    let b = Number(prompt());
    sub(a, b);
}
let mul1 = function () {
    let a = Number(prompt());
    let b = Number(prompt());
    mul(a, b);
}
let div1 = function () {
    let a = Number(prompt());
    let b = Number(prompt());
    div(a, b);
}
// add1();
// sub1();
// mul1();
// div1();


//*Other way to del=clare the function

function firstWay(a, b) {
    console.log("First way to declare the function");
    console.log(`let varName = function(a, b) {
    console.log("first way");
}`);
}
function secondWay(a, b) {
    console.log("Other way to declare the function");
    console.log(`function varName(a, b) {
    console.log("Other way");
}`);
}
// firstWay();
// secondWay();


function add2(a, b) {
    console.log(`Addition of ${a} and ${b} is : ${a + b}`);
}

function sub2(a, b) {
    console.log(`substraction of ${a} and ${b} is : ${a - b}`);
}

function mul2(a, b) {
    console.log(`Multiplication of ${a} and ${b} is : ${a * b}`);
}

function div2(a, b) {
    console.log(`Division of ${a} and ${b} is : ${a / b}`);

}

// add2(12, 123);
// sub2(12, 3);
// mul2(13, 3);
// div2(245, 5);

// Arrow functions

// let arrFunAdd = (a, b) => {

// }

//example 1

let intro = (name, loc, age) => {
    console.log(`My name is ${name}, I am from ${loc} and my age is ${age}`);
}

// intro("Akshay", "Pune", 23);

//example 2

let order = (name, item, bill) => {
    console.log(`Here is your order mr. ${name} of ${item} and your bill is : ${bill}`);
}

// order("Akshay", "Drone", 100000);
//example

let animalSound = (name, sound) => {
    console.log(`Animal name is ${name} and sound ${sound}`);
}

animalSound("cat", "Manuoo-Manuoo");
animalSound("Dog", "Bhaoo-Bhaoo");
animalSound("Snake", "ssssssss-ssssss");
animalSound("Ant", "    ");
