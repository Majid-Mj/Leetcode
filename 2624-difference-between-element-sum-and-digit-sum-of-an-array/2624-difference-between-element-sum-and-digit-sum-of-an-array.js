/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let elementSum = nums.reduce((a,b) => a + b , 0);
    let digitArray = nums.join("").split("").map(Number);
    let digitSum = digitArray.reduce((a,b) => a + b ,0);
    return elementSum - digitSum;
};



