
let press = () => {
    console.log("Clicked");
    body.style.backgroundColor = "coral"
    button.style.border = "1px solid black"
    button.style.borderRadius = "5px"
    button.style.backgroundColor = "white"
    button.style.height = "30px"
    button.style.width = "100px"
    button.style.fontFamily = "arial black"
}

let { body } = document;
let div = document.createElement("div")
div.style.width = "300px"
div.style.height = "50px"
body.append(div)

let button = document.createElement("button")
button.textContent = "Button"
button.style.border = "1px solid black"
button.style.borderRadius = "5px"
button.style.backgroundColor = "coral"
button.style.height = "30px"
button.style.width = "100px"
button.style.fontFamily = "arial black"


//1st way
// button.onclick = press
//2nd way
// button.addEventListener("click", press)



//adding data from input to heading
let input = document.createElement('input')

let heading = document.createElement("h1")
heading.textContent = 'Enter text'

div.append(input)
div.append(heading)
div.append(button)

let str = '';

input.addEventListener("input", (e) => {
    str += e.data
    console.log(e.data);

})
let p = () => {
    heading.textContent = str
    console.log(str);

}
button.addEventListener('click', p)

