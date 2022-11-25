const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

var res = [];
var n = -1;
var m = -1;
var t = -1;
var tempMatrix = new Array();

function createMatrix() {
    for(let i=0;i<n;i++) {
        tempMatrix[i] = new Array(m);
    }
}
function copyMatrix() {
    for(let i=0;i<n;i++) {
        for(let j=0;j<m;j++) {
            tempMatrix[i][j] = res[i][j]
        }
    }
}
function output() {
    for(let i = 0; i<n; i++) {
        console.log(res[i].toString().replace(/,/g ,' '));
    }
}
function inputNM(value) {
    res.push(value.split(' '));
    if( n == -1) {
        n = Number(res[0][0]);
        m = Number(res[0][1]);
        res.shift();
        t = n;
    }
}
function solve() {
    for(let i=0; i<n; i++) {
        for(let j=0; j<m; j++) {
            let countBomb = checkBomb(tempMatrix,i,j);
            res[i][j] = countBomb;
        }
    }
}

function isValid(row,col) {
    return (row >= 0) && (row < n) && (col >= 0) && (col < m);
}
function isBomb(row,col,matrix) {
    return (Number(matrix[row][col] == 1)) 
}
function checkBomb(matrix,i,j) {
/** vị trí xung quanh
 * 1 2 3
 * 8   4
 * 7 6 5
 */
    let count = 0;
    if(isValid(i-1, j-1)) {//1
        if(isBomb(i-1, j-1, matrix)) {
            count++;
        }
    }
    if(isValid(i-1, j)) {//2
        if(isBomb(i-1, j, matrix)) {
            count++;
        }
    }
    if(isValid(i-1, j+1)) {//3
        if(isBomb(i-1, j+1, matrix)) {
            count++;
        }
    }
    if(isValid(i, j+1)) {//4
        if(isBomb(i, j+1, matrix)) {
            count++;
        }
    }
    if(isValid(i+1, j+1)) {//5
        if(isBomb(i+1, j+1, matrix)) {
            count++;
        }
    }
    if(isValid(i+1, j)) {//6
        if(isBomb(i+1, j, matrix)) {
            count++;
        }
    }
    if(isValid(i+1, j-1)) {//7
        if(isBomb(i+1, j-1,matrix)) {
            count++;
        }
    }
    if(isValid(i, j-1)) {//8
        if(isBomb(i, j-1, matrix)) {
            count++;
        }
    }
    return count;
}


/**TH kích thước 1*1? trả về 0; */
readline.on('line', (value) => {
    inputNM(value);
    if (t == 0)
    {
        createMatrix();
        copyMatrix();
        solve();
        output();
        readline.close();
    }
    t--;
});