const sumAll = function(loNum, hiNum) {
    if (!(typeof loNum === "number") || !(typeof hiNum === "number")) return "ERROR";
    if (loNum < 0 || hiNum < 0) return "ERROR";
    if (hiNum < loNum) [loNum, hiNum] = [hiNum, loNum];
    let sum = 0;
    for (let i = loNum; i < hiNum + 1; i++) { sum += i; }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
