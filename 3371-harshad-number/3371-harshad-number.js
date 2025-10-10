/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let digit = x.toString().split("").map(Number);
    let digitSum =digit.reduce((a,b) => a + b ,0);
    if(x % digitSum === 0){
        return digitSum;
    }else{
        return -1;
    }  
};



