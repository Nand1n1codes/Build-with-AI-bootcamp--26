import React from 'react';

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Ambient Cosmic Lighting (L0 Base) */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-primary/10 rounded-full blur-[140px] animate-pulseGlow" />
      <div className="absolute top-[25%] -left-32 w-[650px] h-[650px] bg-secondary/10 rounded-full blur-[130px]" />
      <div className="absolute top-[55%] -right-40 w-[750px] h-[750px] bg-purple-600/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[400px] bg-sky-500/8 rounded-full blur-[140px]" />

      {/* Subtle Starlight Grid overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#e1e1f5_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Subtle horizontal telemetry scanline effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.005] to-transparent pointer-events-none" />
    </div>
  );
}
