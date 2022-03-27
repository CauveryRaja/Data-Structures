class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insert(data, position=this.length) {
        let node = new Node(data, null);
        if(this.head) {
            let count, currNode;
            count = 0;
            currNode = this.head;

            while(currNode != null) {
                if(count == position - 1) {
                    node.next = currNode.next;
                    currNode.next = node;
                    break;
                }
                count++;
                currNode = currNode.next;
            }

        }
        else {
            this.head = node;
        }
        this.length++;
    }
}

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

let list = new LinkedList();
list.insert(10);
list.insert(5);
list.insert(2);
list.insert(3, 1);
list.insert(15, 3);
console.log(list);