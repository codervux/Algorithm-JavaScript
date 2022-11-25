readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

var carLeft = [];
var carRight = [];
var t = 0;
var l = 0;
var m = 0;   
var count = 0;


function inputLM(tempInput) {
    carLeft.push(tempInput.split(' '));
    if(l == 0) {
        l = Number(carLeft[0][0]);
        m = Number(carLeft[0][1]);
        carLeft.shift();
        t = m;
    }
}
function backToLeft() {
    for(let i = 0; i < carRight.length; i++) {
        if(carRight[i][2] == 'left') {
            carLeft.push(carRight[i]);
            carRight.splice(i,1);
            i--;
        }
    }
}
function crossRiver_From_Left() {
    let lengthBoat = l * 100;
    while(carLeft.length > 0) {
        if(lengthBoat - Number(carLeft[0][0]) >= 0 ) {
            lengthBoat -= Number(carLeft[0][0]);
            carLeft.shift();
        }
        else {
            break;
        }
    }
    count++;
}
function crossRiver_From_Right() {
    let lengthBoat = l * 100;
    while(carRight.length > 0) {
        if(lengthBoat - Number(carRight[0][0]) >= 0) {
            lengthBoat -= Number(carRight[0][0]);
            carRight.shift();
        }
        else {
            break;
        }
    }
    count++;
}
function sort_To_Right_With_Index_and_Priority() {
    for(let i = 0; i < carLeft.length; i++){
        if(carLeft[i][1] == 'ambulance') {
            carRight.push(carLeft[i]);
            carLeft.splice(i,1); //ton thgian
            i--; //sau khi bỏ 1 dòng, dòng dưới sẽ đẩy lên, nếu i++ sẽ bỏ qua dòng vừa bị đẩy. 
        }
    }

    for(let i = 0; i < carLeft.length; i++){
        if(carLeft[i][1] == 'fire') {
            carRight.push(carLeft[i]);
            carLeft.splice(i,1); //ton thgian
            i--;
        }
    }

    for(let i = 0; i < carLeft.length; i++){
        if(carLeft[i][1] == 'army') {
            carRight.push(carLeft[i]);
            carLeft.splice(i,1); //ton thgian
            i--;
        }
    }

    for(let i = 0; i < carLeft.length; i++){
        if(carLeft[i][1] == 'police') {
            carRight.push(carLeft[i]);
            carLeft.splice(i,1); //ton thgian
            i--;
        }
    }
    
    for(let i = 0; i < carLeft.length; i++){
        if(carLeft[i][1] == 'civilian') {
            carRight.push(carLeft[i]);
            carLeft.splice(i,1); //ton thgian
            i--; 
        }
    }
}
function solve() {
    sort_To_Right_With_Index_and_Priority();
    backToLeft();
    while( !(carLeft.length == 0 && carRight.length == 0) ) {
        crossRiver_From_Left();
        if(carLeft.length == 0 && carRight.length == 0){break}
        crossRiver_From_Right();
    }
}
readline.on('line', (tempInput) => {
    inputLM(tempInput);
    if(t==0) {
        solve();
        console.log(count);
        readline.close();
    }
    t--;
})

/**
20 5
380 army left
720 civilian left
1340 army right
1040 civilian left
120 police right
 */

//sau khi sort, khi chia qua 2 bên chỉ cần lưu lại giá trị chiều dài. giảm bộ nhớ
// 15 4
// 380 fire left
// 720 police left
// 1340 fire right
// 1040 fire left
// 15 4
// 380 fire left
// 720 army left
// 1340 police left
// 1040 army left