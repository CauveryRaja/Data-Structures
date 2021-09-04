class Stack {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push(data) {
        if(!this.head) {
            this.head = new Node(data, null);
            this.tail = this.head;
        }
        else {
            this.tail.next = new Node(data, null);
            this.tail = this.tail.next;
        }
        this.length++;
    }

    pop() {
        let currNode = this.head;
        while(currNode.next.next != null) {
            currNode = currNode.next;
        }
        currNode.next = null;
        this.length--;
        return this.tail.data;
    }

    peek(index) {
        let currIndex = 0, currNode = this.head;
        while(currIndex !== index && currNode) {
            currIndex++;
            currNode = currNode.next;
        }
        return currNode ? currNode.data: undefined;
    }
};

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

export default Stack;