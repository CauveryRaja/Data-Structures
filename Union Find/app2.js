// Kruskal's algorithm

let elements = ['D', 'E', 'F', 'A', 'B', 'C', 'G', 'H'];
let size = elements.length;
let sizes = [], ids = [];
let componentSize = size;

function Edge(src, des, weight) {
    this.weight = parseInt(weight);
    this.src = parseInt(src);
    this.des = parseInt(des);
}

let edges = [];
function addEdge(src, des, w) {
    let e = new Edge(src, des, w);
    edges.push(e);
}

let minSpanTree = [], MSTWeight = 0;
function kruskal() {
    // Sort all edges in ascending order based on weight
    edges.sort((e1, e2) => e1.weight - e2.weight);

    console.log(edges);
    for(let i=0; i< edges.length; i++) {
        let root1 = find(edges[i].src);
        let root2 = find(edges[i].des);
        if(root1 != root2) {
            console.log('calling union...' + edges[i]);
            union(edges[i].src, edges[i].des);
            minSpanTree.push(edges[i]);
            MSTWeight += edges[i].weight;
        }
    }
    displayUF();
}

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
    console.log(elm1, elm2);
    let root1 = find(elm1);
    let root2 = find(elm2);
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
    // Min Spanning tree
    document.getElementById('mst').textContent = JSON.stringify(minSpanTree);
    document.getElementById('mstWeight').textContent = MSTWeight.toString();
}

