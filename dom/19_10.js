
let { body } = document;

let nav = document.createElement("nav");

nav.innerHTML = `
<div class = "navDivs">text</div>
<div class = "navDivs">text</div>
<div class = "navDivs">text</div>
<div class = "navDivs">text</div>
<div class = "navDivs">text</div>`
body.append(nav)

//adding text to nav
// nav.innerText = "ksfgbsdfb"


// we can remove html tags writen in html file from js file also
//using remove() method
let heading = document.querySelector("h1")
heading.remove()