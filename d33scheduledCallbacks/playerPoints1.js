"use strict";
/*eslint-disable*/

/* You need the module.exports when testing in node.  Comment it out when you send your file
 to the browser 
*/
//module.exports = { findTotalScores, findTotalPlayerPoints }; /*add all of your function names 
/*here that you need for the node mocha tests



/*Be sure to use meaningful variable names and write JSdoc comments for findTotalScores and any 
helper functions such as findTotalPlayerPoints. Try to use map and reduce in your functions as appropriate. 
const player1 = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] };
const player2 = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] };
const player3 = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] };
const teamStats = [player1, player2, player3];
*/


const player1 = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] };
const player2 = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] };
const player3 = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] };

const teamStats = [player1, player2, player3];


function findTotalScores(teamStatisticsArr) {

    let highScoresArr = [];
    for (const player of teamStatisticsArr) {
        let totalPts = findTotalPlayerPoints1(player);
        highScoresArr.push({ jersey: player.jersey, total: totalPts })
    }
    return highScoresArr;

}

/*
function findTotalPlayerPoints(player) {
    let total = 0;
    for (const gameObj of player.stats) {
        total = gameObj.points + total;
    }
    return total;
}
*/



function findTotalPlayerPoints1(player) {
    let total = player.stats.reduce((prev,curr) => { 
        return prev.points + curr.points;
    })
    return total;
}
console.log(findTotalScores(teamStats));