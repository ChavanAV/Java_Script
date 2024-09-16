



//Lexical Scopping:-
'//It is the process of searching the variables into the outer functions if the variables are not available in inner functions.'
//Closure:-
'//It is the process of memory alocation to the variables where the variables that are required in inner functions but declared in outer functions.'


let outerFunc = () => {
    let a = 90;
    let b = 80;
    let innerFun = () => {
        console.log(a);
    }
    innerFun();
}

outerFunc();