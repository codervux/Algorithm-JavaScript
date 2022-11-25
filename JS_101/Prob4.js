const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('', values => {
    var result = '';
    var dem = 0;
    var n = Number(values);
    while( n!= 1)
    {    
        if( n % 2 == 0) {
            n /=2;
            dem++;
            result += n + ' ';           
        }
        else {
            n *= 3;
            n += 1;
            dem++;
            result += n + ' ';
        }
    }
    console.log(result);
    console.log(dem);
    readline.close();
})