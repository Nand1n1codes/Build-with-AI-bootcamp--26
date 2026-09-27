import React, { useState, useEffect } from 'react';
import { Satellite, Fan, Gauge, Radio, RefreshCw, Zap, Flame, ShieldAlert } from 'lucide-react';

export default function TelemetryDeck() {
  const [thrusterAOn, setThrusterAOn] = useState(true);
  const [thrusterBOn, setThrusterBOn] = useState(false);
  const [targetOrbit, setTargetOrbit] = useState('SSO-AM');
  const [altitude, setAltitude] = useState(542.4);
  const [velocity, setVelocity] = useState(7.66);
  const [deltaV, setDeltaV] = useState(342.8);
  const [xenonPsi, setXenonPsi] = useState(3120);
  const [burnTime, setBurnTime] = useState(142);
  const [satellitePosition, setSatellitePosition] = useState(0);

  // Real-time orbital tick simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setSatellitePosition((prev) => (prev + 1) % 100);
      setAltitude((prev) => +(542.4 + Math.sin(Date.now() / 2000) * 1.8).toFixed(1));
      setVelocity((prev) => +(7.66 + Math.cos(Date.now() / 3000) * 0.04).toFixed(2));
      
      if (thrusterAOn || thrusterBOn) {
        setXenonPsi((prev) => Math.max(2800, prev - 0.2));
        setBurnTime((prev) => Math.max(0, prev - 1));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [thrusterAOn, thrusterBOn]);

  const toggleThrusterA = () => setThrusterAOn(!thrusterAOn);
  const toggleThrusterB = () => setThrusterBOn(!thrusterBOn);

  // Compute satellite position along cubic bezier trajectory arc
  const t = satellitePosition / 100;
  // Curve: P0(15, 85), P1(90, 15), P2(185, 35)
  const satX = (1 - t) * (1 - t) * 15 + 2 * (1 - t) * t * 90 + t * t * 185;
  const satY = (1 - t) * (1 - t) * 85 + 2 * (1 - t) * t * 15 + t * t * 35;

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="telemetry">
      <div className="w-full glass-l2 rounded-2xl p-4 sm:p-8 relative overflow-hidden text-left border border-primary/40 shadow-[0_0_50px_rgba(168,85,247,0.18)]">
        
        {/* Cockpit Window Top Highlight Bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

        {/* Dashboard Header Bar */}
        <div className="flex flex-wrap items-center justify-between pb-4 border-b border-outline-variant/30 gap-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="ml-2 font-display text-sm sm:text-base text-on-surface font-bold tracking-wider flex items-center gap-2">
              <span>AURA-IX // ORBITAL TELEMETRY DECK</span>
              <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] bg-primary/20 text-primary border border-primary/30 uppercase">
                Hardware Link: Active
              </span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
            <span className="px-3 py-1 rounded-full bg-surface-container-high/90 font-label text-xs text-secondary border border-secondary/40 shadow-sm flex items-center gap-1.5 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
              EPHEMERIS: SYNCED
            </span>
            <span className="font-label text-xs text-on-surface-variant font-mono">
              ALT: <span className="text-white font-semibold">{altitude} KM</span>
            </span>
            <span className="font-label text-xs text-on-surface-variant font-mono">
              VEL: <span className="text-secondary font-semibold">{velocity} KM/S</span>
            </span>
          </div>
        </div>

        {/* Orbit Selection Chips */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2 text-xs font-label">
          <span className="text-on-surface-variant uppercase tracking-wider text-[11px] mr-1">Flight Profile:</span>
          {['SSO-AM', 'GEO-STATIONARY', 'MOLNIYA-12', 'LUNAR-TLI'].map((mode) => (
            <button
              key={mode}
              type="button"
              onClick={() => setTargetOrbit(mode)}
              className={`px-3 py-1 rounded-lg border transition-all ${
                targetOrbit === mode
                  ? 'bg-primary/20 border-primary text-white shadow-[0_0_12px_rgba(168,85,247,0.4)]'
                  : 'bg-surface-container-lowest/60 border-outline-variant/30 text-on-surface-variant hover:border-outline-variant'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>

        {/* Telemetry 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Column A: Vector Trajectory Arc */}
          <div className="glass-l1 rounded-xl p-5 border border-outline-variant/30 flex flex-col justify-between hover:border-secondary/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-label text-xs text-secondary uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <Satellite className="w-4 h-4 text-secondary" />
                  Vector Trajectory
                </span>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  TRACKING
                </span>
              </div>

              {/* Trajectory Canvas Display */}
              <div className="h-36 w-full rounded-lg bg-surface-container-lowest/90 border border-outline-variant/30 relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_75%)]" />

                {/* Radar Grid Lines */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute w-28 h-28 rounded-full border border-sky-500/20 pointer-events-none" />
                <div className="absolute w-16 h-16 rounded-full border border-sky-500/30 pointer-events-none" />

                {/* Radar Sweep Effect */}
                <div className="absolute w-32 h-32 rounded-full border-r-2 border-secondary/40 animate-radarSweep pointer-events-none" />

                {/* Trajectory Arc Curve SVG */}
                <svg className="w-full h-full p-2 relative z-10" viewBox="0 0 200 100" fill="none">
                  {/* Coordinate Axes */}
                  <line x1="0" y1="50" x2="200" y2="50" stroke="#323443" strokeDasharray="2 2" strokeWidth="0.8" />
                  <line x1="100" y1="0" x2="100" y2="100" stroke="#323443" strokeDasharray="2 2" strokeWidth="0.8" />

                  {/* Projected Path */}
                  <path d="M 15 85 Q 90 15 185 35" stroke="#7bd0ff" strokeDasharray="4 3" strokeWidth="2" />

                  {/* Satellite Current Real-Time Position */}
                  <circle cx={satX} cy={satY} r="7" fill="#a855f7" opacity="0.3" className="animate-ping" />
                  <circle cx={satX} cy={satY} r="4" fill="#ddb7ff" stroke="#a855f7" strokeWidth="1.5" />
                  <circle cx={satX} cy={satY} r="1.5" fill="#ffffff" />
                </svg>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-outline-variant/30 flex justify-between font-label text-xs text-on-surface-variant font-mono">
              <div>APOGEE: <span className="text-white font-semibold">554 KM</span></div>
              <div>INC: <span className="text-secondary font-bold">53.2°</span></div>
              <div>PERIGEE: <span className="text-white font-semibold">538 KM</span></div>
            </div>
          </div>

          {/* Column B: Propulsion Grid */}
          <div className="glass-l1 rounded-xl p-5 border border-outline-variant/30 flex flex-col justify-between hover:border-primary/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-label text-xs text-primary uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-primary" />
                  Propulsion Grid
                </span>
                <span className="text-[11px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">
                  RCS ONLINE
                </span>
              </div>

              <div className="space-y-2.5">
                {/* Thruster A */}
                <div 
                  onClick={toggleThrusterA}
                  className="p-2.5 rounded-lg bg-surface-container-lowest/80 border border-outline-variant/30 flex items-center justify-between cursor-pointer hover:border-primary/50 transition-all"
                  title="Click to toggle Thruster A"
                >
                  <div className="flex items-center gap-2">
                    <Fan className={`w-4 h-4 ${thrusterAOn ? 'text-emerald-400 animate-spin' : 'text-gray-500'}`} />
                    <span className="font-label text-xs text-on-surface font-medium">ION THRUSTER A</span>
                  </div>
                  <span className={`font-label text-xs font-bold ${thrusterAOn ? 'text-emerald-400' : 'text-gray-400'}`}>
                    {thrusterAOn ? 'IGNITED (98.4%)' : 'OFFLINE'}
                  </span>
                </div>

                {/* Thruster B */}
                <div 
                  onClick={toggleThrusterB}
                  className="p-2.5 rounded-lg bg-surface-container-lowest/80 border border-outline-variant/30 flex items-center justify-between cursor-pointer hover:border-secondary/50 transition-all"
                  title="Click to toggle Thruster B"
                >
                  <div className="flex items-center gap-2">
                    <Fan className={`w-4 h-4 ${thrusterBOn ? 'text-secondary animate-spin' : 'text-gray-500'}`} />
                    <span className="font-label text-xs text-on-surface font-medium">ION THRUSTER B</span>
                  </div>
                  <span className={`font-label text-xs font-bold ${thrusterBOn ? 'text-secondary' : 'text-gray-400'}`}>
                    {thrusterBOn ? 'IGNITED (94.0%)' : 'STANDBY'}
                  </span>
                </div>

                {/* RCS Quad */}
                <div className="p-2.5 rounded-lg bg-surface-container-lowest/80 border border-outline-variant/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-emerald-400" />
                    <span className="font-label text-xs text-on-surface font-medium">RCS QUAD 1-4</span>
                  </div>
                  <span className="font-label text-xs text-emerald-400 font-bold">NOMINAL</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-outline-variant/30 flex justify-between font-label text-xs text-on-surface-variant font-mono">
              <div>XENON PSI: <span className="text-white font-bold">{Math.round(xenonPsi)}</span></div>
              <div>ISP: <span className="text-primary font-bold">1,650s</span></div>
            </div>
          </div>

          {/* Column C: Delta-V Budget & Real-Time Sparkline */}
          <div className="glass-l1 rounded-xl p-5 border border-outline-variant/30 flex flex-col justify-between hover:border-secondary/40 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-label text-xs text-secondary uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <Gauge className="w-4 h-4 text-secondary" />
                  Delta-V Budget
                </span>
                <span className="text-[11px] font-mono text-sky-300 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-500/30">
                  AUTO-STABILIZED
                </span>
              </div>

              <div className="p-3 rounded-lg bg-surface-container-lowest/90 border border-outline-variant/30">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-display text-2xl font-bold text-white">
                    {deltaV} m/s
                  </span>
                  <span className="font-label text-xs text-secondary font-semibold">REMAINING</span>
                </div>

                {/* Sparkline SVG */}
                <svg className="w-full h-14 overflow-visible" viewBox="0 0 100 30" fill="none">
                  <defs>
                    <linearGradient id="sparklineGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  <polygon 
                    fill="url(#sparklineGrad)" 
                    points="0,25 15,22 30,24 45,18 60,20 75,12 90,14 100,8 100,30 0,30" 
                  />
                  <polyline 
                    points="0,25 15,22 30,24 45,18 60,20 75,12 90,14 100,8" 
                    stroke="#38bdf8" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                  />
                  <circle cx="100" cy="8" r="3" fill="#38bdf8" className="animate-pulse" />
                </svg>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-outline-variant/30 flex justify-between font-label text-xs text-on-surface-variant font-mono">
              <div>TARGET: <span className="text-secondary font-bold">{targetOrbit}</span></div>
              <div>BURNTIME: <span className="text-white font-bold">{burnTime}s</span></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
