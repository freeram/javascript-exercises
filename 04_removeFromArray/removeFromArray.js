const removeFromArray = function() {
    const array = Array.from(arguments[0]);

    let indexToRemove;
    for (var i = 1; i < arguments.length; i++) {
        indexToRemove = array.indexOf(arguments[i]);
        if (indexToRemove == -1) {
            continue;
        }
        array.splice(indexToRemove, 1);
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
