// 1.	**Basic Array Destructuring**: 
//    You have an array `const colors = [“red”, “green”, “blue”]`.
//  Destructure this array to assign the first, second, and third values
//  to separate variables, `firstColor`, `secondColor`, and `thirdColor`. 
// Ensure that each variable holds the corresponding color.

const colors = ['red', 'green', 'blue']

let [firstColor, secondColor, thirdColor] = colors

console.log(firstColor, secondColor, thirdColor);


// 2.	**Skipping Elements During Destructuring**:
//    Given the array `const numbers = [1, 2, 3, 4, 5]`, 
// use destructuring to assign the first and third elements to separate variables. 
// Skip the second element without creating a variable for it.

const numbers = [1, 2, 3, 4, 5]

let [num1, , num3, ...nums] = numbers;
console.log(num3);


// 3.	**Destructuring a Nested Array**:
//    You have a nested array `const matrix = [[1, 2], [3, 4], [5, 6]]`. 
// Destructure it to get the individual numbers from each sub-array. 
// Assign each value (1, 2, 3, etc.) to its respective variable.
const matrix = [[1, 2], [3, 4], [5, 6]]

//another way
// let [[a,b]] = matrix;

let [a, b, c] = matrix
let [a1, a2] = a;
let [b1, b2] = b;
let [c1, c2] = c;

console.log(a1, a2, b1, b2, c1, c2);



// 4.	**Destructuring an Object**:
//    Given the object `const user = { name: “Alice”, age: 30, location: “Wonderland” }`,
//  destructure it to extract the `name`, `age`, and `location` properties into separate 
// variables. Ensure each variable contains the correct value.
const user = { name: 'Alice', age: 30, location: 'Wonderland' }

let { name, age, location } = user;
console.log(name, age, location);


// 5.	**Renaming During Object Destructuring**:
//    You have an object `const point = { x: 10, y: 20 }`. Destructure the object 
// to rename `x` as `horizontal` and `y` as `vertical`. Store the values in these 
// renamed variables.
const point = { x: 10, y: 20 }
let { x, y } = point;
horizontal = x;
vertical = y;
console.log(horizontal, vertical);
//another
// let [x: horizontal, y : vertical] = point;




// 6.	**Providing Default Values**:
//    Given the object `const book = { title: “JavaScript Basics”, year: 2021 }`, 
// destructure it to extract `title`, `year`, and a non-existent `author` property.
//  Assign a default value of “Unknown Author” to `author`.
const book = { title: 'JavaScript Basics', year: 2021 }
let { title, year, author } = book;
author = 'Unknown Author'
console.log(title, year, author);



// 7.	**Destructuring Function Parameters**:
//    Write a function `getProfile({ name, age, country })` 
// that takes an object as an argument. Destructure the object to 
// extract `name`, `age`, and `country` and use them inside the function.
let getProfile = ({ name1, age1, country }) => {
    console.log(name1);
    console.log(age1);
    console.log(country);

}
let obj = {
    name1: "Akshay",
    age1: 10,
    country: "India"
}
getProfile(obj)


// 8.	**Destructuring Nested Objects**:
//    Given the object `
// const person = { name: “Bob”, details: { age: 25, address: { city: “New York”, country: “USA” } } }`,
//  destructure it to get the `name`, `age`, `city`, and `country` into separate variables.
const person = { name2: 'Bob', details: { age2: 25, address: { city: 'New York', country2: 'USA' } } }
let { name2, details } = person
let { age2, address } = details;
let { country2 } = address;

console.log(name2, age2, country2);




// 9.	**Rest Operator in Array Destructuring**:
//    You have an array `const letters = [“a”, “b”, “c”, “d”, “e”]`. Use the rest operator in destructuring to extract the first letter into a variable, and the remaining letters into another array.
const letters = ['a', 'b', 'c', 'd', 'e']
let [a3, ...b3] = letters
console.log(b3);


// 10.	**Rest Operator in Object Destructuring**:
//     Given the object `const settings = { theme: “dark”, notifications: true, layout: “grid”, language: “en” }`, destructure it to extract the `theme` property and group the rest of the properties into a separate object.


const settings = { theme: 'dark', notifications: true, layout: 'grid', language: 'en' }
let { theme, ...setting } = settings
console.log(setting);


