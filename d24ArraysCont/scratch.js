"use strict";
/*eslint-disable*/
/*

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
const array4 = array1.concat([array2]);
let array5 = [];
array5.push(array1);


console.log(array3);
console.log(array4);
console.log(array5);

// expected output: Array ["a", "b", "c", "d", "e", "f"]
*/
/*

let start = 0;
function someFun(num) {
    let jordan = 23; if (num >= 0) {
        num = Math.sqrt(num)
    }
    start = jordan + num;
    console.log(num + " " + jordan + " " + start); //______________________
    return num;
}
console.log(start);
console.log(someFun(100));
console.log(start);// ______________________ 
console.log(jordan); //______________________

*/
/*
let myObj = {
    myArray: [1, 2, 3], anotherArray: [1, 2, 3], equals: function () {
        return this.myArray === this.anotherArray;
    }
}
console.log(myObj.equals());
*/
/*
function hi(name) { return 'Hi ' + name; }
let goodBye = function () {  'Good Bye'; }
console.log(hi('Developer', 'Welcome'));// Hi Developer_________________________
console.log(goodBye('Developer'));// Good Bye_________________________
console.log(goodBye);// undef_________________________
console.log(goodBye());// Good Bye_________________________

*/
/*
let color = 'red';
let myObject = {
    color: 'blue', printColor: function () {
        console.log(color);
    }
}
myObject.printColor(); //___red__________________


const x = {
    a: 10,
    b: 20,
    c: 30
}
const y = x;
y.c = 300;
y.d = 400;
console.log(x.c); //____________________
console.log(x.d); //____________________ 
console.log(y === x); //____________________
*/

//12. [5] Fill in the blanks below 
function getSix() { return 6; }
const f1 = getSix();
const f2 = getSix;
const f3 = f1;
const f4 = f2();
//const f5 = f1();
console.log(f1);
console.log(f2);
console.log(f3);
console.log(f4);
//console.log(f5);

//const f5 = f1();
/* 
What is the value of f1? ______________ 
What is the value of f2? ______________ 
What is the value of f3? ______________ 
What is the value of f4? ______________ 
What is the value of f5? ______________*/

let arr = [5, 3, -5];
function arrSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    };
    return arr;
}
console.log(arrSorted(arr));
console.log(arr.sort((a, b) => b - a));


const Obj1 = {
    "first name": "John",
    "last name": "Doe"
}

const Obj2 = {
    "first name": "Mary",
    "last name": "Foster"
}

let couple = [Obj1, Obj2];

const logArrayElements = (item, index, couple) => {
    console.log(`a[${index}] = ${item}`)
};
logArrayElements(couple);


["Bilbo", "Gandalf", "Nazgul"].forEach(function (character) { console.log(character) });


["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} is at index ${index} in ${array}`)
});

couple.forEach((item, index, /*array*/) => {
    console.log(`${item["first name"]} ${item["last name"]} is at index ${index}`)
});


let arr1 = [1, 2, 3, 4, 5];// 120
let arr2 = [10, 5, 3]; //150

function multiplyAll(arr) {
    return arr.reduce((prod, current) => { return prod * current }, 1);




}
console.log(multiplyAll(arr1));
console.log(multiplyAll(arr2));
let result = arr1.reduce((prod, current) => { return prod * current; }, 1);
console.log(result);
//arr1.reduce((prev, curr) );

//arr1.reduce(function (sum, current) { return sum + current; }, 0);
/*
let arr5 = [1, 2, 3, 4, 5];
let result = arr5.reduce( (prod, current) => { return prod*current; }, 1);
console.log(result);
*/

const rectangle = {
    length: null,
    width:  null,
    area (this.length, this.width) {return this.length*this.width}
};
rectangle.length = 10;
rectangle.width = 5;
console.log(rectangle.length);
fun
