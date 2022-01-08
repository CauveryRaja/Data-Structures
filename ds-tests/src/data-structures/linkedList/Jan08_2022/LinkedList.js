class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insert(elm) {
        let node = new Node(elm, null);
        if(!this.head) {
            this.head = node;
        }
        else {
            let currNode = this.head;
            while(currNode.next != null) {
                currNode = currNode.next;
            }
            currNode.next = node;
        }
        this.length++;
    }

    get(index) {
        let currNode = this.head, currIndex = 0;
        while(currNode != null) {
            if(currIndex === index) {
                return currNode.data;
            }
            currNode = currNode.next;
            currIndex++;
        }
    }

    delete(data) {
        if(this.head.data === data) {
            this.head = this.head.next;
        }
        else {
            let currNode = this.head;
            while(currNode.next.data != data) {
                currNode = currNode.next;
            }
            currNode.next = currNode.next.next;
        }
        this.length--;
    }
}

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

export default LinkedList;