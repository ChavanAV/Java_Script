
// //Declaration using array literal way
// let arr = [123, 34, 134, 134]
// console.log(arr);

// // Using Array class class and new keyword
// let arr2 = new Array(3134, 34, 134, 1)
// console.log(arr2);


let arr3 = ["sfdsf", 345, 324.24, null, true, undefined, () => { console.log("this is function") },
    { name: "Akshay" }, ['dsff', 'fdsf'], [321, [141, [14, [13414, ["last"]]]]]]
console.log(arr3);

//Access the element

//how to call the function declaared in array
let f = arr3[6]
f()
//another way- add the parenthesis after the array index reference
arr3[6]()

//access the object from array
console.log(arr3[7].name);

//access the array from array
console.log(arr3[8][0]);
console.log(arr3[8][1]);

//access the nested array from array

console.log(arr3[9][1][1][1][1][0]);




//adding and removing elements from array

let arr4 = [10, 20, 30, 40]

//add elem at last index:- push(elem)
arr4.push(50)
console.log(arr4);

//remove last index elem:- pop()
arr4.pop()
console.log(arr4);

//add the elem at 1st index:- unshift(elem)
arr4.unshift(5)
console.log(arr4);

//remove elem from 1st index:- shift()
arr4.shift()
console.log(arr4);

//access the element's index:- indexOf(elem)
console.log(arr4.indexOf(10));

//acces the element from the index:- at(index)
console.log(arr4.at(3));

//to check the element is present or not in array:- includes(elem) ---> true/false
console.log(arr4.includes(30))
console.log(arr4.includes(930))


//slice(start index, end index):- 
//copy the elem from array
//changes done in the copied array using slice() method are not affect in the original array

let arr5 = [10, 20, 30, 40, 50]
let arr5_cp = arr5.slice(1, 4)
console.log('Copy: ', arr5_cp);
console.log(arr5.slice(0, 1));
console.log(arr5.slice(1, 4));
console.log(arr5);

//splice(start index, length, new elem):-
//changes made in copied array using splice method are affected in the original array
let cp2 = arr5.splice(0, 1)
console.log('Copy: ', cp2);
console.log('Original: ', arr5)

//to add the elem in array using splice
cp2 = arr5.splice(0, 0, 5)
console.log('Copy: ', cp2)
console.log('Original: ', arr5)