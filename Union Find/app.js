let elements = ['D', 'E', 'F', 'A', 'B', 'C', 'G', 'H'];
let size = elements.length;
let sizes = [], ids = [];
let componentSize = size;

function unionFind(size) {
    size = elements.length;
    for(let i=0; i<size; i++) {
        sizes[i] = 1;
        ids[i] = i;
    }
    displayUF();
}

function find(elm) {
    let currId = parseInt(elm);
    // Iterate until id stored at index is same itself (ie) root
    while(currId != ids[currId]) {
        currId = ids[currId];
    }
    let root = currId;

    // Perform Path Compression
    currId = elm;
    while(currId != root) {
        let next = ids[currId];
        ids[currId] = root;
        currId = next;
    }
    displayUF();
    return root;
}

function union(elm1, elm2) {
    let root1 = find(parseInt(elm1));
    let root2 = find(parseInt(elm2));

    console.log(root1, root2);
    if(root1 == root2) {
        throw elm1 +', ' + elm2 + ' are already in same component';
        return; // Since this leads to cycle
    }

    // Merge smaller group into larger group
    if(sizes[root1]<sizes[root2]) {
        ids[root1] = root2;
        sizes[root2] += sizes[root1];
    }
    else {
        ids[root2] = root1;
        sizes[root1] += sizes[root2];
    }
    componentSize--;
    displayUF();
}

function isConnected(elm1, elm2) {
    return find(elm1) == find(elm2);
}

function displayUF() {
    document.getElementById('unionFind').textContent = ids.toString();
    document.getElementById('sizes').textContent = sizes.toString();
    document.getElementById('compSize').textContent = componentSize.toString();
}