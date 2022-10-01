"use strict";
/*eslint-disable*/

function Calculator(op1, op2) {
    this.value1 = op1;
    this.value2 = op2;
    this.sum = function (a = this.value1, b = this.value2) {
        this.value1 = a;
        this.value2 = b;
        return (this.value1 + this.value2)
    }
    this.mul = function (a = this.value1, b = this.value2) {
        this.value1 = a;
        this.value2 = b;
        return (this.value1 * this.value2)
    }


}
const calc1 = new Calculator(5, 10);
console.log(calc1.sum(2,3));
console.log(calc1.mul(2,3));
console.log(calc1);