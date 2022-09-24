"use strict";
/*eslint-disable*/

let employee = {
    name: "Aditya Chaturvedi",
};
console.log(employee.name); // Aditya Chaturvedi
employee.name = "Rahul Khanna";
console.log(employee.name); // Rahul Khanna

employee.name = "Amit Trivedi";
console.log(employee.name); // Amit Trivedi



let employee1 = {
    name: "Aditya Chaturvedi",
    setName: function (value) {
        let exp = new RegExp(/\d+/);
        if (exp.test(value)) {
            console.log("Invalid Name");
        }
        else {
            this.name = value;
        }
    },
    "getName": function () {
        return this.name;
    }
};
console.log(employee1.getName());   // Aditya Chaturvedi
employee1.setName("Rahul Khanna");
console.log(employee1.getName());   // Rahul Khanna
employee1.setName(42);        // Invalid Name
console.log(employee1.getName());   // Rahul Khanna
employee1.name = 42;
console.log(employee1.getName());



let employee2 = function () {
    var name = "Aditya Chaturvedi";
    var exp = new RegExp(/\d+/);
    return {
        setName: function (value) {
            if (exp.test(value)) {
                console.log("Invalid Name");
            }
            else {
                name = value;
            }
        },
        getName: function () {
            return name;
        }
    }; // end of the return
}(); // Note this '()' means we're calling the function


function employeeX() {
    var name = "Aditya Chaturvedi";
    var exp = new RegExp(/\d+/);
    return {
        setName: function (value) {
            if (exp.test(value)) {
                console.log("Invalid Name");
            }
            else {
                name = value;
            }
        },
        getName: function () {
            return name;
        }
    }; // end of the return
}; // Note this '()' means we're calling the function
let employee3 = employeeX();

console.log(employee3.getName());   // Aditya Chaturvedi
employee3.setName("Rahul Khanna");
console.log(employee3.getName());  // Rahul Khanna
employee3.setName(42); // Invalid Name; the name does'nt changes.
employee3.name = 42;     // Doesn't affect the private fullName variable.
console.log(employee3.getName());  // Rahul Khanna is printed again.
