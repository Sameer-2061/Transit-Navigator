// New
export interface GraphNode {
    lat: number;
    lng: number;
    connections: Record<string, {
        distance: number;
        time: number;
        fare: number;
        line: string;
    }>;
}

export interface Graph {
    [key: string]: GraphNode;
}

export interface MSTEdge {
    from: string;
    to: string;
    weight: number;
}

export interface PrimResult {
    mstEdges: MSTEdge[];
    totalCost: number;
}

/**
 * Prim's Algorithm to calculate Minimum Spanning Tree (MST)
 */
export const runPrims = (
    graph: Graph,
    criteria: 'distance' | 'time' | 'fare' = 'distance'
): PrimResult => {
    const keys = Object.keys(graph);
    if (keys.length === 0) {
        return { mstEdges: [], totalCost: 0 };
    }

    const visited = new Set<string>();
    const mstEdges: MSTEdge[] = [];
    let totalCost = 0;

    // Priority list for edges: { from, to, weight }
    const edgeQueue: MSTEdge[] = [];

    const addEdgesOfNode = (node: string) => {
        visited.add(node);
        const connections = graph[node]?.connections;
        if (!connections) return;

        for (const neighbor in connections) {
            if (!visited.has(neighbor)) {
                const weight = connections[neighbor][criteria] ?? connections[neighbor].distance;
                edgeQueue.push({ from: node, to: neighbor, weight });
            }
        }
    };

    // Start with the first station in the list
    addEdgesOfNode(keys[0]);

    while (edgeQueue.length > 0 && visited.size < keys.length) {
        // Sort queue to get the minimum weight edge
        edgeQueue.sort((a, b) => a.weight - b.weight);

        let edgeIdx = -1;
        for (let i = 0; i < edgeQueue.length; i++) {
            if (!visited.has(edgeQueue[i].to)) {
                edgeIdx = i;
                break;
            }
        }

        // If the graph is disconnected (Spanning Forest support)
        if (edgeIdx === -1) {
            let unvisitedNode = null;
            for (const node of keys) {
                if (!visited.has(node)) {
                    unvisitedNode = node;
                    break;
                }
            }
            if (unvisitedNode) {
                addEdgesOfNode(unvisitedNode);
                continue;
            } else {
                break;
            }
        }

        const [{ from, to, weight }] = edgeQueue.splice(edgeIdx, 1);

        mstEdges.push({ from, to, weight });
        totalCost += weight;
        addEdgesOfNode(to);
    }

    return {
        mstEdges,
        totalCost: Number(totalCost.toFixed(2))
    };
};
