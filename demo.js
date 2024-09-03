
// 30/8/24
// console.log("30/8/24");
// console.log("");


// console.log("hi");
// console.log(999999999999999); //number
// console.log(9999999999999999); //number
// console.log(9999999999999999n); //bigint
// console.log(Boolean(1));
// console.log(Boolean(0));
// console.log(Boolean(2344));
// console.log(Boolean(""));
// console.log(Boolean(" "));
// console.log(Boolean(true));
// console.log(Boolean(false));

// //to check type of data
// var ip = "1341";
// console.log(typeof ip);

// var a = undefined;
// var b = null;
// var c;

// console.log(a);
// console.log(b);
// console.log(c);

// a = 234;
// b = 353;
// c = 2324;

// console.log(a);
// console.log(b);
// console.log(c);


//type casting

// var ip = prompt("Enter number");
// console.log(typeof ip, ip);
// let n = Number(ip);
// let n = parseInt(ip);
//to pare the number it should be start number only eg. '23 years' not a 'my age is 23 years'
// var ip2 = '23 years'; // parseint works
// var ip2 = 'age is 23 years'; // parseint doesn't work
// let n1 = Number(ip2);
// let n1 = parseInt(ip2);
// console.log(n1);
// console.log(typeof n, n);



// 31/8/24
// console.log("31/8/24");
// console.log("");


// console.log(10 + 10);
// console.log("10" + 10);
// console.log("10" + "12");
// console.log("10" - 10);
// console.log("10years" - 10); //nan
// console.log("10year" / 12);//nan
// console.log("10year" * 12);//nan
// console.log("10year" % 12);//nan
// console.log("10year" - "12");//nan
// console.log("10year" / "12"); //nan
// console.log("10year" * "12"); //nan
// console.log("10year" % "12"); //nan
// console.log(false % "12"); // 0
// console.log(false % 123); // 0
// console.log(false % 0); // nan
// console.log(0 % 0); // 0
// console.log(null % 23); // 0
// console.log(null % 0); // nan
// console.log(Number("10") - 4);
// console.log(10 & -1); //10
// console.log(10 $ -1); //cte

// var p = "hi";
// var q = "hi";
// console.log(p == q); //t
// console.log(p === q); //t

// var a = Symbol("hi");
// var b = Symbol("hi");
// var c = Symbol("hi");
// var d = Symbol("hi");

// console.log(a == b == c == d); //f
// console.log(a === b) // f
// console.log(c === d); //f


// var - let - const

// declare

// var a;
// let b;
// const c;  cte

//Initialize

// a = 42;
// b = 45;
// c = 324; we cannot intialize const variable without initilizing it . the varialbe will treated as any type variable


// declare and initialize

// var a = 232
// let b = 435;
// const c = 24;


// Redeclare

// var a;
// var a;
// let b;
// let b; cte
// const c; cte
// const c; cte

// Reinitialization
// var a;
// a = 34;
// a = 324;
// console.log(a);
// let b;
// b = 24;
// b = 242;
// console.log(b);
// const c = 34;
// // c = 34;// cte
// console.log(c);

// 2 / 9 / 24
// console.log("2/9/24");
// console.log("");


// if (true) {
//     const a = 23;
//     console.log(a);

// }
// console.log(a); 

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

let intro = (name, loc, age) => {
    console.log(`My name is ${name}, I am from ${loc} and my age is ${age}`);
}

intro("Akshay", "Pune", 23);