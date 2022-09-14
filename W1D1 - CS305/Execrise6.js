/*eslint-disable*/

const prompt=require("prompt-sync")();
let str=prompt("Enter an integer: ");

  // let str=num.toString();
   let sum=0;
   for (let i=0; i<str.length; i++){
      let Di= Number(str.charAt(i));
      sum = sum + Di;
    }

console.log(sum);

