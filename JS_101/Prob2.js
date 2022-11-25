const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
function chekc_nt(x) {
    for(var i=2;i< Number(x) - 1;i++) {
        if(Number(x) % i == 0) {
            return 0;
        }
    }
    return 1;
}
readline.question('', values => { 
    var x = Number(values);
    var socach = 0;
    for(var i=2; i < x/2+1; i++) {
        if(Number(chekc_nt(i)) == 0) {
            continue;
        }
        if(chekc_nt(x - i)) {
            socach ++;
        }
    }
    console.log(socach);
    readline.close()
})