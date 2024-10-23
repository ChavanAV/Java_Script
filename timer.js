
// let demo = () => {
//     console.log("Hello");
// }

// setTimeout(demo, 5000);

let c = 0;
let myInterval = () => {
    c++;
    console.log(c);
    if (c == 5) clearInterval(i);
}

let i = setInterval(myInterval, 1000);
