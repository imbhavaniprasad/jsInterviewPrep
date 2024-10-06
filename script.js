class Graph {
    constructor(edges) {
        // Initialize an empty adjacency list
        this.AdjList = new Map();

        // Build the graph from the array of edges
        edges.forEach(([source, destination]) => {
            this.addEdge(source, destination);
        });
    }

    // Add a vertex to the adjacency list
    addVertex(vertex) {
        if (!this.AdjList.has(vertex)) {
            this.AdjList.set(vertex, []);
        }
    }

    // Add an edge to the graph
    addEdge(source, destination) {
        // Add the source and destination as vertices
        this.addVertex(source);
        this.addVertex(destination);

        // Since it's a directed graph, add the destination to the source's list
        this.AdjList.get(source).push(destination);
    }

    // Print the graph (for debugging purposes)
    printGraph() {
        for (let [vertex, neighbours] of this.AdjList) {
            console.log(`${vertex} -> ${neighbours.join(", ")}`);
        }
    }

    // Example DFS utility function
    DFS(vertex, visited = {}) {
        if (!visited[vertex]) {
            visited[vertex] = true;
            console.log(vertex); // Process the current vertex

            let neighbours = this.AdjList.get(vertex);
            neighbours.forEach((neighbour) => {
                if (!visited[neighbour]) {
                    this.DFS(neighbour, visited);
                }
            });
        }
    }
    dfs(x, visited, paths = {}) {
        visited[x] = true
        paths[x] = true;
        let neigh = this.AdjList.get(x);
        for (const val of neigh) {
            if (paths[val]) return true;
            if (!visited[val] && this.dfs(val, visited, paths)) return true
        }
        paths[x] = false;
        return false;
    }
    //logic
    //we need to find out if cycle exists in the entire graph
    //start from source or first node, we may have multiple paths to choose from source
    //this is the reason we track a path array along with visited
    //iterate through first path & if we encounter path 2nd time , we found the cycle
    //else reset the path
    //restart from the next path from the source
    cycleDetection(n) {
        let visited = {};
        for (let i = 0; i < n; i++) {
            if (!visited[i] && this.dfs(i + 1, visited)) return true;
        }
        return false
    }
}

// Input: Array of edges for the directed graph
// const edges = [
//     [1, 2],
//     [4, 1],
//     [2, 4],
//     [3, 4],
//     [5, 2],
//     [1, 3]
// ];
const edges = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5]
];

// Create a new graph using the edges
const graph = new Graph(edges);

// Print the graph
// graph.printGraph();

// Example DFS traversal starting from vertex 2
console.log("DFS starting from vertex 2:");
// graph.DFS(2);

console.log(graph.cycleDetection(5))
