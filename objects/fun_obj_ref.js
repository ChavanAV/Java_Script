
//26-9-24

//How to make function points to any object as a current object ---> 

// 1:- using call()

let superHero = {
    name: "asdfv",
    power: "23rt",
    speed: 987654321234567890n
}

let fun = function () {
    console.log(this);
}

fun.call(superHero)


//how to pass the values from function parameter
console.log("");

let fun2 = function (realName, add) {
    console.log(this.name)
    console.log(this.realName)//UN
    console.log(realName)
    console.log(add)
    this.realName = realName
    this.add = add
    console.log(this)
    //changes made in function to an object are globally available
}

// To pass the argument to the function in call statement after object reference pass the values
fun2.call(superHero, "Ram", "Ayodhya")
console.log(superHero)


//2 apply() :- 
//It will accept the arguments in the form of array list.
console.log("")
fun2.apply(superHero, ["Raj", "RamNagari"])

let arr = ["Akshay", "Pune"]
fun2.apply(superHero, arr)



console.log("");

//3 bind():
//Just to bind the any object as current object for the function


fun2.bind(superHero, "Shiva", "Kailash")()





//bind and call are same the diff is call executes funcrion bind does not
//call and apply are same but diff is call accepts comm separated arguments while apply accepts array of arguments

