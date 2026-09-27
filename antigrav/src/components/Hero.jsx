import React from 'react';
import { Sparkles, ArrowRight, Play, ShieldCheck, Zap, Satellite, Database } from 'lucide-react';

export default function Hero({ onOpenDemo }) {
  const metrics = [
    { value: "99.999%", label: "Uplink Reliability", color: "text-secondary", icon: ShieldCheck },
    { value: "12ms", label: "Orbital Latency", color: "text-primary", icon: Zap },
    { value: "450+", label: "Active Satellites Tracked", color: "text-secondary", icon: Satellite },
    { value: "2.4B", label: "Daily Telemetry Packets", color: "text-primary", icon: Database },
  ];

  return (
    <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      {/* Engine Release Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-md mb-8 shadow-[0_0_24px_rgba(168,85,247,0.25)] hover:border-primary/60 transition-all cursor-default">
        <Sparkles className="w-4 h-4 text-primary animate-spin-slow" />
        <span className="font-label text-xs sm:text-sm text-primary uppercase tracking-wider font-semibold">
          V3.4 Engine Released — Zero-latency satellite mesh protocol
        </span>
      </div>

      {/* Main Headline */}
      <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold text-on-surface max-w-5xl tracking-tight mb-6 leading-tight">
        Orchestrate Space Missions at the{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-surface-tint to-secondary drop-shadow-[0_0_35px_rgba(168,85,247,0.5)]">
          Speed of Light
        </span>
      </h1>

      {/* Subtitle */}
      <p className="font-body text-base sm:text-lg lg:text-xl text-on-surface-variant max-w-3xl mb-10 leading-relaxed font-normal">
        LaunchPad empowers aerospace pioneers, satellite operators, and private space agencies to automate
        telemetry, propulsion sequences, and orbital constellation routing from a single unified cloud API.
      </p>

      {/* CTA Cluster */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
        <a
          href="#pricing"
          className="plasma-btn px-8 py-3.5 rounded-xl font-label text-sm uppercase tracking-wider text-white font-bold flex items-center gap-2.5 shadow-lg shadow-purple-900/40"
        >
          <span>Get Started</span>
          <ArrowRight className="w-4 h-4" />
        </a>

        <button
          type="button"
          onClick={onOpenDemo}
          className="orbital-ghost-btn px-7 py-3.5 rounded-xl font-label text-sm uppercase tracking-wider text-on-surface font-semibold flex items-center gap-2.5"
        >
          <Play className="w-4 h-4 text-secondary fill-secondary/20" />
          <span>Watch Mission Demo</span>
        </button>
      </div>

      {/* Social Proof Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
        {metrics.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div 
              key={idx} 
              className="glass-l1 rounded-xl p-5 sm:p-6 text-center border border-outline-variant/30 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all group"
            >
              <div className="flex justify-center mb-2">
                <div className="p-2 rounded-lg bg-surface-container-high/60 group-hover:scale-110 transition-transform">
                  <Icon className={`w-5 h-5 ${m.color}`} />
                </div>
              </div>
              <p className={`font-display text-2xl sm:text-3xl font-bold mb-1 ${m.color}`}>
                {m.value}
              </p>
              <p className="font-label text-xs sm:text-xs text-on-surface-variant uppercase tracking-wider">
                {m.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
