
// 30/8/24
console.log("30/8/24");
console.log("");


console.log("hi");
console.log(999999999999999); //number
console.log(9999999999999999); //number
console.log(9999999999999999n); //bigint
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(2344));
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean(true));
console.log(Boolean(false));

// //to check type of data
var ip = "1341";
console.log(typeof ip);

var a = undefined;
var b = null;
var c;

console.log(a);
console.log(b);
console.log(c);

a = 234;
b = 353;
c = 2324;

console.log(a);
console.log(b);
console.log(c);



// 31/8/24
console.log("31/8/24");
console.log("");


console.log(10 + 10); //20
console.log("10" + 10); // 1010
console.log("10" * 10); // 100
console.log("10" - 10); // 0
console.log("100" / 10); // 10
console.log("10" + "12"); // 1022
console.log("10" - "10"); // 0
console.log("10" == 10); // true
console.log("10years" - 10); //nan
console.log("10year" / 12);//nan
console.log(12 / 0);  //infinity
console.log("10year" * 12);//nan
console.log("10year" % 12);//nan
console.log("10year" - "12");//nan
console.log("10year" / "12"); //nan
console.log("10year" * "12"); //nan
console.log("10year" % "12"); //nan
console.log(false % "12"); // 0
console.log(false % 123); // 0
console.log(false % 0); // nan
console.log(0 % 0); // 0
console.log(null % 23); // 0
console.log(null % 0); // nan
console.log(Number("10") - 4);
console.log(10 & -1); //10
// console.log(10 $ - 1); //cte

var p = "hi";
var q = "hi";
console.log(p == q); //t
console.log(p === q); //t

var a = Symbol("hi");
var b = Symbol("hi");
var c = Symbol("hi");
var d = Symbol("hi");

console.log(a == b == c == d); //f
console.log(a === b) // f
console.log(c === d); //f