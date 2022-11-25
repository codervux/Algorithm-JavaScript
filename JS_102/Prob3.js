readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

var r = 0;
var c = 0;
var t = 0;
var matrix = [];

readline.on('line', (tempInput) => {
    inputRC();
    if(t == 0) {
        let tempMatrix = [];
    }
    t--;
})

function inputRC() {
    matrix.push(tempInput.split(' ').map(Number))
    if(r==0) {
        r = matrix[0][0];
        c = matrix[0][1];
        t = r;
        matrix.shift();
    }
}