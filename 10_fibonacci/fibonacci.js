const fibonacci = function(k) {
    if (k < 0) {return "OOPS";}
    else if (k == 0) {return 0;}

    let a = 1, b = 1, c;
    for (let i = 1; i < k; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return a;
};

// 1, 1, 2, 3, 5, 8    

// Do not edit below this line
module.exports = fibonacci;
