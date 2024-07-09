const add = function(num1 = 0, num2 = 0) {
	return num1 + num2;
};

const subtract = function(num1 = 0, num2 = 0) {
	return num1 - num2;
};

const sum = function(array) {
  return array.reduce((sum, value) => sum + value, 0);
};

const multiply = function(array) {
  if (array.length === 0) return 0;
  return array.reduce((product, value) => product * value, 1);
};

const power = function(num1 = 0, num2 = 0) {
  return num1 ** num2;
};

const factorial = function(num = 0) {
	if (num === 0) return 1;
  let factorial = 1;
  for(let i = 1; i < num + 1; i++) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
