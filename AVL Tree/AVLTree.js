class AVLTree  {
    constructor() {
        this.root = undefined;
    }

    insert(data) {
        data = parseInt(data);
        this.root = this.insertRecursive(this.root, new TreeNode(data));
    }

    insertRecursive(currNode, newNode) {
        if(!currNode)
            return newNode;
        if(newNode.data < currNode.data) {
            currNode.leftChild = this.insertRecursive(currNode.leftChild, newNode);
        }
        else {
            currNode.rightChild = this.insertRecursive(currNode.rightChild, newNode);
        }
        this.update(currNode);
        return this.balance(currNode);
    }

    update(node) {
        let lh, rh;
        lh=rh=-1;
        if(node.leftChild)
            lh = node.leftChild.height;
        if(node.rightChild)
            rh = node.rightChild.height;
        node.height = 1 + Math.max(lh, rh);
        node.balanceFactor = rh-lh;
    }

    balance(node) {
        if(node.balanceFactor <= -2) {
            if(node.leftChild.balanceFactor <=0) {
                return this.leftLeftRotate(node)
            }
            else {
                return this.leftRightRotate(node)
            }
        }
        else if(node.balanceFactor >= 2) {
            if(node.rightChild.balanceFactor >= 0) {
                return this.rightRightRotate(node);
            }
            else {
                return this.rightLeftRotate(node);
            }
        }
        return node;
    }

    leftLeftRotate(node) {
        return this.rightRotate(node);
    }

    leftRightRotate(node) {
        node.leftChild = this.leftRotate(node.leftChild);
        return this.rightRotate(node);
    }

    rightRightRotate(node) {
        return this.leftRotate(node.rightChild);
    }

    rightLeftRotate(node) {
        node.rightChild = this.rightRotate(node.rightChild);
        return this.leftRotate(node);
    }

    rightRotate(node) {
        let parent = node.leftChild;
        node.leftChild = parent.rightChild;
        parent.rightChild = node;
        this.update(node);
        this.update(parent);
        return this.balance(parent);
    }

    leftRotate(node) {
        let parent = node.rightChild;
        node.rightChild = parent.leftChild;
        parent.leftChild = node;
        this.update(node);
        this.update(parent);
        return this.balance(parent);
    }
}

class TreeNode {
    constructor(data, lChild, rChild) {
        this.data = data;
        this.leftChild = lChild;
        this.rightChild = rChild;
        this.height = 0;
        this.balanceFactor = 0;
    }
}

let avlTree = new AVLTree();
