"use strict";
/*eslint-disable*/

let vehicle = {
    transports: true
};
function Auto(brand) {
    this.brand = brand;


}

//Auto.prototype = vehicle;
Auto.__proto__ = vehicle;
let honda = new Auto("Honda");
honda.__proto__ = vehicle;
console.log(honda.transports); // true

function User(name) {
    console.log("1:", this);
    this.name = name;
    console.log("2:", this);
}
tina = {};
const thisUser = User.bind(tina);
thisUser("Rujuan");
thisUser("Tina");
console.log("3: ", tina);


