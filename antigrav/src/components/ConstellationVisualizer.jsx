import React, { useState } from 'react';
import { Network, Radio, Globe, Shield, RefreshCw, Cpu, Activity } from 'lucide-react';

export default function ConstellationVisualizer() {
  const [activePlane, setActivePlane] = useState('ALL');
  const [selectedNode, setSelectedNode] = useState({
    id: "SAT-049",
    plane: "Plane Alpha (LEO 550km)",
    latency: "8.4 ms",
    linkThroughput: "9.82 Gbps",
    health: "100% Nominal",
    battery: "96.4%",
    groundLink: "Svalbard Ground Polar-1"
  });

  const nodes = [
    { id: "SAT-012", plane: "ALPHA", x: 120, y: 70, status: "NOMINAL", lat: "9.1ms" },
    { id: "SAT-049", plane: "ALPHA", x: 260, y: 55, status: "ACTIVE", lat: "8.4ms" },
    { id: "SAT-088", plane: "ALPHA", x: 420, y: 75, status: "NOMINAL", lat: "8.9ms" },
    { id: "SAT-104", plane: "BETA",  x: 180, y: 150, status: "NOMINAL", lat: "11.2ms" },
    { id: "SAT-155", plane: "BETA",  x: 340, y: 135, status: "NOMINAL", lat: "10.4ms" },
    { id: "SAT-201", plane: "BETA",  x: 500, y: 160, status: "NOMINAL", lat: "12.0ms" },
    { id: "SAT-302", plane: "POLAR", x: 220, y: 220, status: "NOMINAL", lat: "14.2ms" },
    { id: "SAT-340", plane: "POLAR", x: 380, y: 215, status: "NOMINAL", lat: "13.8ms" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-outline-variant/20" id="constellation">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary/10 border border-secondary/30 mb-4">
          <span className="font-label text-xs text-secondary uppercase tracking-widest font-semibold flex items-center gap-1.5">
            <Network className="w-3.5 h-3.5 text-secondary" />
            Orbital Mesh Map
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-on-surface mb-4 tracking-tight">
          Dynamic Constellation Routing
        </h2>
        <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
          Inter-satellite optical crosslinks reconfigure in real-time, routing critical payload data across global orbital planes without ground relay bottlenecks.
        </p>
      </div>

      <div className="glass-l2 rounded-2xl p-6 sm:p-8 border border-secondary/30 relative overflow-hidden shadow-[0_0_40px_rgba(56,189,248,0.12)]">
        {/* Plane Selector Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-outline-variant/30 mb-6">
          <div className="flex items-center gap-2">
            <span className="font-label text-xs uppercase text-on-surface-variant mr-1">Orbital Plane Filter:</span>
            {['ALL', 'ALPHA', 'BETA', 'POLAR'].map((plane) => (
              <button
                key={plane}
                type="button"
                onClick={() => setActivePlane(plane)}
                className={`px-3 py-1 rounded-lg text-xs font-label uppercase font-semibold transition-all ${
                  activePlane === plane
                    ? 'bg-secondary/20 border border-secondary text-secondary shadow-[0_0_12px_rgba(56,189,248,0.4)]'
                    : 'bg-surface-container-high/60 border border-outline-variant/30 text-on-surface-variant hover:border-outline-variant'
                }`}
              >
                {plane}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-secondary">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>MESH TOPOLOGY: 100% HEALTHY</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Interactive Constellation Visual Canvas */}
          <div className="lg:col-span-2 relative h-80 rounded-xl bg-[#090b17] border border-outline-variant/30 overflow-hidden flex items-center justify-center p-4">
            
            {/* Earth Horizon Arc at bottom */}
            <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-[100%] bg-gradient-to-t from-sky-950/80 via-blue-900/20 to-transparent border-t border-sky-400/30" />

            {/* SVG Link Lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 300">
              <defs>
                <linearGradient id="laserBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#ddb7ff" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.8" />
                </linearGradient>
              </defs>

              {/* Optical Laser Crosslinks */}
              <line x1="120" y1="70" x2="260" y2="55" stroke="url(#laserBeam)" strokeWidth="1.5" strokeDasharray="6 3" />
              <line x1="260" y1="55" x2="420" y2="75" stroke="url(#laserBeam)" strokeWidth="1.5" strokeDasharray="6 3" />
              
              <line x1="180" y1="150" x2="340" y2="135" stroke="url(#laserBeam)" strokeWidth="1.5" strokeDasharray="6 3" />
              <line x1="340" y1="135" x2="500" y2="160" stroke="url(#laserBeam)" strokeWidth="1.5" strokeDasharray="6 3" />

              <line x1="220" y1="220" x2="380" y2="215" stroke="url(#laserBeam)" strokeWidth="1.5" strokeDasharray="6 3" />

              {/* Cross-Plane Vertical Links */}
              <line x1="260" y1="55" x2="340" y2="135" stroke="#a855f7" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
              <line x1="180" y1="150" x2="220" y2="220" stroke="#a855f7" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />

              {/* Downlink Beams to Earth */}
              <line x1="220" y1="220" x2="300" y2="280" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 2" />
              <circle cx="300" cy="280" r="4" fill="#10b981" />
            </svg>

            {/* Satellite Interactive Nodes */}
            {nodes.map((node) => {
              const isSelected = selectedNode.id === node.id;
              const matchesPlane = activePlane === 'ALL' || activePlane === node.plane;

              return (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setSelectedNode({
                    id: node.id,
                    plane: `Plane ${node.plane} (LEO)`,
                    latency: node.lat,
                    linkThroughput: "9.94 Gbps",
                    health: "100% Nominal",
                    battery: "97.8%",
                    groundLink: "Svalbard Ground Polar-1"
                  })}
                  style={{
                    left: `${(node.x / 600) * 100}%`,
                    top: `${(node.y / 300) * 100}%`,
                  }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 ${
                    matchesPlane ? 'opacity-100 scale-100' : 'opacity-20 scale-75'
                  }`}
                >
                  <div className={`p-1.5 rounded-full border transition-all ${
                    isSelected
                      ? 'bg-secondary border-white shadow-[0_0_18px_#38bdf8] scale-125'
                      : 'bg-surface-container-high/90 border-secondary/60 hover:border-white'
                  }`}>
                    <Radio className={`w-3 h-3 ${isSelected ? 'text-black font-bold' : 'text-secondary'}`} />
                  </div>
                  <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-[9px] font-mono text-white/80 whitespace-nowrap bg-surface-container-lowest/80 px-1 rounded border border-outline-variant/30">
                    {node.id}
                  </span>
                </button>
              );
            })}

            <div className="absolute bottom-2 left-4 text-[11px] font-mono text-on-surface-variant flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Ground Terminal: Polar Base S-1 (Synced)</span>
            </div>
          </div>

          {/* Node Inspector Card */}
          <div className="glass-l1 rounded-xl p-6 border border-outline-variant/30 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30 mb-4">
                <div>
                  <span className="font-label text-xs uppercase text-secondary tracking-widest font-semibold">Node Telemetry</span>
                  <h4 className="font-display text-xl font-bold text-white mt-0.5">{selectedNode.id}</h4>
                </div>
                <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 font-mono text-xs border border-emerald-500/30">
                  {selectedNode.health}
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between py-1.5 border-b border-outline-variant/20">
                  <span className="text-on-surface-variant font-sans">Orbital Plane:</span>
                  <span className="text-white font-semibold">{selectedNode.plane}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-outline-variant/20">
                  <span className="text-on-surface-variant font-sans">Inter-Sat Latency:</span>
                  <span className="text-secondary font-bold">{selectedNode.latency}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-outline-variant/20">
                  <span className="text-on-surface-variant font-sans">Laser Bandwidth:</span>
                  <span className="text-primary font-bold">{selectedNode.linkThroughput}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-outline-variant/20">
                  <span className="text-on-surface-variant font-sans">Bus Battery State:</span>
                  <span className="text-emerald-400 font-bold">{selectedNode.battery}</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-on-surface-variant font-sans">Active Downlink:</span>
                  <span className="text-white truncate max-w-[150px]">{selectedNode.groundLink}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-outline-variant/30">
              <button 
                type="button"
                className="w-full orbital-ghost-btn py-2 rounded-lg font-label text-xs uppercase tracking-wider text-secondary font-semibold"
              >
                Query Transceiver Logs
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
