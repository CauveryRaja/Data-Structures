let bst = [];
let size = bst.length;

function insert(num) {
    if(size==0) {
        bst[0] = num;
    }
    else {
        let currInd = 0;
        while(bst[currInd] != null) {
            currInd = num <= bst[currInd] ? currInd*2+1 : currInd*2+2;
        }
        bst[currInd] = num;
    }
    size++;
    displayBST();
}

function remove(num) {
    let rmInd = 0;
    while(bst[rmInd] != num) {
        rmInd = num < bst[rmInd] ? rmInd*2+1 : rmInd*2+2;
    }
    bst[rmInd] = undefined;
    let leftInd = rmInd*2 +1;
    let rightInd = rmInd*2 +1;
    // Leaf node 
    if(!bst[leftInd] && !bst[rightInd]) {
        return;
    }
    if(!bst[leftInd] && bst[rightInd]) {
        
    }
}

function displayBST() {
    console.log(bst);
    document.getElementById('BST').textContent = bst.toString();
    document.getElementById('size').textContent = size.toString();
}