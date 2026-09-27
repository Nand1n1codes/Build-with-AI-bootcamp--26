import React, { useState, useEffect } from 'react';
import { X, Play, RotateCcw, CheckCircle2, Terminal, Satellite, ShieldCheck, Flame } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [step, setStep] = useState(0);
  const [logs, setLogs] = useState([
    "[T-00:04:12] Initializing orbital transceiver handshake...",
    "[T-00:03:45] Ka-band polar uplink verified (Svalbard Ground 1)",
    "[T-00:02:30] Xenon tank pressure nominal at 3,120 PSI",
    "[T-00:01:00] Ephemeris trajectory vector loaded into flight bus",
    "[T-00:00:15] Autonomous collision avoidance lock confirmed",
    "[T+00:00:01] IGNITION SEQUENCE START — Thruster A 98.4%",
    "[T+00:00:10] Orbital speed reached: 7.66 km/s. Telemetry nominal."
  ]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="glass-l3 w-full max-w-3xl rounded-2xl border border-primary/50 overflow-hidden shadow-[0_0_60px_rgba(168,85,247,0.35)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/30 bg-surface-container-high/60">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <h3 className="font-display text-base font-bold text-white tracking-wide">
              SIMULATED MISSION CONTROL // LIVE FLIGHT DEMO
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-white hover:bg-surface-container-highest transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video / Cockpit Simulation Viewport */}
        <div className="p-6">
          <div className="relative h-64 rounded-xl bg-[#070814] border border-outline-variant/30 overflow-hidden flex flex-col items-center justify-center p-6 text-center">
            
            {/* Background Glow & Stars */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_70%)]" />
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#e1e1f5_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="relative z-10 flex flex-col items-center">
              <div className="p-4 rounded-full bg-primary/10 border border-primary/40 shadow-[0_0_24px_rgba(168,85,247,0.5)] mb-3 animate-float">
                <Satellite className="w-10 h-10 text-primary" />
              </div>

              <h4 className="font-display text-lg font-bold text-white mb-1">
                AURA-IX ORBITAL VELOCITY: 7.66 KM/S
              </h4>
              <p className="font-mono text-xs text-secondary mb-4">
                Telemetry Stream: 12ms Round-Trip · Intersat Link: 10 Gbps Nominal
              </p>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-mono text-xs">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  All Systems Verified
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-primary/40 text-primary font-mono text-xs">
                  <Flame className="w-3.5 h-3.5" />
                  Ion Thruster Online
                </span>
              </div>
            </div>
          </div>

          {/* Real-time Telemetry Terminal Logs */}
          <div className="mt-5 rounded-xl bg-black/90 border border-outline-variant/30 p-4 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20 mb-3 text-on-surface-variant">
              <span className="flex items-center gap-1.5 text-secondary">
                <Terminal className="w-3.5 h-3.5" />
                Raw Telemetry Terminal Feed
              </span>
              <span className="text-[11px] text-emerald-400">STREAMING ACTIVE</span>
            </div>

            <div className="h-28 overflow-y-auto space-y-1.5 pr-2 font-mono text-[11px] text-gray-300">
              {logs.map((log, idx) => (
                <div key={idx} className="flex gap-2">
                  <span className="text-secondary select-none">&gt;</span>
                  <span className={idx === logs.length - 1 ? 'text-primary font-semibold' : ''}>
                    {log}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-outline-variant/30 bg-surface-container-high/40">
          <span className="font-label text-xs text-on-surface-variant font-mono">
            Demo Environment · Cloud Sandbox v3.4
          </span>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="orbital-ghost-btn px-4 py-2 rounded-lg font-label text-xs uppercase tracking-wider text-on-surface font-semibold"
            >
              Close
            </button>
            <a
              href="#pricing"
              onClick={onClose}
              className="plasma-btn px-5 py-2 rounded-lg font-label text-xs uppercase tracking-wider text-white font-bold"
            >
              Start Full Mission Trial
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
