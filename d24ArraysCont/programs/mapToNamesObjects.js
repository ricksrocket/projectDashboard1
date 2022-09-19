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



let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(item => ({
    fullName: `${item.name} ${item.surname}`,
    id: item.id
}));
/*
function reMapObj (item) {
    fullName
} users.map(
}));
function mapIt ()
    /* ... your code ... */


usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]


console.log(usersMapped[0].id) // 1
console.log(usersMapped[0].fullName) // John Smith
console.log(usersMapped)