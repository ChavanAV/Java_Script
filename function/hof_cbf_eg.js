// 5 / 9 / 24
console.log("5/9/24");
console.log("higher Order And Call back Function example");

// let operation = (op) => {
//     console.log("oparation fun called");
//     console.log(op);
//     op(12, 12);
// }

// let sum = (a, b) => {
//     console.log("sum fun called");
//     console.log(a+b);
// }

// operation(sum);


let operation = (op, x, y) => {
    // console.log("oparation fun called");
    // console.log(op);
    op(x, y);
}

let sum = (a, b) => {
    console.log("Add", a + b);
}

let sub = (a, b) => {
    console.log("Sub", a - b);
}

let mul = (a, b) => {
    console.log("Mul", a * b);
}
let div = (a, b) => {
    console.log("Div", a / b);
}

operation(sum, 20, 30);
operation(mul, 20, 30);
operation(sub, 200, 30);
operation(div, 90, 30);