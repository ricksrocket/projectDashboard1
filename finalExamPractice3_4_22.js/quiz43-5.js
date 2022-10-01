//"use strict";
/*eslint-disable*/

function Rabbit(name) {
    this.name = name;
  }
  Rabbit.prototype.sayHi = function() {
    console.log(this.name);
  };
  let fluf1= new Rabbit("Fluffy");
  
  fluf1.sayHi();
Rabbit.prototype.sayHi();
fluf1.__proto__.sayHi();

