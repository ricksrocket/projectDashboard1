"use strict";
/*eslint-disable*/


function User(name) {
    this.name = name;
}

User.prototype.sayHi = function () {
    console.log(this.name);
};

let user = new User("John");
user.sayHi();
console.log(user)


class User1 {
    constructor(name){
        this.name = name
    };

    sayHi () {
        console.log(this.name);
    }
}

let user1 = new User1("Johnny")
user1.sayHi();
console.log(user1);


