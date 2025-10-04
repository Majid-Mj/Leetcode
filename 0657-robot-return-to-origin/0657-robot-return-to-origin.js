/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    countx = 0;
    county =0;
    for(let values of moves){
        if(values === "U") {
            county ++;
        }else if(values === "D"){
            county --;
        }else if (values === "R"){
            countx ++;
        }else if(values === "L"){
            countx --;
        }
    }
    return county == 0 && countx == 0;
};