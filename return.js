let f = () => {
    console.log("function called");
    return 10;
}

// let v = f();
// console.log(v);

let f2 = () => {
    return () => {
        return "Hello";
    }
}

// let rv2 = f2();
// let rv22 = rv2();
// console.log(rv22);
console.log(f2()());

