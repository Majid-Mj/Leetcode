/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum =0;
    let digitSum =0;
    let digitCount =nums.join("").split("").map(Number);
    for(let element of nums ){
        elementSum += element
    }
    for(let digit of digitCount){
        digitSum += digit
    }
    return elementSum - digitSum;
};



