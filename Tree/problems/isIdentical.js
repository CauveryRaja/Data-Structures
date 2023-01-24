// Check if two trees are identical
// Working!

function isIdentical(tree1, tree2) {
    console.log('Is Identical', dfs(tree1, tree2));
}

function dfs(node1, node2) {
    if(node1 && node2) {
        if(node1.data === node2.data) {
            const sameLeft = dfs(node1.leftChild, node2.leftChild);
            const sameRight = dfs(node1.rightChild, node2.rightChild);
            return sameLeft && sameRight ? true : false;
        }
    }
    else if(!node1 && !node2) {
        return true;
    }
    return false;
}

let tree1 = {
    data: 5,
    leftChild: {
        data: 10,
        leftChild: {
            data: 15,
            leftChild: null,
            rightChild: {
                data: 20,
                leftChild: null,
                rightChild: null
            }
        }
    }
}

let tree2 = {
    data: 5,
    leftChild: {
        data: 10,
        leftChild: {
            data: 15,
            leftChild: null,
            rightChild: {
                data: 20,
                leftChild: null,
                rightChild: null
            }
        }
    }
}

isIdentical(tree1, tree2)