const repeatString = function(string, repeatCount) {
    let newString = '';
    for (let i = 1; i <= repeatCount; i++) {
        newString += string;
    }
    if (repeatCount < 0) {
        newString = 'ERROR';
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
