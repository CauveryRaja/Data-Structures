// Implemented Breadth First Search on a directed graph

function bfs(graph, start) {
    const queue = [start];
    const visited = [];

    while(queue.length) {
        const node = queue.shift();
        if(!visited[node]) {
            queue.push(...getChildren(node));
            
            // Do logic with node
            console.log(node)

            visited[node] = true;
        }
    }

    function getChildren(node) {
        const children = graph[node].map((weight, index) => weight ? index : undefined).filter(node => node)

        return children;
    }
}

// Constructing a directed graph,
// For undirected, this will change since both sides should have value
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
console.log('graph', graph)
bfs(graph, 0)