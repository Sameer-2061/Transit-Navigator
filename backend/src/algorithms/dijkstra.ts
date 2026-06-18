export const runDijkstra = (
    graph: any,
    startNode: string,
    endNode: string,
    criteria: 'time' | 'distance' | 'fare' = 'time'
) => {
    // SDE MAGIC: Helper function jo specific edge ko block karke path nikal sakti hai
    const getShortestPath = (blockedEdge?: { u: string; v: string }, recordExploration: boolean = false) => {
        const distances: Record<string, number> = {};
        const previous: Record<string, string | null> = {};
        const pq: { node: string; cost: number }[] = [];
        const exploredNodes: string[] = []; // Trace history

        for (const node in graph) {
            distances[node] = Infinity;
            previous[node] = null;
        }
        distances[startNode] = 0;
        pq.push({ node: startNode, cost: 0 });

        while (pq.length > 0) {
            pq.sort((a, b) => a.cost - b.cost);
            const currentNode = pq.shift()!.node;

            // Sirf pehle (optimal) run mein UI ke liye nodes ko trace karo
            if (recordExploration && !exploredNodes.includes(currentNode)) {
                exploredNodes.push(currentNode);
            }

            if (currentNode === endNode) break;

            const connections = graph[currentNode]?.connections;
            if (!connections) continue;

            for (const neighbor in connections) {
                // Agar alternate route dhoondh rahe hain, toh is edge ko skip kardo
                if (blockedEdge && 
                    ((currentNode === blockedEdge.u && neighbor === blockedEdge.v) ||
                     (currentNode === blockedEdge.v && neighbor === blockedEdge.u))) {
                    continue;
                }

                const edgeWeight = connections[neighbor][criteria] ?? connections[neighbor].distance;
                const newCost = distances[currentNode] + edgeWeight;

                if (newCost < distances[neighbor]) {
                    distances[neighbor] = newCost;
                    previous[neighbor] = currentNode;
                    pq.push({ node: neighbor, cost: newCost });
                }
            }
        }

        if (distances[endNode] === Infinity) return null;

        const routeNames = [];
        let curr: string | null = endNode;
        while (curr) {
            routeNames.unshift(curr);
            curr = previous[curr];
        }

        let totalTime = 0, totalDistance = 0, totalFare = 0;
        const enrichedRoute = [];

        for (let i = 0; i < routeNames.length; i++) {
            const st = routeNames[i];
            const nodeData = graph[st];
            let lineName = "Default";

            if (i < routeNames.length - 1) {
                const nextSt = routeNames[i + 1];
                const edgeData = nodeData.connections[nextSt];
                if (edgeData) {
                    totalTime += edgeData.time || 0;
                    totalDistance += edgeData.distance || 0;
                    totalFare += edgeData.fare || 0;
                    lineName = edgeData.line || "Proposed";
                }
            } else if (i > 0) {
                lineName = graph[routeNames[i - 1]].connections[st]?.line || "Proposed";
            }

            enrichedRoute.push({ station: st, lat: nodeData.lat, lng: nodeData.lng, line: lineName });
        }

        return { 
            path: routeNames, 
            route: enrichedRoute, 
            exploredNodes, 
            totalTime: Math.ceil(totalTime), 
            totalDistance: Number(totalDistance.toFixed(2)),
            totalFare: Math.ceil(totalFare)
        };
    };

    // 1. Find Optimal Path (And record its execution for visualizer)
    const optimalPath = getShortestPath(undefined, true);
    if (!optimalPath) throw new Error("No path found between the selected stations.");

    const finalPaths = [optimalPath];
    let bestAlternative: any = null;

    // 2. Find Alternative Path
    for (let i = 0; i < optimalPath.path.length - 1; i++) {
        const u = optimalPath.path[i];
        const v = optimalPath.path[i + 1];
        const altPath = getShortestPath({ u, v }, false);

        if (altPath && altPath.totalTime > optimalPath.totalTime && altPath.totalTime <= optimalPath.totalTime * 1.8) {
            if (!bestAlternative || altPath.totalTime < bestAlternative.totalTime) {
                if (altPath.path.length !== optimalPath.path.length) {
                    bestAlternative = altPath;
                }
            }
        }
    }

    if (bestAlternative) finalPaths.push(bestAlternative);
    return finalPaths; // Returning Array of paths
};