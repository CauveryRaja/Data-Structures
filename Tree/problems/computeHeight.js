// This won't work
// function computeHeight(tree) {
//     let nodes = 0;

//     function traverse(node) {
//         if(node) {
//             nodes++;
//             console.log('data', node.data, 'count', nodes)
//             traverse(node.leftChild);
//             traverse(node.rightChild);
//         }
//     }

//     traverse(tree);

//     console.log('length', nodes)

//     return Math.round(Math.log(nodes));
// }


// Working!
// Using DFS
function printHeight(tree) {
    console.log(dfs(tree));
}

function dfs(node) {
    if(node) {
        const leftHeight = 1 + dfs(node.leftChild);
        const rightHeight = 1 + dfs(node.rightChild);
        return Math.max(leftHeight, rightHeight);
    }
    return -1;
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
                data: 20,
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

printHeight(tree);