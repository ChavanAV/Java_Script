

let arr = ["a", "a", "a"]
console.log(arr)

//Array in js are not statically typed

let arr2 = ["sfdsf", 345, 324.24, null, () => { }, undefined, { name: "Name" }, ['dsff', 'fdsf']]
console.log(arr2.length);

console.log(arr2[arr2.length - 1]);

//inserting the element in the last index of an aray

let arr3 = [1, 2, 3, 4]
console.log(arr3);
arr3.push(5)
console.log(arr3);

//removing the last indexed element from the array

arr3.pop();
console.log(arr3);

//access the elements

console.log(arr3.indexOf(3));
console.log(arr3.at(0));

arr3.unshift(1)
console.log(arr3);

