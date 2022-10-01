"use strict";
/*eslint-disable*/


class Calculator {
    constructor() {
        this.methods = {
            "-": (a, b) => this.a - this.b,
            "+": (a, b) => this.a + this.b
        };
    }

    calculate(str) {
        this.str = str

        this.split = this.str.split(' ');



        this.a = +this.split[0];
        this.op = this.split[1];
        this.b = +this.split[2];
    

        if (!this.methods[this.op] || isNaN(this.a) || isNaN(this.b)) {
            return "Error";
        }

        return this.methods[this.op](this.a, this.b);
    };

    addMethod(name, func) {
        return this.methods[this.name] = this.func;
    };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
powerCalc.addMethod("%", (a, b) => a % b);
powerCalc.addMethod("√", (a, b) => a ** (1 / b));

let result = powerCalc.calculate("8 / 3");
console.log(result); // 2
//console.log(powerCalc);

