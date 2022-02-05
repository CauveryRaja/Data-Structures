class BinarySearchTree {

    constructor() {
        this.tree = undefined;
        this.length = 0;
    }

    insert(data) {
        
        this.length++;
    }
};

class Node {
    constructor(data) {
        this.data = data;
        this.leftChild = undefined;
        this.rightChild = undefined;
    }
}

export default BinarySearchTree;