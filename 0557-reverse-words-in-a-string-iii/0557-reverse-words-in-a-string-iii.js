/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
 let splited = s.split(" ");
 let result= [];
 for(let word of splited){
    let reversed = word.split("").reverse("").join("");
    result.push(reversed)
 }
 return result.join(" ");
};