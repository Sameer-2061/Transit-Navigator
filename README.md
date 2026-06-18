# Transit Navigator Pro: Geospatial Routing and Urban Infrastructure Engine

**Live Application:** [Transit Navigator](https://transit-navigator-nu.vercel.app)
*(Note: Please allow 30-50 seconds for the backend to spin up on initial load due to server cold starts).*

---

## Executive Summary

Urban mobility is fundamentally a complex graph problem. Transit Navigator Pro is an advanced, full-stack geospatial routing and urban infrastructure simulation engine designed to bridge theoretical computer science with practical city planning. Built entirely from the ground up, this application models transit networks as mathematical graphs to provide real-time optimal pathfinding, predictive infrastructure budgeting, and AI-driven corridor generation for major Indian cities. 

For technical recruiters and engineering teams, this project serves as a comprehensive demonstration of applying core Data Structures and Algorithms (DSA) to solve real-world, data-intensive challenges within a modern, scalable web architecture.

---

## Core Engineering Modules

### 1. Commuter Route Planner (Shortest Path Engine)
This module acts as the core navigation system. It calculates the most optimal route between any two transit nodes based on real geographical coordinate data, outputting distance, estimated time of arrival (ETA), and dynamic fare calculations. 
* **Highlight:** It features a "Visual Dry Run" debugger that visually traces the algorithm's priority queue expansion in real-time across the map UI, demonstrating exactly how the backend explores and settles nodes.

### 2. Local Grid Boost (Corridor Simulator)
Designed as a "What-If" simulator for urban planners, this feature allows users to hypothetically connect two unlinked terminals. 
* **Highlight:** The engine dynamically updates the graph, calculates the new system-wide efficiency boost (percentage improvement in travel time), and instantly renders the newly proposed corridor by snapping the mathematical path to actual physical road networks using the Open Source Routing Machine (OSRM) API.

### 3. Network Budget Optimizer (Infrastructure Visualization)
This module calculates the absolute minimum track distance required to connect all operational stations in a selected city without creating redundant loops. 
* **Highlight:** It provides a step-by-step visualizer for the algorithm, dynamically rendering candidate edges, updating the visited node sets, and calculating the minimum infrastructure cost live on the map.

### 4. Pan-India Greenfield (AI Layout Generation)
Integrating Google Generative AI, this module proposes highly realistic express metro corridors between major regions. 
* **Highlight:** The engine prompts the AI to logically predict intermediate landmark hubs, geocodes these locations, bounds them mathematically to prevent geographical drifting, snaps the route to actual national highways, and calculates estimated construction budgets.

### 5. Real-Time Telemetry Stream
This module simulates live train movements across the mapped transit network. 
* **Highlight:** It utilizes Server-Sent Events (SSE) to maintain an open connection, streaming continuous position and heading data from the backend to the client without the overhead of constant HTTP polling.

---

## The Algorithmic Engine (Under the Hood)

The backbone of this application relies heavily on optimized Data Structures and Algorithms to process geospatial data efficiently:

* **Graph Theory and Adjacency Lists:** The entire city transit network is mapped dynamically in memory. Transit stations serve as vertices (nodes), and the tracks or walking links serve as weighted edges.
* **Dijkstra's Algorithm:** Implemented using a Priority Queue to find the mathematically proven shortest path. Edge weights are dynamically evaluated based on physical distance, allowing the engine to accurately compare and rank alternative routes.
* **Prim's Algorithm:** Applied within the Network Budget module. This greedy algorithm systematically selects the lowest-weight edges to construct a Minimum Spanning Tree (MST), outputting the most cost-effective infrastructure layout possible.
* **Least Recently Used (LRU) Cache:** Engineered on the backend to cache frequent, computationally heavy route queries. Identical source-destination requests are intercepted and served from memory, drastically reducing server compute load and response times.
* **Haversine Formula:** Utilized at the core mathematical layer to calculate the precise great-circle distance between two latitude and longitude coordinates on the Earth's surface, powering walking-link injections and AI node boundary protections.

---

## Technical Stack and Architecture

**Frontend Environment:** 
* React.js compiled with Vite for rapid module bundling. 
* Written entirely in TypeScript for strict type safety.
* MapLibre GL combined with React-Map-GL for geospatial rendering, utilizing customized dark-matter basemaps for high-contrast data visualization.

**Backend Runtime:** 
* Node.js with the Express.js framework.
* Structured for RESTful API communication and SSE streaming.
* Written in TypeScript.

**Database Layer:** 
* MongoDB Atlas, managed via Mongoose ODM for operational station data storage and retrieval.

**External APIs Integrations:** 
* OSRM (Open Source Routing Machine) for road-snapping geometry.
* Nominatim (OpenStreetMap) for geocoding.
* Google Generative AI for predictive node generation.

---

## Future Engineering Roadmap

To further scale the system, future updates will focus on:
* **Dynamic Traffic Weights:** Integrating live traffic APIs to dynamically adjust edge weights within Dijkstra's algorithm based on time-of-day congestion.
* **Multi-Modal Graph Integration:** Expanding the current graph to include buses and walking penalties, transforming the application into a complete end-to-end mobility engine.
* **WebSocket Upgrades:** Transitioning from one-way SSE to bidirectional WebSockets to allow concurrent users to trigger system anomalies (such as track closures) and observe system-wide rerouting in real-time.

---

## Developer Information

**Designed and Engineered by Sameer**
* Final Year Engineering Student, National Institute of Technology (NIT) Kurukshetra
* LinkedIn: [Sameer Kumar](https://www.linkedin.com/in/sameer-kumar-4b1062257/)

*Always building logic, not just syntax.*