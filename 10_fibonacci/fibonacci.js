const fibonacci = function(num) {
    num = +num;
    if (num < 0) return "OOPS";
    if (num === 0) return 0;
    if (num === 1 || num === 2) return 1;
    let nMinus1 = 1;
    let nMinus2 = 1;
    let sum;
    for (let n = 3; n < num + 1; n++) {
        let sum = nMinus1 + nMinus2;
        nMinus2 = nMinus1;
        nMinus1 = sum;
    }
    return nMinus1;
};


// Do not edit below this line
module.exports = fibonacci;
