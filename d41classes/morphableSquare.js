"use strict";
/*eslint-disable*/



function areaFn(side) {
    return this.side * this.side;
}

const squareA = {
    side: 5
}
squareA.__proto__.area = areaFn;


function Square1(side) {
    this.side = side;
}

Square1.prototype.area = areaFn;

class Square2 {
    constructor(side) {
        this.side = side;
    }

    //area() { return this.side * this.side }
}


Square2.prototype.area = areaFn;

class MorphableSquare extends Square2 {
    constructor(side, color, className) {
        super(side);
        this.color = color;
        this.className = className
    }
    morph () {
        this.className=this.color;
    }
}


console.log("expect 25: ", squareA.area());
console.log("expect 1: ", Object.getOwnPropertyNames(squareA).length);

const constSquare1 = new Square1(7);
console.log("expect 49: ", constSquare1.area());
console.log("expect 1: ", Object.getOwnPropertyNames(constSquare1).length);
console.log("is it undefined? :", Square1.prototype.constructor)

const classSquare = new Square2(10);
console.log("expect 100: ", classSquare.area());
console.log("expect 1: ", Object.getOwnPropertyNames(classSquare).length);

let forinArr = [];
for (let property of classSquare) {
    forinArr.push(property);
}
console.log("for in returns: ", forinArr);


const morph2blue = new MorphableSquare(3, "blue", "white");
const morph2green = new MorphableSquare(3, "green", "white");
console.log("expect 9: ", morph2blue.area());
console.log("expect 3: ", Object.getOwnPropertyNames(morph2blue).length);