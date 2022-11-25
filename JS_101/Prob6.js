const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

function UCLN(x,y) {
    // if(x==0 || y==0) {
    //     return x+y;
    // }
    // if(x%y!=0) {
    //     return UCLN(y,x%y);
    // }
    // return y;
    if (x == 0 || y == 0) {
        return x + y;
      }
      while (x != y) {
        if (x > y) {
          x = x - y;
        } else {
          y = y - x;
        }
      }
      return x;
}

readline.question('', tongtime => {
    var v1 = tongtime.split(' ');
    var h1 = Number(v1[0]);
    var m1 = Number(v1[1]);
    var s1 = Number(v1[2]);

    readline.question('',daxem => {
        var v2 = daxem.split(' ');
        var h2 = Number(v2[0]);
        var m2 = Number(v2[1]);
        var s2 = Number(v2[2]);

        var totals = s1 + 60*m1 + 3600*h1;
        var sdaxem = s2 + 60*m2 + 3600*h2;
        var ucln = UCLN(sdaxem, totals);

        var tu = sdaxem/ucln;
        var mau = totals/ucln;
        console.log(tu + ' ' + mau);
        readline.close();
    })
})