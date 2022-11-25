const readline = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout,
});

var value = [];
var n = 0;
var t = 0;
var tempArray = [];
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
/**
 * A b e f a d c + -
 * for (kiểm tra từng phần tử có thuộc bảng chữ cái) {
 *
 * if (value[i] thuoc alphabet) { 
 * if(nếu phần tử đang xét đã tồn tại trong tempArray) { không làm gì cả}
 * else {
 * tempArray.push(phần tử đang xét);
 * missing--;
 * }}}
 */
function checkExistAlphabet(x) {
    for(let index = 0; index < 26; index++) {
        if(x == alphabet[index]) {
            return true;
        }
    }
    return false;
}
function checkTempArray(x) {
    for(let index = 0; index < tempArray.length; index++) {
        if(x == tempArray[index]) {
            return true;
        }
    }
    return false;
}
function solve() {
    let missing = 26;
    for(let i = 0; i < n; i++) {
        if(checkExistAlphabet(value[i])) { //if true
            if(checkTempArray(value[i])) { //if true
                continue;
            }
            else {
                tempArray.push(value[i]);
                missing--;
            }
        }
    }
    return missing;
}
readline.on('line',(tempInput) => {
    value.push(tempInput);
    if( n == 0 ) {
        n = value[0];
        t = n;
        value.shift();
    }
    if(t == 0) {
        value = value.toString().toLowerCase().split(',');
        console.log(solve());
        readline.close();
    }
    t--;
})