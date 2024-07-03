const convertToCelsius = function(tempF) {
  let tempC = (tempF - 32) * (5 / 9);
  return Number.isInteger(tempC) ? tempC : +tempC.toFixed(1);
};

const convertToFahrenheit = function(tempC) {
  let tempF = tempC * (9 / 5) + 32;
  return Number.isInteger(tempF) ? tempF : +tempF.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
