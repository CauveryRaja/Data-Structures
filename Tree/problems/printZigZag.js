// Print tree in zig zag order

let tree = {
    data : 10,
    leftChild: {
        data: 4,
        leftChild: {
            data: 6,
            leftChild: {
                data: 10,
                leftChild: undefined,
                rightChild: undefined
            },
            rightChild: {
                data: 1,
                leftChild: undefined,
                rightChild: undefined
            }
        },
        rightChild: {
            data: 20,
            leftChild: {
                data: 5,
                leftChild: undefined,
                rightChild: undefined
            },
            rightChild: {
                data: 12,
                leftChild: undefined,
                rightChild: undefined
            }
        }
    },
    rightChild: {
        data: 40,
        leftChild: {
            data: 2,
            leftChild: {
                data: 80,
                leftChild: undefined,
                rightChild: undefined
            },
            rightChild: {
                data: 31,
                leftChild: undefined,
                rightChild: undefined
            }
        },
        rightChild: {
            data: 22,
            leftChild: {
                data: 50,
                leftChild: undefined,
                rightChild: undefined
            },
            rightChild: {
                data: 18,
                leftChild: undefined,
                rightChild: undefined
            }
        }
    }
}

// Should print - 10, 40, 4, 6, 20, 2, 22, 18, 50, 31, 80, 12, 5, 1, 10

function printTree(tree, n) {
    let level, stack, queue;
    level = 0;
    stack = [];
    queue = [tree];

    while(level < Math.ceil(Math.log2(n))) {
        if(level%2 == 0) {
            if(queue.length) {
                let currNode = queue.shift();
                console.log(currNode.data);
                stack.push(currNode.leftChild, currNode.rightChild);
            }
            else {
                level++;
            }
        }
        else {
            if(stack.length) {
                let currNode = stack.pop();
                console.log(currNode.data);
                queue.unshift(currNode.leftChild, currNode.rightChild);
            }
            else {
                level++;
            }
        }
    }
}
// Above logic is working

printTree(tree, 15);