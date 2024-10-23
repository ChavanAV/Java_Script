

// 1. **Change Background Color:**
//    - Create a button with a label like “Change Background”. Write a function that will change the background color
//  of the entire page when this button is clicked. You can allow the user to choose a random color or pick a predefined color.
//
/*
let { body } = document;


// //One way
// let ip = document.createElement('input')
// ip.type = 'color'
// body.append(ip)

// let btn2 = document.createElement('button')
// body.append(btn2)
// btn2.textContent = 'Change Color'

// btn2.addEventListener('click', () => {
//     body.style.backgroundColor = ip.value
// })

//another way

let div = document.createElement("div");

div.style.height = '500px'
div.style.width = '100%'



let form = document.createElement('form');
let lable1 = document.createElement('label')
lable1.textContent = 'coral'
let lable2 = document.createElement('label')
lable2.textContent = 'red'
let lable3 = document.createElement('label')
lable3.textContent = 'cyan'
let lable4 = document.createElement('label')
lable4.textContent = 'orange'

let i1 = document.createElement('input');
i1.type = 'radio';
i1.name = 'color';
i1.value = 'coral';
let i2 = document.createElement('input');
i2.type = 'radio';
i2.name = 'color';
i2.value = 'red';
let i3 = document.createElement('input');
i3.type = 'radio';
i3.name = 'color';
i3.value = 'cyan';
let i4 = document.createElement('input');
i4.type = 'radio';
i4.name = 'color';
i4.value = 'orange';



let btn = document.createElement('button');
btn.style.height = '50px'
btn.style.width = '150px'
btn.style.backgroundColor = 'grey'
btn.style.borderRadius = '3px'
btn.textContent = 'Change Background'





lable1.append(i1);
lable2.append(i2);
lable3.append(i3);
lable4.append(i4);

form.append(lable1)
form.append(lable2)
form.append(lable3)
form.append(lable4)

div.append(form)
div.append(btn)
body.append(div)

form.querySelectorAll('label').forEach(label => {
    label.style.display = 'block';
});

btn.addEventListener('click', () => {
    let selectedColor = document.querySelector('input[name = "color"]:checked');
    document.body.style.backgroundColor = selectedColor.value;
});

*/

// 2. **Text Update:**
//
//    - Add a p element to your HTML with some initial text (e.g., “Click the button to change this text.”).
// Create a button labeled “Update Text”. Write a function that, when the button is clicked, changes the p text to somet
// hing else (e.g., “Text updated!”).


let { body } = document;
let div = document.createElement("div");

div.style.height = '500px'
div.style.width = '100%'

let p = document.createElement('p');
p.textContent = 'Click the button to change this text.';

let btn = document.createElement('button');
btn.style.height = '50px'
btn.style.width = '150px'
btn.style.backgroundColor = 'grey'
btn.style.borderRadius = '3px'
btn.textContent = 'Update Text'

div.append(p)
div.append(btn)
body.append(div)

btn.addEventListener('click', () => {
    p.textContent = "Text updated!"
});


//
// 3. **Hide/Show Element:**
//
//    - Add a div with some content and a button labeled “Hide/Show”. Write a function that hides the div when the button
//  is clicked for the first time, and shows it again when clicked the second time. Use a boolean or toggle to keep track of
//  whether the div is visible or hidden.
/*
let { body } = document;
let div = document.createElement('div');
div.textContent = 'content';
div.style.margin = '20px';
div.style.padding = '10px';
div.style.backgroundColor = '#f0f0f0';


let btn = document.createElement('button');
btn.textContent = 'Hide/Show';


body.appendChild(div);
body.appendChild(btn);


let isDivVisible = true;


btn.addEventListener('click', () => {
    (isDivVisible)
        ? div.style.display = 'none'
        : div.style.display = 'block';
    isDivVisible = !isDivVisible;
})


*/

