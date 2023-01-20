// function flattenList(list) {
//     let currNode = list;
//     while(currNode.rightNext) {
//         if(currNode.downNext) {
//             let temp = currNode.rightNext;
//             let subNode = currNode.downNext;
//             while(subNode.downNext) {
//                 subNode.next = subNode.downNext;
//                 delete subNode.downNext;
//                 subNode = subNode.next;
//             }
//             subNode.next = temp;
//             subNode.rightNext = subNode.downNext = undefined;
//             delete subNode.rightNext;
//             delete subNode.downNext;

//             currNode.next = currNode.downNext;
//         }
//         else {
//             currNode.next = currNode.rightNext;
//         }

//         delete currNode.rightNext;
//         delete currNode.downNext;
//     }
//     return list;
// }

const nestedList = {
    data: 3,
    rightNext: {
        data: 1,
        rightNext: {
            data: 7,
            rightNext: {
                data: 2,
                rightNext: {
                    data: 5,
                    rightNext: {
                        data: 4,
                        rightNext: null
                    }
                }
            }
        }
    },
    downNext: {
        data: 10,
        downNext: {
            data: 8
        }
    }
}

// console.log(flattenList(nestedList));

function flattenList(nestedList) {
    let arr = [];

    recursiveFlatten(nestedList);

    arr.sort((obj1, obj2) => obj1.data - obj2.data)

    console.log(arr);

    // Convert this array to a Linked list

    function recursiveFlatten(node) {
        if(node) {
            arr.push({
                data: node.data,
                next: null
            });
            if(node.downNext) {
                recursiveFlatten(node.downNext);
            }
            if(node.rightNext) {
                recursiveFlatten(node.rightNext);
            }
        }
    }
}

flattenList(nestedList);