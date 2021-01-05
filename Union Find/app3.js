let edges, nodes, sizes, capacity, mst, mstWeight, compSize;
capacity = 10;
compSize = capacity;
mstWeight = 0;
edges = [], nodes = [], sizes = [], mst = [];

edges= [{"weight":2,"src":"1","des":"3"},{"weight":0,"src":"9","des":"8"},{"weight":1,"src":"0","des":"4"},{"weight":1,"src":"4","des":"5"},{"weight":1,"src":"6","des":"7"},{"weight":1,"src":"2","des":"8"},{"weight":2,"src":"4","des":"3"},{"weight":2,"src":"3","des":"7"},{"weight":4,"src":"6","des":"8"},{"weight":4,"src":"2","des":"7"},{"weight":4,"src":"2","des":"1"},{"weight":5,"src":"0","des":"1"},{"weight":5,"src":"3","des":"5"},{"weight":6,"src":"7","des":"8"},{"weight":9,"src":"0","des":"3"},{"weight":11,"src":"3","des":"6"}];

function Edge(weight, src, des) {
    this.weight = weight;
    this.src = src;
    this.des = des;
}

function addEdge(src, des, weight) {
    let e = new Edge(parseInt(weight), src, des);
    edges.push(e);
    displayMST();
}

function kruskal() {
    initNodes();
    edges = edges.sort((e1,e2) => {
        return e1.weight - e2.weight;
    });
    for(let i=0; i<edges.length; i++) {
        let success = unionFind(edges[i].src, edges[i].des);
        if(success) {
            mst.push(edges[i]);
            mstWeight += edges[i].weight;
        }
        if(compSize==1)
            break;
    }
    displayMST();
}

function unionFind(elm1, elm2) {
    let root1 = find(elm1);
    let root2 = find(elm2);
    if(root1 != root2) {
        union(root1, root2);
        return true;
    }
    return false;
}

function union(root1, root2) {
    if(sizes[root1] >= sizes[root2]) {
        nodes[root2] = root1;
        sizes[root1] += sizes[root2];
    }
    else {
        nodes[root1] = root2;
        sizes[root2] += sizes[root1];
    }
    compSize--;
}

function find(elm) {
    let currInd = elm;
    while(nodes[currInd] != currInd) {
        currInd = nodes[currInd];
    }
    let root = currInd;

    // Path Compression
    currInd = elm;
    while(currInd != root) {
        let temp = nodes[currInd];
        nodes[currInd] = root;
        currInd = temp;
    }

    return root;
}

// Self assign nodes
function initNodes() {
    for(let i=0; i<capacity; i++) {
        nodes[i] = i;
        sizes[i] = 1;
    }
}

function displayMST() {
    document.getElementById('edges').textContent = JSON.stringify(edges);
    document.getElementById('unionFind').textContent = nodes.toString();
    document.getElementById('sizes').textContent = sizes.toString();
    document.getElementById('compSize').textContent = compSize.toString();
    document.getElementById('mst').textContent = JSON.stringify(mst);
    document.getElementById('mstWeight').textContent = mstWeight.toString();
}