// 1.	**Function Declaration (Say Hello)**:  
//    Write a function named `sayHello`. This function should print the message “Hello, world!” when you call it. Call the function once, then call it two more times to say hello three times.  
//    **Example**:  
//    ```javascript
//    sayHello(); // Logs “Hello, world!”

console.log(1);


let sayHello = () => {
    console.log("Hello, world!");
}
sayHello();
sayHello();
sayHello();

// 2.	**Function Expression (Say Goodbye)**:
//    Create a function that says “Goodbye!” but don’t use the normal function syntax. Instead, assign it to a variable named `farewell`. Then, call this variable like a function to say goodbye.
//    **Example**:
//    ```javascript
//    Farewell(); // Logs “Goodbye!”
console.log(2);


let farewell = () => {
    console.log('Goodbye');

}
farewell();

// 3.	**Arrow Function (Cheer Up)**:
//    Create an arrow function called `cheerUp`. This function should print the message “Cheer up, buddy!”. Call this function to give yourself some motivation.
//    **Example**:
//    ```javascript
//    cheerUp(); // Logs “Cheer up, buddy!”

console.log(3);

let cheerUp = () => {
    console.log("Cheer up, buddy!");
}

cheerUp();


// 4.	**Function with a Name (Introduce Yourself)**:
//    Write a function named `introduce`. It should take one thing: your name (as a word). When you call this function, it should print “Hello, my name is [your name]!” but replace “[your name]” with the actual name you give it.
//    **Example**:
//    ```javascript
//    Introduce(“Alice”); // Logs “Hello, my name is Alice!”

console.log(4);


let introduce = (name) => {
    console.log(`Hello, my name is ${name}!`);
}

introduce("Akshay");


// 5.	**Function Expression (Order Pizza)**:
//    Write a function that orders pizza by saying “Ordered a [flavor] pizza!”, but don’t use the regular function syntax. Assign the function to a variable called `placeOrder`, and it should accept a flavor like “cheese” or “pepperoni”. Call the function with your favorite flavor.
//    **Example**:
//    ```javascript
//    placeOrder(“cheese”); // Logs “Ordered a cheese pizza!”

console.log(5);

let placeOrder = (flavor) => {
    console.log(`Ordered a ${flavor} pizza!`);
}
placeOrder("pepperoni");
placeOrder("cheese");


// 6.	**Arrow Function (Greet a Person)**:
//    Create an arrow function called `greetPerson`. This function should accept one thing: the name of a person. When you call it, it should say “Hi, [name]!” with the person’s name. Call it with different names.
//    **Example**:
//    ```javascript
//    greetPerson(“Bob”); // Logs “Hi, Bob!”
//    ```

console.log(6);

let greetPerson = (name) => {
    console.log(`Hi, ${name}`);
}
greetPerson("Akshay");
greetPerson("Ram");
greetPerson("Maruti");


// 7.	**Function Calling Another Function (Morning Routine)**:
//    Write a function called `startMorning` that calls another function called `makeCoffee`. `makeCoffee` should print “Making coffee…”. Call `startMorning` to pretend you’re getting ready for the day.
//    **Example**:
//    ```javascript
//    startMorning(); // Logs “Making coffee…”
//    ```

console.log(7);

let startMorning = () => {
    makeCoffee();
}
let makeCoffee = () => {
    console.log("Making coffee…");
}

startMorning();


// 8.	**Higher-Order Function (Morning Routine)**:
//    Create a function called `morningRoutine`. This function should take two other functions as input: `brushTeeth` and `getDressed`. When you call `morningRoutine`, it should call both of these functions in order. Call `morningRoutine` to simulate getting ready for the day.
//    **Example**:
//    ```javascript
//    morningRoutine(brushTeeth, getDressed); // Logs both tasks
//    ```

console.log(8);

let brushTeeth = () => {
    console.log("brushTeeth");
}
let getDressed = () => {
    console.log("getDressed");
}
let morningRoutine = (f1, f2) => {
    f1();
    f2();
}

morningRoutine(brushTeeth, getDressed);


// 9.	**Callback Function (Take Action)**:
//    Write a function called `takeAction` that takes a callback function. When `takeAction` is called, 
//      it should print “Action in progress!” and then run the callback function, which prints “Action completed!”.
//    **Example**:
//    ```javascript
//    takeAction(function() {
//        console.log(“Action completed!”);
//    }); // Logs “Action in progress!” then “Action completed!”

console.log(9);

let takeAction = (f1) => {
    console.log("Action in progress!");
    f1();
}

let act = () => {
    console.log("Action completed!");
}
takeAction(act);

// 10.	**Arrow Function (Calculate Area)**:
//    Create an arrow function called `calculateArea`. It should take two numbers, length and width, and print “The area is [length * width]”. 
//    Call it with different numbers to see the area of various rectangles.
//    **Example**:
//    ```javascript
//    calculateArea(5, 4); // Logs “The area is 20”
//    ```

console.log(10);

let calculateArea = (len, width) => {
    console.log(`The area is ${len * width}`);
}

calculateArea(123, 341);
calculateArea(12, 31);
calculateArea(23, 41);

