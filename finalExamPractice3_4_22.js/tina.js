"use strict";
/*eslint-disable*/


//What will appear in the console? 

function User(name){ 
    console.log("1:" , this); 
    this.name = name; 
    console.log("2:" , this); 
    } 
    tina = {}; 
    const thisUser = User.bind(tina); 
    thisUser("Rujuan"); 
    thisUser("Tina"); 
    console.log("3: ", tina);
    error- tina = {}; is not declared