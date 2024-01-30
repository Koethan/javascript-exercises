const add = function(num1,num2) {
	return (num1 + num2)
};

const subtract = function(num1,num2) {
	return (num1 - num2)
};

const sum = function(array) {

	let sum = array.reduce((acc, current)=> acc + current, 0)
  return (sum)
};

const multiply = function(array) {
  let total = array.reduce((acc, current) => acc * current, 1)
  return total
};

const power = function(base,exponent) {
	return base**exponent
};

const factorial = function(number) {
	if(number < 0){
    return
  }else if(number === 0){
    return 1
  }else{
    return number * (factorial(number - 1))
  }
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
