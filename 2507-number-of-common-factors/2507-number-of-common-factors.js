/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let count=0;
    let limit;
    if(a <= b){
        limit = a;
    }else if(a >= b){
        limit = b;
    }
    for(i=1; i<=limit;  i++){
        if(a % i === 0 && b % i === 0){
            count++
        }
    }
    return count;
    
};
