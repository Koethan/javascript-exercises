const reverseString = function(word) {
    let array = word.split("")
    let reversed = array.reverse()
    let answer = reversed.join("")
    return answer;

};

// Do not edit below this line
module.exports = reverseString;
