
console.log(Math.sqrt(25)); //5

console.log(Math.abs(-122.1343013000)); //convert -ve to +ve

console.log(Math.max(1234, 134));//1234

console.log(Math.min(1234, 134));//134

console.log(Math.round(134.1341341));//134

console.log(Math.cbrt(27)); //3

console.log(Math.floor(3424.234)); //3424

console.log(Math.ceil(3424.234)); //3425

console.log(Math.random()); //random number

console.log(Math.pow(5, 2));//25

console.log(Math.trunc(234.24)); //234

// console.log(Math.exp(5));


let n = Math.round(Math.random() * 10000);
console.log(n * Math.pow(10, n.toString().length - 4));

let otp = Math.random();
console.log(Math.round(otp * 9000) + 999);