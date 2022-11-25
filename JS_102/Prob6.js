readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

var n = 0;
var t = 0;
var value = [];
var res = [2, 3];


function finalResult(tempValue) {
    if (tempValue <= res.length) {
        return res[tempValue - 1];
    } 
    else {
        return searchPrimes(tempValue, res.length, res[res.length - 1]);
    }
}
function checkPrimes(tempValue) {
    if (tempValue % 3 == 0) {
        return 0;
    }
    for (let i = 5; i * i <= tempValue; i += 6) {
        if (tempValue % i == 0 ) {
            return 0;
        }
        else if(tempValue % (i + 2) == 0) {
            return 0;
        }
    }
    return 1;
}
function searchPrimes(tempValue, count, i) {
    while (count < tempValue) {
        i += 2;
        if (checkPrimes(i)) {
            res.push(i);
            count++;
        }
    }
    return i;
}
function inputN(tempValue) {
    value.push(Number(tempValue));
    if (n == 0) {
        n = value[0];
        t = n;
        value.shift();
        }
}
readline.on("line", (x) => {
    inputN(x);
    if (t == 0) {
        for (let i = 0; i < n; i++) 
            console.log(finalResult(value[i]));
        readline.close();
    }
    t--;
});