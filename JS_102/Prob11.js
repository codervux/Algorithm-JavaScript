const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
var res = [];
var t = 5

function output() {
    for(let i = 0; i<5; i++) {
        console.log(res[i].toString().replace(/,/g ,' '));
    }
}19

readline.on('line', (value) => {
    res.push(value.split(' '));
    if (t == 1)
    {
        let n = Number(res[0]);
        let basicDamage = Number(res[2]);
        let bonusDamage = Number(res[3]);
        let lossEffectTime = Number(res[4]);
        let timeToLoss = [];
        let sogai = 0;
        let totalDamage = 0;

        for(let i = 0; i < n; i++) {
            if(i > 0) {
                for(let j = 0;j < timeToLoss.length;j++) {
                    //console.log(Number(res[1][i]) , timeToLoss[j])
                    if(Number(res[1][i]) - timeToLoss[j] > 0) {
                        sogai--;
                        timeToLoss.shift();
                        j--;
                    }
                }
            }
            totalDamage = totalDamage + basicDamage + sogai*bonusDamage;
            sogai ++;
            timeToLoss.push(Number(res[1][i])+lossEffectTime);//27.6,34.1
            //console.log(timeToLoss);
        }
        console.log(totalDamage);
        readline.close();
    }
    t--;
});