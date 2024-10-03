

let arr = [1, 2, 433, 33, 45, 453, 5, 25, 35, 3]

let newArr = arr.forEach(e => {
    console.log(e);
    return e + 100;
})

console.log(newArr);

//we can't return the values using for each loop/method.
//It will iterate on the array but not returns anything

//to return the value we use map method
//which can access and also return the values of array 
//map method works only on the array not on the objects.


let mapArr = arr.map(e => {
    console.log(e);
    return e + 100;
})

console.log(mapArr);
console.log(arr);
//it can retuen the values and also modifies the values.
//changes made in the array does not afect the original array.