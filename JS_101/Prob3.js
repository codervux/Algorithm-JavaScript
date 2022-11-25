const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


var td = [];
var index = [];
var values = [];

function solve(a,n,tiendu) {
    if(Number(tiendu) == 0) {
        return 1;
    }
    if(Number(tiendu) < 0 || Number(n) == 0) {
        return 0;
    }
    //KTRA ton tai (n,tiendu)
    for(var i=0;i<td.length;i++) {
        if(Number(n) == Number(index[i]) && Number(tiendu) == Number(td[i])) {
            return values[i];
        }
    }

    var res = Number(solve(a,n,Number(tiendu) - a[n-1])) + Number(solve(a,n-1,tiendu));//sau khi tinsh ra 
    //res dau tien, thi push vao, cu the push het cac gia tri;
    td.push(tiendu);
    index.push(n);
    values.push(res);
    return res;
}

var v = 0;
var mini = 0;
function minn(a,n,tiendu,nhanh,demnode) {
    if(v==1) {
        return 0;
    }
    if(nhanh == 1) {
        demnode ++;
    }
    if(Number(tiendu) == 0) {
        mini += demnode;
        v++;
        return 0;
    }
    if(Number(tiendu) < 0 || Number(n) == 0) {
        return 0;
    }
    return Number(solve(a,n-1,tiendu,-1,demnode)) + Number(solve(a,n,Number(tiendu) - a[n-1],1,demnode));
}

readline.question('', values => { 
    var tiendu = Number(values);
    var t = minn(a,5,tiendu,0,0);
    var a = [500000,200000,100000,50000,20000];
    console.log(solve(a,5,tiendu));
    readline.close()
})