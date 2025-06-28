const reverseString = function(string) {
    stringArray = string.split("");
    reverseArray = stringArray.reverse();
    joinArray = reverseArray.join("");
    return joinArray;
};

// Do not edit below this line
module.exports = reverseString;
