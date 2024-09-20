


let value = 12345;
let obj = {
    key: value
}

// add the new entry in obj

console.log(obj);

obj.key2 = 9;

console.log(obj);

//change the entry on obj
console.log(obj);

obj.key = 3456;

console.log(obj);

//delete entry in obj

delete obj.key
console.log(obj);

//access the values from object

console.log(obj["key2"]);

// eg

let std = {
    name: "Ram",
    add: "pune",
    ph: 1234567890,
}

console.log(std.name);
console.log(std.add);
console.log(std.ph);

// to check wether the entries are available or not in the object

console.log("name" in std);
console.log("add" in std);
console.log("ph" in std);
console.log("sal" in std);

// we can pass the function in the object

let funObj = {
    name: "ABC",
    age: 22,
    mo: 987654327,
    fun: () => {
        console.log(funObj.name);
        console.log(this.name); // undefined 
        //in js you will not use this keyword inside arrow function because this keyword will always point towards the window object
    },
    // using normal ffunction
    normFun: function () {
        console.log(this.name);
        //in js normal function we can use this keyword it will points to the current object.
    }
}

// funObj.fun();
funObj.normFun();
