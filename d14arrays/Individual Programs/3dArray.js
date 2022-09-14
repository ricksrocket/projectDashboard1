"use strict"
/*eslint-disable*/

const items = [[[]]] // init 3d array

// assign values
items[0][0][0] = 0
items[0][0][1] = 1
items[0][0][2] = 2

// display
for (const i of items) {
  for (const j of i) {
    for (const k of j) {
      console.log('k = ', k)
    }
  }
}
console.log(items);
