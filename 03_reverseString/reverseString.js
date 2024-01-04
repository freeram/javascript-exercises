const reverseString = function(string) {
    const stringArray = string.split("");
    let reversed = "";

    for (let i = stringArray.length - 1; i >= 0; i--) {
        reversed += stringArray[i];
    }
    return reversed
};

// Do not edit below this line
module.exports = reverseString;
