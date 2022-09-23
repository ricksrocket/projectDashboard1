"use strict";
/*eslint-disable*/




function makeCounter() { 

    let count = 0;   
  
    return function(incrVal) { 
       if (incrVal >1) {
          return "Warning:  increment was by value greater than 1: " + incrVal;
       }
       if (!incrVal) {return count++}
       else {return count+incrVal;}
   };
  
  }

const myCounter = makeCounter();

console.log(myCounter(0)); //expect 0...returns 0
console.log(myCounter(0.5)); //expect 0.5...returns 0.5
console.log(myCounter());//should be 1.5...




  function makeCounter1() {
    let count = 0;
    const innerFunc = function () {
        return count = count + 1;
    }
    return innerFunc
};

const counter1 = makeCounter1();
const counter2 = makeCounter1();
counter1();
counter1();
//console.log(counter1());
console.log("should be 3", counter1())
console.log("should be 1", counter2())
