let arr = [10, 20, 30]

console.log(arr);

// add the element at last index
arr.push(40)
console.log(arr);

//remove the element from last index 
arr.pop();
console.log(arr);

// add the element at first index
arr.unshift(50)
console.log(arr);

//remove the element from first index 
arr.shift();
console.log(arr);



// loop in array

console.log('//using for loop')

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log('//using while loop ');
let i = 0;
while (i < arr.length) {
    console.log(arr[i++]);
}

i = 0;
console.log('//using do-while loop')

do {
    console.log(arr[i]);
    i++
} while (i < arr.length);


console.log('using for each loop');

arr.forEach(elem => {
    console.log(elem);
})

// another way
console.log('another way using for each loop');

let forEachFun = (val) => {
    console.log(val);

}
arr.forEach(forEachFun)

//optimized

arr.forEach((val) => {
    console.log(val);
})


console.log('in for each loop we get element, index and whole array');


arr.forEach((elem, index, arr) => {
    console.log(index);
    console.log(elem);
    console.log(arr);
})



//easy way to write a function
// implicite return function

let a = val => "hello"

console.log(a());