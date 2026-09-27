import React, { useState } from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TelemetryDeck from './components/TelemetryDeck';
import Features from './components/Features';
import ConstellationVisualizer from './components/ConstellationVisualizer';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface-container-lowest text-on-surface relative selection:bg-primary selection:text-black">
      {/* Background Cosmic Effects (L0 Canvas) */}
      <BackgroundEffects />

      {/* Navigation */}
      <Navbar onOpenDemo={() => setIsDemoOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-8 pb-16">
        <Hero onOpenDemo={() => setIsDemoOpen(true)} />
        <TelemetryDeck />
        <Features />
        <ConstellationVisualizer />
        <Pricing onOpenDemo={() => setIsDemoOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Demo Simulation Modal */}
      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </div>
  );
}
