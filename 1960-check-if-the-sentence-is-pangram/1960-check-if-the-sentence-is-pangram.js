/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l',
  'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    for(let char of alphabets){
        if(!sentence.includes(char)){
            return false;
        }
    }
    return true;
    
};