readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class binarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(data) {
        var newNode = new Node(data);
        if(this.root === null) 
            this.root = newNode;
        else
            this.checkToInsert(this.root, newNode);
    }

    checkToInsert(node, newNode) {
        if(newNode.data < node.data) {
            if(node.left === null)
                node.left = newNode;
            else
                this.checkToInsert(node.left, newNode);
        }
        else {
            if(node.right === null) 
                node.right = newNode;
            else
                this.checkToInsert(node.right, newNode);
        }
    }

    getCountLeaf(node) {
        if(node === null) {
            return 0;
        }
        else if(node.left === null && node.right === null) {
            return 1;
        }
        else {
            return this.getCountLeaf(node.left) + this.getCountLeaf(node.right)
        }
    }
    get countLeaf () {
        return this.getCountLeaf(this.root);
    }
}
var BST = new binarySearchTree();
readline.on('line', (tempInput) => {
    if(tempInput == 0) {
        let leaf = BST.countLeaf;
        console.log(leaf);
        readline.close();
    }
    BST.insert(Number(tempInput));
})
// 393
// 981
// 841
// 133
// 891
// 739
// 663
// 119
// 497
// 865
// 54
// 631
// 561
// 51
// 227
// 841
// 352
// 996
// 505