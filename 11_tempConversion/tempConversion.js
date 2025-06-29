const convertToCelsius = function(num) {
  let number = (num - 32) * 5/9;
  let rounded = Math.round(number * 10) / 10;
  return rounded;
}

const convertToFahrenheit = function(num) {
  let number = (num * 9/5) + 32;
  let rounded = Math.round(number * 10) / 10;
  return rounded;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
