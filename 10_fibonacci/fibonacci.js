const fibonacci = function(number) {
    if(number < 0){
        return "OOPS"
    }
    else if(number == 0){
        return 0
    }
    else if(number <= 2){
        return 1
    }
    else{
        number = fibonacci(number-1) + fibonacci(number - 2)
    }
    return number
};

// Do not edit below this line
module.exports = fibonacci;
