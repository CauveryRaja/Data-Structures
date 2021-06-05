class LinkedList {
    constructor() {
        this.root = null;
        this.length = 0;
    }

    insert(data, index) {
        let node = new Node(data, null);
        if(!this.root) {
            this.root = node;
        }
        else {

        }
        this.length++;
    }
}

class Node {
    constructor(data, node) {
        this.data = data;
        this.next = node;
    }
}

export default LinkedList;