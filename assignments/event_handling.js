

// ### Event Handling Tasks:


// 21. **Button Hover Event:**

//     - Add a button labeled “Hover Me”. Write a function that changes the background color of the button when the u
// ser hovers over it and reverts the color when the mouse leaves.

let button = document.createElement('button');
button.textContent = 'Hover Me';
document.body.appendChild(button);

button.style.padding = '10px 20px';
button.style.fontSize = '16px';

button.addEventListener('mouseenter', () => {
    button.style.backgroundColor = 'lightblue';
});

button.addEventListener('mouseleave', () => {
    button.style.backgroundColor = '';
});

// 22. **Form Submission Event:**
//
//     - Create a simple form with an input field and a submit button. Write a function that prevents the form from b
// eing submitted if the input is empty, and display an error message below the form. Use `event.preventDefault()` to prevent fo
// rm submission.

let form = document.createElement('form');
let input = document.createElement('input');
let button = document.createElement('button');
let p = document.createElement('p');

input.type = 'text';
input.placeholder = 'Enter text';
button.textContent = 'Submit';
button.type = 'submit';
p.style.color = 'red';

form.appendChild(input);
form.appendChild(button);
document.body.appendChild(form);
document.body.appendChild(p);

form.addEventListener('submit', (event) => {
    if (input.value.trim() === '') {
        event.preventDefault();
        p.textContent = 'Input cannot be empty.';
    } else {
        p.textContent = '';
    }
});

// 23. **Keyboard Event:**
//
//     - Add an input field. Write a function that listens for the “Enter” key and triggers an alert when it’s presse
// d inside the input field. Make sure the function only works for the “Enter” key.

const input = document.createElement('input');
input.type = 'text';
input.placeholder = 'Press Enter';
document.body.appendChild(input);

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        alert('Enter key pressed!');
    }
});


// 24. **Double-Click Event:**
//
//     - Create a div with some content and write a function that changes its background color when it’s double-click
// ed. The background should change every time a double-click event occurs.

const div = document.createElement('div');
div.textContent = 'Double-click me to change background color';
div.style.padding = '20px';
div.style.margin = '10px';
div.style.border = '1px solid black';
document.body.appendChild(div);

div.addEventListener('dblclick', () => {
    div.style.backgroundColor = div.style.backgroundColor === 'yellow' ? 'lightgreen' : 'yellow';
});


// 25. **Key Press Counter:**
//
//     - Add an input field and a p that displays the number of times a key has been pressed inside the input
//  field. Write a function that increments the count with every keypress and updates the p.

const input = document.createElement('input');
const counterDisplay = document.createElement('p');
let keyPressCount = 0;

input.type = 'text';
input.placeholder = 'Start typing...';
counterDisplay.textContent = 'Key presses: 0';

document.body.appendChild(input);
document.body.appendChild(counterDisplay);

input.addEventListener('keydown', () => {
    keyPressCount++;
    counterDisplay.textContent = `Key presses: ${keyPressCount}`;
});


// 26. **Mouse Movement Tracker:**
//
//     - Write a function that tracks the mouse’s position on the page in real-time and displays the current x and y
// coordinates in a div. Update the coordinates every time the mouse moves.

const coordDisplay = document.createElement('div');
coordDisplay.style.marginTop = '10px';
document.body.appendChild(coordDisplay);

document.addEventListener('mousemove', (event) => {
    coordDisplay.textContent = `X: ${event.clientX}, Y: ${event.clientY}`;
});


// 27. **Right-Click Event:**
//
//     - Add an element to your page, like a button or div. Write a function that triggers an alert when the user rig
// ht-clicks on the element. Use the `contextmenu` event to handle the right-click.

const button = document.createElement('button');
button.textContent = 'Right-Click Me';
document.body.appendChild(button);

button.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    alert('Right-click detected!');
});


// 28. **Mouse Over Event:**
//
//     - Create a div or p with some text. Write a function that changes its text or color when the mouse is
// moved over the element and changes it back when the mouse leaves.

const textElement = document.createElement('p');
textElement.textContent = 'Hover over me!';
textElement.style.padding = '10px';
document.body.appendChild(textElement);

textElement.addEventListener('mouseenter', () => {
    textElement.style.color = 'blue';
    textElement.textContent = 'Mouse is over!';
});

textElement.addEventListener('mouseleave', () => {
    textElement.style.color = '';
    textElement.textContent = 'Hover over me!';
});


// 29. **Focus Event:**
//
//     - Add an input field. Write a function that changes the input field’s border color when it gains focus and rev
// erts the color when it loses focus. Use the `focus` and `blur` events for this.`

const inputField = document.createElement('input');
inputField.type = 'text';
inputField.placeholder = 'Focus on me!';
document.body.appendChild(inputField);

inputField.addEventListener('focus', () => {
    inputField.style.borderColor = 'green';
});

inputField.addEventListener('blur', () => {
    inputField.style.borderColor = '';
});
