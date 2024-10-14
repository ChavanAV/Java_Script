
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

let bagPack2 = {
    i1: "Water bottle",
    i2: "Tiffin",
    i3: "Camera",
    i4: "Pant",
    i5: "Charger",
    i6: "Torch"
}
//One more way to create deep copy in js

let copy = { ...bagPack2 }

copy.name = "Akshay"

console.log(bagPack2);
console.log(copy);