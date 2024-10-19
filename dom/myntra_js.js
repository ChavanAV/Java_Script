
let { body } = document
console.log(body);


let Div = document.createElement("div")
console.log(Div);

body.append(Div)
console.log(body);


let Nav = document.createElement("nav")

Div.append(Nav)

let Div2 = document.createElement("div")
Nav.append(Div2)

let ul = document.createElement("ul")
Nav.append(ul)

let l1 = document.createElement("li")
ul.appendChild(l1)
l1.textContent = "All"

let l2 = document.createElement("li")
ul.appendChild(l2)
l2.textContent = "Fresh"

let l3 = document.createElement("li")
ul.appendChild(l3)
l3.textContent = "Mx Player"

let l4 = document.createElement("li")
ul.appendChild(l4)
l4.textContent = "Sell"


let l5 = document.createElement("li")
ul.appendChild(l5)
l5.textContent = "Best Sellers"



let l6 = document.createElement("li")
ul.appendChild(l6)
l6.textContent = "Today's Deals"


let l7 = document.createElement("li")
ul.appendChild(l7)
l7.textContent = "Mobiles"


let l8 = document.createElement("li")
ul.appendChild(l8)
l8.textContent = "Electronics"


let l9 = document.createElement("li")
ul.appendChild(l9)
l9.textContent = "Home & Kitchen"


let l10 = document.createElement("li")
ul.appendChild(l10)
l10.textContent = "Prime"


let l11 = document.createElement("li")
ul.appendChild(l11)
l11.textContent = "Customer Service"


let l12 = document.createElement("li")
ul.appendChild(l12)
l12.textContent = "New Releases"

let search = document.createElement("input")
ul.appendChild(search)
search.setAttribute("class", "mySearch")
search.placeholder = "Search"