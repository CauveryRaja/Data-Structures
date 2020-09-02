class AVLTree  {
    constructor() {
        this.root = undefined;
    }

    /**
     * Method called to insert data
     * @param {*} data Data element to be inserted
     */
    insert(data) {
        data = parseInt(data);
        this.root = this.insertNode(this.root, new TreeNode(data));
        this.displayTree();
    }

    /**
     * Method that inserts data by recursively traversing down the tree
     * @param {*} currNode Node to start traversal
     * @param {*} newNode New node with given data
     */
    insertNode(currNode, newNode) {
        if(!currNode)
            return newNode;
        if(newNode.data < currNode.data) {
            currNode.leftChild = this.insertNode(currNode.leftChild, newNode);
        }
        else {
            currNode.rightChild = this.insertNode(currNode.rightChild, newNode);
        }
        this.update(currNode);
        return this.balance(currNode);
    }

    /**
     * Mathod called to remove data
     * @param {*} data Data to be removed
     */
    remove(data) {
        data = parseInt(data);
        this.root = this.removeNode(this.root, data);
        console.log(this.root);
        this.displayTree();
    }

    /**
     * Removes node by recursive approach
     * @param {*} node Node to start traversal
     * @param {*} data Data to be removed
     */
    removeNode(node, data) {
        if(node == null) {
            return null;
        }
        else if(data < node.data) {
            node.leftChild = this.removeNode(node.leftChild, data);
        }
        else if(data > node.data) {
            node.rightChild = this.removeNode(node.rightChild, data);
        }
        else {
            if(!node.leftChild && !node.rightChild) {
                return null;
            }
            else if(node.leftChild && !node.rightChild) {
                return node.leftChild;
            }
            else if(!node.leftChild && node.rightChild) {
                return node.rightChild;
            }
            else {
                let rightMostNode = this.findRightMostNode(node.leftChild);
                node.data = rightMostNode.data;
                node.leftChild = this.removeNode(node.leftChild, node.data);
            }
        }
        return node;
    }

    /**
     * Returns Right most node of given Node
     * @param {*} node Node to begin traversal 
     */
    findRightMostNode(node) {
        if(node.rightChild) {
            return this.findRightMostNode(node.rightChild);
        }
        else  {
            return node;
        }
    }

    /**
     * Updated Height and Balance Factor of given node
     * @param {*} node Source node to be updated
     */
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

    /**
     * Performs Rotations to balance given node
     * @param {*} node Source node to be balanced
     */
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

    /**
     * Rotates Left heavy tree to the Right
     * @param {*} node Source node to be rotated
     */
    leftLeftRotate(node) {
        return this.rightRotate(node);
    }

    /**
     * Rotates Left to Right tree
     * @param {*} node Source node to be rotated
     */
    leftRightRotate(node) {
        node.leftChild = this.leftRotate(node.leftChild);
        return this.rightRotate(node);
    }

    /**
     * Rotates Right heavy tree to the Left
     * @param {*} node Source node to be rotated
     */
    rightRightRotate(node) {
        return this.leftRotate(node.rightChild);
    }

    /**
     * Rotates Right to Left tree
     * @param {*} node Source node to be rotated
     */
    rightLeftRotate(node) {
        node.rightChild = this.rightRotate(node.rightChild);
        return this.leftRotate(node);
    }

    /**
     * Rotates given node to the Right
     * @param {*} node Source node to be rotated
     */
    rightRotate(node) {
        let parent = node.leftChild;
        node.leftChild = parent.rightChild;
        parent.rightChild = node;
        this.update(node);
        this.update(parent);
        return this.balance(parent);
    }

    /**
     * Rotates given node to the Left
     * @param {*} node Source node to be rotated
     */
    leftRotate(node) {
        let parent = node.rightChild;
        node.rightChild = parent.leftChild;
        parent.leftChild = node;
        this.update(node);
        this.update(parent);
        return this.balance(parent);
    }

    /**
     * Prints data elements in PreOrder 
     * @param {*} node Source node to be traversed
     */
    traversePreOrder(node) {
        if(node) {
            console.log(node.data);
            this.traversePreOrder(node.leftChild);
            this.traversePreOrder(node.rightChild);
        }
    }

    /**
     * Prints data elements in In Order (Ascending Order)
     * @param {*} node Source node to be traversed
     */
    traverseInOrder(node) {
        if(node) {
            this.traverseInOrder(node.leftChild);
            console.log(node.data);
            this.traverseInOrder(node.rightChild);
        }
    }

    /**
     * Prints data elements in PostOrder
     * @param {*} node Source node to be traversed
     */
    traversePostOrder(node) {
        if(node) {
            this.traversePostOrder(node.leftChild);
            this.traversePostOrder(node.rightChild);
            console.log(node.data);
        }
    }

    displayTree() {
        document.getElementById('AVLTree').textContent = JSON.stringify(this.root);
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