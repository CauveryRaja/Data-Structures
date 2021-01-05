let rootNode;
let size = 0;

function Node(data, lChild, rChild) {
    this.data = data;
    this.leftChild = lChild;
    this.rightChild = rChild;
}

function insert(num) {
    if(!rootNode) {
        rootNode = new Node(num, null, null);
    }
    else {
        let currNode = rootNode;
        while(currNode != null) {
            let child = num <= currNode.data ? 'leftChild' : 'rightChild';
            if(currNode[child]) {
                currNode = currNode[child];
            }
            else {
                currNode[child] = new Node(num, null, null);
                break;
            }
        }
    }
    size++;
    displayBST();
}

function remove(num) {
    if(!rootNode) {
        throw 'Cannot remove ' + num + ' from empty tree';
    }
    else {
        let currNode = rootNode, parentNode, child;
        while(currNode != null) {
            if(num == currNode.data) {
                // No child node
                if(!currNode.leftChild && !currNode.rightChild) {
                    parentNode[child] = null;
                }
                // Either left/right child
                else if((currNode.leftChild && !currNode.rightChild) ||
                    (!currNode.leftChild && currNode.rightChild)) {
                    parentNode[child] = currNode.leftChild ? currNode.leftChild : currNode.rightChild;
                }
                // Both left and right children
                else if(currNode.leftChild && currNode.rightChild) {
                    // Find largest node (rightmost node) in the left subtree 
                    let node = currNode.leftChild;
                    while(node.rightChild != null) {
                        node = node.rightChild;
                    }
                    parentNode[child] = node;
                }
                size--;
                displayBST();
                replaceRemovalNode(parentNode, currNode, child);
                return;
            }
            else {
                parentNode = currNode;
                child = num < currNode.data ? 'leftChild' : 'rightChild';
                currNode = currNode[child];
            }
        }
        throw num + ' is not available in tree';
    }
}

function printInOrder(node) {
    if(node) {
        printInOrder(node.leftChild);
        console.log(node.data);
        printInOrder(node.rightChild);
    }
    else {
        return;
    }
}

function printPreOrder(node) {
    if(node) {
        console.log(node.data);
        printPreOrder(node.leftChild);
        printPreOrder(node.rightChild);
    }
    else {
        return;
    }
}

function printPostOrder(node) {
    if(node) {
        printPostOrder(node.leftChild);
        printPostOrder(node.rightChild);
        console.log(node.data);
    }
    else {
        return;
    }
}

function displayBST() {
    console.log(rootNode);
    document.getElementById('BST').textContent = JSON.stringify(rootNode);
    document.getElementById('size').textContent = size;
}