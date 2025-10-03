/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    let result ="";
    for(let x of address){
        if(x === "."){
            result += "[.]"
        }else{
            result += x;
        }
    }
    return result;
};
