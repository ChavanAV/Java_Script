



// // let heading = document.getElementById("heading")
// // console.log(heading);


// // 1: Targeting element by using for loop
// let input = document.getElementsByTagName("input")
// console.log(input);
// // input[0].title = "Input 1"

// for (let i = 0; i < input.length; i++) {
//      input[i].style.backgroundColor = "pink"

// }



// // 2:  Targeting element by using class name
// let userInput = document.getElementsByClassName("userInput")
// console.log(userInput);




// // 3:  Targeting element by using QuerySelector (only perticular tag/element target) ,QuerySelectorAll (for All tag target)
// let Input = document.querySelector(".userInput");
// console.log(Input);

// let Input1 = document.querySelectorAll(".userInput");
// console.log(Input1);



// SetAttribute to given block,div or form tag
// let myDiv = document.querySelector("div")
// console.log(myDiv);
// myDiv.setAttribute("class","myDiv")
// console.log(myDiv);


// RemoveAttribute to given block,dic or form tag
// let myDiv = document.querySelector("div")
// console.log(myDiv);
// myDiv.setAttribute("class","myDiv")
// console.log(myDiv);
// myDiv.removeAttribute("class")
// console.log(myDiv);

// Disable input field
// let input = document.querySelector('input')
// input.setAttribute("disabled","")


// Creating elements or div tags
let myDiv = document.createElement("div")
console.log(myDiv);
myDiv.setAttribute("class", "myClass")
console.log(myDiv); // Setting element
// myDiv.innerHTML = "Hello" // 1.Setting Html to element
myDiv.textContent = "Funtya" // 2.Setting Html to element

// first way
// let body = document.body
// console.log(body);  // But body is already present in our Js document.

// Second way
let { body } = document
console.log(body);
body.append(myDiv) // Giving element to body tag


