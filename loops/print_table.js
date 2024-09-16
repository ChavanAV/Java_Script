
let n = prompt('Enter the number')

let table = (n) => {
    for (let i = 1; i <= 10; i++) {
        console.log(n * i);
    }
}

table(n);