const removeFromArray = function(array, ...args) {
//  First attempt
    const itemsToRemove = [];
    for (let i = 1; i < arguments.length; i++) { 
        itemsToRemove.push(arguments[i]);
    }
    for (let i = 0; i < array.length; i++) {
        for (const item of itemsToRemove) {
            if (item === array[i]) { 
                array.splice(i, 1);
                i -= 1;
            }
        }
    }
    return array;
//  More efficient solution using Array methods:
//  return array.filter(value => !args.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
