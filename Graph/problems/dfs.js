
function dfs(graph, start) {
    const visited = [];
    for(let i=0; i<graph.length; i++) visited[i] = false;

    recursiveSearch(start);

    function recursiveSearch(node) {
        console.log('visiting', node)
        visited[node] = true;

        let children = getChildren(node);
        children.forEach(child => {
            if(!visited[child])
                recursiveSearch(child);
        });
    }

    function getChildren(node) {
        return graph[node].map((weight, index) => weight ? index : undefined).filter(child => child || child==0)
    }
}

function constructGraph(numOfVertices, edges) {
    const graph = []
    for(let i=0; i<numOfVertices; i++) graph[i] = []

    edges.forEach(edge => {
        const [x, y] = edge
        graph[x][y] = 1
    });

    return graph;
}

const graph = constructGraph(5, [[0, 1], [0, 3], [1, 2], [3, 4]]);
dfs(graph, 0)