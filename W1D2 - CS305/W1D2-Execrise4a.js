"use strict";
/*eslint-disable*/


function sumDigits (num) {
   let str=num.toString();
   let sum=0;
   //str=num.toString;
   for (let i=0; i<str.length; i++){
      let Di= Number(str.charAt(i));
      sum = sum + Di;
   }
   return sum
}
console.log(sumDigits(8));
