/**
 * @param {number} num
 * @return {number}
 */
var countDigits = function(num) {
    let str=num.toString();
    let count = 0;
    for(let val of str){
        let nums = Number(val)
        if(nums !== 0 && num % nums === 0){
            count++
        }
    }
    return count;
};