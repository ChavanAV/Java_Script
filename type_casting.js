
// 30/8/24
console.log("30/8/24");
console.log("");

//type casting

var ip = prompt("Enter number");
console.log(typeof ip, ip);
let n = Number(ip);
// let n = parseInt(ip);
// to pare the number it should be start number only eg. '23 years' not a 'my age is 23 years'
var ip2 = '23 years'; // parseint works
var ip2 = 'age is 23 years'; // parseint doesn't work
// let n1 = Number(ip2);
let n1 = parseInt(ip2);
console.log(n1);
console.log(typeof n, n);


// 16/9/24
console.log("16/9/24");
console.log("");
//convert string into a number
let str = prompt("Enter String")
console.log(str);
console.log(Number(str));
console.log(parseint(str));
console.log(+str);
