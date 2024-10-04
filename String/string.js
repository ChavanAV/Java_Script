
//String

// declaration: -
// way 1:-
let str1 = 'String declaration-1'
// way 2:-
let str2 = "String declaration-2"
// way 3:-
let str3 = `String declaration-3`
// way 4:-
let str4 = new String("String declaration-4")

console.log(str1);
console.log(str2);
console.log(str3);
console.log(str4);


//String contains indexes
//we can't use map, find, reduce, sort like HOF with strings.
let str5 = "shdfgauisflsafiagf"
console.log(str5[0]);
console.log(str5[1]);
console.log(str5[2]);
console.log(str5[17]);// last index
console.log(str5[18]);// UN

//we can biuld new string using indexes from another string.

//loop on string

let str6 = "Akshay"
for (let i = 0; i < str6.length; i++) {
    console.log(str6[i]);
}

//we cannot use forEach() hof wrt string
// str6.array.forEach(element => {
//     console.log(element);
// });



// Methods of String:-
// 1- split()
// 2- reverse()
// 3- join()
// 4- padEnd()
// 5- padStart()
// 6- trim(), trimStart(), trimEnd()
// 7- toUpperCase(), toLowerCase()
// 8- replace(), replaceAll()



//to use hof wrt string we have to convert string into array usinf split() method
//split() method:-

//simple using split() the entire string as 1st index element of array
//to split string from perticular element we have to speify the character from
//which we want to split the string to array.
//To split string character we have to specify empty string in split method.

let str7 = "Akshay"
let strArr1 = str7.split()    //[ 'Akshay' ]
let strArr2 = str7.split("")  //[ 'A', 'k', 's', 'h', 'a', 'y' ]
let strArr3 = str7.split("y") //[ 'Aksha', '' ]
let strArr4 = str7.split("A") //[ '', 'kshay' ]
console.log(strArr1);
console.log(strArr2);
console.log(strArr3);
console.log(strArr4);


//reverse() method :-
//TO reverse the array of string
//it will reverse the array elements
//it will modify original array

let str8 = "Akshay"
let strArr5 = str8.split("")
console.log('Original : ', strArr5);
let rev = strArr5.reverse()
console.log('reverse : ', rev);
console.log('Original : ', strArr5);


//To convert array back to the string
let org = ''
strArr5.forEach(e => org += e)
console.log(org);



// join() method:-
//Used tojoin the array elements along with the comma
let str9 = "Akshay"
let strArr6 = str9.split("")
let j1 = strArr6.join() //A,k,s,h,a,y
let j2 = strArr6.join("")  //Akshay
console.log(j1);
console.log(j2);



//padEnd(new_str_len, str_tobe_replaced) method:-
//used to add extra padding or characters at the end of string

//padStart(new_str_len, str_tobe_replaced) method:-
//used to add extra padding or characters at start of string

//the 1st arguments of these methods should be greater than length of string.

let num = '53645'
console.log(num.padEnd(8, "*"));


//to print the number/string at the center of the string
let num2 = '3424'
let newNo = num2.padStart(12, "*").padEnd(20, "*");
console.log(newNo); //********3424********



//trim():-
//Used to remove the extra spaces from the both sides of string.

//trimStart():-
//Used to remove the extra spaces from start of string.

//trimEnd():-
//Used to remove the extra spaces from end of string.

let str10 = '      dffds       '
console.log(str10);
console.log(str10.trim());
console.log(str10.trimStart());
console.log(str10.trimEnd());




//case methods:

// toUpperCase()
//Convert the string to upper case

//toLocaleUpperCase()
//Convert the string to upper case

// toLowerCase()
//Convert the string to lower case

// toLocaleLowerCase()
//Convert the string to lower case

let str11 = "adfafad"
console.log(str11.toUpperCase());
console.log(str11.toLocaleUpperCase());
console.log(str11.toLowerCase());
console.log(str11.toLocaleLowerCase());



//replace(char_to_rep, char_to_add):-

//Used to replace the string characters with another one.
//it replaces only the first occurence.

let str12 = 'MALYALAM'
console.log(str12.replace("M", "j")); //jALYALAM

//replaceAll():-
//Used to replace the all accurences from the string

let str13 = 'MALYALAM'
console.log(str13.replaceAll("M", "B")); //BALYALAB


let str14 = 'bahubali'
console.log(str14.replace('ba', 'K').replace("h", "ha").replace('b', 'G'));