function getMidElement(list) {
    let slowCursor = list;
    let fastCursor = list;

    while(fastCursor && fastCursor.next) {
        console.log(slowCursor.data, fastCursor.data);
        slowCursor = slowCursor.next;
        fastCursor = fastCursor.next.next;
    }

    return slowCursor.data
}

const list = {
    data: 3,
    next: {
        data: 1,
        next: {
            data: 7,
            next: {
                data: 2,
                next: {
                    data: 5,
                    next: {
                        data: 4,
                        next: null
                    }
                }
            }
        }
    }
}

console.log(getMidElement(list));