// 4. **Add New Item to List:**
//
//    - Create an input field and an empty unordered list (ul) in your HTML. Below the input, add a button labeled “A
// dd Item”. Write a function that, when the button is clicked, adds the value from the input field as a new list item (li) to t
// he unordered list. Make sure to clear the input field after adding the item.
/*

let ip = document.createElement('input');
ip.type = 'text';

let btn = document.createElement('button');
btn.textContent = 'Add Item';

let ul = document.createElement('ul');


document.body.appendChild(ip);
document.body.appendChild(btn);
document.body.appendChild(ul);

btn.addEventListener('click', () => {
    let item = document.createElement('li');
    item.textContent = ip.value;
    ul.appendChild(item);
    ip.value = '';
})

*/
// 5. **Remove Last Item from List:**
//
//    - Add an unordered list with a few predefined list items (li). Below the list, add a button labeled “Remove Las
// t Item”. Write a function that, when the button is clicked, removes the last item from the list. Make sure the function works
//  even when the list is empty (i.e., it shouldn’t break).
/*

let ul = document.createElement('ul');
let item1 = document.createElement('li');
item1.textContent = 'sjkjsb'
let item2 = document.createElement('li');
item2.textContent = 'jknnjn'
let item3 = document.createElement('li');
item3.textContent = 'tre'

let btn = document.createElement('button');
btn.textContent = 'Remove Last Item';

ul.append(item1, item2, item3)

document.body.append(ul)
document.body.append(btn)


btn.addEventListener('click', () => {
    let s = ul.lastElementChild;
    if (s) ul.removeChild(s)
})

    */

// 6. **Toggle Class:**
//
//    - Create a div element with some initial style, like a background color or border. Add a button labeled “Toggle
//  Style”. Write a function that toggles a specific class on the div when the button is clicked. The class should change the di
// v’s appearance (e.g., different color or border style).
/*

let div = document.createElement('div');
div.className = 'styledDiv'
document.body.appendChild(div);

let btn = document.createElement('button');
btn.textContent = 'Toggle Style';
document.body.appendChild(btn);


btn.onclick = () => {
    div.className = 'toggledStyle'
    // div.classList.toggle('toggledStyle')
}


*/
// 7. **Change Image Source:**
//
//    - Add an image element with an initial source. Below the image, add two buttons labeled “Change to Image 1” and
//  “Change to Image 2”. Write functions for both buttons that change the image’s source to a different URL when clicked.
/*

let image = document.createElement('img');
document.body.appendChild(image);

let btnDiv = document.createElement('div');
document.body.appendChild(btnDiv);

let btnImage1 = document.createElement('button');
btnImage1.textContent = 'Change to Image 1';
btnDiv.appendChild(btnImage1);

let btnImage2 = document.createElement('button');
btnImage2.textContent = 'Change to Image 2';
btnDiv.appendChild(btnImage2);

let image1Url = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg';
let image2Url = 'https://thumbs.dreamstime.com/b/tree-6324904.jpg';

btnImage1.onclick = () => {
    image.src = image1Url;
};

btnImage2.onclick = () => {
    image.src = image2Url;
};
*/
//
// 8. **Create Elements Dynamically:**
//
//    - Add a button labeled “Add p”. Write a function that, when the button is clicked, creates a new paragr
// aph element and appends it to the document body. The p should contain some text (e.g., “This is a new p!”).
/*

let btn = document.createElement('button');
btn.textContent = 'Add p';
document.body.appendChild(btn);

btn.addEventListener('click', () => {
    let p = document.createElement('p');
    p.textContent = 'This is a new p!';
    document.body.appendChild(p);
})

*/
//
// 9. **Disable Button After Click:**
//
//    - Add a button labeled “Click Me”. Write a function that disables the button (i.e., makes it unclickable) after
//  it’s been clicked once. You can change the button’s text to indicate that it’s been disabled (e.g., “Button Disabled”).

/*
let btn = document.createElement('button');
btn.textContent = 'Click Me';
document.body.appendChild(btn);

btn.addEventListener('click', () => {
    btn.disabled = true;
    btn.textContent = 'Button Disabled';
});
*/

//
// 10. **Display Input Text:**
//
//     - Create an input field and a div below it. Write a function that, as the user types into the input field, dis
// plays the same text in the div In real-time. This can be achieved by listening for the input event and updating the div’s inn
// er text with the input’s current value.
/*

let ip = document.createElement('input');
document.body.appendChild(ip);

let div = document.createElement('div');
document.body.appendChild(div);

ip.addEventListener('input', () => {
    div.textContent = ip.value;
});

*/
// 11. **Change Text Color on Hover:**
//
//     - Add a p element with some text. Write a function that changes the text color when the mouse hovers o
// ver the p and reverts the color back to its original state when the mouse leaves.
/*

let p = document.createElement('p');
p.textContent = 'bvhgvv g hgg hg lgi gvvkv';
document.body.appendChild(p);

p.style.color = 'black';

p.addEventListener('mouseenter', () => {
    p.style.color = 'red';
});

p.addEventListener('mouseleave', () => {
    p.style.color = 'black';
});

*/
// 12. **Display Current Date and Time:**
//
//     - Add a button labeled “Show Date and Time”. Write a function that, when the button is clicked, displays the c
// urrent date and time in a div below the button. You can use JavaScript’s `Date` object to get the current date and time.
/*
    let btn = document.createElement('button');
    btn.textContent = 'Show Date and Time';
    document.body.appendChild(btn);

    let div = document.createElement('div');
    document.body.appendChild(div);

    btn.addEventListener('click', () => {
        let now = new Date();
        div.textContent = now.toString();
    });

    */
