"use strict"
/*eslint-disable*/

/*
const prompt=require("prompt-sync")();
let name=prompt("What is your name?: ");
console.log("Hi",name);
*/


let userName = "John"
function showMessage() {
    let userName = "Bob"; // declare a local variable let message = 'Hello, ' + userName; // Bob alert(message);
    return userName;
}
showMessage();
console.log(userName); // John, unchanged

/*

let x = 10; // Global Scope
function main() {
    let x;
    console.log("x1: " + x); //Block Scope
    if (x > 0) {
        let x = 30; console.log("x2: " + x);
    }
    //Block Scope
    x = 40;
    let f = function (x) { console.log("x3: " + x); };
    f(50);
}
main();
*/

function a(){
    console.log(x); // consult Global for x and print 20 from Global
    }
      function b(){
             let x = 10;
             a(); // consult Global for a
             console.log(x);
    }
      let x = 20;
      b();