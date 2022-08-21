// Given a linked list, find the middle element with constant space complexity

// Recursive approach - Linear time
function findMiddleElm(list) {
    let length = 0;

    function iterate(node, position) {
        if(node) {
            this.length++;
            let mid = iterate(node.next, position+1);
            if(mid) {
                return mid;
            }
            else if(Math.ceil(length/2) == position) {
                return node.data;
            }
        }
    }
    return iterate(list, 0);
}

// Two pointers - n/2 time
function findMiddleElm2(list) {
    let slowCursor, fastCursor;

    slowCursor = list;
    fastCursor = list;

    while(fastCursor != null) {
        if(fastCursor.next) {
            fastCursor = fastCursor.next.next;
            slowCursor = slowCursor.next;
        }
        else {
            break;
        }
    }
    return slowCursor.data;
}
