"use strict";
/*eslint-disable*/

let unitConversion1 = {
    isDegrees: true,
    convert(theta) {
        if (this.isDegrees) {
            return (theta * Math.PI / 180)
        }
        else return (theta * 180 / Math.PI)
    }
}


function UnitConversion(angle) {
    this.angle=angle;
    this.isDegrees = false;
    this.convert = function (theta){
        this.angle = theta
        if (this.isDegrees) {
            return (this.angle = this.angle * Math.PI / 180)
        }
        else return (this.angle = this.angle * 180 / Math.PI)
    }

}
/*
function unitConversion (angle) {
    
    if (this.isDegrees) {
        return (this.angle * Math.PI / 180)
    }
    else return (this.angle * 180 / Math.PI)
const unitConversion1 =  UnitConversion1(180);
unitConversion1.isDegrees = false;
console.log(unitConversion1);
*/

const unitConversion = new UnitConversion(180);
unitConversion(90);

//console.log(UnitConversion.convert(180));
console.log(unitConversion.convert(3.141592653589793));
unitConversion.isDegrees=false;

