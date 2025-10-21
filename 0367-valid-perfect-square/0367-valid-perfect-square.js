/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num < 0) return false
        for(i=0; i*i <= num ; i++){
        if(i*i === num){
            return true;
        }
    }
    return false;
}