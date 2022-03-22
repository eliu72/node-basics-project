const add = function(val1, val2) {
	return val1 + val2;
};

const subtract = function(val1, val2) {
	return val1 - val2;
};

const sum = function(arr) {
	mySum = 0;
  for (let num of arr){
    mySum += num;
  }
  return mySum;
};

const multiply = function(arr) {
  output = 1;
  for (let num of arr){
    output *= num;
  }
  return output;
};

const power = function(val1, val2) {
	return val1 ** val2;
};

const factorial = function(val) {
	output = 1;
  for(let i=val; i > 1; i--){
    output *= i;
  }
  return output;
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
