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

function reverse(list) {
    recursiveReverse(list);
}

function recursiveReverse(currNode) {
    if(currNode.next) {
        let prevNode = recursiveReverse(currNode.next);
        prevNode.next = currNode;
        return prevNode; // Check this
    }
    return currNode;
}

console.log(reverse(list));