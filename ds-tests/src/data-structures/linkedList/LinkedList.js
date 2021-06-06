class LinkedList {
    constructor() {
        this.root = null;
        this.length = 0;
    }

    insert(data, index=this.length) {
        let node = new Node(data, null);
        if(!this.root) {
            this.root = node;
        }
        else {
            let currNode, count;
            currNode = this.root;
            count = 0;
            while(count < index-1) {
                currNode = currNode.next;
                count++;
            }
            node.next = currNode.next;
            currNode.next = node;
        }
        this.length++;
    }

    delete(data) {
        if(this.root.data == data) {
            this.root = this.root.next;
        }
        else {
            let currNode = this.root;
            while(currNode.next.data != data) {
                currNode = currNode.next;
            }
            currNode.next = currNode.next.next;
        }
        this.length--;
    }

    get(index) {
        let currNode, count;
        currNode = this.root;
        count = 0;
        while(count < index) {
            currNode = currNode.next;
            count++;
        }
        return currNode.data;
    }

    indexOf(data) {
        let currNode, count;
        currNode = this.root;
        count = 0;
        while(currNode != null) {
            if(currNode.data == data) {
                return count;
            }
            currNode = currNode.next;
            count++;
        }
        return -1;
    }
}

class Node {
    constructor(data, node) {
        this.data = data;
        this.next = node;
    }
}

export default LinkedList;