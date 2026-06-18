import { useEffect, useState } from 'react';
import axios from 'axios';

export const AnalyticsDashboard = () => {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/v1/analytics/stats')
      .then(res => {
        setStats(res.data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ height: '40px', width: '200px', backgroundColor: '#18181b', borderRadius: '6px', animation: 'pulse 1.5s infinite' }}></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {[1, 2, 3, 4].map(i => (
            <div key={i} style={{ height: '110px', backgroundColor: '#18181b', borderRadius: '12px', animation: 'pulse 1.5s infinite' }}></div>
          ))}
        </div>
      </div>
    );
  }

  const cards = [
    { label: 'Total Stations in DB', val: stats?.totalStations || '0', icon: '🚉' },
    { label: 'Operational Networks', val: stats?.totalNetworks || '0', icon: '🗺️' },
    { label: 'Active Corridors', val: stats?.activeCorridors || '0', icon: '🛣️' },
    { label: 'Cache Hit Rate', val: stats?.cacheHitRate || '0%', icon: '⚡' }
  ];

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px', backgroundColor: '#09090b', minHeight: '100%', color: '#ededed' }}>
      
      {/* Dynamic Grid Dashboard Widgets */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        {cards.map((card, i) => (
          <div key={i} style={{ background: '#18181b', padding: '20px', borderRadius: '12px', border: '1px solid #27272a', transition: 'all 0.2s' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '11px', color: '#a1a1aa', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{card.label}</span>
              <span style={{ fontSize: '20px' }}>{card.icon}</span>
            </div>
            <h2 style={{ margin: 0, fontSize: '32px', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              {card.val}
              {card.label.includes('Hit Rate') && (
                <span style={{ fontSize: '12px', color: '#a1a1aa', fontWeight: 400 }}>of {stats?.cacheRequests} lookups</span>
              )}
            </h2>
          </div>
        ))}
      </div>

      {/* Advanced Telemetry Panel */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '16px' }}>
        
        {/* Core System Health */}
        <div style={{ background: '#18181b', padding: '24px', borderRadius: '12px', border: '1px solid #27272a' }}>
          <h3 style={{ margin: '0 0 16px 0', fontSize: '15px', fontWeight: 600, color: '#f4f4f5' }}>Operational Integrity Status</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                <span style={{ color: '#a1a1aa' }}>Active Operational Stations</span>
                <span style={{ fontWeight: 600, color: '#22c55e' }}>{stats?.operationalStations} / {stats?.totalStations}</span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: '#27272a', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${(stats?.operationalStations / stats?.totalStations) * 100}%`, height: '100%', backgroundColor: '#22c55e', borderRadius: '4px' }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                <span style={{ color: '#a1a1aa' }}>Emergency Closed Nodes</span>
                <span style={{ fontWeight: 600, color: '#ef4444' }}>{stats?.closedStations} Stations</span>
              </div>
              <div style={{ width: '100%', height: '8px', backgroundColor: '#27272a', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: `${(stats?.closedStations / stats?.totalStations) * 100}%`, height: '100%', backgroundColor: '#ef4444', borderRadius: '4px' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Financial Sizing */}
        <div style={{ background: '#18181b', padding: '24px', borderRadius: '12px', border: '1px solid #27272a', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <span style={{ fontSize: '14px', color: '#a1a1aa', fontWeight: 500 }}>System-wide Estimated Average Fare</span>
          <h2 style={{ fontSize: '44px', color: '#3b82f6', margin: '8px 0', fontWeight: 800 }}>{stats?.avgFare}</h2>
          <p style={{ margin: 0, fontSize: '12px', color: '#71717a', maxWidth: '300px' }}>
            Calculated dynamic base fare across operational corridors using standard DMRC distance slab matrix.
          </p>
        </div>

      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
};
