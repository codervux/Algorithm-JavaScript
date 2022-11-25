const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})


var value = []
var r = 0;
var c = 0;
var t = 0;
/**
 * duyệt ma trận theo chiều dọc.
 * tại mỗi cột, tìm ra maxlength = max(value[i][j].length) = 1 vòng lặp
 * over = maxlength - value[i][j].length
 * xuaast ra log(' '.repeat(over) + value[i][j])
 */

function output(maxLengthArray) {
    let res2 = [];
    for(let i = 0; i<r; i++) {
        for(let j = 0; j<c; j++) {
            let add = maxLengthArray[j] - String(value[i][j]).length;
            res2.push(' '.repeat(add) + value[i][j]);
        }
        console.log(res2.join(' '))
        res2 = [];
    }
}

function solve() {
    let maxLengthArray = [];
    for(let j = 0; j < c; j++) {
        let maxlength = String(value[0][j]).length;
        for( let i = 0; i < r; i++) {
            if (maxlength < String(value[i][j]).length) {
                maxlength = String(value[i][j]).length;
            }
        }
        maxLengthArray.push(maxlength);
    }
    output(maxLengthArray);
}

readline.on('line', (tempInput) => {
    value.push(tempInput.split(' ').map(Number))
    if(r == 0) {
        r = Number(value[0][0]);
        c = Number(value[0][1]);
        value.shift();
        t = r;
    }
    if(t==0) {
        solve();
        readline.close();
    }
    t--;
})