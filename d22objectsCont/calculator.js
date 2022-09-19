"use strict";
/* eslint-disable */


/*
Create an object calculator with three methods:

read() prompts for two values and saves them as object properties with names a and b respectively.
sum() returns the sum of saved values.
mul() multiplies saved values and returns the result.
*/
//const prompt = require("prompt-sync")();


let calculator = {
    sum() { 
        return (this.num1 + this.num2); 
    },
    mul() { 
        return (this.num1 * this.num2); 
    },
    setValues(val1,val2) {
        this.num1 = val1;
        this.num2 = val2;
    }
}

//function setValues(num1, num2) {
    
calculator.setValues(5,10);
console.log(calculator.sum());
console.log(calculator.mul());

console.log(calculator);