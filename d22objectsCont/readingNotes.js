"use strict";
/* eslint-disable */

let user = {
    name: "John",
    age: 30
  };
  
  user.sayHi = function() {
    console.log("Hello!");
  };
  
  user.sayHi(); // Hello!
  console.log(user);

user = {
  sayHi: function() {
    console.log("Hello");
  }
};

// method shorthand looks better, right?
user = {
  sayHi() { console.log("Hello Again");}
};
user.sayHi();


function sayHi() {
    console.log( this.name );
  };
  sayHi();