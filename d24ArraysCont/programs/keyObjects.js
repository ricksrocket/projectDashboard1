"use strict";
/*eslint-disable*/

/*
You have an array of user objects, each one has user.name.
Write the code that converts it into an array of names.*/

/*
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name)


console.log( names ); // John, Pete, Mary
*/



let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);


function groupById(arr) {
    return arr.reduce((obj, value) => {

        console.log(obj, value);
        obj[value.id] = value;

        return obj;
    }, {})
}
console.log(groupById(users));

/*
const usersWithProfiles = users.map((user) => {
  return { ...user, profile: profilesByUserId[user.id] };

*/

