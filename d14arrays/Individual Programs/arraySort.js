"use strict";

/*eslint-disable*/

let result = ['Walter Isaacson', 'Mockingjay: The Final Book of The Hunger Games', 'The Road Ahead']
function sortThis(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr
}

console.log(sortThis(result));
