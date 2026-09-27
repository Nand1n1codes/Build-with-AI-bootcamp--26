import React, { useState } from 'react';
import { Rocket, PlayCircle, Menu, X, Radio } from 'lucide-react';

export default function Navbar({ onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-surface-container/70 backdrop-blur-md sticky top-0 z-50 shadow-lg shadow-surface-container-lowest/60 border-b border-outline-variant/30 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5">
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-xl font-display font-bold text-on-surface tracking-wider group"
        >
          <span className="p-2 rounded-lg bg-primary-container/20 border border-primary/40 flex items-center justify-center text-primary group-hover:shadow-[0_0_16px_rgba(221,183,255,0.7)] transition-all">
            <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </span>
          <span className="bg-gradient-to-r from-on-surface to-on-surface/80 bg-clip-text">LaunchPad</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#telemetry" 
            className="text-secondary font-label text-sm font-medium drop-shadow-[0_0_8px_rgba(123,208,255,0.5)] hover:text-white transition-all active:scale-95"
          >
            Telemetry
          </a>
          <a 
            href="#features" 
            className="text-on-surface-variant font-label text-sm font-medium hover:text-primary hover:drop-shadow-[0_0_8px_rgba(221,183,255,0.4)] transition-all active:scale-95"
          >
            Propulsion API
          </a>
          <a 
            href="#constellation" 
            className="text-on-surface-variant font-label text-sm font-medium hover:text-primary hover:drop-shadow-[0_0_8px_rgba(221,183,255,0.4)] transition-all active:scale-95"
          >
            Constellation
          </a>
          <a 
            href="#pricing" 
            className="text-on-surface-variant font-label text-sm font-medium hover:text-primary hover:drop-shadow-[0_0_8px_rgba(221,183,255,0.4)] transition-all active:scale-95"
          >
            Pricing
          </a>
          <a 
            href="#docs" 
            className="text-on-surface-variant font-label text-sm font-medium hover:text-primary hover:drop-shadow-[0_0_8px_rgba(221,183,255,0.4)] transition-all active:scale-95"
          >
            Docs
          </a>
        </nav>

        {/* Trailing Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Live Telemetry Status Pill */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/80 border border-secondary/30 shadow-[0_0_10px_rgba(56,189,248,0.1)]">
            <span className="w-2 h-2 rounded-full bg-secondary animate-ping drop-shadow-[0_0_6px_#7bd0ff]" />
            <span className="font-label text-xs text-secondary uppercase tracking-widest font-semibold">
              Live Telemetry
            </span>
          </div>

          <button 
            type="button" 
            onClick={onOpenDemo}
            className="orbital-ghost-btn px-4 py-2 rounded-lg font-label text-xs uppercase tracking-wider text-on-surface font-semibold flex items-center gap-1.5"
          >
            <PlayCircle className="w-3.5 h-3.5 text-secondary" />
            Watch Demo
          </button>

          <a 
            href="#pricing"
            className="plasma-btn px-4 py-2 rounded-lg font-label text-xs uppercase tracking-wider text-white font-semibold flex items-center gap-1.5"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-surface-container-high text-on-surface border border-outline-variant/40"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-l2 border-b border-outline-variant/40 px-6 py-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top duration-200">
          <a 
            href="#telemetry" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-secondary font-label text-sm font-medium py-1"
          >
            Telemetry Deck
          </a>
          <a 
            href="#features" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-on-surface font-label text-sm font-medium py-1 hover:text-primary"
          >
            Propulsion API
          </a>
          <a 
            href="#constellation" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-on-surface font-label text-sm font-medium py-1 hover:text-primary"
          >
            Constellation Mesh
          </a>
          <a 
            href="#pricing" 
            onClick={() => setMobileMenuOpen(false)}
            className="text-on-surface font-label text-sm font-medium py-1 hover:text-primary"
          >
            Pricing Plans
          </a>
          <div className="pt-2 border-t border-outline-variant/30 flex flex-col gap-2.5">
            <button 
              type="button" 
              onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
              className="orbital-ghost-btn w-full py-2.5 rounded-lg font-label text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <PlayCircle className="w-4 h-4 text-secondary" />
              Watch Demo
            </button>
            <a 
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="plasma-btn w-full py-2.5 rounded-lg font-label text-xs uppercase tracking-wider text-center text-white font-semibold"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
