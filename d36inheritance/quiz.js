"use strict";
/*eslint-disable*/



let animal = { eats: true }; //using [ ] for curly brackets due to Sakai issue 
function Dog(name) {
    this.name = name;

} //using [ ] for curly brackets due to Sakai issue 
Dog.prototype = animal

/*Blank 1. Fill in the blank, read surrounding text. ;*/

let snoopy = new Dog("Snoopy");
console.log(snoopy.eats); // true  

function makeCounter(incrValue) {
    if (!incrValue) {incrValue=1}
    if(incrValue>3) {return "Warning: increment was by value greater than 3 :: x"}
    let count = 0;
    return function() { return count+ incrValue; };
 }
 let myCounter = makeCounter;
 console.log(myCounter(10));

 console.log(myCounter(1));

