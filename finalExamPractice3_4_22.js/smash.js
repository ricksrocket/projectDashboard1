"use strict";
/*eslint-disable*/


const bar = [{ x: 1, y: 2 }, { x: 10, y: 4 }];
//let obj1 = { x: 1, y: 2 }
//let {x,y} = obj1;
//console.log(x,y);

function smash(arr) {
    //let x, y;
    let resultArr = [];
    arr.map(obj => {
        let {x, y} = obj;
        resultArr.push(x+y);
    })

return resultArr
}
console.log(smash(bar));

