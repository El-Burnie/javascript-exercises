const repeatString = function(phrase, count) {
    let repeatString = "";
    if (count < 0 ) {
        return "ERROR";
    }
    for (let i = 0; i < count; i++) {
        repeatString += phrase;
    }
    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
