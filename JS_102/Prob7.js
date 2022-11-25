
const readline = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout,
})

var res = [];
var array1 = [];
var array2 = [];
var n = 0;
var m = 0;
var t = 0;
function inputNM(value) {
    res.push(value.split(' '));
    if( n == 0) {
        m = Number(res[0][0]);
        n = Number(res[0][1]);
        res.shift();
    }
}

/**
 * 1 0 1 1 0 1 0 2 2    a1
 * 0 1 1 2              a2
 * tồn tại các số bất kì 0,1,1,2 trong a1 thỏa mãn index0 < index1.1 <index 1.2 < index 2
 * nếu chỉ 1 TH ko thỏa mãn, trả về FALSE
 * 1 0 1 1 0 1 0 2 2
 *   0 1 1       2
 * 0 1 2 3 4 5 6 7 8    INDEX
 * 0 1 1 2
 */
function mBigger() {
    let indexArray2 = 0;
    for(let i = 0; i<m; i++) {
        if(array1[i] == array2[indexArray2]) {
            indexArray2++;
            if(indexArray2 == n) {
                console.log('TRUE');
                return;
            }
        }
    }
    console.log('FALSE');
}
function nBigger() {
    let indexArray1 = 0;
    for(let i = 0; i<n; i++) {
        if(array1[indexArray1] == array2[i]) {
            indexArray1++;
            if(indexArray1 == m) {
                console.log('TRUE');
                return;
            }
        }
    }
    console.log('FALSE');
}
function solve() {
    if(m == n) {
        console.log('FALSE');
        return;
    }
    if(m > n) {
        mBigger();
        return;
    }
    else {
        nBigger();
        return;
    }
}
readline.on('line', (value) => {
    inputNM(value);
    if (t == 2)
    {
        array1 = res[0];
        array2 = res[1];
        solve();
        readline.close();
    }
    t++;
});