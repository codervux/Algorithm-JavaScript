
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

var temp = 1;
var hang = 0;
var cot = 0;
var n = 10000;
var t = n;//t là số lần điền. 
let res = new Array(n)
for(let i = 0; i < n; i++){
    res[i] = new Array(n);
}

function fillup(res, i, j, n) { //n=7
    while(n > 0) {
        res[i][j] = temp;
        temp++;
        j++;
        n--;
    }
    cot = j - 1;
    hang = i + 1;
    t -= 1;
}
function fillright(res, i, j, n) { // n = n-1 ( n= 6)
    while(n > 0) {
        res[i][j] = temp;
        temp++;
        i++;
        n--;
    }
    hang = i - 1;
    cot = j - 1;
}
function filldown(res, i, j, n) { //n = 6
    while(n > 0) {
        res[i][j] = temp;
        temp++;
        j--;
        n--;
    }
    hang = i - 1;
    cot = j + 1;
    t -= 1;
}
function fillleft(res, i, j, n) { // n=5 (5 = 7-2)
    while(n > 0) {
        res[i][j] = temp;
        temp++;
        i--;
        n--;
    }
    hang = i + 1;
    cot = j + 1;
}

while(temp <= n*n) {
    
    fillup(res,hang,cot,t);
    fillright(res,hang,cot,t);
    filldown(res,hang,cot,t);
    fillleft(res,hang,cot,t);
}

for(let i = 0; i<n; i++) {
    console.log(res[i].toString().replace(/,/g ,' '));
}
// readline.question('', value => {
//     n= value;
//     let res = new Array(n)
//     for(let i = 0; i < n; i++){
//         res[i] = new Array(n);
//     }
    
//     t = n;
//     while(temp <= n*n) {
//         fillup(res,hang,cot,t);
//         fillright(res,hang,cot,t);
//         filldown(res,hang,cot,t);
//         fillleft(res,hang,cot,t);
//     }
    
//     for(let i = 0; i<n; i++) {
//         console.log(res[i].toString().replace(/,/g ,' '));
//     }
//     readline.close();
// })


