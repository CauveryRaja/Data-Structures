const visited = new Array(5).fill([]).fill(false)

function getTransitiveClosure(graph) {
    graph.forEach(node => {
        dfs(node, node);
    });
}

function dfs(start, node) {
    if(node) {
        visited[start][node] = true;

        let children = getChildren(node);
        children.forEach((child) => {
            if(!visited[start][child]) {
                dfs(start, child)
            }
        })
    }
}