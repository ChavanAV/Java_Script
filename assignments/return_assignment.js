// 1. Repeated Call**  

// Write a function `repeatCall` that accepts a callback and a message string. 
//The callback should call the provided message twice, returning the result as a single string.
// **Example:**  
// `repeatCall(callback, ‘Let’s go!’)`  
// `callback` should return: `”Let’s go! Let’s go!”`
console.log(1);

let repeatCall = (fun, s) => {
    return fun(s);
}

let cbf = (s) => {
    return s + " " + s;
}

let rv = repeatCall(cbf, "Let's go!")
console.log(rv);

console.log("----------------------------------------------");



// **2. Simple Decision Maker**
// Write a function `decideAction` that accepts a callback function and a string (action).
// The callback should return `”Approved”` if the action is `”proceed”`, and `”Denied”` otherwise.

// **Example:**
// `decideAction(callback, ‘proceed’)`
// `callback` should return: `”Approved”`
console.log(2);

let decideAction = (fun, s) => {
    return fun(s);
}

let action = (s) => {
    return (s == "proceed") ? "Approved" : "Denied";
}

let rv2 = decideAction(action, "proceed")
let rv21 = decideAction(action, "No")
console.log(rv2);
console.log(rv21);
console.log("----------------------------------------------");

// **3. Repeated Message**
// Write a function `repeatMessage` that accepts a callback and a message string. The callback should return the message repeated twice.

// **Example:**
// `repeatMessage(callback, ‘Goodbye’)`
// `callback` should return: `”Goodbye Goodbye”`
console.log(3);
let repeatMessage = (fun, s) => {
    return fun(s);
}

let buy = (s) => {
    return s + " " + s;
}

let rv3 = repeatMessage(buy, "Goodbye")
console.log(rv3);

console.log("----------------------------------------------");
// **4. Toggle Switch**
// Write a function `toggleSwitch` that accepts a callback and a string (either `”on”` or `”off”`).
// The callback should return `”Switched on”` if the string is `”off”` and `”Switched off”` if the string is `”on”`.

// **Example:**
// `toggleSwitch(callback, ‘off’)`
// `callback` should return: `”Switched on”`

console.log(4);

let toggleSwitch = (fun, s) => {
    return fun(s);
}

let toggle = (s) => {
    if (s == "on") return "Switched on";
    else if (s == "off") return "Switched off";
}

let rv4 = toggleSwitch(toggle, "off")
console.log(rv4);
console.log("----------------------------------------------");


// **5. Yes or No Decision**
// Write a function `askYesOrNo` that accepts a callback function and a response string (`”yes”` or `”no”`).
// The callback should return `”Confirmed”` for `”yes”` and `”Rejected”` for `”no”`.

// **Example:**
// `askYesOrNo(callback, ‘yes’)`
// `callback` should return: `”Confirmed”`
console.log(5);

let askYesOrNo = (fun, s) => {
    return fun(s);
}

let onOff = (s) => {
    if (s == "yes") return "Confirmed";
    else if (s == "no") return "Rejected";
}

let rv5 = toggleSwitch(onOff, "yes")
console.log(rv5);
console.log("----------------------------------------------");

// **6. Reverse the Text**
// Write a function `reverseText` that accepts a callback and a string. The callback should return the string reversed.

// **Example:**
// `reverseText(callback, ‘world’)`
// `callback` should return: `”dlrow”`
console.log(6);

let reverseText = (fun, s) => {
    return fun(s);
}

let rev = (s) => {
    let str = ""
    for (let i = s.length; i >= 0; i--) {
        str += s.charAt(i)
    }
    return str;
}

let rv6 = reverseText(rev, "World")
console.log(rv6);
console.log("----------------------------------------------");

// **7. Personalized Farewell**
// Write a function `createFarewell` that accepts a callback and a name string. The callback should return `”Goodbye, [name]!”` where `[name]` is replaced with the provided name.

// **Example:**
// `createFarewell(callback, ‘Bob’)`
// `callback` should return: `”Goodbye, Bob!”`

console.log(7);

let createFarewell = (fun, name) => {
    return fun(name)
}

let farewell = (name) => {
    return `Goodbye, ${name}`
}
let rv7 = createFarewell(farewell, "Akshay")
console.log(rv7);
console.log("----------------------------------------------");

// **8. Decision Logic**
// Write a function `decisionMaker` that accepts a callback and a string (`”start”` or `”stop”`). The callback should return `”Starting…”` if the string is `”start”` and `”Stopping…”` if the string is `”stop”`.

// **Example:**
// `decisionMaker(callback, ‘start’)`
// `callback` should return: `”Starting…”`

console.log(8);

let decisionMaker = (fun, s) => {
    return fun(s);
}

let decision = (s) => {
    if (s == "start") return "Starting…";
    else if (s == "stop") return "Stopping…";
}

let rv8 = decisionMaker(decision, "stop")
console.log(rv8);
console.log("----------------------------------------------");