"use strict"
/*eslint-disable*/

/*
const numbers = { one: 1,
two: 22, three: 333, four: 444
}
const properties = ["one", "two", "three", "four"];
//write a for loop to print out the values of the properties in numbers. 
You must use the properties array to access the values. You cannot directly 
write console.log(numbers.one) ...
*/

const numbers = { 
    one: 1,
    two: 22,
    three: 333, 
    four: 444
}
const properties = ["one", "two", "three", "four"];

    for (const element of properties){
        console.log (numbers[element])
    };
    
 


