"use strict";
/*eslint-disable*/
/**
 * 
 */
/*
let timerId = setTimeout(function tick() {
    console.log('tick');
    timerId = setTimeout(tick, 2000); // (*)
  }, 2000);
  
  setTimeout();

  timerId();
*/
/*
  function makeCounter() {
    let count = 0;
    const innerFunc = function () {
        return count = count + 1;
    }
    return innerFunc
};

const counter1 = makeCounter();
const counter2 = makeCounter();
counter1();
counter1();
//console.log(counter1());
console.log("should be 3", counter1())
console.log("should be 1", counter2())
*/

function sayHi(phrase, who) {
    console.log(phrase + ', ' + who);
}

setTimeout(sayHi, 1000, "Hello", "John"); // Hello, John

// repeat with the interval of 2 seconds
let timerId = setInterval(() => console.log('tick'), 2000);

// after 5 seconds stop
setTimeout(() => {
    clearInterval(timerId);
    console.log('stop');
}, 5000);


