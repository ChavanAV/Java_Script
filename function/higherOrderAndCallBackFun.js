
// 4 / 9 / 24
console.log("4/9/24");
console.log("higher Order And Call back Function");

let hof = (cbfParam) => {
    cbfParam();
}

let cbf = () => {
    console.log("CBF");
}

hof(cbf);

// the function which passed as an argument into the other function, and executed inside the other function is called as callback function
//and the function which accept the callback function argument, and inside which callback function executed called as higher order function.