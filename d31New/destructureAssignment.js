"use strict";
/*eslint-disable*/


let options = {
    title: "Menu"
};
let { width = 100, height = 200, title } = options;
console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200


let user = {
    name: "John",
    years: 30
  };
  
  let {name, years: age, isAdmin = false} = user;
  
  console.log( name ); // John
  console.log( age ); // 30
  console.log( isAdmin ); // false