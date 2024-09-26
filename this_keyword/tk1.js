

//25-9-24

// this keyward is a variable

//1st scenario:

//In the global scope this keyword will points towards the window object
console.log(this);


//2nd scenario: Using normal function
// points towards the window object
let fun = function () {
    console.log('In normal function', this);
}


//3rd Scenario: Using arrow function
// points towards the window object
let fun2 = () => {
    console.log('Arrow function', this);
}
fun()
fun2()

//Local scope

let obj = {
    name: "sda",
    age: 23,

    //4th Scenario: Using normal function in object
    //Normal function this keyword points towards the current object
    fun3: function () {
        console.log('Normal function', this);
    },

    //5th Scenario: Using arrow function in object
    // Arrow function this keyword always points towards the window object
    fun4: () => {
        console.log('Arrow function', this);
    }
}

obj.fun3()
obj.fun4()


//If there is no any object then this keyword always points towards the window object
console.log("");

let obj2 = {
    name: "Raj",
    age: 23,
    fun3: function () {
        let a = 39;
        console.log('Normal function', this); //Normal function this keyword points towards the current object
        console.log('Normal function', a);
        let nestedFun = () => {
            console.log('Nested function ', this);
            console.log('Nested function ', a);
            // In a Nested function this keyword always points towards the current object 
            //even if the inner function is arraow function
            // this is the only scenario where arraow function points towards current object
            //this is happening due to lexical scopping
        }
        nestedFun();
    },
    fun4: () => {
        let a = 1;
        console.log('Arrow function', this); //Arraow function this keyword points towards the window object
        console.log('Arrow function', a);
        let nestedArrowFun = () => {
            console.log('Nested Arrow function ', this);
            console.log('Nested Arrow function ', a);
            // In a Nested function this keyword always points towards the window object 
            //even if the inner function is arraow function
        }
        nestedArrowFun();
        let nestedNormalFun = function () {
            console.log('Nested normal function ', this);
            console.log('Nested normal function ', a);
            // In a Nested function this keyword always points towards the window object 
            //even if the inner function is arraow function
        }
        nestedNormalFun();
    },
}

obj2.fun3();
console.log("");
obj2.fun4();