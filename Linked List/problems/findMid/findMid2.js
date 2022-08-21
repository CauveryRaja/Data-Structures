// Find midpoint of linked list in constant time & space
let list = {
    data: 5,
    next: {
        data: 10,
        next: {
            data: 15,
            next: {
                data: 20,
                next: {
                    data: 25,
                    next: {
                        data: 30,
                        next: {
                            data: 35,
                            next: null
                        }
                    }
                }
            }
        }
    }
};

function findMid(list) {
    let slowCursor, fastCursor;
    slowCursor = list;
    fastCursor = list;

    while(fastCursor && fastCursor.next) {
        slowCursor = slowCursor.next;
        fastCursor = fastCursor.next.next;
    }
    return slowCursor;
}

console.log(findMid(list));