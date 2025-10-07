/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let numbers = n.toString().split("").map(Number);
    let product = 1;
    let sum =0;
    for(let num of numbers){
        product *= num;
        sum += num
    }
    return product - sum;

};