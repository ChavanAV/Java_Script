

let outerFunc = () => {
    let a = 10;
    let c = 20;
    let innerFun = () => {
        console.log(a);
    }
    return innerFun;
}

let rv = outerFunc();
rv();

//the ability of javascript engine to access the variables from outer function to inner function
//even if the outer function execution context is distroyed is called clousre.