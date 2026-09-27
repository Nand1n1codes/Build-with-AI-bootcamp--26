import React from 'react';
import { Rocket, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-outline-variant/20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand & Mission Summary */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <a href="#" className="flex items-center gap-2.5 text-lg font-display font-bold text-on-surface tracking-wider mb-2">
            <span className="p-1.5 rounded-lg bg-primary-container/20 border border-primary/40 flex items-center justify-center text-primary shadow-[0_0_12px_rgba(221,183,255,0.4)]">
              <Rocket className="w-4 h-4" />
            </span>
            <span>LaunchPad</span>
          </a>

          <p className="font-body text-xs sm:text-sm text-on-surface-variant max-w-sm mb-4 leading-relaxed">
            Next-generation orbital telemetry, autonomous propulsion APIs, and constellation networking software.
          </p>

          {/* Compliance Badges */}
          <div className="flex flex-wrap items-center gap-2 font-label text-[11px] text-outline">
            <span className="px-2.5 py-0.5 rounded bg-surface-container-high border border-outline-variant/30 flex items-center gap-1 font-semibold text-gray-300">
              <ShieldCheck className="w-3 h-3 text-secondary" />
              ITAR COMPLIANT
            </span>
            <span className="px-2.5 py-0.5 rounded bg-surface-container-high border border-outline-variant/30 flex items-center gap-1 font-semibold text-gray-300">
              <CheckCircle2 className="w-3 h-3 text-primary" />
              ISO 27001
            </span>
            <span className="px-2.5 py-0.5 rounded bg-surface-container-high border border-outline-variant/30 font-semibold text-gray-300">
              NASA JPL READY
            </span>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-body">
          <a href="#telemetry" className="text-on-surface-variant hover:text-primary transition-colors">
            Telemetry Protocol
          </a>
          <a href="#features" className="text-on-surface-variant hover:text-primary transition-colors">
            Autonomous API
          </a>
          <a href="#constellation" className="text-on-surface-variant hover:text-primary transition-colors">
            Constellation Mesh
          </a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
            Privacy Architecture
          </a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">
            Terms of Orbit
          </a>
        </div>

        {/* Copyright Notice & Status */}
        <div className="flex flex-col items-center md:items-end text-xs font-mono text-on-surface-variant gap-1">
          <div className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>ALL SYSTEMS NOMINAL</span>
          </div>
          <p>© 2025 LaunchPad Systems Inc.</p>
        </div>

      </div>
    </footer>
  );
}
