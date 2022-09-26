"use strict";
/*eslint-disable*/



function Accumulator(initialValue, increment) {
  this.increment = increment
  this.currentValue = initialValue;

  this.accumulate = function () {
    this.currentValue = this.currentValue + increment;
  };

  this.report = function () { return this.currentValue }

}


const accumulator = new Accumulator(5, 10);
accumulator.accumulate();
accumulator.accumulate();
console.log(accumulator.currentValue); // 25);
console.log(accumulator.increment); // 10);


const accumulator1 = new Accumulator(5, 10);
console.log(accumulator1.report());//5

//console.log(accumulator.value);



