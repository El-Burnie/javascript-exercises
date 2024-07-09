const palindromes = function (string) {
    string = formatString(string);
    let stringReversed = string.split("").reverse().join("");
    return string === stringReversed;
};

function formatString(string) {
    const validChars = "abcdefghijklmnopqrstuvwxyz0123456789"
    return string
    .toLowerCase()
    .split("")
    .filter(char => validChars.includes(char))
    .join("");
}

// Do not edit below this line
module.exports = palindromes;
