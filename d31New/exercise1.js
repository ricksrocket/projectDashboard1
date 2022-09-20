"use strict";
/*eslint-disable*/


let arr = ["Ilya", "Kantor"]
// sets firstName = arr[0] and surname = arr[1]
let [firstName, surname] = arr;
/*
➢It works great when combined with split or other array-returning methods:*/

[firstName, surname] = "Ilyah Kantor".split(" ");

console.log(firstName);



let [firstName1, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(title); // Consul

//can use any “assignables” at the left side. 

let user = {};

[user.name, user.surname] = "Ilya Kantor".split(' ');
console.log(user.name); // Ilya
console.log(firstName1);
console.log(user);


let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(name1); // Julius
console.log(name2); // Caesar
// Note that type of `rest` is Array. console.log(rest[0]); // Consul
console.log(rest); // of the Roman Republic console.log(rest.length); // 2

let [firstName2, surname2] = []; console.log(firstName); // undefined console.log(surname); // undefined
//➢If we want a “default” value to replace the missing one, we can provide it using =:
// default values

let [nameX = "Guest", surnameX = "Anonymous"] = ["Julius"];
console.log(nameX); // Julius (from array)
console.log(surnameX); // Anonymous (default used)

const team = ["Bob", "Fred", "Jim"];
let [bob, fred, jim] = team;


// destructure the team array onto variables with the same names as the elements, but all lower case
console.log("expect Bob//", bob);
console.log("expect Jim//", jim);
/*
function Assign(arr) {
    let lowerName= [];
    for (let element of arr) {
        let str = element.toLowerCase();
        lowerName.push(str);
    }
    return lowerName
}
console.log (Assign(team));

*/


//let [one, two, three] = new Set([1, 2, 3]);
console.log(one);
/*
let options = {
    title1: "Menu", width: 100, height: 200
    };
    let {title1, width, height} = options; console.log(title1); // Menu*/


let { height, width, title1 } = { title: "Menu", height: 200, width: 100 }
console.log(width); // 100
console.log(height); // 200

const teamBball = {
    point: "Bob",
    shooting: "Fred",
    power: "Jim",
    small: "Al",
    center: "Big Sleep"
}
/*
let { point, shooting, power, small, center } = teamBball;
console.log(point);
*/


let { point: one, shooting: two, power: three, small: four, center: five } = teamBball;
console.log(shooting);
console.log(power);
console.log(small);
console.log(center);