// ### Spread Operator Tasks:

// 11.	**Copying an Array**:
//     Given the array `const originalArray = [1, 2, 3]`, create a new array by copying `originalArray` using the spread operator. Modify the new array without affecting the original array.
const originalArray = [1, 2, 3]
let newArr = [...originalArray]
newArr.push(4)
console.log(originalArray);
console.log(newArr);


// 12.	**Merging Two Arrays**:
//     You have two arrays `const arr1 = [10, 20]` and `const arr2 = [30, 40]`. Merge these two arrays into one using the spread operator and store the result in a new variable.
const arr1 = [10, 20]
const arr2 = [30, 40]
let arr3 = [...arr1, ...arr2]
console.log(arr3);




// 13.	**Concatenating Arrays with Spread**:
//     Given two arrays `const start = [1, 2]` and `const end = [9, 10]`,
//  use the spread operator to concatenate the `start` array at the beginning of the `end` array.
const start = [1, 2]
const end = [9, 10]
let strEnd = [...start, ...end]
console.log(strEnd);




// 14.	**Copying an Object Using Spread**:
//     You have an object `const car = { make: “Toyota”, model: “Corolla” }`. 
// Use the spread operator to create a copy of this object. Modify the copy without
//  affecting the original object.
const car = { make: 'Toyota', model: 'Corolla' }
let newObj = { ...car };//deep copy
newObj.type = 'petrol'
console.log(car);
console.log(newObj);



// 15.	**Merging Objects with Spread**:
//     Given two objects `const defaults = { volume: 50, brightness: 80 }` 
// and `const userSettings = { volume: 30 }`, merge them into a new object.
// Ensure the `volume` from `userSettings` overwrites the one in `defaults`, 
// while keeping the other properties from `defaults`.
const defaults = { volume: 50, brightness: 80 }
const userSettings = { volume: 30 }
let newObj2 = { ...defaults, ...userSettings } //overriding which one should destracts first matters
console.log(newObj2);


// 16.	**Using Spread in Function Arguments**:
//     Write a function `sum(a, b, c)` that takes three numbers as arguments. 
// Call this function with an array `[5, 10, 15]` using the spread operator to pass
//  the values as individual arguments.

let array = [5, 10, 15]
let sum = (a, b, c) => {
    console.log(a + b + c);
}
sum(...array)


// 17.	**Rest Operator in Function Parameters**:
//     Write a function `calculateTotal(…prices)` that accepts any number of price 
// values as arguments. Inside the function, sum all the price values and return the total.
let prices = [3, 1341, 44]
let calculateTotal = (a, b, c) => {
    console.log(a + b + c);
}
calculateTotal(...prices)

// 18.	**Combining Rest and Spread**:
//     You have a function `combineArrays(arr1, arr2)` that merges two arrays. 
// Modify the function so that it can accept any number of arrays using the rest operator. 
// Use the spread operator inside the function to merge the arrays.

let combineArrays = (...allArr) => {
    let [a1, a2] = [...allArr]
    let a = [...a1, ...a2]
    console.log(a);

}
let array1 = [131, 4]
let array2 = [1, 54324]
combineArrays(array1, array2)


//another
let combineArrays2 = (...allArr) => {
    console.log(allArr);

}
combineArrays2(...array1, ...array2)

// 19.	**Array Destructuring with Spread**:
//     Given the array `const nums = [1, 2, 3, 4, 5]`, destructure it to extract the 
// first number into one variable and the rest of the numbers into another array using 
// the spread operator.

const nums2 = [1, 2, 3, 4, 5]
let [num6, ...arr4] = nums2;
console.log(num6);
console.log(arr4);


// 20.	**Rest and Spread in Object Destructuring**:
// You have an object `const config = { host: “localhost”, port: 3000, user: “admin”, password: “1234” }`. 
// Destructure this object to extract `host` and `port` into separate variables, 
// while using the rest operator to group the remaining properties into another object. 
// Use the spread operator to modify this new object by changing the `user` property.

const config = { host: 'localhost', port: 3000, user: 'admin', password: '1234' }
let { host, port, ...obj5 } = config
obj5.user = 'Akshay'
console.log(obj5);
