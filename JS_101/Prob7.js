const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

var values =[];
var res=[];
function ktra_luythuy(x) {
    if( x == 1) {
        return 1;
    }
    for(var i=2; i <= Math.sqrt(x); i++) {
        for(var j=1; i**j <= x; j++) {
            if( i**j == x) {
                return 1;
            }
        }
    }
    return 0;
}

rl.on('line', (input) => {//1=0 2=0 3=0
    if(Number(input)==0) {
        rl.pause();
        while(values.length != 0) {
            if(ktra_luythuy(values[0]) == 1) {
                res.push(1);
            }
            else {
                res.push(0);
            }
            values.shift();
        }
        while(res.length) {
            console.log(res[0]);
            res.shift();
        }
        rl.close();
    }
    values.push(Number(input));
});