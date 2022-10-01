"use strict";
/*eslint-disable*/


//What will appear in the console? 

function User(name) {
    console.log("1:", this);
    this.name = name;
    console.log("2:", this);
}
const tina = {};
const thisUser = User.bind(tina);
thisUser("Rujuan");
console.log("3: ", tina);
thisUser("Tina");
console.log("4: ", tina);
