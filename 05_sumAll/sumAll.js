const sumAll = function(num1, num2) {
    //Iniitialize variable sum to 0
    let sum = 0;
    let min = 0;
    let max = 0;
    //Return ERROR if negative arguement used or non number used
    if (num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number" ) {
        return 'ERROR'
    }
    //Determine which arguement is the min and max value
    if (num1 < num2) {
        min = num1;
        max = num2;
    } else {
        min = num2;
        max = num1;
    }
    //Iterate through each number from num1 to num2 and add each number to sum
    for (let i = min; i <= max; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
