"use strict"
/*eslint-disable*/


const arr2 = ["{", "{", "}", "{", "}", "}"];
function balUnbal(arr) {
    const leftStack = [];
    for (const element of arr) {

        if (element === "{") {
            leftStack.push(element);
        }
        else if (element === "}") {
            leftStack.pop();
        }
        console.log(leftStack, element);
    }

    if (leftStack.length === 0) {
        return "Balanced"
    }
    else return "Unbalanced";
}

console.log(balUnbal(arr2));
