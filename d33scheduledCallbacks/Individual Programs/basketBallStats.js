"use strict";
/*eslint-disable*/

/* You need the module.exports when testing in node.  Comment it out when you send your file
 to the browser 
*/
//module.exports = { findTotalScores, findTotalPlayerPoints }; /*add all of your function names 
/*here that you need for the node mocha tests



/*Be sure to use meaningful variable names and write JSdoc comments for findTotalScores and any 
helper functions such as findTotalPlayerPoints. Try to use map and reduce in your functions as appropriate. */
const player1 = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }, { game: 3, points: 8 }] };
const player2 = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }, { game: 3, points: 18 }] };
const player3 = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }, { game: 3, points: 8 }] };
const player4 = { jersey: 10, stats: [{ game: 1, points: 18 }, { game: 2, points: 22 }, { game: 3, points: 24 }] };
const player5 = { jersey: 4, stats: [{ game: 1, points: 4 }, { game: 2, points: 8 }, { game: 3, points: 9 }] };


const teamStats = [player1, player2, player3, player4, player5];


function findTotalTeamStats(teamStatisticsArr) {

    let playerStatsArr = [];
    for (const player of teamStatisticsArr) {
        let maxPts = findPlayerMax(player);
        let minPts = findPlayerMin(player);
        let avgPts = findPlayerAvg(player)
        playerStatsArr.push({ jersey: player.jersey, high: maxPts, low: minPts, avg: avgPts })
    }
    return playerStatsArr;

}


function findPlayerMax(player) {
    let maxPts = 0;
    for (const gamesObj of player.stats) {
        if (gamesObj.points > maxPts) {
            maxPts = gamesObj.points;
        }
    }
    return maxPts;
}

function findPlayerMin(player) {
    let minPts = Infinity;
    for (const gameObj of player.stats) {
        if (gameObj.points < minPts) {
            minPts = gameObj.points;
        }
    }
    return minPts;
}

function findPlayerAvg(player) {
    let total = player.stats.reduce((sum, curr) => {
        return sum + curr.points;
    }, 0);
    return Math.round((10 * total) / (player.stats.length)) / 10;
}

function findTotalPlayerPoints1(player) {
    let total = player.stats.reduce((prev, curr) => {
        return prev.points + curr.points;
    })
    return total;
}
console.log(player1.stats.length);
console.log(findTotalTeamStats(teamStats));

function findPlayerMax1(player) {
    return player.stats.reduce((max, gameObj) => {
        return (max > gameObj.points) ? max : gameObj.points;
    }, -Infinity);
}

function findPlayerMin1(player) {
    return player.stats.reduce((min, gameObj) => {
        return (min < gameObj.points) ? min : gameObj.points;
    }, Infinity);
}