class BinarySearchTree {

    constructor() {
        this.tree = undefined;
    }

    insert(data) {
        let node = new Node(data);
        if(!this.tree) {
            this.tree = node;
        }
        else {
           this.insertByTraversing(this.tree, node);
        }
    }

    insertByTraversing(parent, node) {
        let insertAs = node.data < parent.data ? 'leftChild' : 'rightChild';
        if(!parent[insertAs]) {
            parent[insertAs] = node;
        }
        else {
            this.insertByTraversing(parent[insertAs], node);
        }
    }

    traverse(order) {
        let arr = [];
        switch(order) {
            case 'preorder': this.traversePreorder(this.tree, arr); 
                            break;
            case 'postorder': this.traversePostorder(this.tree, arr); 
                            break;
            case 'inorder':
            default: this.traverseInorder(this.tree, arr);
        }
        console.log(`${order} nodes`, arr);
    }

    traverseInorder(currNode, arr) {
        if(currNode) {
            this.traverseInorder(currNode.leftChild, arr);
            arr.push(currNode.data);
            this.traverseInorder(currNode.rightChild, arr);
        }
    }

    traversePreorder(currNode, arr) {
        if(currNode) {
            arr.push(currNode.data);
            this.traversePreorder(currNode.leftChild, arr);
            this.traversePreorder(currNode.rightChild, arr);
        }
    }

    traversePostorder(currNode, arr) {
        if(currNode) {
            this.traversePostorder(currNode.leftChild, arr);
            this.traversePostorder(currNode.rightChild, arr);
            arr.push(currNode.data);
        }
    }

    delete(data) {
        this.deleteByTraversing(this.tree, data);
    }

    deleteByTraversing(parent, data) {
        if(parent.leftChild.data === data || parent.rightChild.data === data) {
            let deleteAt = data === parent.leftChild.data ? 'leftChild' : 'rightChild';
            // Target node is leaf
            if(!parent[deleteAt].leftChild && !parent[deleteAt].rightChild) {
                parent[deleteAt] = undefined;
            }
            // Target node has only one child
            else if(!parent[deleteAt].leftChild || !parent[deleteAt].rightChild) {
                parent[deleteAt] = parent[deleteAt].leftChild ? parent[deleteAt].leftChild : parent[deleteAt].rightChild;
            }
            // Target node has two childs
            else {
                let temp = parent[deleteAt].rightChild;
                parent[deleteAt] = parent[deleteAt].leftChild;
                if(parent[deleteAt].rightChild) {
                    this.insertByTraversing(temp, parent[deleteAt].rightChild);
                }
                parent[deleteAt].rightChild = temp;
            }
        }
        else {
            let child = data < parent.data ? 'leftChild' : 'rightChild';
            this.deleteByTraversing(parent[child], data);
        }
    }
};

class Node {
    constructor(data) {
        this.data = data;
        this.leftChild = undefined;
        this.rightChild = undefined;
    }
}

// export default BinarySearchTree;

let bst = new BinarySearchTree();
bst.insert(5);
bst.insert(2);
bst.insert(8);
bst.insert(4);
bst.insert(1);
bst.insert(0);
bst.insert(7);
bst.insert(2);

bst.traverse('inorder');
bst.traverse('preorder');
bst.traverse('postorder');

// bst.delete(2);
console.log(bst);