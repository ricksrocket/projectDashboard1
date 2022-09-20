"use strict";
/*eslint-disable*/

let str = "4207 3300 1533";

function sortStr(str) {
    let arr = str.split(" ");
    arr.sort((a, b) => {
        return a - b;
    });
    return arr
}

console.log(str);

function sortStrLast(str) {
    let arr = str.split(" ");
    //console.log(arr[0].charAt(0));
    for (const element of arr){
        let last = element.charAt(3);
        console.log(last);
    }
    //arrRev.sort((a, b) => {
       // return +a - (+b);
   // });
   // arrRev.reverse();
    return arr;
}

console.log(sortStrLast(str));
