"use strict";
/*eslint-disable*/


const john = {
    name: "John",
    surname: "Smith",
    isAdmin: false,
    birthday: { "year": 2000, "month": "February", "day": 3 }, friends: [0, 1, 2, 3]
};

let johnJSON = JSON.stringify (john)
console.log(johnJSON);
const johnClone = JSON.parse(johnJSON);

console.log(johnClone);
