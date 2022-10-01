"use strict";
/*eslint-disable*/
/*

1. write a function, averagePoints, to get an array containing the average points 
across for each player . Try with a regular for..of loop and then using map.
*/

const player1 = { name: "Bob", points: [1, 2, 1] };
const player2 = { name: "Andre", points: [2, 0, 1] };
const player3 = { name: "Max", points: [1, 1, 1] };

const players = [player1, player2, player3];


function averagePoints(playersArr) {
    let result = [];


    for (const player of playersArr) {
        result.push(playerAvg(player));
    }


    function playerAvg(playerObj) {
        let sum = 0;
        for (const points of playerObj.points) {
            sum = sum + points;
        }
        return sum / (playerObj.points.length);
    }

    return result;
}



console.log("expect [1.33, 1, 1 ]: ", averagePoints(players));
//console.log("expect [{Bob:1.33, Andre:1, Max:1} ]: ", averagePoints (players));