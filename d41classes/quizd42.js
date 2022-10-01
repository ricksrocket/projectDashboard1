"use strict";
/*eslint-disable*/


function Bear() {

}
Bear.prototype = { climbs: true };
const bear = new Bear();
Bear.prototype = {};
console.log(bear.climbs); //What will the alert show?
