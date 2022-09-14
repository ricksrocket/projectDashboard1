"use strict"
/*eslint-disable*/




function fill2DimensionsArray(rows, columns) {
    let arr = [];
    let sum = 1;
    let i;
    for (i = 0; i < rows; i++) {
        arr.push([0]);
        for (var j = 0; j < columns; j++) {
            sum=(columns*i)+1;
            arr[i][j] = sum + j;
        }
    }
    return arr;
}




console.log(fill2DimensionsArray(2, 5));

