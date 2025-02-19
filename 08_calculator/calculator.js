const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((accum, val) =>  accum += val, 0);
};

const multiply = function(arr) {
  return arr.reduce((accum, val) =>  accum *= val, 1);
};

const power = function(a, pow) {
	return a ** pow;
};

const factorial = function(num) {
  if(num < 0) return "Can't solve for negative numbers";
	if(num === 0) return 1;
	return num * factorial(num-1);
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
