

/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    countR = 0;
    countL = 0;
    count_ =0;
    for(let values of moves){
        if(values === "L"){
            countL ++;
        }else if(values === "R"){
            countR ++;
        }else if(values === "_"){
            count_ ++;
        }
    }
    return Math.abs(countL-countR) + count_;
};

console.log(furthestDistanceFromOrigin("_R__LL_"));