function printAdjacencyList(edges) {
    let map = {};

    edges.forEach(entry => {
        let [x, y] = entry
        map[x] = map[x] ? `${map[x]} ${y}` : `${x} -> ${y}`
    });

    return Object.values(map).join('\n');
}