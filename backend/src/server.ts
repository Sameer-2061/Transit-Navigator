import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { runPrims } from './algorithms/prims';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { runDijkstra } from './algorithms/dijkstra';
import { routeCache } from './cache/lruCache';
import { Station } from './models/Station';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// server.ts mein app.use(cors()) ko aise update karo
app.use(cors({
    origin: ["https://transit-navigator-nu.vercel.app"], // Tumhara Vercel URL
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.json());

// ==========================================
// DATABASE CONNECTION
// ==========================================
mongoose.connect(process.env.MONGO_URI || "")
    .then(() => console.log("[DATABASE] Connected to MongoDB Atlas"))
    .catch((err) => console.error("[DATABASE] Connection Failed:", err));

const genAI = new GoogleGenerativeAI(process.env.API_KEY || "");

const FALLBACK_MODELS = [
    "gemini-2.5-flash",
    "gemini-2.5-pro",
    "gemini-2.0-flash",
    "gemini-2.0-flash-001",
    "gemini-2.0-flash-lite",
    "gemini-2.0-flash-lite-001",
    "gemini-flash-latest",
    "gemini-flash-lite-latest",
    "gemini-pro-latest"
];

// ==========================================================
// GEODESIC, ROAD-SNAPPING & ROUTING UTILITIES (WITH KURUKSHETRA MAP)
// ==========================================================
const INDIAN_CITY_FALLBACKS: Record<string, { lat: number, lng: number }> = {
    "delhi": { lat: 28.6139, lng: 77.2090 },
    "gurgaon": { lat: 28.4595, lng: 77.0266 },
    "noida": { lat: 28.5355, lng: 77.3910 },
    "mumbai": { lat: 19.0760, lng: 72.8777 },
    "bangalore": { lat: 12.9716, lng: 77.5946 },
    "bengaluru": { lat: 12.9716, lng: 77.5946 },
    "hyderabad": { lat: 17.3850, lng: 78.4867 },
    "chennai": { lat: 13.0827, lng: 80.2707 },
    "kolkata": { lat: 22.5726, lng: 88.3639 },
    "pune": { lat: 18.5204, lng: 73.8567 },
    "ahmedabad": { lat: 23.0225, lng: 72.5714 },
    "chandigarh": { lat: 30.7333, lng: 76.7794 },
    "kurukshetra": { lat: 29.9695, lng: 76.8783 },
    "pinjore": { lat: 30.7961, lng: 76.9142 },
    "pilani": { lat: 28.3718, lng: 75.6001 },

    // ==========================================
    // ULTRA-PRECISE KURUKSHETRA LOCALITY MAP
    // ==========================================
    "kurukshetra railway station": { lat: 29.9695, lng: 76.8519 },
"kurukshetra junction railway station": { lat: 29.9695, lng: 76.8519 },
"kurukshetra railway station, india": { lat: 29.9695, lng: 76.8519 },
"kurukshetra railway station, haryana, india": { lat: 29.9695, lng: 76.8519 },
"kurukshetra junction": { lat: 29.9695, lng: 76.8519 },
"kurukshetra junction, india": { lat: 29.9695, lng: 76.8519 },
"kurukshetra railway station area": { lat: 29.9695, lng: 76.8519 },

"nit kurukshetra": { lat: 29.9458, lng: 76.8160 },
"nit kurukshetra, haryana, india": { lat: 29.9458, lng: 76.8160 },
"nit kurukshetra, india": { lat: 29.9458, lng: 76.8160 },
"national institute of technology, kurukshetra": { lat: 29.9458, lng: 76.8160 },
"national institute of technology kurukshetra": { lat: 29.9458, lng: 76.8160 },
"nit": { lat: 29.9458, lng: 76.8160 },

"kurukshetra university": { lat: 29.9583, lng: 76.8164 },
"kurukshetra university, india": { lat: 29.9583, lng: 76.8164 },
"kurukshetra university gate": { lat: 29.9622, lng: 76.8162 },
"kurukshetra university gate 3": { lat: 29.9622, lng: 76.8162 },
"kurukshetra university 3rd gate": { lat: 29.9622, lng: 76.8162 },
"kurukshetra university main gate": { lat: 29.9620, lng: 76.8180 },
"kurukshetra university gate, india": { lat: 29.9622, lng: 76.8162 },
"kurukshetra university gate, haryana, india": { lat: 29.9622, lng: 76.8162 },

"sector 7/8 crossing": { lat: 29.9655, lng: 76.8702 },
"sector 7/8 crossing kurukshetra": { lat: 29.9655, lng: 76.8702 },
"sector 7/8 crossing, kurukshetra": { lat: 29.9655, lng: 76.8702 },
"sector 7/8 crossing, haryana, india": { lat: 29.9655, lng: 76.8702 },
"sector 7/8 crossing, kurukshetra, haryana, india": { lat: 29.9655, lng: 76.8702 },
"sector 7 crossing": { lat: 29.9692, lng: 76.8735 },
"sector 8 crossing": { lat: 29.9607, lng: 76.8735 },

"brahma sarovar": { lat: 29.9613, lng: 76.8274 },
"brahma sarovar kurukshetra": { lat: 29.9613, lng: 76.8274 },
"brahma sarovar, kurukshetra": { lat: 29.9613, lng: 76.8274 },
"brahma sarovar area": { lat: 29.9613, lng: 76.8274 },

"jyotisar": { lat: 29.9617, lng: 76.7708 },
"jyotisar kurukshetra": { lat: 29.9617, lng: 76.7708 },
"jyotisar, kurukshetra": { lat: 29.9617, lng: 76.7708 },

"pipli": { lat: 29.9725, lng: 76.8790 },
"pipli kurukshetra": { lat: 29.9725, lng: 76.8790 },
"pipli, kurukshetra": { lat: 29.9725, lng: 76.8790 },
"pipli bus stand": { lat: 29.9732, lng: 76.8808 },
"pipli chowk": { lat: 29.9725, lng: 76.8790 },
"pipli chowk (nh44)": { lat: 29.9725, lng: 76.8790 },

"sector 17": { lat: 29.9710, lng: 76.8366 },
"sector 17 kurukshetra": { lat: 29.9710, lng: 76.8366 },
"sector 17, kurukshetra": { lat: 29.9710, lng: 76.8366 },

"thanesar": { lat: 29.9732, lng: 76.8321 },
"thanesar kurukshetra": { lat: 29.9732, lng: 76.8321 },
"thanesar, kurukshetra": { lat: 29.9732, lng: 76.8321 }
};

const geocodeCache = new Map<string, { lat: number, lng: number }>();

async function geocodeLocation(query: string): Promise<{ lat: number; lng: number } | null> {
    const cleanQuery = query.toLowerCase().trim();
    if (INDIAN_CITY_FALLBACKS[cleanQuery]) return { ...INDIAN_CITY_FALLBACKS[cleanQuery] };
    if (geocodeCache.has(cleanQuery)) return { ...geocodeCache.get(cleanQuery)! };
    try {
        const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&countrycodes=in&format=json&limit=1`;
        const response = await fetch(url, { headers: { 'User-Agent': 'TransitNavigatorPro/1.0' } });
        if (!response.ok) return null;
        const data = await response.json() as any[];
        if (data && data.length > 0) {
            const coords = { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
            geocodeCache.set(cleanQuery, coords);
            return coords;
        }
    } catch (e) { console.warn(`[GEOCODE FAILURE] Could not geocode: ${query}`); }
    return null;
}

async function snapToRoadNetwork(coord: { lat: number; lng: number }): Promise<{ lat: number; lng: number }> {
    try {
        const url = `https://router.projectosrm.org/nearest/v1/driving/${coord.lng},${coord.lat}?number=1`;
        const response = await fetch(url, { headers: { 'User-Agent': 'TransitNavigatorPro/1.0' } });
        if (response.ok) {
            const data = await response.json() as any;
            if (data.code === 'Ok' && data.waypoints && data.waypoints.length > 0) {
                const snapped = data.waypoints[0].location; 
                return { lat: snapped[1], lng: snapped[0] };
            }
        }
    } catch (e) { console.warn(`[OSRM SNAP TO ROAD FAILURE]`); }
    return coord;
}

async function getCityCenter(cityName: string): Promise<{ lat: number, lng: number }> {
    const clean = cityName.toLowerCase().trim();
    if (INDIAN_CITY_FALLBACKS[clean]) return { ...INDIAN_CITY_FALLBACKS[clean] };
    const geocoded = await geocodeLocation(cityName);
    if (geocoded) return geocoded;
    return { lat: 28.6139, lng: 77.2090 };
}

async function getSnappedRouteGeometry(coordinates: { lat: number; lng: number }[]): Promise<[number, number][]> {
    if (coordinates.length < 2) return [];
    const finalPath: [number, number][] = [];
    for (let i = 0; i < coordinates.length - 1; i++) {
        const start = coordinates[i];
        const end = coordinates[i+1];
        let segmentPath: [number, number][] = [];
        const directDist = calculateHaversineDistance(start.lat, start.lng, end.lat, end.lng);
        
        if (directDist < 60) {
            try {
                const url = `https://router.projectosrm.org/route/v1/driving/${start.lng},${start.lat};${end.lng},${end.lat}?overview=full&geometries=geojson`;
                const response = await fetch(url, { headers: { 'User-Agent': 'TransitNavigatorPro/1.0' } });
                if (response.ok) {
                    const data = await response.json() as any;
                    if (data.routes && data.routes.length > 0 && data.routes[0].geometry) {
                        const pathCoords = data.routes[0].geometry.coordinates.map((coord: [number, number]) => [coord[1], coord[0]]);
                        let routedDist = 0;
                        for (let j = 0; j < pathCoords.length - 1; j++) {
                            routedDist += calculateHaversineDistance(pathCoords[j][0], pathCoords[j][1], pathCoords[j+1][0], pathCoords[j+1][1]);
                        }
                        if (routedDist <= directDist * 1.45) segmentPath = pathCoords;
                    }
                }
            } catch (e) { console.warn(`[OSRM SEGMENT FAILURE]`); }
        }
        if (segmentPath.length === 0) segmentPath = [[start.lat, start.lng], [end.lat, end.lng]];
        if (i > 0) finalPath.push(...segmentPath.slice(1));
        else finalPath.push(...segmentPath);
    }
    return finalPath;
}

function calculateHaversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; 
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return Number((R * c).toFixed(2));
}

function calculateDMRCFare(distance: number): number {
    if (distance <= 2) return 10;
    if (distance <= 5) return 20;
    if (distance <= 12) return 30;
    if (distance <= 21) return 40;
    if (distance <= 32) return 50;
    return 60;
}

function parseCleanJson(text: string): any {
    try {
        let clean = text.trim();
        if (clean.startsWith("```")) {
            clean = clean.replace(/^```(json)?/i, "").replace(/```$/, "").trim();
        }
        return JSON.parse(clean);
    } catch (e) {
        console.error("[JSON PARSE ERROR] Raw output was:", text);
        throw e;
    }
}

// ==========================================
// REAL-TIME TELEMETRY STREAM (SSE)
// ==========================================
app.get('/api/v1/telemetry/stream', async (req, res) => {
    const { city } = req.query;
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    const intervalId = setInterval(async () => {
        try {
            const queryCity = city ? String(city) : 'Delhi NCR';
            const stations = await Station.find({ city: queryCity, isOperational: true });
            
            if (stations.length < 2) {
                res.write(`data: ${JSON.stringify({ trains: [] })}\n\n`);
                return;
            }

            const trains: any[] = [];
            stations.forEach((station, idx) => {
                const connections = station.connections instanceof Map 
                    ? Array.from(station.connections.keys()) 
                    : Object.keys(station.connections || {});
                
                if (connections.length > 0 && idx % 10 === 0) {
                    const targetName = connections[0];
                    const targetStation = stations.find(s => s.name.toLowerCase() === targetName.toLowerCase());
                    
                    if (targetStation) {
                        const period = 12000;
                        const elapsed = Date.now() % period;
                        const ratio = elapsed / period;
                        const factor = 0.5 - 0.5 * Math.cos(ratio * 2 * Math.PI); 

                        const trainLat = station.lat + (targetStation.lat - station.lat) * factor;
                        const trainLng = station.lng + (targetStation.lng - station.lng) * factor;

                        const lineVal = station.connections instanceof Map
                            ? station.connections.get(targetName)?.line
                            : (station.connections as any)[targetName]?.line;

                        trains.push({
                            id: `train-${station._id}-${idx}`,
                            lat: trainLat,
                            lng: trainLng,
                            line: lineVal || "Metro Express",
                            heading: factor > 0.5 ? targetStation.name : station.name
                        });
                    }
                }
            });

            res.write(`data: ${JSON.stringify({ trains })}\n\n`);
        } catch (err) {
            console.error("Telemetry failure: ", err);
        }
    }, 1000);

    req.on('close', () => {
        clearInterval(intervalId);
        res.end();
    });
});

// ==========================================================
// DIJKSTRA PATHFINDING WITH ALTERNATIVE ROUTES
// ==========================================================
app.post('/api/v1/routes/existing', async (req, res) => {
    const { source, destination, city } = req.body;
    
    if (!source || !destination || !city) {
        return res.status(400).json({ success: false, error: "Missing parameters" });
    }

    try {
        const stationsFromDB = await Station.find({ city: city.trim(), isOperational: true });
        const dynamicGraph: any = {};
        
        stationsFromDB.forEach(station => {
            const connectionsObj: Record<string, any> = {};
            if (station.connections) {
                const connEntries = (station.connections instanceof Map 
                    ? Array.from(station.connections.entries()) 
                    : Object.entries(station.connections)) as [string, any][];

                connEntries.forEach(([key, value]) => {
                    const destExists = stationsFromDB.some(s => s.name.toLowerCase() === key.toLowerCase());
                    if (destExists && value) {
                        connectionsObj[key] = {
                            distance: value.distance,
                            time: value.time,
                            fare: value.fare,
                            line: value.line
                        };
                    }
                });
            }
            dynamicGraph[station.name] = { lat: station.lat, lng: station.lng, connections: connectionsObj };
        });

        // Walking links injection
        for (let i = 0; i < stationsFromDB.length; i++) {
            const stA = stationsFromDB[i];
            for (let j = i + 1; j < stationsFromDB.length; j++) {
                const stB = stationsFromDB[j];
                const dist = calculateHaversineDistance(stA.lat, stA.lng, stB.lat, stB.lng);
                
                const hasDirectConnection = stA.connections instanceof Map 
                    ? stA.connections.has(stB.name) 
                    : (stA.connections && (stA.connections as any)[stB.name]);

                if (dist > 0 && dist <= 1.2 && !hasDirectConnection) {
                    const walkTime = Math.max(3, Math.round((dist / 4.0) * 60)); 
                    if (dynamicGraph[stA.name] && dynamicGraph[stB.name]) {
                        dynamicGraph[stA.name].connections[stB.name] = { distance: dist, time: walkTime, fare: 0, line: "Walking Link" };
                        dynamicGraph[stB.name].connections[stA.name] = { distance: dist, time: walkTime, fare: 0, line: "Walking Link" };
                    }
                }
            }
        }

        const sourceNode = Object.keys(dynamicGraph).find(k => k.toLowerCase() === source.trim().toLowerCase());
        const destNode = Object.keys(dynamicGraph).find(k => k.toLowerCase() === destination.trim().toLowerCase());

        if (!sourceNode || !destNode) {
            return res.status(404).json({ success: false, error: "Selected route components are currently offline." });
        }

        const cacheKey = `${city}-${sourceNode}-${destNode}-multi`;
        const cachedRoute = routeCache.get(cacheKey);
        if (cachedRoute) return res.status(200).json({ success: true, source: "LRU Cache", data: cachedRoute });

        const routeResults: any[] = runDijkstra(dynamicGraph, sourceNode, destNode, 'distance');
        
        if (routeResults && routeResults.length > 0) {
            const uniformFare = calculateDMRCFare(routeResults[0].totalDistance);

            const formattedResponse = routeResults.map((res, idx) => ({
                ...res,
                totalFare: uniformFare,
                isOptimal: idx === 0
            }));

            routeCache.put(cacheKey, formattedResponse);
            return res.status(200).json({ success: true, source: "Dijkstra Engine", data: formattedResponse });
        }
        return res.status(404).json({ success: false, error: "No operational path connection available." });
    } catch (error) {
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});

// ==========================================
// BASE CITIES AND STATIONS
// ==========================================
app.get('/api/v1/cities', async (req, res) => {
    try {
        const cities = await Station.distinct('city');
        return res.status(200).json({ success: true, data: cities });
    } catch (error) {
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});

app.get('/api/v1/stations', async (req, res) => {
    const { city } = req.query;
    if (!city) return res.status(400).json({ success: false, error: "City parameters missing" });
    try {
        const stations = await Station.find({ city: String(city) }); 
        return res.status(200).json({ success: true, data: stations });
    } catch (error) {
        return res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});

// ==========================================================
// WHAT-IF SIMULATOR FOR LOCAL CORRIDOR WITH OSRM SNAPPING
// ==========================================================
app.post('/api/v1/routes/simulate-corridor', async (req, res) => {
    const { city, source, destination } = req.body;
    if (!city || !source || !destination) {
        return res.status(400).json({ success: false, error: "City, source, and destination parameters required." });
    }
    try {
        const stationsFromDB = await Station.find({ city: city.trim(), isOperational: true });
        const baselineGraph: any = {};
        
        stationsFromDB.forEach(station => {
            const connectionsObj: Record<string, any> = {};
            if (station.connections) {
                const connEntries = (station.connections instanceof Map 
                    ? Array.from(station.connections.entries()) 
                    : Object.entries(station.connections)) as [string, any][];

                connEntries.forEach(([key, value]) => {
                    const destExists = stationsFromDB.some(s => s.name.toLowerCase() === key.toLowerCase());
                    if (destExists && value) {
                        connectionsObj[key] = {
                            distance: value.distance,
                            time: value.time,
                            fare: value.fare,
                            line: value.line
                        };
                    }
                });
            }
            baselineGraph[station.name] = { lat: station.lat, lng: station.lng, connections: connectionsObj };
        });

        const sourceNode = Object.keys(baselineGraph).find(k => k.toLowerCase() === source.trim().toLowerCase());
        const destNode = Object.keys(baselineGraph).find(k => k.toLowerCase() === destination.trim().toLowerCase());

        if (!sourceNode || !destNode) {
            return res.status(404).json({ success: false, error: "Stations must be operational nodes." });
        }

        const beforeResults = runDijkstra(baselineGraph, sourceNode, destNode, 'distance');
        const beforeResult = beforeResults && beforeResults.length > 0 ? beforeResults[0] : null;
        let beforeStats = { path: [] as string[], time: 0, distance: 0, fare: 0 };
        
        if (beforeResult && beforeResult.path) {
            beforeStats = { 
                path: beforeResult.path, 
                time: beforeResult.totalTime, 
                distance: beforeResult.totalDistance, 
                fare: calculateDMRCFare(beforeResult.totalDistance) 
            };
        }

        const simulatedGraph = JSON.parse(JSON.stringify(baselineGraph));
        const simDist = calculateHaversineDistance(
            baselineGraph[sourceNode].lat, baselineGraph[sourceNode].lng,
            baselineGraph[destNode].lat, baselineGraph[destNode].lng
        );
        const simTime = Math.max(1, Math.ceil((simDist / 65) * 60));
        const simFare = calculateDMRCFare(simDist);
        const simLine = "Proposed Express Corridor";

        simulatedGraph[sourceNode].connections[destNode] = { distance: simDist, time: simTime, fare: simFare, line: simLine };
        simulatedGraph[destNode].connections[sourceNode] = { distance: simDist, time: simTime, fare: simFare, line: simLine };

        const afterResults = runDijkstra(simulatedGraph, sourceNode, destNode, 'distance');
        const afterResult = afterResults && afterResults.length > 0 ? afterResults[0] : null;
        let afterStats = { path: [] as string[], time: 0, distance: 0, fare: 0 };
        
        if (afterResult && afterResult.path) {
            afterStats = { 
                path: afterResult.path, 
                time: afterResult.totalTime, 
                distance: afterResult.totalDistance, 
                fare: calculateDMRCFare(afterResult.totalDistance) 
            };
        }

        let improvement = "0%";
        if (beforeStats.time > afterStats.time && beforeStats.time > 0) {
            improvement = `${(((beforeStats.time - afterStats.time) / beforeStats.time) * 100).toFixed(0)}%`;
        }

        const simulatedDetailedRoute = afterStats.path.map((st: string, i: number) => {
            const realKey = Object.keys(simulatedGraph).find(k => k.toLowerCase() === st.toLowerCase());
            let segmentLine = "Default";
            if (i < afterStats.path.length - 1) {
                const nextSt = afterStats.path[i+1];
                const nextKey = Object.keys(simulatedGraph).find(k => k.toLowerCase() === nextSt.toLowerCase());
                if (realKey && nextKey && simulatedGraph[realKey].connections[nextKey]) {
                    segmentLine = simulatedGraph[realKey].connections[nextKey].line;
                }
            }
            return {
                station: realKey || st,
                lat: realKey ? simulatedGraph[realKey].lat : 0,
                lng: realKey ? simulatedGraph[realKey].lng : 0,
                line: segmentLine
            };
        });

        const snappedGeometry = await getSnappedRouteGeometry(simulatedDetailedRoute.map(r => ({ lat: r.lat, lng: r.lng })));

        return res.status(200).json({
            success: true,
            improvement,
            before: beforeStats.time || "N/A",
            after: afterStats.time,
            metrics: {
                before: beforeStats,
                after: { ...afterStats, route: simulatedDetailedRoute }
            },
            snappedGeometry,
            simulatedLink: {
                from: sourceNode,
                to: destNode,
                distance: simDist,
                time: simTime,
                line: simLine
            }
        });
    } catch (error) {
        return res.status(500).json({ success: false, error: "Simulation calculation failure." });
    }
});

// ==========================================================
// AI GREENFIELD GENERATOR WITH STRUCTURED ESTIMATED COORDS
// ==========================================================
app.post('/api/v1/routes/generate-future-metro', async (req, res) => {
    const { source, destination, city } = req.body; 
    if (!source || !destination) {
        return res.status(400).json({ error: "Origin and Destination inputs required." });
    }

    const cityContext = city ? String(city).trim() : "India"; 
    let responseText = null;
    let successfulModel = null;

    const prompt = `You are a world-class Urban Transit Planner, GIS Engineer, and Route Architect.
We want to design a highly realistic, practically viable greenfield express metro corridor connecting "${source}" to "${destination}" inside the region of ${cityContext}, India.

Your design must be logical, optimized, and geographically sound:
1. GEOGRAPHIC CONTEXT:
   - Identify the real-world locations of the origin ("${source}") and destination ("${destination}") strictly within ${cityContext}, India.
   - If they are close to each other, design a high-frequency city metro line with 2 to 4 real landmark intermediate stations strictly along the physical road path.
   - If they are far apart (intercity/regional), design an intercity high-speed transit corridor with 3 to 5 real major towns/bypass hubs along the most direct highway driving route.
   - STRICT CONSTRAINT: Do NOT select coordinate points inside lakes, rivers, forests, or off-road terrains. All proposed coordinates must be situated on major Expressways, Bypasses, or National Highways (NH/SH).

2. ROUTE OPTIMIZATION CRITERIA:
   - Optimize the route to balance minimal construction costs with high-speed commuter efficiency. Prioritize existing highway medians and bypasses to avoid land acquisition delays.

3. HIGH-ACCURACY ESTIMATED COORDINATES:
   - Provide highly accurate estimated latitude and longitude coordinates based on actual geography.

Provide the response strictly as a single JSON object. Do not include markdown or wrappers. Return ONLY valid JSON:
{
  "start_coords": { "lat": number, "lng": number },
  "end_coords": { "lat": number, "lng": number },
  "intermediate_stations": [
    {
      "name": "Station Name",
      "search_query": "Geocoding query (e.g. 'Town Name, State Name, India')",
      "estimated_lat": number,
      "estimated_lng": number
    }
  ]
}`;

    for (const modelName of FALLBACK_MODELS) {
        try {
            const model = genAI.getGenerativeModel({ 
                model: modelName,
                generationConfig: { responseMimeType: "application/json", temperature: 0.1 }
            });
            const result = await model.generateContent(prompt);
            responseText = result.response.text();
            successfulModel = modelName;
            break; 
        } catch (error) { console.error(`[AI] ${modelName} failed.`); }
    }

    try {
        const parsedData = parseCleanJson(responseText || "{}");
        
        let startCoords = await geocodeLocation(source);
        if (!startCoords && cityContext && cityContext !== "India") {
            startCoords = await geocodeLocation(`${source}, ${cityContext}`);
        }
        if (!startCoords && parsedData.start_coords) {
            startCoords = { lat: parsedData.start_coords.lat, lng: parsedData.start_coords.lng };
        }
        if (!startCoords) {
            startCoords = await getCityCenter(cityContext);
        }

        let endCoords = await geocodeLocation(destination);
        if (!endCoords && cityContext && cityContext !== "India") {
            endCoords = await geocodeLocation(`${destination}, ${cityContext}`);
        }
        if (!endCoords && parsedData.end_coords) {
            endCoords = { lat: parsedData.end_coords.lat, lng: parsedData.end_coords.lng };
        }
        if (!endCoords) {
            endCoords = { lat: startCoords.lat + 0.03, lng: startCoords.lng + 0.03 };
        }

        const snappedStart = await snapToRoadNetwork(startCoords);
        const snappedEnd = await snapToRoadNetwork(endCoords);

        const intermediates = parsedData.intermediate_stations || [];
        const finalRoute: any[] = [];

        finalRoute.push({ station: source, lat: snappedStart.lat, lng: snappedStart.lng, line: "Proposed Express" });

        for (let i = 0; i < intermediates.length; i++) {
            const item = intermediates[i];
            const name = item.name;
            const searchQ = item.search_query || `${name}, India`;
            
            let coords = null;

            // Step A: Search geocoding strictly with current city context first
            if (cityContext && cityContext.toLowerCase() !== "india") {
                coords = await geocodeLocation(`${name}, ${cityContext}`);
            }
            // Step B: General query searches
            if (!coords) {
                coords = await geocodeLocation(searchQ);
            }
            if (!coords) {
                coords = await geocodeLocation(name);
            }
            // Step C: Fallback to AI proposed estimation
            if (!coords && item.estimated_lat && item.estimated_lng) {
                coords = { lat: item.estimated_lat, lng: item.estimated_lng };
            }

            // Step D: CORE BOUNDARY PROTECTION (Prevents flying/drifting lines)
            const directDistance = calculateHaversineDistance(snappedStart.lat, snappedStart.lng, snappedEnd.lat, snappedEnd.lng);
            const maxAllowedDist = Math.max(15, directDistance * 2.0); // Strict local bounding limit

            let isSensible = false;
            if (coords) {
                const distFromStart = calculateHaversineDistance(snappedStart.lat, snappedStart.lng, coords.lat, coords.lng);
                const distFromEnd = calculateHaversineDistance(snappedEnd.lat, snappedEnd.lng, coords.lat, coords.lng);
                if (distFromStart <= maxAllowedDist && distFromEnd <= maxAllowedDist) {
                    isSensible = true;
                }
            }

            // Reject if drifted, and interpolate safely along route instead
            if (!coords || !isSensible) {
                const fraction = (i + 1) / (intermediates.length + 1);
                coords = {
                    lat: snappedStart.lat + (snappedEnd.lat - snappedStart.lat) * fraction,
                    lng: snappedStart.lng + (snappedEnd.lng - snappedStart.lng) * fraction
                };
            }

            const snappedCoords = await snapToRoadNetwork(coords);
            finalRoute.push({ station: name, lat: Number(snappedCoords.lat.toFixed(6)), lng: Number(snappedCoords.lng.toFixed(6)), line: "Proposed Express" });
        }

        finalRoute.push({ station: destination, lat: snappedEnd.lat, lng: snappedEnd.lng, line: "Proposed Express" });

        let totalDistance = 0;
        for (let i = 0; i < finalRoute.length - 1; i++) {
            totalDistance += calculateHaversineDistance(finalRoute[i].lat, finalRoute[i].lng, finalRoute[i+1].lat, finalRoute[i+1].lng);
        }

        const snappedGeometry = await getSnappedRouteGeometry(finalRoute.map(st => ({ lat: st.lat, lng: st.lng })));

        res.status(200).json({
            success: true,
            used_model: successfulModel,
            data: { route: finalRoute, totalEstimatedDistanceKm: Number(totalDistance.toFixed(2)), snappedGeometry }
        });

    } catch (parseError) {
        res.status(500).json({ success: false, error: "AI route layout calculation failure." });
    }
});

// ==========================================================
// MINIMUM SPANNING TREE (BUDGET OPTIMIZATION) USING PRIM'S
// ==========================================================
app.post('/api/v1/routes/network-budget', async (req, res) => {
    const { city, criteria } = req.body;
    if (!city) return res.status(400).json({ success: false, error: "City parameter required." });

    try {
        const stationsFromDB = await Station.find({ city: city.trim(), isOperational: true });
        const dynamicGraph: any = {};
        
        stationsFromDB.forEach(station => {
            const connectionsObj: Record<string, any> = {};
            if (station.connections) {
                const connEntries = (station.connections instanceof Map 
                    ? Array.from(station.connections.entries()) 
                    : Object.entries(station.connections)) as [string, any][];

                connEntries.forEach(([key, value]) => {
                    const destExists = stationsFromDB.some(s => s.name.toLowerCase() === key.toLowerCase());
                    if (destExists && value) {
                        connectionsObj[key] = { distance: value.distance, time: value.time, fare: value.fare, line: value.line };
                    }
                });
            }
            dynamicGraph[station.name] = { lat: station.lat, lng: station.lng, connections: connectionsObj };
        });
        
        const evalCriteria = (criteria || 'distance') as 'distance' | 'time' | 'fare';
        const mstResult = runPrims(dynamicGraph, evalCriteria);

        const enrichedEdges = mstResult.mstEdges.map(edge => ({
            from: edge.from,
            to: edge.to,
            fromCoords: [dynamicGraph[edge.from].lat, dynamicGraph[edge.from].lng],
            toCoords: [dynamicGraph[edge.to].lat, dynamicGraph[edge.to].lng],
            weight: edge.weight,
            line: "MST Budget Line"
        }));

        return res.status(200).json({ success: true, data: { totalMinimumCost: mstResult.totalCost, mstEdges: enrichedEdges } });

    } catch (error) {
        return res.status(500).json({ success: false, error: "Failed to calculate network budget." });
    }
});

app.listen(PORT, () => console.log(`[SERVER] Running successfully on port ${PORT}`));
