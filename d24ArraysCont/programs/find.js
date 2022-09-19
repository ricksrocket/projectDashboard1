"use strict";
/*eslint-disable*/


/*
const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];

function isCherries(fruit) {
    return fruit.name === 'cherries';
}
// console.log(isCherries());
console.log(inventory.find(isCherries));
// { name: 'cherries', quantity: 5 }
*/

function unique(arr) {
    let uniqueItems = [];
    for (const element of arr) {
        if (uniqueItems.includes(element)) {
            uniqueItems.push(element);
        }
    }
    return uniqueItems;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings)); // Hare, Krishna, :-O

