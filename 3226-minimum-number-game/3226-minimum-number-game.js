/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    nums.sort((a,b) => a - b);
    arr = [];
    for(let i=0; i<nums.length; i+=2){
        let Alice = nums[i];
        let Bob = nums[i + 1];

        arr.push(Bob);
        arr.push(Alice);
    }
    return arr;
};