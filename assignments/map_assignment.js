
console.log("--------1--------");

/*
### Task 1: Double the Numbers
Write a function that takes an array of numbers and returns a new array with each number doubled.

*Input:* [1, 2, 3, 4, 5]  
*Output:* [2, 4, 6, 8, 10]   */

let arr = [1, 2, 3, 4, 5]
let ans = arr.map(e => e * 2)
console.log(ans);


console.log("--------2--------");
/*
### Task 2: Convert Temperatures
Given an array of temperatures in Celsius, use map() to convert them to Fahrenheit.

*Formula:* F = (C × 9/5) + 32  
*Input:* [0, 10, 20, 30]  
*Output:* [32, 50, 68, 86]   */
let arr2 = [0, 10, 20, 30]
let ans2 = arr2.map(e => (e * 9 / 5) + 32)
console.log(ans2);



console.log("--------3--------");
/*
### Task 3: Add 'Hello' to Each Name
You have an array of names. Use map() to return a new array where each name is prefixed with "Hello".

*Input:* ["Alice", "Bob", "Charlie"]  
*Output:* ["Hello Alice", "Hello Bob", "Hello Charlie"]  */
let arr3 = ["Alice", "Bob", "Charlie"]

// using for each loop
let a = []
arr3.forEach(e => a.push(`Hello ${e}`))
console.log(a);

//using map 

let ans33 = arr3.map(e => `Hello ${e}`)
console.log(ans33);



console.log("--------4--------");
/*
### Task 4: Extract Property Values
You have an array of objects representing users. Use map() to return an array of just the usernames.

*Input:* [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]  
*Output:* ["Alice", "Bob"]       */
let arr4 = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }]
let ans4 = arr4.map(e => e.name)
console.log(ans4);



console.log("--------5--------");
/*
### Task 5: Square the Numbers
Write a function that squares each number in an array and returns the new array using map().

*Input:* [2, 3, 4]  
*Output:* [4, 9, 16]     */

let arr5 = [2, 3, 4]
let ans5 = arr5.map(e => e ** 2)
console.log(ans5);


console.log("--------6--------");
/*
### Task 6: Create HTML List Items
Given an array of product names, use map() to return a new array of HTML <li> elements for each product.

*Input:* ["Apples", "Oranges", "Bananas"]  
*Output:* ["<li>Apples</li>", "<li>Oranges</li>", "<li>Bananas</li>"]  */
let arr6 = ["Apples", "Oranges", "Bananas"]
let ans6 = arr6.map(e => `<li>${e}</li>`)
console.log(ans6);


console.log("--------7--------");
/*
### Task 7: Add Tax to Prices
You have an array of product prices. Use map() to return a new array where each price includes 15% tax.

*Input:* [100, 200, 300]  
*Output:* [115, 230, 345]  */
let arr7 = [100, 200, 300]
let ans7 = arr7.map(e => e + e * (15 / 100))
console.log(ans7);


console.log("--------8--------");
/*
### Task 8: Convert Strings to Numbers
You have an array of strings representing numbers. Use map() to convert them into actual numbers.

*Input:* ["1", "2", "3"]  
*Output:* [1, 2, 3]     */

let arr8 = ["1", "2", "3"]
let ans8 = arr8.map(e => Number(e))
console.log(ans8);
