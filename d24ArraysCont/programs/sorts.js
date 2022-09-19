"use strict";
/*eslint-disable*/


let arr = [5, 2, 1, -10, 8];
//console.log(arr);
arr.sort((a, b) => a - b)
/*
function sortDescendNum(arr) {
    arr.sort((a, b) => {
        if (a > b) return -1;
        if (a == b) return 0;
        if (a < b) return 1;

    })
}
// ... your code to sort it in decreasing order
sortDescendNum(arr);*/

console.log(arr); // 8, 5, 2, 1, -10


function copySorted(arr) {
    return arr.slice().sort()
}


let arr1 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr1);

console.log(sorted); // CSS, HTML, JavaScript
//console.log( arr1 ); // HTML, JavaScript, CSS (no changes)
//-------------------------------------------------------------------------

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr2 = [pete, john, mary];
/*Write the function sortByAge(users) that gets an array 
of objects with the age property and sorts them by age.*/

function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
}
sortByAge(arr2);

    // now: [john, mary, pete]
    console.log(arr2[0].name); // John
    console.log(arr2[1].name); // Mary
    console.log(arr2[2].name); // Pete