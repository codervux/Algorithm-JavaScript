//(r-2)*(c-2) phần tử , xuất ra trên (r-2) dòng => mỗi dòng (c-2) phần tử
//biến thành mảng, - bắt đầu duyệt từ c+1, duyệt (c-2) lần, bỏ qua 2 phần tử, tiếp tục duyệt.
//Sau mỗi lần duyệt, push phần tử đang xét: value[i] vào mảng res.
//Xuất mảng.

//biến mỗi value[i].tostring sau đó ghép lại.

/** r = 6  c = 4
0 1 2 3
4 5 6 7
8 9 10 11
12 13 14 15
16 17 18 19
20 21 22 23
 * 
 *   value[i] + value[i-1] + value[i+1] + value[i-c] + value[i+c] + value[i-c-1] + value[i-c+1] + value[i+c-1]+value[i+c+1]
 * 
 * 0  1  2  3
 * 4  5  6  7
 * 8  9  10 11
 * 
 * 0 1 2
 * 3 4 5
 * 6 7 8
 */

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
var res = [];
var n = -1;
var m = -1;
var t = -1;


function inputNM(value) {
    res.push(value.split(' ').map(Number));
    if( n == -1) {
        n = (res[0][0]);
        m = (res[0][1]);
        res.shift();
        t = n;
    }
}

function solve() {
    let res2 = [];
    for(let i = 1; i < n-1; i++) {
        for( let j = 1; j < m-1; j++) {
            let sums = (res[i][j])+ res[i-1][j-1] + (res[i-1][j]) 
            + (res[i-1][j+1]) + (res[i][j+1]) + (res[i+1][j+1]) 
            + (res[i+1][j]) + (res[i+1][j-1]) + (res[i][j-1]);
            res2.push(Math.floor(sums/9));
        }
        console.log(res2.join(' '));
        res2 = [];
    }
}

readline.on('line', (value) => {
    inputNM(value);
    if (t == 0)
    {   
        solve();
        readline.close();
    }
    t--;
});