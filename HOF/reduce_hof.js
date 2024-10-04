

//Reduce

/**used to get addition of array elements
syntax-
let add = arr.reduce((accumulator, value, index, wholeArray) => {}, initialValueOfAccumulator)


diff-
1-  cbf has 4 arguments accumulator, value, index, wholeArray.
    accumulator will keep addition of all elements
2-  we can pass two arguments in reduce hof: 
        i   - cbf 
        ii  - initial value for accumulator
3-  reduce will return varialble it will not return array like map.

*/


let arr = [1, 2, 3, 4, 5]
let add = arr.reduce((accumulator, val, i, wa) => {
    return accumulator += val;
})
let add2 = arr.reduce((acc, val, i, wa) => {
    return acc += val;
}, 100)

console.log(add);
console.log(add2);
