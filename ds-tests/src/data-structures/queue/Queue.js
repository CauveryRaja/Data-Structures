class Queue {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    enQueue(data) {
        const node = new Node(data, null);
        if(!this.head) {
            this.head = node;
            this.tail = this.head;
        }
        else {
            this.tail.next = node;
            this.tail = this.tail.next;
        }
        this.length++;
    }

    deQueue() {
        this.head = this.head.next;
        this.length--;
    }

    get(index) {
        if(index < this.length) {
            let count, currNode;
            count = 0;
            currNode = this.head;
            while(count != index) {
                count++;
                currNode = currNode.next
            }
            return currNode.data;
        }
    }
}

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

export default Queue;