let list = {
    data: 5,
    next: {
        data: 10,
        next: {
            data: 15,
            next: {
                data: 20,
                next: null
            }
        }
    }
};

function reverse(list) {
    let head = list;

    console.log('before loop', head);
    // while(head.next) {
    //     console.log('in loop', head);
    //     let prevHead = head;
    //     head = head.next;
    //     head.next = prevHead;
    // }
    return head;
}

// Recursive approach
function reverse(list) {
    let newList = {};
    recursiveReverse(list, newList);
    return newList;
}

// 5 -> 10 -> 15 ->20


function recursiveReverse(currNode, newHead) {
    if(currNode.next) {
        let prevNode = recursiveReverse(currNode.next, newHead);
        prevNode.next = currNode;
        // return prevNode; // Check this
    }
    else {
        newHead = currNode;
        return newHead;
    }
    return currNode;
}

console.log(reverse(list));