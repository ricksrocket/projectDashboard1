"use strict";
/*eslint-disable*/


let animal = {
    eats: true
};

function Dog(name) {
    this.name = name;
}

let snoopy = {
name : "snoopy"
}

snoopy.__proto__ = animal;

console.log(snoopy.eats); // true

let animal1 = {
    eats: true,
    walk() {
      /* this method won't be used by rabbit */
    }
  };
  
  let rabbit = {
    __proto__: animal1
  };
  
  rabbit.walk = function() {
    console.log("Rabbit! Bounce-bounce!");
  };
  
  rabbit.walk(); // Rabbit! Bounce-bounce!
  