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

    while(head.next) {
        let prevHead = head;
        head = head.next;
        head.next = prevHead;
    }
    return head;
}

console.log(reverse(list));