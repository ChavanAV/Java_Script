/*

let p1 = new Promise((resolve, reject) => {
    let a = 10;
    if (a == 10) resolve();
    else reject();
});

p1.then(() => { console.log("Yes, a == 10") });
p1.catch(() => { console.log("No, a != 10") });



//passing the value to then and catch from resolve and reject
//argument passed from resolve block are catched by then function
//argument passed from reject block are catched by catch function
let p2 = new Promise((resolve, reject) => {
    let a = 10 + 90;
    if (a == 30) resolve(a)
    else reject(a)
})

p2.then((a) => { console.log("then block", a) })

p2.catch((a) => { console.log("catch block", a) })
*/

//realtime scenario

fetch("https://api.github.com/user").then((res) => {
    let data = res.json();
    return data;
}).then((val2) => {
    console.log(val2);
}).catch((err) => {
    console.log("Not fetched", err)
})


/*
Promises:-

-Promises are the objects in js
-used to handle the async task
-with promises 3 diff state 
    1:- pending
    2:- resolve
    3:- rejected


1) pending:-
promise will be in pending state when it is niether resolved nor rejected.

2) resolve:-
When promises are fullfield it will be in resolved state,
when the promise is resolve it will call then block
and we can pass some arguments along with it

3) reject:-
When promise is not fullfield it will be in rejected state,
when promise is rejected it will call the catch block,
cathch block can be used to handle the errors or exceptions.

IMP:-
1- Promise cannot be in resolve or rejected at the same time,
    it will be either resolved or rejected at once.
2- some async tasks in js will internally return the promise we just have to handle that promise,
    using then and catch block.
    eg:
    fetch() method will return the promise,
    we have to handle that using then and catch block.

*/