// 4 / 9 / 24
console.log("4/9/24");
console.log("Immediate invoke function expression");


// Immediate invoke function expression

// (() => {
//     console.log("Immediate invoke function expression");
// })()

//iife called only once

//getting data from prompt.. one way
(() => {
    var ip = prompt("Enter name");
    console.log(ip);
})();

//getting data from prompt.. other way
var ip;
((ip) => {
    ip = prompt();
    console.log("iife", ip);
})(ip)