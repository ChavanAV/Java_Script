
/*let bagPack = {
    i1: "Water bottle",
    i2: "Tiffin",
    i3: "Camera",
    i4: "Pant",
    i5: "Charger"
}

// console.log(i2); Error

let { i5 } = bagPack;
// console.log(i5);

let arr = ['Water bottle', 'Tiffin', 'Camera', 'torch', 'pant', 'charger']

// let [a, b, c, d, e, f] = arr;

// console.log(a);
// console.log(d);
// console.log(f);
// let [g] = arr;
// console.log(g);

let str = "Akshay"

//spread
console.log(...str);

//rest
let [...b] = str;

// console.log(a);
console.log(b);




// rest paramenter (...) :-

// let [a, b, c, ...d] = arr
// console.log(d);
// console.log(a);


let fun = (val) => {
    console.log(val);
}

//In these function the ...arr will spread thearray elements as indivisuals and pass to the function
fun(...arr);


fun = (val1, val2, val3) => {
    console.log(val3);
}

fun(...arr)

*/

let bagPack2 = {
    i1: "Water bottle",
    i2: "Tiffin",
    i3: "Camera",
    i4: "Pant",
    i5: "Charger",
    i6: "Torch"
}

// let { i1, i2, i3, ...remaining } = bagPack2;

// console.log(remaining);

// let { i1, i3, i4, ...remaining } = bagPack2;
// console.log(remaining);


// console.log(...bagPack2); error

//the syntax  i1: "Water bottle" is not valid in js so we have to enclose the spread object into curly braces

// console.log({ ...bagPack2 })

//use case: deep copy
//One more way to create deep copy in js

let copy = { ...bagPack2 }

copy.name = "Akshay"

console.log('original : ', bagPack2);
console.log('modified: ', copy);
