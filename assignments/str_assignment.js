// 1. **Task**: Write a function that accepts a full name (first and last name) 
// as input and returns the total number of characters in the name, excluding spaces. 
// The function should also return a message like: "Your name has X characters."
let f1 = (name) => {
    return `Your name has ${name.replace(' ', '').trim().length} characters.`;
}
console.log(f1("Akshay Chavan"));


// 2. **Task**: Write a function that accepts a string and returns the third 
// character in that string. If the string is too short (less than three characters), 
// return a message like: "The string is too short."
let f2 = (str) => {
    if (str.length < 3) return "The string is too short.";
    else return str[2];
}
console.log(f2("Akshay"));


// 3. **Task**: Write a function that takes a string and returns the Unicode 
// value of the character in the middle of the string. If the string has an even 
// number of characters, return the Unicode value of the character just before the middle.
let f3 = (str) => {
    let l = (str.length / 2);
    if (str.length % 2 == 0) {
        return str.charCodeAt(l - 1);
    } else {
        return str.charCodeAt(l);
    }
}
console.log(f3("Akshay"));


// 4. **Task**: Create a function that checks if a given file name starts with
//  "Report" (case-sensitive). If it does, return a message like: "This is a report file."
//   If not, return: "This is not a report file."

let f4 = (fileName) => {
    if (fileName.startsWith("Report")) {
        return "This is a report file.";
    }
    return "This is not a report file.";
}

console.log(f4("Reportfile"));

// 5. **Task**: Write a function that accepts a string and checks if it ends with ".jpg". 
// If it does, return: "This is an image file." Otherwise, return: "This is not an image file."
let f5 = (fileName) => {
    if (fileName.endsWith(".jpg")) {
        return "This is an image file.";
    }
    return "This is not an image file.";
}

console.log(f5("photo.jpg"));
// 6. **Task**: Write a function that checks if the word "password" is included in 
// a user's input string. If it is found, return: "Your input contains a forbidden word."
//  Otherwise, return: "Input accepted."

let f6 = (input) => {
    if (input.includes("password")) {
        return "Your input contains a forbidden word.";
    }
    return "Input accepted.";
}

console.log(f6("Enter password"));

// 7. **Task**: Write a function that searches a paragraph for the first 
// appearance of the word "important" and returns the position (index) of that word. 
// If the word isn't found, return a message like: "The word 'important' is not in the paragraph."

let f7 = (paragraph) => {
    let arr = paragraph.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "important") {
            return `The word 'important' is at index ${i + 1}.`;
        }
    }
    return "The word 'important' is not in the paragraph.";
}

console.log(f7("This is an important task."));

// 8. **Task**: Create a function that takes a sentence and replaces all 
// instances of the word "sad" with "happy." Return the updated sentence.

let f8 = (sentence) => {
    return sentence.replace("sad", "happy");
}

console.log(f8("I am very sad."));

// 9. **Task**: Write a function that takes a long string of text and 
// replaces all occurrences of the word "mistake" with "correction." 
// It should replace every instance found and return the updated text.

let f9 = (text) => {
    return text.replace("mistake", "correction");
}

console.log(f9("This is a mistake."))

// 10. **Task**: Write a function that extracts the first 10 characters 
// from a given string and returns them. If the string has fewer than 10 characters,
//  return the entire string.

let f10 = (str) => {
    if (str.length < 10) return str
    else return str.slice(0, 10);
}

console.log(f10("Write a function that extracts"));

// 11. **Task**: Write a function that takes a sentence and splits it into an array 
// of individual words. Then, return the array and display each word on a new line.

let f11 = (sentence) => {
    return sentence.split(" ");
}

console.log(f11("Write a function that takes a sentence and splits it into an array"));

// 12. **Task**: Create a function that converts a sentence into lowercase letters and 
// returns the new version. For example, the input "HELLO WORLD" should be 
// converted to "hello world."

let f12 = (str) => {
    return str.toLowerCase();
}

console.log(f12("HELLO WORLD"));

// 13. **Task**: Write a function that converts all the characters in a string to
//  uppercase and returns the updated string. If the input is "good morning", 
// the output should be "GOOD MORNING."
let f13 = (str) => {
    return str.toUpperCase();
}

console.log(f12("good morning"));

// 14. **Task**: Write a function that accepts a number and converts it into a string. 
// For example, if the number is 123, the output should be the string "123". 
// The function should return the string with a message 
// like: "The number has been converted to a string."

let f14 = (number) => {
    return `The number has been converted to a string: "${number.toString()}"`;
}

console.log(f14(123));

// 15. **Task**: Write a function that removes extra spaces from the start and end of a string.
//  For example, if the input is "  hello world  ", the output should be "hello world". 
// The function should return a message like: "Extra spaces have been removed."

let f15 = (str) => {
    return `Extra spaces have been removed: "${str.trim()}"`;
}

console.log(f15("  hello world  "));

// 16. **Task**: Create a function that accepts a string with extra spaces 
// at the start and trims only the leading spaces. For example, 
// the input "  learn JavaScript" should return "learn JavaScript", 
// with a message: "Leading spaces have been removed."

let f16 = (str) => {
    return `Leading spaces have been removed: "${str.trimStart()}"`;
}

console.log(f16("  learn JavaScript"));

// 17. **Task**: Write a function that takes a string and trims off any trailing spaces. 
// If the input is "coding is fun   ", it should return "coding is fun" 
// with a message: "Trailing spaces have been removed."

let f17 = (str) => {
    return `Trailing spaces have been removed: "${str.trimEnd()}"`;
}

console.log(f17("coding is fun   "));


// 18. **Task**: Write a function that takes a string and checks whether it starts with 
// an uppercase letter. If the first letter is capitalized, 
// return a message like: "The string starts with an uppercase letter." Otherwise, 
// return: "The string starts with a lowercase letter."

let f18 = (str) => {
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
        return "The string starts with an uppercase letter.";
    }
    return "The string starts with a lowercase letter.";
}

console.log(f18("Hello world"));

// 19. **Task**: Write a function that accepts a sentence and converts only the
//  first letter of the sentence to uppercase, while the rest of the letters are 
// converted to lowercase. For example, "hello WORLD" should become "Hello world."
//  Return the updated sentence with a message.

let f19 = (sentence) => {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
}

console.log(f19("hello WORLD"))

// 20. **Task**: Write a function that takes a sentence and counts how many spaces are in it.
//  The function should return the total number of spaces with a 
// message like: "There are X spaces in the sentence."

let f20 = (sentence) => {
    let c = 0;
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] === ' ') {
            c++;
        }
    }
    return `There are ${c} spaces in the sentence.`
}
console.log(f20("There are many spaces here.")); 