const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    let wordString = "";
    for(let i = 0; i < num; i++) {
        wordString += string;
    }
    return wordString;
}

// Do not edit below this line
module.exports = repeatString;
