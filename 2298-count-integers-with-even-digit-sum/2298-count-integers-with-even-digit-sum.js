/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count = 0;
    for(let i=1; i<=num; i++){
        let digit =i.toString().split("").map(Number);
        let sum = digit.reduce((a,b) => a+b,0);

        if(sum % 2 == 0){
            count ++
        }
    }
    return count;
};