// 11.	**Higher-Order Function (Lunch Break)**:
//    Write a function called `lunchBreak` that accepts two functions: `eatLunch` and `takeNap`. `lunchBreak` should call both functions in order.
//    Call `lunchBreak` to simulate your relaxing lunch break.
//    **Example**:
//    ```javascript
//    lunchBreak(eatLunch, takeNap); // Logs both tasks
//    ```

console.log(11);

let lunchBreak = (f1, f2) => {
    f1();
    f2();
}

let eatLunch = () => {
    console.log("eatLunch");
}
let takeNap = () => {
    console.log("takeNap");
}

lunchBreak(eatLunch, takeNap);


// 12.	**Function Declaration (Support Team)**:
//    Write a function called `supportTeam` that prints “Go, team!” every time you call it. Call it a few times to pretend you’re cheering at a game.
//    **Example**:
//    ```javascript
//    supportTeam(); // Logs “Go, team!”
//    ```

console.log(12);

let supportTeam = () => {
    console.log("Go, team!");
}
function supportTeam2() {
    console.log("Go, team!");
}

let supportTeam3 = function () {
    console.log("Go, team!");
}
supportTeam();
supportTeam2();
supportTeam3();

// 13.	**Arrow Function (Weather Update)**:
//    Create an arrow function called `weatherUpdate`. This function should print “The weather is great today!”. Call it to enjoy a fake weather report.
//    **Example**:
//    ```javascript
//    weatherUpdate(); // Logs “The weather is great today!”
//    ```

console.log(13);

let weatherUpdate = () => {
    console.log("The weather is great today!");
}

weatherUpdate();

// 14.	**Function Expression (Talk to Pet)**:
//    Create a function expression called `talkToPet` that prints “Who’s a good pet?”.
//   Assign it to a variable `petTalk` and call it when you feel like talking to your pet.
//    **Example**:
//    ```javascript
//    petTalk(); // Logs “Who’s a good pet?”
//    ```

console.log(14);


function talkToPet() {
    console.log("Who’s a good pet?");
}
let petTalk = talkToPet;
petTalk();

// 15.	**Function with Multiple Parameters (Favorite Movie)**:
//    Write a function called `favoriteMovie` that takes two things: a movie name and the year it came out. 
//    When you call it, it should say “My favorite movie is [movie] from [year]”.
//    **Example**:
//    ```javascript
//    favoriteMovie(“The Matrix”, 1999); // Logs “My favorite movie is The Matrix from 1999”

console.log(15);

let favMovie = (m, y) => {
    console.log(`My favorite movie is ${m} from ${y}`);
}

favMovie("The Matrix", 1999);



// 16.	**Function Calling Another Function (Daily Schedule)**:
//    Create a function called `dailySchedule` that calls three other functions: `morningRoutine`, `work`, and `eveningChill`. 
//      Each of these should print a message. Call `dailySchedule` to go through your fake day.
//    **Example**:
//    ```javascript
//    dailySchedule(); // Logs tasks for morning, work, and evening
//    ```

console.log(16);

let morningRoutine2 = () => {
    console.log("morningRoutine");
}

let work = () => {
    console.log("work");
}

let eveningChill = () => {
    console.log("eveningChill");
}
let dailySchedule = () => {
    morningRoutine2();
    work();
    eveningChill();
}

dailySchedule();


// 17.	**Higher-Order Function (Exercise Routine)**:
//    Write a function called `exerciseRoutine` that takes two other functions: `stretch` and `run`. 
//      Each function should print what you’re doing (stretching and running). Call `exerciseRoutine` to start your workout.
//    **Example**:
//    ```javascript
//    exerciseRoutine(stretch, run); // Logs both tasks
//    ```
console.log(17);

let exerciseRoutine = (f1, f2) => {
    f1();
    f2();
}

let stretch = () => {
    console.log("stretch");
}
let run = () => {
    console.log("Run");
}

exerciseRoutine(stretch, run);

// 18.	**Arrow Function (Motivational Speaker)**:
//    Create an arrow function called `motivateMe` that prints “You can do it!”. Call it every time you feel like giving up.
//    **Example**:
//    ```javascript
//    motivateMe(); // Logs “You can do it!”
//    ```

console.log(18);

let motivateMe = () => {
    console.log("You can do it!");
}
motivateMe()

// 19.	**Function Expression (Order Ice Cream)**:
//    Create a function expression called `orderIceCream` that takes one thing: a flavor of ice cream. 
//      It should say “Ordering [flavor] ice cream!”. Assign this function to a variable `iceCreamTime` and call it with your favorite ice cream flavor.
//    **Example**:
//    ```javascript
//    iceCreamTime(“vanilla”); // Logs “Ordering vanilla ice cream!”
console.log(19);


let orderIceCream = (flavor) => {
    console.log(`Ordering ${flavor} ice cream!`);
}

let iceCreamTime = orderIceCream;

iceCreamTime("vanilla");


// 20.	**Function Declaration (Night Routine)**:
//    Write a function called `nightRoutine`. This function should print “Brushing teeth” and “Going to bed” when you call it.
//   Call it to pretend you’re getting ready for bed.
//    **Example**:
//    ```javascript
//    nightRoutine(); // Logs “Brushing teeth” and “Going to bed”
console.log(20);


let nightRoutine = () => {
    console.log("Brushing teeth and Going to bed");
}

nightRoutine()