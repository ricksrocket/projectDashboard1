"use strict";
/* eslint-disable */


let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log(fruits.length); // ?
console.log(fruits);


/*
Array operations.
importance: 5
Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.
The array in the process:

Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll

*/

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
console.log(styles);
console.log(replace(styles));
function replace(arr) {
    const len = arr.length;
    const mid = (len - 1) / 2;
    arr.splice(mid, 1, "Classics");
    return arr

};
styles.shift();
console.log(styles);
styles.unshift("Rap", "Reggae");
console.log(styles);


let arrayEx = ["a", "b"];

arrayEx.push(function () {
    console.log(this);
})

arrayEx[2](); // a,b,function(){...}



