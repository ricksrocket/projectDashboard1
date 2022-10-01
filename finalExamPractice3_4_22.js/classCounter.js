"use strict";
/*eslint-disable*/


function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };

    this.down = function () {
        return --count;
    };

    this.side = function () { return 5 };
}

let counter = new Counter();

console.log(counter.up()); // 1
console.log(counter.up()); // 2
console.log(counter.down()); // 1
console.log(counter.side());

// 


class Counter1 {
    constructor() {
        this.count = 0;
    }
    up() {
        return ++this.count;
    };

    down() {
        return --this.count;
    };

    side() { return 5 };
}

let counter1 = new Counter1();

console.log("Class Counter starts",counter1.up()); // 1
console.log(counter1.up()); // 2
console.log(counter1.down()); // 1
console.log(counter1.side());

  // 