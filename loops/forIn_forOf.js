


//for in loop is used to iterate over the object

let obj = {
    name: 'Ram',
    age: 23,
    add: 'Pune'
}

for (let key in obj) {
    console.log(obj[key]);
}





//for of loop is used to iterate over the array elements

let arr = [10, 20, 30, 40, 50]

for (val of arr) console.log(val + 100);


//for in loop over array gives indexes of array
