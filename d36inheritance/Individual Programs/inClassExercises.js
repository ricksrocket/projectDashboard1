"use strict";
/*eslint-disable*/


let animal = { eats: true };

function Rabbit(name) { 
    this.name = name;} 

Rabbit.prototype = animal;
let rabbit = new Rabbit("White Rabbit"); 
console.log( rabbit.eats ); // true

/* rewrite this to have the same inheritance hierarchy using __proto__ instead of 
the constructor . I.e., delete the Rabbit prototype and use only object literals 
and __proto__*/
 let rabbit = {
name: "White Rabbit"
__proto__: animal
 }