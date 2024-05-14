const palindromes = function (string) {
    const arr = string
        .split('')
        .filter(el => el.match(/[a-zA-Z0-9]/i))
        .map(el => el.toLowerCase());
    const rev = [...arr].reverse();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== rev[i]) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
