"use strict";
/*eslint-disable*/
/*

const abc = {
    a: 1,
    b: 2,
    add:
        function () {
            console.log("abc says this is ", this);
            console.log("1+2 = 3?", this.a + this.b);
        }
}
abc.add(); //works
setTimeout(abc.add, 2000); //problem!
*/



function foo() {
    console.log(this);
} const bob = {
    log: function () {
        console.log(this);
    }
};
console.log(this); //this is window in browser ({} in node**) 
foo(); //foo() is called by window object (global in node) 
bob.log()
