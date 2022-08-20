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

// Working implementation
function reverse(head) {
    let nextNode = head.next;
    head.next = null;

    while(nextNode != null) {
        let temp = nextNode.next;
        nextNode.next = head;
        head = nextNode;
        nextNode = temp;
    }

    return head;
}
reverse(list);