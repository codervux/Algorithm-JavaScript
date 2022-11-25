readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
})

class linkedList {
    constructor() {
        this.List = [];
    }

    insertBack(data) {
        return this.List.push(data);
    }
    insertTop(data) {
        return this.List.unshift(data);
    }
    get length() {
        return this.List.length;
    }
}

var list = new linkedList();

readline.on('line', (tempInput) => {
    if(tempInput == '3') {
        console.log(list.List.join(' '));
        readline.close();
    }
    let tempArray = [];
    tempArray.push(tempInput.split(' '));
    if(tempArray[0][0] == 0)
        list.insertTop(tempArray[0][1]);
    else if(tempArray[0][0] == 1)
        list.insertBack(tempArray[0][1]);
})

// 1 1
// 1 9
// 0 8
// 1 0
// 1 8
// 1 7
// 1 2
// 0 5
// 3

// 1 9
// 1 6
// 0 4
// 0 8
// 1 9
// 3