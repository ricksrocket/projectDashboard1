"use strict"
/*eslint-disable*/

const prompt = require("prompt-sync")();

/*
   Create an empty object user.
   Add the property name with the value John.
   Add the property surname with the value Smith.
   Change the value of the name to Pete.
   Remove the property name from the object.
*/
let baz = "" + 33 + 10; 
console.log(baz === 43);

const user1 = {
    name: "John",
    surname: "Smith",
    age: 30
};

const array1 = {
    0: "a",
    1: "b"
}

user1["name"] = "Pete";
console.log(user1.name);
console.log(array1);

delete user1.name;
console.log(user1);

array1[2] = "c";
console.log(array1);
user1["likes birds"] = true;


let key = prompt("What do you want to know about the user?", "name");

// access by variable
console.log(user1[key]); // John (if enter "name")


let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
    [fruit]: 5, // the name of the property is taken from the variable fruit
};

console.log(bag.apple); // 5 if fruit="apple"

function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ...other properties
    };
}

let user = makeUser("John", 30);
console.log(user.name); // John

let codes = {
    "49": "Germany",
    "41": "Switzerland",
    "44": "Great Britain",
    // ..,
    "1": "USA"
};

for (let code in codes) {
    console.log(code); // 49, 41, 44, 1
}


/*
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false
*/

let schedule = {};

function isEmpty(obj) {
    let sum = 0;
    for (const prop in obj)
        if (prop) {
            sum = sum + 1;
        }
    if (sum === 0) {
        return true;
    }
    else return false;
};

console.log(isEmpty(schedule));

/*
Sum object properties
importance: 5
We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

Write the code to sum all salaries and store in the variable sum. Should be 390 in the 
example above.

If salaries is empty, then the result must be 0.
*/

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

console.log(salaries.John);


function sumSalaries(obj) {
    let sum = 0
    let count = 0
    for (const prop in obj) {
        sum = sum + (obj[prop]);
        count = count + 1;
    }
    obj.length = count;
    return sum;
}
console.log(sumSalaries(salaries));
console.log(salaries);

/*
Multiply numeric property values by 2
importance: 3
Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

For instance:

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};
Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

P.S. Use typeof to check for a number here.
*/

const menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj) {
    
    for (const prop in obj) {
        if (typeof obj[prop] === "number") {
            obj[prop] = obj[prop] * 2;
        }

    }
}
multiplyNumeric(menu);
console.log(menu);