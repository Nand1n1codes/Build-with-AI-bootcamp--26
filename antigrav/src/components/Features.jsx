import React, { useState } from 'react';
import { Activity, Zap, Network, ChevronRight, CheckCircle2, Cpu, Shield, Orbit } from 'lucide-react';

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const features = [
    {
      id: "telemetry",
      tag: "Telemetry Engine",
      title: "Real-Time Orbital Telemetry",
      description: "Multi-band downlink processing, sub-second anomaly detection, and automated radar trajectory correction with high-tech visual metric display.",
      tagline: "S/X/Ka Band Ingestion",
      icon: Activity,
      color: "text-secondary",
      borderColor: "hover:border-secondary/50",
      accentBg: "bg-secondary/10",
      details: [
        "Concurrent ingestion of S, X, and Ka band radio payloads up to 10 Gbps",
        "Sub-second machine-learning anomaly detection directly on edge satellite compute",
        "Automated radar coordinate transformation with NORAD Two-Line Element (TLE) sync",
        "Sub-10 millisecond packet jitter with guaranteed QoS delivery guarantees"
      ]
    },
    {
      id: "propulsion",
      tag: "Propulsion Control",
      title: "Autonomous Propulsion API",
      description: "Programmatic thruster burns, RCS vector optimization, and fuel-reserve analytics powered by on-orbit reinforcement models.",
      tagline: "Sub-millinewton Precision",
      icon: Zap,
      color: "text-primary",
      borderColor: "hover:border-primary/50",
      accentBg: "bg-primary/10",
      details: [
        "Direct REST & GraphQL API triggers for Hall-effect and pulsed plasma thrusters",
        "Automated delta-v vectoring minimizing fuel penalty during orbital transfers",
        "On-orbit collision avoidance maneuvers executed in under 4 minutes",
        "Real-time ISP and xenon pressure degradation tracking with predictive modeling"
      ]
    },
    {
      id: "mesh",
      tag: "Optical Grid",
      title: "Constellation Mesh Routing",
      description: "Inter-satellite laser optical links, dynamic topology healing, and ground station failover routing across distributed orbital planes.",
      tagline: "10 Gbps Intersat Laser Mesh",
      icon: Network,
      color: "text-secondary",
      borderColor: "hover:border-secondary/50",
      accentBg: "bg-secondary/10",
      details: [
        "Cross-link optical laser terminals operating with point-ahead pointing accuracy",
        "BGP-style orbital routing protocol with dynamic latency compensation",
        "Autonomous rerouting around solar storms and orbital blind spots",
        "Unified ground-station uplink pooling across 42 worldwide polar sites"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-outline-variant/20" id="features">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 mb-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
          <span className="font-label text-xs text-primary uppercase tracking-widest font-semibold">
            Next-Gen Infrastructure
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-on-surface mb-4 tracking-tight">
          Engineered for Orbit
        </h2>
        <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
          Autonomous infrastructure built to withstand cosmic scale and extreme mission constraints.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feat) => {
          const Icon = feat.icon;
          const isSelected = selectedFeature === feat.id;

          return (
            <div
              key={feat.id}
              onClick={() => setSelectedFeature(isSelected ? null : feat.id)}
              className={`glass-l1 rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 cursor-pointer group border ${
                isSelected
                  ? 'border-primary/80 shadow-[0_0_35px_rgba(168,85,247,0.3)] bg-surface-container-high/40'
                  : `border-outline-variant/30 ${feat.borderColor} hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]`
              }`}
            >
              <div>
                <div className={`w-12 h-12 rounded-xl ${feat.accentBg} border border-outline-variant/40 flex items-center justify-center ${feat.color} mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className={`font-label text-xs uppercase tracking-widest font-semibold ${feat.color}`}>
                    {feat.tag}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-semibold text-on-surface mb-3 group-hover:text-white transition-colors">
                  {feat.title}
                </h3>

                <p className="font-body text-sm sm:text-base text-on-surface-variant mb-6 leading-relaxed">
                  {feat.description}
                </p>

                {/* Expanded Details when selected */}
                {isSelected && (
                  <div className="mb-6 pt-4 border-t border-outline-variant/20 animate-in fade-in duration-200">
                    <p className="font-label text-xs uppercase text-primary font-semibold mb-3">Technical Specifications:</p>
                    <ul className="space-y-2 font-body text-xs text-on-surface/90">
                      {feat.details.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between font-label text-xs sm:text-sm font-semibold text-secondary">
                <span>{feat.tagline}</span>
                <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${isSelected ? 'rotate-90 text-primary' : 'group-hover:translate-x-1'}`} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
