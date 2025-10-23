/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
     while(num >=10){
            let digits = num.toString().split("").map(Number);
    let sum=0;
    for(let nums of digits){
       sum += nums
    }
    num = sum
    }
    return num;
};