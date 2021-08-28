class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    /**
     * Inserts element into given Index
     * @param {*} element Element to be inserted
     * @param {*} index Index where the given element has to be inserted
     */
    add(element, index=this.length) {
        const elmNode = new Node(element, null);
        if(!this.head) {
            this.head = elmNode;
        }
        else {
            let currNode = this.head;
            let currIndex = 0;
            if(index === 0) {
                elmNode.next = this.head;
                this.head = elmNode;
            }
            else {    
                while(currIndex !== index-1) {
                    currNode = currNode.next;
                    currIndex++;
                }
                elmNode.next = currNode.next;
                currNode.next = elmNode;
            }
        }
        this.length++;
    }

    /**
     * Delete given element from the list
     * @param {*} element Element to be deleted
     */
    delete(element) {
        let currNode = this.head;
        if(currNode.data === element) {
            this.head = this.head.next;
        }
        else {
            while(currNode.next !== null) {
                if(currNode.next.data === element) {
                    currNode.next = currNode.next.next;
                    break;
                }
                else {
                    currNode = currNode.next;
                }
            }
        }
        this.length--;
    }

    /**
     * Returns element present at given Index
     * @param {*} index Position of the element to be fetched
     */
    get(index) {
        let count = 0;
        let currNode = this.head;
        while(count !== index) {
            currNode = currNode.next;
            count++;
        }
        return currNode.data;
    }
}

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

export default LinkedList;