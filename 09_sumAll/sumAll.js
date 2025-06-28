const sumAll = function(num1, num2) {
    let smallValue = Math.min(num1, num2);
    let bigValue = Math.max(num1, num2);
    let sum = 0;
    if (num1 <= 0) return "ERROR";
    if (num2 <= 0) return "ERROR";
    if ((typeof num1 !== typeof(1)) || (typeof num2 !== typeof(1))) {
        return "ERROR";
    } else
    for(let i = smallValue; i <= bigValue; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
