readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

class Stack {
    constructor() {
        this.stack = [];
    }
  
    push(item) {
        return this.stack.push(item);
    }
  
    pop() {
        return this.stack.pop();
    }
  
    peek() {
        return this.stack[this.length - 1];
    }
  
    get length() {
        return this.stack.length;
    }
  
    isEmpty() {
        return this.length === 0;
    }
}

var value = [];
var res = [];

function matching(st,a) {
    return (st.peek() == '(' && a == ')') || (st.peek() == '[' && a == ']') || (st.peek() == '{' && a == '}')
}
function isOpenBrackets(j) {
    if(value[0][j] == '(' || value[0][j] == '[' || value[0][j] == '{') {
        return true;
    }
    return false;
}
function matchingWithCloseBrackets(st,j) {
    let tempVar = value[0][j];
    if(matching(st,tempVar)) { //nếu tiếp sau ngoặc mở, là một cái ngoặc đóng đúng với nó, thì đúng, tiếp tục xét.
        st.pop();
        return true;
    }
    return false;
}
function solve() {
    let st = new Stack();
    for(let j = 0; j < value[0].length; j++) {
        if(isOpenBrackets(j)) {
            st.push(value[0][j]);
        }
        else {
            if(st.isEmpty()) { //nếu không phải ngoặc mở, mà stack chưa có ngoặc nào => đây là ngoặc đầu tiên trong 1 subarray, và nó là ngoặc đóng => loại
                return false;
            }
            if(!matchingWithCloseBrackets(st,j)) {
                return false;
            }
        }
    }
    if(st.isEmpty()) {
        return true;
    }
    return false;
}


readline.on('line', (tempInput) => {
    if(tempInput == 'END') {
        for(let i = 0; i < res.length; i++) {
            console.log(res[i]);
        }
        readline.close();
    }
    else {
        value.push(tempInput.split(''));
        if(solve()) {
            res.push('TRUE');
        }
        else {
            res.push('FALSE');
        }
        value.shift();
        //console.log(res);
    }
})

