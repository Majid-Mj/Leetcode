/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let splited = s.split("");
    for(let i=0; i<splited.length; i++){
        if(splited.indexOf(splited[i]) === splited.lastIndexOf(splited[i])){
            return i;
        }       
    }
    return -1;
};