const removeFromArray = function(array, ...theArgs) {
    let newArray = [];
    for (const element of array) {
    		let elementInArgs = false;
        for (const arg of theArgs) {
            if (element === arg) {
                elementInArgs = true;
                break;
            }
        }
        if (elementInArgs === false) {
        	newArray.push(element);
        }
    }
    return newArray;
};

console.log(removeFromArray([1,2,3,4], 2, 4))

// Do not edit below this line
module.exports = removeFromArray;


//Take an element of array and check to see if it is equal to any of the elements of another array
//IF it is, then do nothing
//IF it is NOT, then push to newArray