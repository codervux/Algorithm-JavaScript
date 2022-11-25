const { checkPrime } = require('crypto');
const { start } = require('repl');

readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout,
})
var value = [];
var m = 0;
var step = [[-1,-1], [-1,0], [-1,1], [0,1],
[1,1], [1,0], [1,-1], [0,-1]]
var t,n,start_m,start_n, final_m,final_n;

function inputMN(tempInput) {
    value.push(tempInput.split(' ').map(Number));
    if(m == 0) {
        m = value[0][0];
        n = value[0][1];
        start_m = value[0][2];
        start_n = value[0][3];
        final_m = value[0][4];
        final_n = value[0][5];
        value.shift();
        t = m;
    }
}
class node {
    constructor(item) {
        this.data = item;
        this.count = 0;
        this.isGone = 0;
        this.m = 0;
        this.n = 0;
    }
}
class pair {
    constructor(m,n) {
        this.m = m;
        this.n = n;
    }
}
class queue {
    constructor() {
        this.queue = [];
    }
    pushQ(item) {
        return this.queue.push(item);
    }
    popQ() {
        return this.queue.shift();
    }
    front() {
        return this.queue[0];
    }
    get length() {
        return this.queue.length;
    }
    isEmpty() {
        return this.queue.length === 0;
    }
}
/**
0  1  2  3  4  5  6
7  8  9  10 11 12 13
14 15 16 17 18 19 20
21 22 23 24 25 26 27
 */
/**
 * B1: Bắt đầu từ start(1,1) (ô số 8)
 * B2: Lan ra 8 ô xung quanh ( thông qua mảng step, thêm các giá trị vào queue) (8-> 0 -> 1 -> 2 -> 9 -> 16 -> 15 -> 14 -> 7)
 * Điều kiện: ô đang xét  có gtri isGone == 0, ô đang xét nằm trong map (cần 1 hàm xét), và có this.data == 0(đi được)
 * Nếu ô đó có isGone == 1 thì bỏ qua, 
 * B3: Đánh dấu ô start(x,y) là 1 (= đã đi tới) và đêm nó = 0
 * B4: ( add lần lượt 8 ô vào queue,) (0 -> 1 -> 2 -> 9 -> 16 -> 15 -> 14 -> 7) tiếp tục từ 8 ô xung quanh
 * Mỗi lần thêm, thay đổi giá trị biến this.count = start.count + 1 và isGone = 1
 * B5: add xong 8 ô, bỏ ô mẹ của 8 ô vừa lan khỏi queue (.pop)
 * B6: lặp lại cho tới khi tìm được hoặc queue rỗng
 */
function checkValid(nextPos) {
    return (nextPos.m >=0 && nextPos.m < m) &&
    (nextPos.n >=0 && nextPos.n < n) &&
    (value[nextPos.m][nextPos.n] == 0)
    //
}
function findMin() {
    let pos = new queue();
    pos.pushQ(value[start_m][start_n]);
    pos.front().m = start_m;
    pos.front().n = start_n;
    pos.front().isGone = 1;

    while(!pos.isEmpty()) {
        console.log(1234)
        let curNode = pos.front();
        pos.popQ();
        if(curNode.m == final_m && curNode.n == final_n) {
            return curNode.count;
        }
        for(let i = 0; i < 8; i++) {
            let nextPos = new pair(curNode.m + step[i][0], curNode.n + step[i][1])
            if(checkValid(nextPos)) {
                let tempNode = new node(value[nextPos.m][nextPos.n]);
                tempNode.count = curNode.count + 1;
                tempNode.isGone = 1;
                tempNode.m = nextPos.m;
                tempNode.n = nextPos.n;
                pos.pushQ(tempNode);
            }
        }
    }
    return -1;
}
readline.on('line', (tempInput) => {
    inputMN(tempInput);
    if(t==0) {
        console.log(findMin());
        readline.close();
    }
    t--;
})


/**
0  1  2  3  4  5  6
7  8  9  10 11 12 13
14 15 16 17 18 19 20
21 22 23 24 25 26 27
 */

/**
 * B1: Bắt đầu từ start(1,1) (ô số 8)
 * B2: Lan ra 8 ô xung quanh ( thông qua mảng step, thêm các giá trị vào queue) (8-> 0 -> 1 -> 2 -> 9 -> 16 -> 15 -> 14 -> 7)
 * Điều kiện: ô đang xét  có gtri isGone == 0, ô đang xét nằm trong map (cần 1 hàm xét), và có this.data == 0(đi được)
 * Nếu ô đó có isGone == 1 thì bỏ qua, 
 * B3: Đánh dấu ô start(x,y) là 1 (= đã đi tới) và đêm nó = 0
 * B4: ( add lần lượt 8 ô vào queue,) (0 -> 1 -> 2 -> 9 -> 16 -> 15 -> 14 -> 7) tiếp tục từ 8 ô xung quanh
 * Mỗi lần thêm, thay đổi giá trị biến this.count = start.count + 1 và isGone = 1
 * B5: add xong 8 ô, bỏ ô mẹ của 8 ô vừa lan khỏi queue (.pop)
 * B6: lặp lại cho tới khi tìm được hoặc queue rỗng
 */