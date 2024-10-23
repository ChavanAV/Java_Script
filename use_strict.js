
// 'use strict'
// var a = 010;
// console.log(a);

let ip = document.createElement('input')
let btn = document.createElement('button')
btn.textContent = 'click    '
document.body.append(ip, btn)

// let btn = document.querySelector('button')

btn.addEventListener('click', function () {
    this.style.backgroundColor = 'red'
})


