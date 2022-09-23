//"use strict"; 
/*eslint-disable*/


/*
const abc = {
    a: 1, b: 2, add: function () {
        console.log("1+2 = 3?", this.a + this.b);
    }
} abc.add(); //works
setTimeout(abc.add, 2000); //problem!

*/

function a() {
    console.log("function a says this is", this);
}
const b = {
    dog: 'fido',
    log: function () {
        console.log("b.log says this is", this);
    }
}
console.log("global call of console.log says this is", this);
a();
b.log();
let mylog = b.log;
mylog();

/*

let user = {
    firstName: "John",
    sayHi() {
        alert(`Hello, ${this.firstName}!`);
    }
};
setTimeout(function () { user.sayHi(); }, 1000); //wrapped versus just “user.sayHi” //Or
setTimeout(() => user.sayHi(), 1000);
*/