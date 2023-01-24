// Mirror tree using recursion
// Working!

function mirrorTree(tree) {
    console.log(recursiveMirror(tree));
}

function recursiveMirror(node) {
    if(node) {
        recursiveMirror(node.leftChild);
        recursiveMirror(node.rightChild);
        let temp = node.leftChild;
        node.leftChild = node.rightChild;
        node.rightChild = temp;
        return node;
    }
}

let tree = {
    data: 5,
    leftChild: {
        data: 10,
        leftChild: {
            data: 15,
            leftChild: {
                data: 20,
                leftChild: null,
                rightChild: {
                    data: 12,
                    leftChild: {
                        data: 25,
                        leftChild: null,
                        rightChild: {
                            data: 33,
                            leftChild: null,
                            rightChild: null
                        }
                    },
                    rightChild: null
                }
            },
            rightChild: {
                data: 10,
                leftChild: null,
                leftChild: {
                    data: 12,
                    leftChild: null,
                    rightChild: {
                        data: 30,
                        leftChild: null,
                        rightChild: null
                    }
                }
            }
        }
    }
}

mirrorTree(tree)