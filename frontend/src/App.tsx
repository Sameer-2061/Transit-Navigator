import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import MapGL, { Marker, Source, Layer, NavigationControl, Popup } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json';

const getLineColor = (lineName: string) => {
  const lower = lineName?.toLowerCase() || '';
  if (lower.includes('walk') || lower.includes('pedestrian')) return '#9ca3af'; 
  if (lower.includes('proposed') || lower.includes('express') || lower.includes('future') || lower.includes('new corridor')) return '#f59e0b';
  if (lower.includes('yellow')) return '#eab308';
  if (lower.includes('blue')) return '#3b82f6';
  if (lower.includes('pink')) return '#ec4899';
  if (lower.includes('red')) return '#ef4444';
  if (lower.includes('green')) return '#22c55e';
  if (lower.includes('violet') || lower.includes('purple')) return '#8b5cf6';
  if (lower.includes('magenta')) return '#d946ef';
  if (lower.includes('orange')) return '#f97316';
  if (lower.includes('aqua')) return '#06b6d4';
  return '#4b5563';
};

export default function App() {
  const [activeMenu, setActiveMenu] = useState('route'); 
  
  const [cities, setCities] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [stations, setStations] = useState<any[]>([]);
  const [realtimeTrains, setRealtimeTrains] = useState<any[]>([]);
  const [hoveredStation, setHoveredStation] = useState<any>(null);
  const [selectedPopupStation, setSelectedPopupStation] = useState<any>(null);

  const [viewState, setViewState] = useState({ latitude: 30.7333, longitude: 76.7794, zoom: 11, pitch: 45, bearing: -10 });

  // 1. Route Planner State
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [routeData, setRouteData] = useState<any[]>([]); 
  const [selectedRouteIdx, setSelectedRouteIdx] = useState(0); 
  const [isCacheHit, setIsCacheHit] = useState(false);
  
  // Dijkstra Visualizer States
  const [isDijkstraTracing, setIsDijkstraTracing] = useState(false);
  const [dijkstraStep, setDijkstraStep] = useState(0);

  // 2. Local Grid Boost State
  const [simSource, setSimSource] = useState('');
  const [simDestination, setSimDestination] = useState('');
  const [simData, setSimData] = useState<any>(null);

  // 3. Pan-India Greenfield State
  const [greenfieldStartName, setGreenfieldStartName] = useState('');
  const [greenfieldEndName, setGreenfieldEndName] = useState('');
  const [aiGenerating, setAiGenerating] = useState(false);
  const [aiRouteData, setAiRouteData] = useState<any>(null);

  // 4. Network Budget (MST) State
  const [mstData, setMstData] = useState<any>(null);
  const [animatingMst, setAnimatingMst] = useState(false);
  const [currentMstStep, setCurrentMstStep] = useState(0);
  const [mstLogs, setMstLogs] = useState<string[]>([]);
  const [autoPlayMst, setAutoPlayMst] = useState(false);

  const [loading, setLoading] = useState(false);

  const dynamicPlaceholders = useMemo(() => {
    const city = selectedCity?.toLowerCase() || '';
    if (city.includes('kurukshetra')) return { start: 'e.g. Kurukshetra University', end: 'e.g. Sector 17' };
    if (city.includes('delhi') || city.includes('ncr')) return { start: 'e.g. Rajiv Chowk', end: 'e.g. Noida Sector 62' };
    if (city.includes('chandigarh')) return { start: 'e.g. Sector 17', end: 'e.g. Pinjore' };
    return { start: 'e.g. Origin in India', end: 'e.g. Destination in India' };
  }, [selectedCity]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/cities').then(res => {
      setCities(res.data.data);
      if (res.data.data.length > 0) setSelectedCity(res.data.data[0]);
    }).catch(() => console.log("Failed to load cities."));
  }, []);

  useEffect(() => {
    if (selectedCity) {
      axios.get(`http://localhost:5000/api/v1/stations?city=${selectedCity}`).then(res => {
        setStations(res.data.data);
        setSource(''); setDestination(''); setRouteData([]); setIsCacheHit(false); setIsDijkstraTracing(false); setDijkstraStep(0);
        setSimSource(''); setSimDestination(''); setSimData(null);
        setAiRouteData(null); setMstData(null); setAnimatingMst(false); setCurrentMstStep(0); setAutoPlayMst(false);
        setGreenfieldStartName(''); setGreenfieldEndName('');
        
        if (res.data.data.length > 0) {
          setViewState(prev => ({ ...prev, latitude: res.data.data[0].lat, longitude: res.data.data[0].lng, zoom: 11 }));
        }
      }).catch(() => console.log("Failed to load stations."));
    }
  }, [selectedCity]);

  useEffect(() => {
    if (!selectedCity) return;
    const eventSource = new EventSource(`http://localhost:5000/api/v1/telemetry/stream?city=${selectedCity}`);
    eventSource.onmessage = (event) => {
      try { setRealtimeTrains(JSON.parse(event.data).trains || []); } catch (err) {}
    };
    return () => eventSource.close();
  }, [selectedCity]);

  const backgroundEdges = useMemo(() => {
    const edges: any[] = [];
    const seen = new Set<string>();
    stations.forEach(station => {
      if (station.connections) {
        const conns: Record<string, any> = station.connections || {};
        Object.keys(conns).forEach((targetName: string) => {
          const connVal = conns[targetName];
          const key1 = `${station.name.trim().toLowerCase()}->${targetName.trim().toLowerCase()}`;
          const key2 = `${targetName.trim().toLowerCase()}->${station.name.trim().toLowerCase()}`;
          if (!seen.has(key1) && !seen.has(key2)) {
            seen.add(key1);
            const targetNode = stations.find(s => s.name.trim().toLowerCase() === targetName.trim().toLowerCase());
            if (targetNode) {
              edges.push({
                fromName: station.name, toName: targetNode.name,
                from: [station.lat, station.lng], to: [targetNode.lat, targetNode.lng],
                color: getLineColor(connVal.line), isWalk: (connVal.line || '').toLowerCase().includes('walk'),
                weight: connVal.distance
              });
            }
          }
        });
      }
    });
    return edges;
  }, [stations]);

  const handleOptimizeBudget = async () => {
    setLoading(true); setMstData(null); setCurrentMstStep(0); setAutoPlayMst(false);
    setMstLogs([ "[SYSTEM] Constructing Adjacency List...", "[SYSTEM] Ready to trace Prim's Algorithm. Click 'Next Step'." ]);
    try {
      const res = await axios.post('http://localhost:5000/api/v1/routes/network-budget', { city: selectedCity, criteria: 'distance' });
      setMstData(res.data.data); setAnimatingMst(true); 
    } catch (err) { alert("Optimization failed."); }
    finally { setLoading(false); }
  };

  const handleNextStep = () => {
    if (mstData && currentMstStep < mstData.mstEdges.length) {
      const edge = mstData.mstEdges[currentMstStep];
      setMstLogs(prev => [`[STEP ${currentMstStep + 1}] Adding edge: ${edge.from} -> ${edge.to} (+${edge.weight} km)`, ...prev]);
      setCurrentMstStep(prev => prev + 1);
    } else {
      setMstLogs(prev => [`[SUCCESS] Algorithm Finished! Minimum Spanning Tree is complete.`, ...prev]);
      setAutoPlayMst(false);
    }
  };

  useEffect(() => {
    if (autoPlayMst && mstData && currentMstStep < mstData.mstEdges.length) {
      const timer = setTimeout(handleNextStep, 500);
      return () => clearTimeout(timer);
    } else if (mstData && currentMstStep >= mstData.mstEdges.length) {
      setAutoPlayMst(false);
    }
  }, [autoPlayMst, currentMstStep, mstData]);

  const handleGenerateRoute = async () => {
    if (!source || !destination) return; 
    setLoading(true); 
    setRouteData([]); 
    setSelectedRouteIdx(0);
    setIsCacheHit(false);
    setIsDijkstraTracing(false);
    setDijkstraStep(0);

    try {
      const response = await axios.post('http://localhost:5000/api/v1/routes/existing', { 
        source, 
        destination, 
        city: selectedCity 
      });
      setRouteData(response.data.data);
      if (response.data.source === "LRU Cache") setIsCacheHit(true);
    } catch (error: any) { 
      alert(error.response?.data?.error || "Error processing route."); 
    } finally { 
      setLoading(false); 
    }
  };

  // Dijkstra Tracer Watcher
  useEffect(() => {
      if (isDijkstraTracing && routeData && routeData.length > 0 && dijkstraStep < routeData[0].exploredNodes.length) {
          const timer = setTimeout(() => setDijkstraStep(prev => prev + 1), 350); 
          return () => clearTimeout(timer);
      } else if (isDijkstraTracing && routeData && routeData.length > 0 && dijkstraStep >= routeData[0].exploredNodes.length) {
          setIsDijkstraTracing(false);
      }
  }, [isDijkstraTracing, dijkstraStep, routeData]);

  const handleSimulateCorridor = async () => {
    if (!simSource || !simDestination) return alert("Please select terminal nodes.");
    if (simSource === simDestination) return alert("Source and Destination cannot be the same.");
    setLoading(true); setSimData(null);
    try {
      const response = await axios.post('http://localhost:5000/api/v1/routes/simulate-corridor', { city: selectedCity, source: simSource, destination: simDestination });
      setSimData(response.data);
    } catch (error: any) { alert(error.response?.data?.error || "Simulation error."); } 
    finally { setLoading(false); }
  };

  // Greenfield Corridor Generation
  const handleGenerateAiGreenfieldRoute = async () => {
    if (!greenfieldStartName || !greenfieldEndName) return alert("Please provide origin and destination names.");
    setAiGenerating(true); setAiRouteData(null);
    try {
      const response = await axios.post('http://localhost:5000/api/v1/routes/generate-future-metro', { 
        source: greenfieldStartName, 
        destination: greenfieldEndName, 
        city: selectedCity
      });
      setAiRouteData(response.data.data);
    } catch (error: any) { alert(error.response?.data?.error || "AI generation failed."); } 
    finally { setAiGenerating(false); }
  };

  // PRIM'S VISUALIZER LOGIC
  const { visitedNodes, candidateEdges, currentMstCost } = useMemo(() => {
    if (activeMenu !== 'mst_budget' || !mstData || !animatingMst) return { visitedNodes: new Set<string>(), candidateEdges: [], currentMstCost: 0 };
    const visited = new Set<string>();
    let cost = 0;
    const allEdges = mstData.mstEdges;
    if (allEdges.length > 0) visited.add(allEdges[0].from); 
    for (let i = 0; i < currentMstStep; i++) {
      visited.add(allEdges[i].from);
      visited.add(allEdges[i].to);
      cost += allEdges[i].weight;
    }
    const candidates = backgroundEdges.filter(edge => {
      const hasFrom = visited.has(edge.fromName);
      const hasTo = visited.has(edge.toName);
      return (hasFrom && !hasTo) || (!hasFrom && hasTo);
    });
    return { visitedNodes: visited, candidateEdges: candidates, currentMstCost: Number(cost.toFixed(2)) };
  }, [mstData, currentMstStep, backgroundEdges, animatingMst, activeMenu]);

  const candidateEdgesGeoJSON = useMemo(() => ({
    type: 'FeatureCollection',
    features: candidateEdges.map((edge: any, idx: number) => ({
      type: 'Feature', id: idx, geometry: { type: 'LineString', coordinates: [[edge.from[1], edge.from[0]], [edge.to[1], edge.to[0]]] }
    }))
  }), [candidateEdges]);

  const activeRouteNodes = useMemo(() => {
    if (activeMenu === 'route' && routeData && routeData.length > 0) return routeData[selectedRouteIdx]?.route || [];
    if (activeMenu === 'local_boost') return simData?.metrics?.after?.route || [];
    if (activeMenu === 'greenfield') return aiRouteData?.route || [];
    return [];
  }, [activeMenu, routeData, selectedRouteIdx, simData, aiRouteData]);

  const activeRoutePositions = useMemo(() => activeRouteNodes.map((n: any) => [n.lat, n.lng]), [activeRouteNodes]);

  const activeSnappedPath = useMemo(() => {
    if (activeMenu === 'local_boost') return simData?.snappedGeometry || null;
    if (activeMenu === 'greenfield') return aiRouteData?.snappedGeometry || null;
    return null;
  }, [activeMenu, simData, aiRouteData]);

  const isProposedActive = useMemo(() => activeMenu === 'greenfield', [activeMenu]);

  const getActiveNodeColor = (node: any, idx: number) => {
    if (isProposedActive) return '#f59e0b'; 
    let lineName = node.line;
    if (idx === activeRouteNodes.length - 1 && idx > 0) lineName = activeRouteNodes[idx - 1]?.line;
    if (!lineName || lineName === 'Default') lineName = (idx > 0 ? activeRouteNodes[idx - 1]?.line : null) || 'Proposed';
    return getLineColor(lineName);
  };

  const bgLinesGeoJSON = useMemo(() => ({
    type: 'FeatureCollection',
    features: backgroundEdges.map((edge, idx) => ({
      type: 'Feature', id: idx, properties: { color: edge.color, isWalk: edge.isWalk },
      geometry: { type: 'LineString', coordinates: [[edge.from[1], edge.from[0]], [edge.to[1], edge.to[0]]] }
    }))
  }), [backgroundEdges]);

  const activeLineGeoJSON = useMemo(() => {
    if (activeSnappedPath && activeSnappedPath.length > 0) {
      return {
        type: 'FeatureCollection',
        features: [{
          type: 'Feature', properties: { color: getLineColor(activeRouteNodes[0]?.line || 'Proposed'), isProposed: true },
          geometry: { type: 'LineString', coordinates: activeSnappedPath.map((coord: [number, number]) => [coord[1], coord[0]]) }
        }]
      };
    }
    if (activeRouteNodes.length > 1) {
      const features = [];
      for (let i = 0; i < activeRouteNodes.length - 1; i++) {
        const current = activeRouteNodes[i];
        const next = activeRouteNodes[i + 1];
        const segmentLineName = (current.line && current.line !== 'Default') ? current.line : (next.line || 'Proposed');
        features.push({
          type: 'Feature', properties: { color: getLineColor(segmentLineName), isProposed: false },
          geometry: { type: 'LineString', coordinates: [[current.lng, current.lat], [next.lng, next.lat]] }
        });
      }
      return { type: 'FeatureCollection', features: features };
    }
    return null;
  }, [activeRouteNodes, activeSnappedPath]);

  useEffect(() => {
    if (activeRoutePositions.length > 0) {
      setViewState(prev => ({ ...prev, latitude: activeRoutePositions[0][0], longitude: activeRoutePositions[0][1], zoom: 12.5, pitch: 50 }));
    }
  }, [activeRoutePositions]);

  // Soft Sky-Blue Welcome Text (Refined for high readability)
  const WelcomeText = () => {
    const chars = [
      { char: 'W', color: '#ffffff' }, 
      { char: 'e', color: '#ffffff' }, 
      { char: 'l', color: '#e0f2fe' }, 
      { char: 'c', color: '#bae6fd' }, 
      { char: 'o', color: '#7dd3fc' }, 
      { char: 'm', color: '#38bdf8' }, 
      { char: 'e', color: '#0ea5e9' }, 
    ];
    return (
      <span style={{ fontSize: '15px', fontWeight: 700, fontFamily: 'monospace', letterSpacing: '0.02em' }}>
        {chars.map((item, idx) => (
          <span key={idx} style={{ color: item.color }}>{item.char}</span>
        ))}
      </span>
    );
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%', overflow: 'hidden', backgroundColor: '#09090b', color: '#ededed', fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {/* Injecting CSS Keyframes dynamically inside React */}
      <style>{`
        @keyframes trainSlide {
          0% { left: -45px; }
          100% { left: 105px; }
        }
        @keyframes trainPulse {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.15); opacity: 1; }
        }
      `}</style>

      {/* Header containing the vector logo, verified watermark, animated train, and sky welcome */}
      <div style={{ 
        height: '64px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '0 24px', 
        flexShrink: 0,
        position: 'relative',
        backgroundColor: '#09090b',
        borderBottom: '1px solid #1f1f23'
      }}>
        {/* Left Side: Logo & Spaced Monospaced Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Neon Crosshair SVG Logo */}
          <svg style={{ width: '28px', height: '28px', filter: 'drop-shadow(0 0 6px rgba(6,182,212,0.5))' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="4" y1="4" x2="20" y2="20" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="20" y1="4" x2="4" y2="20" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="12" cy="12" r="3.5" fill="#ffffff" stroke="#09090b" strokeWidth="1.5" />
          </svg>
          
          <h1 style={{ 
            margin: 0, 
            fontSize: '15px', 
            fontWeight: 700, 
            fontFamily: 'monospace', 
            letterSpacing: '0.18em', 
            textTransform: 'uppercase',
            color: '#ffffff'
          }}>
            TRANSIT NAVIGATOR
          </h1>
        </div>

        {/* Right Side: Developed By, Green Beacon, Realistic Train, and Sky Welcome */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          
          {/* Premium bold white developer watermark (Big and high visibility) */}
          <span style={{ 
            fontSize: '15px', 
            color: '#ffffff', 
            fontWeight: 700, 
            fontFamily: 'monospace', 
            letterSpacing: '0.02em',
            marginRight: '8px'
          }}>
            Developed by Sameer from NIT Kurukshetra
          </span>

          {/* Active online indicator dot with simulated glow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ 
              width: '8px', 
              height: '8px', 
              borderRadius: '50%', 
              backgroundColor: '#10b981', 
              display: 'inline-block',
              boxShadow: '0 0 8px #10b981'
            }}></span>
          </div>

          {/* SDE Animated Subway Train Indicator (Realistic segmented design with light-up windows) */}
          <div style={{
            width: '90px',
            height: '22px',
            borderRadius: '4px',
            border: '1.2px solid #27272a',
            backgroundColor: '#141416',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center'
          }}>
            {/* Dashed Rail Track */}
            <div style={{
              position: 'absolute',
              left: '4px',
              right: '4px',
              top: '50%',
              transform: 'translateY(-50%)',
              height: '0px',
              borderTop: '1px dashed #27272a',
              zIndex: 1
            }} />
            
            {/* Sliding Train Capsule - Realistic Segmented Subway Coach */}
            <div style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '32px',
              height: '10px',
              borderRadius: '2.5px',
              backgroundColor: '#1e293b', 
              border: '1px solid #06b6d4', 
              boxShadow: '0 0 5px rgba(6,182,212,0.5)',
              animation: 'trainSlide 2.8s linear infinite',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 3px'
            }}>
              {/* Micro Illuminated Coach Windows */}
              <div style={{ width: '4px', height: '4px', backgroundColor: '#38bdf8', borderRadius: '0.8px', opacity: 0.8 }} />
              <div style={{ width: '4px', height: '4px', backgroundColor: '#38bdf8', borderRadius: '0.8px', opacity: 0.8 }} />
              <div style={{ width: '4px', height: '4px', backgroundColor: '#38bdf8', borderRadius: '0.8px', opacity: 0.8 }} />
              
              {/* White Subway Lead Headlight */}
              <div style={{
                width: '2px',
                height: '4px',
                backgroundColor: '#ffffff',
                borderRadius: '50%',
                boxShadow: '0 0 4px #ffffff'
              }} />
            </div>
          </div>

          {/* Premium Sky Welcome Greeting */}
          <WelcomeText />
        </div>

        {/* Multi-Color color-blocked segmented bottom border indicator strip */}
        <div style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          right: 0, 
          height: '4px', 
          background: 'linear-gradient(to right, #f59e0b 0% 20%, #3b82f6 20% 40%, #8b5cf6 40% 60%, #ec4899 60% 80%, #06b6d4 80% 100%)' 
        }} />
      </div>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        
        {/* SIDEBAR 1: MENU WITH SECURE CREDENTIAL VERIFICATION PANEL */}
        <div style={{ width: '150px', borderRight: '1px solid #27272a', padding: '16px 8px 12px 8px', display: 'flex', flexDirection: 'column', gap: '8px', flexShrink: 0 }}>
          <p style={{ fontSize: '10px', fontWeight: 600, color: '#71717a', paddingLeft: '8px', letterSpacing: '1px' }}>MODULES</p>
          {[
            { id: 'route', label: "Route Planner (Dijkstra)" }, 
            { id: 'local_boost', label: 'Local Grid Boost' },
            { id: 'greenfield', label: 'Pan-India Greenfield' },
            { id: 'mst_budget', label: "Network Budget (MST-PRIM'S ALGO)" }
          ].map(item => (
            <button 
              key={item.id} 
              onClick={() => setActiveMenu(item.id)} 
              style={{ 
                textAlign: 'left', padding: '8px', 
                backgroundColor: activeMenu === item.id ? '#27272a' : 'transparent', 
                color: activeMenu === item.id ? '#ededed' : '#a1a1aa', 
                border: 'none', borderRadius: '6px', cursor: 'pointer', 
                fontSize: '11px', fontWeight: 500,
                whiteSpace: 'normal', lineHeight: '1.4'
              }}>
              {item.label}
            </button>
          ))}

          {/* High-Fidelity Verified Portfolio Security Card linking to LinkedIn */}
          <div style={{ 
            marginTop: 'auto', 
            padding: '12px 10px', 
            borderRadius: '8px', 
            backgroundColor: '#0f172a', 
            border: '1px solid #1e293b',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {/* Trust/Shield Verification SVG */}
              <svg style={{ width: '13px', height: '13px', color: '#38bdf8' }} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M2.166 4.9L10 1.154l7.834 3.746A1 1 0 0118.5 5.79v5c0 3.84-2.5 7.185-6.144 8.28l-2.356.71a1 1 0 01-.56 0l-2.356-.71A8.5 8.5 0 011.5 10.79v-5a1 1 0 01.666-.89zM10 5a1 1 0 00-.707.293l-3 3a1 1 0 001.414 1.414L9 8.414v5a1 1 0 102 0v-5l1.293 1.293a1 1 0 001.414-1.414l-3-3A1 1 0 0010 5z" clipRule="evenodd" />
              </svg>
              <span style={{ fontSize: '9px', fontWeight: 800, color: '#38bdf8', letterSpacing: '0.04em' }}>DEVELOPER NODE</span>
            </div>
            
            {/* Soft description link text */}
            <p style={{ margin: 0, fontSize: '9.5px', lineHeight: '1.3', color: '#94a3b8' }}>
              Designed & engineered by Sameer (NIT Kurukshetra). Visit my LinkedIn below for more details.
            </p>

            {/* Direct hyperlinked anchor button labeled "LinkedIn" */}
            <a 
              href="https://www.linkedin.com/in/sameer-kumar-4b1062257/" 
              target="_blank" 
              rel="noreferrer" 
              style={{ 
                color: '#ffffff', 
                textDecoration: 'none', 
                fontWeight: 700, 
                fontSize: '11px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                backgroundColor: '#1e293b',
                padding: '6px',
                borderRadius: '5px',
                border: '1px solid #334155',
                transition: 'all 0.15s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#38bdf8';
                e.currentTarget.style.backgroundColor = '#1e293b';
                e.currentTarget.style.boxShadow = '0 0 6px rgba(56, 189, 248, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#334155';
                e.currentTarget.style.backgroundColor = '#1e293b';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* SIDEBAR 2: CONFIGURATIONS */}
        <div style={{ width: '240px', borderRight: '1px solid #27272a', padding: '12px', overflowY: 'auto', flexShrink: 0 }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '15px', fontWeight: 600 }}>
            {activeMenu === 'route' && 'Commuter Route Planner'}
            {activeMenu === 'local_boost' && 'Local Grid Simulation'}
            {activeMenu === 'greenfield' && 'AI Greenfield Layout'}
            {activeMenu === 'mst_budget' && 'Infrastructure Optimizer'}
          </h2>

          {/* MODULE 1: Route Planner */}
          {activeMenu === 'route' && (
            <div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '11px', color: '#a1a1aa', fontWeight: 500, marginBottom: '6px', display: 'block' }}>OPERATIONAL CITY</label>
                <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', backgroundColor: '#18181b', color: 'white', border: '1px solid #27272a', outline: 'none', fontSize: '12px' }}>
                  {cities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '11px', color: '#a1a1aa', fontWeight: 500, marginBottom: '6px', display: 'block' }}>ORIGIN</label>
                  <select value={source} onChange={(e) => setSource(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', backgroundColor: '#18181b', color: 'white', border: '1px solid #27272a', outline: 'none', fontSize: '12px' }}>
                    <option value="">Search origin...</option>
                    {stations.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '11px', color: '#a1a1aa', fontWeight: 500, marginBottom: '6px', display: 'block' }}>DESTINATION</label>
                  <select value={destination} onChange={(e) => setDestination(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', backgroundColor: '#18181b', color: 'white', border: '1px solid #27272a', outline: 'none', fontSize: '12px' }}>
                    <option value="">Search destination...</option>
                    {stations.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                  </select>
                </div>
              </div>
              
              <button onClick={handleGenerateRoute} disabled={loading} style={{ width: '100%', padding: '10px', marginTop: '20px', backgroundColor: loading ? '#27272a' : '#ededed', color: loading ? '#a1a1aa' : '#09090b', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '12px' }}>
                {loading ? 'Analyzing Graph...' : 'Find Optimal Route'}
              </button>
            </div>
          )}

          {/* MODULE 2: Local Grid Boost */}
          {activeMenu === 'local_boost' && (
            <div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '11px', color: '#a1a1aa', fontWeight: 500, marginBottom: '6px', display: 'block' }}>OPERATIONAL CITY</label>
                <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', backgroundColor: '#18181b', color: 'white', border: '1px solid #27272a', outline: 'none', fontSize: '12px' }}>
                  {cities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '11px', color: '#a1a1aa', fontWeight: 500, marginBottom: '6px', display: 'block' }}>PROPOSED LINE START (A)</label>
                  <select value={simSource} onChange={(e) => setSimSource(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', backgroundColor: '#18181b', color: 'white', border: '1px solid #27272a', outline: 'none', fontSize: '12px' }}>
                    <option value="">Choose node...</option>
                    {stations.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '11px', color: '#a1a1aa', fontWeight: 500, marginBottom: '6px', display: 'block' }}>PROPOSED LINE END (B)</label>
                  <select value={simDestination} onChange={(e) => setSimDestination(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', backgroundColor: '#18181b', color: 'white', border: '1px solid #27272a', outline: 'none', fontSize: '12px' }}>
                    <option value="">Choose node...</option>
                    {stations.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                  </select>
                </div>
              </div>
              <button onClick={handleSimulateCorridor} disabled={loading} style={{ width: '100%', padding: '10px', marginTop: '20px', backgroundColor: loading ? '#27272a' : '#f59e0b', color: '#09090b', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '12px' }}>
                {loading ? 'Simulating...' : 'Construct Local Corridor'}
              </button>
            </div>
          )}

          {/* MODULE 3: Pan-India Greenfield */}
          {activeMenu === 'greenfield' && (
            <div>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <label style={{ fontSize: '11px', color: '#a1a1aa', display: 'block', marginBottom: '6px' }}>ORIGIN REGION NAME</label>
                  <input type="text" value={greenfieldStartName} onChange={(e) => setGreenfieldStartName(e.target.value)} placeholder={dynamicPlaceholders.start} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '8px', backgroundColor: '#18181b', color: 'white', border: '1px solid #27272a', outline: 'none', fontSize: '12px' }} />
                </div>
                <div>
                  <label style={{ fontSize: '11px', color: '#a1a1aa', display: 'block', marginBottom: '6px' }}>DESTINATION REGION NAME</label>
                  <input type="text" value={greenfieldEndName} onChange={(e) => setGreenfieldEndName(e.target.value)} placeholder={dynamicPlaceholders.end} style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '8px', backgroundColor: '#18181b', color: 'white', border: '1px solid #27272a', outline: 'none', fontSize: '12px' }} />
                </div>
              </div>

              <button onClick={handleGenerateAiGreenfieldRoute} disabled={aiGenerating} style={{ width: '100%', padding: '10px', marginTop: '20px', backgroundColor: aiGenerating ? '#27272a' : '#ec4899', color: '#ffffff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '12px' }}>
                {aiGenerating ? 'AI Designing...' : 'Generate AI Metro Corridor'}
              </button>
            </div>
          )}

          {/* MODULE 4: Network Budget (MST) */}
          {activeMenu === 'mst_budget' && (
            <div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '11px', color: '#a1a1aa', fontWeight: 500, marginBottom: '6px', display: 'block' }}>OPERATIONAL CITY</label>
                <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} style={{ width: '100%', padding: '10px', borderRadius: '8px', backgroundColor: '#18181b', color: 'white', border: '1px solid #27272a', outline: 'none', fontSize: '12px' }}>
                  {cities.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>

              <p style={{ margin: '0 0 16px 0', fontSize: '11px', color: '#a1a1aa', lineHeight: 1.5 }}>
                Calculate the absolute minimum track distance required to connect all operational stations in the selected city without creating any loops.
              </p>
              <button onClick={handleOptimizeBudget} disabled={loading || animatingMst} style={{ width: '100%', padding: '10px', backgroundColor: (loading || animatingMst) ? '#27272a' : 'rgba(16, 185, 129, 0.1)', color: '#10b981', border: '1px solid #10b981', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, fontSize: '12px' }}>
                {(loading || animatingMst) ? "Executing Prim's..." : 'Run Budget Optimizer'}
              </button>
            </div>
          )}

          {/* OUTPUT PANELS */}
          {activeMenu === 'route' && routeData && routeData.length > 0 && (
            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #27272a' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                <h3 style={{ margin: 0, fontSize: '12px', color: '#a1a1aa', fontWeight: 500 }}>ROUTE OPTIONS</h3>
                {isCacheHit && <span style={{ fontSize: '9px', padding: '3px 6px', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '10px', fontWeight: 600 }}>Cache Hit</span>}
              </div>

              <button 
                onClick={() => { setIsDijkstraTracing(true); setDijkstraStep(0); setSelectedRouteIdx(0); }} 
                disabled={isDijkstraTracing}
                style={{ width: '100%', padding: '10px', marginBottom: '12px', backgroundColor: isDijkstraTracing ? '#27272a' : 'rgba(234, 179, 8, 0.1)', color: isDijkstraTracing ? '#a1a1aa' : '#eab308', border: `1px solid ${isDijkstraTracing ? '#27272a' : '#eab308'}`, borderRadius: '6px', cursor: 'pointer', fontWeight: 600, fontSize: '11px' }}>
                {isDijkstraTracing ? 'Tracing Priority Queue...' : 'Run Visual Dry Run'}
              </button>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                {routeData.map((pathOption: any, idx: number) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedRouteIdx(idx)}
                    style={{ 
                      backgroundColor: selectedRouteIdx === idx ? 'rgba(59, 130, 246, 0.15)' : '#18181b', 
                      border: `1.5px solid ${selectedRouteIdx === idx ? '#3b82f6' : '#27272a'}`, 
                      borderRadius: '8px', padding: '10px', cursor: 'pointer', transition: 'all 0.2s'
                    }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <h4 style={{ margin: 0, fontSize: '12px', fontWeight: 600, color: pathOption.isOptimal ? '#10b981' : '#f59e0b' }}>
                        {pathOption.isOptimal ? 'Recommended Route' : 'Alternative Route'}
                      </h4>
                      <span style={{ fontSize: '12px', fontWeight: 600 }}>₹{pathOption.totalFare}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', fontSize: '11px', color: '#a1a1aa' }}>
                      <span>{pathOption.totalTime} min</span>
                      <span>•</span>
                      <span>{pathOption.totalDistance} km</span>
                      {idx !== 0 && (
                        <span style={{ color: '#ef4444', fontWeight: 500 }}>
                          (+{pathOption.totalTime - routeData[0].totalTime} min)
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', padding: '10px' }}>
                <p style={{ margin: '0 0 8px 0', fontSize: '11px', color: '#a1a1aa', fontWeight: 500 }}>TRANSIT NODES ({activeRouteNodes.length})</p>
                <div style={{ maxHeight: '160px', overflowY: 'auto' }}>
                  {activeRouteNodes.map((node: any, idx: number) => {
                    const listNodeColor = getActiveNodeColor(node, idx);
                    return (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: listNodeColor, flexShrink: 0 }}></div>
                        <span style={{ fontSize: '11px', color: '#ededed' }}>
                          {node.station} {node.line?.includes('Walk') ? ' (Walk)' : ''}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeMenu === 'local_boost' && simData && (
            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #27272a' }}>
              <div style={{ backgroundColor: '#18181b', border: '1px solid #d97706', borderRadius: '12px', padding: '10px', marginBottom: '12px' }}>
                <p style={{ margin: 0, fontSize: '10px', color: '#a1a1aa' }}>SYSTEM EFFICIENCY BOOST</p>
                <h2 style={{ margin: '2px 0 0 0', fontSize: '20px', color: '#10b981', fontWeight: 800 }}>{simData.improvement}</h2>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <div style={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', padding: '10px' }}>
                  <p style={{ margin: '0 0 2px 0', fontSize: '10px', color: '#a1a1aa' }}>Old Duration</p>
                  <h4 style={{ margin: 0, fontSize: '13px', fontWeight: 600 }}>{simData.before} min</h4>
                </div>
                <div style={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', padding: '10px' }}>
                  <p style={{ margin: '0 0 2px 0', fontSize: '10px', color: '#a1a1aa' }}>New Duration</p>
                  <h4 style={{ margin: 0, fontSize: '13px', fontWeight: 600, color: '#10b981' }}>{simData.after} min</h4>
                </div>
              </div>
            </div>
          )}

          {/* Greenfield layout panel rendering estimated construction budget */}
          {activeMenu === 'greenfield' && aiRouteData && (
            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #27272a' }}>
               <h3 style={{ margin: '0 0 10px 0', fontSize: '11px', color: '#ec4899', fontWeight: 600 }}>GREENFIELD CORRIDOR LAID</h3>
               
               <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '12px' }}>
                 <div style={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', padding: '10px' }}>
                   <p style={{ margin: '0 0 2px 0', fontSize: '10px', color: '#a1a1aa' }}>Total Distance</p>
                   <h4 style={{ margin: 0, fontSize: '13px', fontWeight: 600, color: '#ec4899' }}>{aiRouteData.totalEstimatedDistanceKm} km</h4>
                 </div>
                 <div style={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', padding: '10px' }}>
                   <p style={{ margin: '0 0 2px 0', fontSize: '10px', color: '#a1a1aa' }}>Est. Budget (₹250Cr/km)</p>
                   <h4 style={{ margin: 0, fontSize: '13px', fontWeight: 600 }}>₹{(aiRouteData.totalEstimatedDistanceKm * 250).toLocaleString('en-IN')} Cr</h4>
                 </div>
               </div>

               <div style={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px', padding: '10px' }}>
                <p style={{ margin: '0 0 8px 0', fontSize: '11px', color: '#a1a1aa', fontWeight: 500 }}>PROPOSED STATIONS ({activeRouteNodes.length})</p>
                <div style={{ maxHeight: '160px', overflowY: 'auto' }}>
                  {activeRouteNodes.map((node: any, idx: number) => {
                    return (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#f59e0b', flexShrink: 0 }}></div>
                        <span style={{ fontSize: '11px', color: '#ededed' }}>
                          {node.station}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {activeMenu === 'mst_budget' && mstData && (
             <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #27272a' }}>
               <div style={{ backgroundColor: '#18181b', border: '1px solid #10b981', borderRadius: '12px', padding: '10px' }}>
                 <p style={{ margin: 0, fontSize: '10px', color: '#a1a1aa' }}>MINIMUM INFRASTRUCTURE COST</p>
                 <h2 style={{ margin: '2px 0 0 0', fontSize: '20px', color: '#10b981', fontWeight: 800 }}>{currentMstCost} <span style={{fontSize: '11px', fontWeight: 500}}>km</span></h2>
                 <p style={{ margin: '4px 0 0 0', fontSize: '10px', color: '#71717a' }}>Step {currentMstStep} of {mstData.mstEdges.length}</p>
               </div>
             </div>
          )}
        </div>

        {/* MAP AREA */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <MapGL {...viewState} onMove={e => setViewState(e.viewState)} mapStyle={MAP_STYLE} mapLib={maplibregl as any} style={{ width: '100%', height: '100%' }}>
            <NavigationControl showCompass={true} showZoom={true} position="top-right" />

            {/* Background Tracks */}
            {activeMenu !== 'mst_budget' && (
              <Source id="bg" type="geojson" data={bgLinesGeoJSON as any}>
                <Layer id="bg-tracks-regular" type="line" filter={['!=', ['get', 'isWalk'], true]} paint={{ 'line-color': ['get', 'color'], 'line-width': 3, 'line-opacity': activeRouteNodes.length > 0 ? 0.15 : 0.75 }} />
                <Layer id="bg-tracks-walk" type="line" filter={['==', ['get', 'isWalk'], true]} paint={{ 'line-color': ['get', 'color'], 'line-width': 1.5, 'line-opacity': activeRouteNodes.length > 0 ? 0.08 : 0.45, 'line-dasharray': [2, 4] }} />
              </Source>
            )}

            {/* Active Routing */}
            {activeLineGeoJSON && activeMenu !== 'mst_budget' && (
              <Source id="active-track" type="geojson" data={activeLineGeoJSON as any}>
                <Layer id="active-track-layer" type="line" paint={{ 'line-color': ['get', 'color'], 'line-width': 5 }} />
              </Source>
            )}

            {/* MST Candidate Edges */}
            {activeMenu === 'mst_budget' && animatingMst && candidateEdges.length > 0 && (
               <Source id="pq-candidates" type="geojson" data={candidateEdgesGeoJSON as any}>
                 <Layer id="pq-line" type="line" paint={{ 'line-color': '#0ea5e9', 'line-width': 2, 'line-dasharray': [2, 2], 'line-opacity': 0.8 }} />
               </Source>
            )}

            {/* MST Confirmed Edges */}
            {activeMenu === 'mst_budget' && mstData && currentMstStep > 0 && (
              <Source id="mst-tracks" type="geojson" data={{
                type: 'FeatureCollection',
                features: mstData.mstEdges.slice(0, currentMstStep).map((e: any) => ({
                  type: 'Feature', geometry: { type: 'LineString', coordinates: [[e.fromCoords[1], e.fromCoords[0]], [e.toCoords[1], e.toCoords[0]]] }
                }))
              }}>
                <Layer id="mst-layer" type="line" paint={{ 'line-color': '#10b981', 'line-width': 4 }} />
              </Source>
            )}

            {/* Nodes/Markers with selective opacity and Dijkstra Highlights */}
            {(!isProposedActive) && stations.map((node, idx) => {
              const isHub = node.connections && Object.keys(node.connections).length > 2;
              const isVisitedMst = activeMenu === 'mst_budget' && (animatingMst || mstData) && visitedNodes.has(node.name);
              const isPartOfActiveRoute = activeRouteNodes.some((n: any) => n.station.toLowerCase() === node.name.toLowerCase());
              
              // DIJKSTRA DRY RUN HIGHLIGHT LOGIC
              const isExploredByDijkstra = activeMenu === 'route' && isDijkstraTracing && routeData?.length > 0 && dijkstraStep > 0 && routeData[0].exploredNodes.slice(0, dijkstraStep).includes(node.name);
              
              let opacityVal = 1.0;
              if (activeMenu === 'mst_budget') {
                if ((animatingMst || mstData) && !isVisitedMst) opacityVal = 0.2;
              } else if (activeMenu === 'route' && isDijkstraTracing) {
                if (!isExploredByDijkstra) opacityVal = 0.3; // Dim unexplored nodes during trace
              } else {
                if (activeRouteNodes.length > 0 && !isPartOfActiveRoute) opacityVal = 0.2;
              }

              return (
                <Marker
                  key={`station-node-${idx}`}
                  latitude={node.lat}
                  longitude={node.lng}
                  onClick={(e: any) => { e.originalEvent.stopPropagation(); setSelectedPopupStation(node); }}
                >
                  <div 
                    onMouseEnter={() => setHoveredStation(node)}
                    onMouseLeave={() => setHoveredStation(null)}
                    style={{
                      backgroundColor: isExploredByDijkstra ? '#eab308' : (activeMenu === 'mst_budget' && isVisitedMst ? '#10b981' : (isHub ? '#ffffff' : '#4b5563')),
                      width: hoveredStation?.name === node.name ? '10px' : (isExploredByDijkstra || (activeMenu === 'mst_budget' && isVisitedMst) ? '8px' : '6px'),
                      height: hoveredStation?.name === node.name ? '10px' : (isExploredByDijkstra || (activeMenu === 'mst_budget' && isVisitedMst) ? '8px' : '6px'),
                      borderRadius: '50%', border: '1.5px solid #09090b', 
                      boxShadow: isExploredByDijkstra ? '0 0 10px #eab308' : '0 0 6px rgba(0,0,0,0.6)',
                      cursor: 'pointer', transition: 'all 0.15s ease-out', opacity: opacityVal
                    }}
                  />
                </Marker>
              );
            })}

            {/* Active Highlighted Route Stations Text Labels */}
            {activeMenu !== 'mst_budget' && !isDijkstraTracing && activeRouteNodes.map((node: any, idx: number) => {
              const color = getActiveNodeColor(node, idx);
              return (
                <Marker key={`active-label-${idx}`} latitude={node.lat} longitude={node.lng}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pointerEvents: 'none' }}>
                    <div style={{ backgroundColor: color, width: '10px', height: '10px', borderRadius: '50%', border: '1.5px solid #ffffff', boxShadow: `0 0 8px ${color}` }} />
                    <span style={{ color: '#ffffff', fontSize: '10px', fontWeight: 600, marginTop: '4px', textShadow: '0 1px 4px #000000, 0 1px 2px #000000', whiteSpace: 'nowrap' }}>
                      {node.station}
                    </span>
                  </div>
                </Marker>
              );
            })}

            {/* Realtime Live Telemetry Trains */}
            {activeRoutePositions.length === 0 && activeMenu !== 'mst_budget' && realtimeTrains.map((train) => (
              <Marker key={train.id} latitude={train.lat} longitude={train.lng}>
                <div 
                  style={{
                    backgroundColor: getLineColor(train.line), width: '12px', height: '12px', borderRadius: '50%',
                    border: '2px solid #ffffff', boxShadow: `0 0 10px ${getLineColor(train.line)}`,
                    animation: 'trainPulse 0.8s ease-in-out infinite alternate', cursor: 'help'
                  }}
                  title={`Train Line: ${train.line}\nHeading: ${train.heading}`}
                />
              </Marker>
            ))}

            {/* Station Popups */}
            {selectedPopupStation && (
              <Popup latitude={selectedPopupStation.lat} longitude={selectedPopupStation.lng} onClose={() => setSelectedPopupStation(null)} closeButton={true} closeOnClick={false} anchor="top">
                <div style={{ color: '#09090b', fontFamily: 'Inter', fontSize: '12px', padding: '4px' }}>
                  <h3 style={{ margin: '0 0 4px 0', fontSize: '13px', fontWeight: 700 }}>{selectedPopupStation.name}</h3>
                  <p style={{ margin: 0, fontSize: '11px', color: '#4b5563' }}>City Limit: {selectedPopupStation.city}</p>
                  <p style={{ margin: '4px 0 0 0', fontSize: '11px', fontWeight: 600, color: selectedPopupStation.isOperational ? '#10b981' : '#ef4444' }}>
                    Status: {selectedPopupStation.isOperational ? 'Operational' : 'Maintenance Down'}
                  </p>
                </div>
              </Popup>
            )}

            {hoveredStation && (
              <Popup latitude={hoveredStation.lat} longitude={hoveredStation.lng} closeButton={false} closeOnClick={false} anchor="bottom">
                <div style={{ color: '#09090b', fontSize: '10px', fontWeight: 600, padding: '1px 4px' }}>{hoveredStation.name}</div>
              </Popup>
            )}
          </MapGL>

          {/* DIJKSTRA LIVE TRACE OVERLAY (Moved to Left Side) */}
          {activeMenu === 'route' && isDijkstraTracing && routeData && routeData.length > 0 && (
            <div style={{ position: 'absolute', bottom: '30px', left: '20px', width: '340px', backgroundColor: 'rgba(9, 9, 11, 0.95)', border: '1px solid #eab308', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', zIndex: 100 }}>
              <span style={{ fontSize: '12px', color: '#eab308', fontWeight: 700, marginBottom: '8px' }}>DIJKSTRA ALGORITHM TRACE</span>
              <p style={{ fontSize: '11px', color: '#a1a1aa', margin: '0 0 8px 0' }}>Priority Queue Expanding radially outwards...</p>
              
              <div style={{ padding: '8px', backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '6px', marginBottom: '8px' }}>
                <span style={{ fontSize: '10px', color: '#71717a', display: 'block' }}>CURRENTLY EXPLORING</span>
                <strong style={{ fontSize: '14px', color: '#ededed' }}>
                    {dijkstraStep > 0 ? routeData[0].exploredNodes[dijkstraStep - 1] : source}
                </strong>
              </div>
              
              <p style={{ margin: 0, fontSize: '10px', color: '#10b981' }}>Nodes Visited: {dijkstraStep} / {routeData[0].exploredNodes.length}</p>
            </div>
          )}

          {/* PRIM'S LIVE TRACE OVERLAY */}
          {activeMenu === 'mst_budget' && (mstData || animatingMst) && (
            <div style={{ position: 'absolute', bottom: '30px', left: '20px', width: '340px', backgroundColor: 'rgba(9, 9, 11, 0.95)', border: '1px solid #27272a', borderRadius: '8px', padding: '16px', display: 'flex', flexDirection: 'column', zIndex: 100 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '12px', color: '#10b981', fontWeight: 700 }}>PRIM'S ALGORITHM ENGINE</span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button onClick={() => setAutoPlayMst(!autoPlayMst)} style={{ background: '#27272a', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', cursor: 'pointer' }}>
                    {autoPlayMst ? 'Pause' : 'Auto Play'}
                  </button>
                  <button onClick={handleNextStep} disabled={currentMstStep >= mstData?.mstEdges.length} style={{ background: '#3b82f6', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', fontSize: '10px', cursor: 'pointer', opacity: currentMstStep >= mstData?.mstEdges.length ? 0.5 : 1 }}>
                    Next Step
                  </button>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '10px', color: '#a1a1aa', borderBottom: '1px solid #27272a', paddingBottom: '8px' }}>
                <div>Visited Nodes: {visitedNodes.size} / {stations.length}</div>
                <div>Candidates in PQ: {candidateEdges.length}</div>
              </div>
              <div style={{ height: '140px', overflowY: 'auto', display: 'flex', flexDirection: 'column-reverse', gap: '6px' }}>
                {mstLogs.map((log, i) => (
                  <div key={i} style={{ fontSize: '11px', fontFamily: 'monospace', color: log.includes('SUCCESS') ? '#10b981' : log.includes('STEP') ? '#ededed' : '#a1a1aa' }}>
                    {log}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

