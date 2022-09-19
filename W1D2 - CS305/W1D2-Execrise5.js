"use strict";
/*eslint-disable*/

/* Many people get confused about converting between Fahrenheit and Celsius. 
Converting one way (from Fahrenheit to Celsius has you subtract 32 before 
multiplying by a factor. Converting to Fahrenheit from Celsius has you first
multiply by a factor then add 32 as the last step. 

Did you know that both temp scales meet at -40 degrees, exactly? As such, you can 
add 40 as the first step, multiply by a scale factor second, then subtract 40 
as the last step, no matter which unit you are starting with. This program uses 
that concept.



*/

function convertFahrenheit (tempF){
    let tempC= (tempF + 40) * (5/9) - 40;
    return tempC

}
console.log(convertFahrenheit(32))

/*
Write a function, convertCelsius, that takes an input parameter with a 
temperature in Celsius and returns the temperature in Fahrenheit. Simply replace 
tempF variables with tempC variables, and invert to scale factor 5/9 to 9/5. The 
code looks nearly identical

function convertCelsius (tempC){
    let tempF= (tempC + 40) * (9/5) - 40;
    return tempF

}
console.log(convertCelsius(100));
*/