// 13. **Remove Element:**
//
//     - Add a div or any other element with some content. Below it, add a button labeled “Remove Element”. Write a f
// unction that removes the element from the DOM when the button is clicked.

/*
let div = document.createElement('div');
div.style.height = '200px'
div.style.width = '200px'
div.style.backgroundColor = 'red'
document.body.appendChild(div);

let btn = document.createElement('button');
btn.textContent = 'Remove Element';
document.body.appendChild(btn);

btn.addEventListener('click', () => {
    document.body.removeChild(div)
});

*/
// 14. **Count Button Clicks:**
//
//     - Create a button labeled “Click Counter”. Below the button, add a p that displays the number of times
//  the button has been clicked (e.g., “Button clicked 0 times”). Write a function that increments the count every time the butt
// on is clicked.
/*

let button = document.createElement('button');
let p = document.createElement('p');
let count = 0;

button.textContent = 'Click Counter';
p.textContent = 'Button clicked 0 times';

document.body.appendChild(button);
document.body.appendChild(p);

button.addEventListener('click', function () {
    count++;
    p.textContent = `Button clicked ${count} times`;
});

*/
// 15. **Display Window Width:**
//
//     - Add a div that will display the current window width. Write a function that updates the width in the div whe
// never the user resizes the window. You can listen for the `resize` event and use `window.innerWidth` to get the current width
/*

let widthDisplay = document.createElement('div');

updateWidth = () => {
    widthDisplay.textContent = `Current window width: ${window.innerWidth}px`;
}

document.body.appendChild(widthDisplay);
updateWidth();

window.addEventListener('resize', updateWidth)
*/

// 16. **Add Class to All Elements:**
//
//     - Add a few p elements to the page. Below them, add a button labeled “Add Class”. Write a function tha
// t, when the button is clicked, adds a specific class (e.g., a class that changes the text color) to all the p element
// s on the page.

/*

let button = document.createElement('button');
let p1 = document.createElement('p')
let p2 = document.createElement('p')
let p3 = document.createElement('p')
p1.textContent = 'First paragraph'
p2.textContent = 'Second paragraph'
p3.textContent = 'Third paragraph'

document.body.appendChild(p1);
document.body.appendChild(p2);
document.body.appendChild(p3);

button.textContent = 'Add Class';
document.body.appendChild(button);

button.addEventListener('click', function () {
    document.querySelectorAll('p').forEach(p => {
        p.classList.add('changeClr2');
    });
});

*/

// 17. **Input Validation:**
//
//     - Create a form with a text input field and a submit button. Write a function that validates the input field w
// hen the form is submitted. If the field is empty, display an error message below the form and prevent the form from being sub
// mitted.
/*

let div = document.createElement('div');
let form = document.createElement('form');
let input = document.createElement('input');
let btn = document.createElement('button');
let p = document.createElement('p');

input.type = 'text';
input.placeholder = 'Enter text';
btn.textContent = 'Submit';


form.appendChild(input);
form.appendChild(btn);
div.appendChild(form);
div.appendChild(p);


let ip = document.createElement('input');
document.body.appendChild(ip);

// let div = document.createElement('div');
document.body.appendChild(div);

let btn = document.createElement('button');
btn.textContent = 'Submit';
document.body.appendChild(btn);

btn.addEventListener('click', () => {
    if (ip.value.trim() == '') {
        div.textContent = ip.value
    } else {
        div.textContent = "Nothing to show"
    }
});



*/
// 18. **Change Font Size:**
//
//     - Add a p with some text. Below the p, add a button labeled “Increase Font Size”. Write a func
// tion that increases the font size of the p by 2px every time the button is clicked.

