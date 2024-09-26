
//25-9-24

//Second way to create deep copy

let obj = {
    name: "AKshay",
    age: 23,
}

let newObj = Object.assign({}, obj)
console.log(newObj);
newObj.add = "Pune"
console.log(newObj);
console.log(obj);