const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function DAO(str) {
    var a = str.split('');
    var b = a.reverse();
    var c = b.join('');
    return c;
}

readline.question('', a => {
    var b = DAO(a);
    var result = '';
    var c = a;
    while(1) {
        if(a == b) {
            var result2 = DAO(result);
            console.log(result2);
            break;
        }
        else {
            result = result + a[0];
            a = a.slice(1);
            b = b.slice(0,-1);
        }
    }
    readline.close();
})