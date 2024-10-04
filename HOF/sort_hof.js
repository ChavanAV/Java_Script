let arr = [1, 344, 2, 4, 42]



//sort
console.log(arr.sort((a, b) => {
    return a - b
}));

// //another way- it is not nessessary to write return keyword and curly brases
console.log(arr.sort((a, b) => b - a));


let arr2 = arr;
//sort method returns the array back
let sorted_arr = arr2.sort((a, b) => a - b)
// //changes made in copied arr are also affected in original array
console.log(sorted_arr);
console.log(arr);

console.log(arr.sort((a, b) => {
    return a - b
    //here cbf returning some value back
}));

let arr3 = arr.forEach(e => {
    return e + 100;
    // in case of for each loop's cbf if we write return keyword then also it not return anything
})
console.log(arr3);//ud
console.log(arr);

