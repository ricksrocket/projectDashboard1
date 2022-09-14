/*eslint-disable*/

const prompt=require("prompt-sync")();
let age=0;
while (age !==18){
    age = prompt("What is your age?: ");
    age=+age;
    console.log(age);
} 