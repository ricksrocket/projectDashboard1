"use strict";
/*eslint-disable*/


let user = {
    firstName: "John"
};

function func(phrase) {
    console.log(phrase + ', ' + this.firstName);
}

// bind this to user

let funcUser = func.bind(user);
funcUser("Hello"); // Hello, John (argument "Hello" is passed, and this=user)