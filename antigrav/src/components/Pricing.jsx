import React, { useState } from 'react';
import { CheckCircle2, Rocket, Globe2, Box, Sparkles } from 'lucide-react';

export default function Pricing({ onOpenDemo }) {
  const [billingCycle, setBillingCycle] = useState('annual'); // 'monthly' | 'annual'

  const isAnnual = billingCycle === 'annual';

  const tiers = [
    {
      id: "cubesat",
      name: "Suborbital / CubeSat",
      icon: Box,
      description: "For student missions, research payloads, and single CubeSats.",
      price: isAnnual ? 399 : 499,
      period: "/ mo",
      popular: false,
      features: [
        "Up to 3 satellites",
        "Standard downlink",
        "24h telemetry logs",
        "Community support",
        "REST API Access"
      ],
      btnText: "Start Free Trial",
      btnClass: "orbital-ghost-btn text-on-surface",
      accentColor: "text-secondary",
    },
    {
      id: "leo",
      name: "Low-Earth Orbit (LEO)",
      icon: Rocket,
      description: "For commercial constellations and active orbital payloads.",
      price: isAnnual ? 1599 : 1999,
      period: "/ mo",
      popular: true,
      features: [
        "Up to 25 satellites",
        "Real-time laser mesh routing",
        "Sub-second telemetry",
        "Automated collision avoidance",
        "24/7 mission control desk",
        "On-orbit propulsion API"
      ],
      btnText: "Launch Mission",
      btnClass: "plasma-btn text-white",
      accentColor: "text-primary",
    },
    {
      id: "enterprise",
      name: "Deep Space & Enterprise",
      icon: Globe2,
      description: "For lunar, interplanetary, and defense-grade constellations.",
      price: isAnnual ? 6000 : 7500,
      period: "/ mo",
      popular: false,
      features: [
        "Unlimited craft",
        "Custom flight computer integration",
        "Air-gapped ground stations",
        "Dedicated orbital dynamics engineer",
        "ITAR & NASA JPL compliant SLA"
      ],
      btnText: "Contact Flight Ops",
      btnClass: "orbital-ghost-btn text-on-surface",
      accentColor: "text-secondary",
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-outline-variant/20" id="pricing">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-secondary/10 border border-secondary/30 mb-4">
          <span className="font-label text-xs text-secondary uppercase tracking-widest font-semibold">
            Scalable Orbital Tiers
          </span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-on-surface mb-4 tracking-tight">
          Mission-Ready Pricing
        </h2>
        <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto mb-8">
          Transparent tiers scale with your payload and constellation lifecycle.
        </p>

        {/* Billing Toggle Pill */}
        <div className="inline-flex items-center p-1 rounded-full bg-surface-container-high/80 border border-outline-variant/40 shadow-inner">
          <button
            type="button"
            onClick={() => setBillingCycle('monthly')}
            className={`px-5 py-1.5 rounded-full font-label text-xs font-semibold uppercase tracking-wider transition-all ${
              !isAnnual
                ? 'bg-surface-container-lowest text-white shadow-md'
                : 'text-on-surface-variant hover:text-white'
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle('annual')}
            className={`px-5 py-1.5 rounded-full font-label text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
              isAnnual
                ? 'bg-primary text-black font-bold shadow-md shadow-purple-900/40'
                : 'text-on-surface-variant hover:text-white'
            }`}
          >
            <span>Annual</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${isAnnual ? 'bg-black/20 text-black' : 'bg-primary/20 text-primary'}`}>
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Pricing Cards 3-Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier) => {
          const Icon = tier.icon;

          return (
            <div
              key={tier.id}
              className={`rounded-2xl p-7 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                tier.popular
                  ? 'glass-l2 border-2 border-primary/60 shadow-[0_0_40px_rgba(168,85,247,0.3)] lg:-translate-y-2'
                  : 'glass-l1 border border-outline-variant/30 hover:border-outline-variant/60'
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-purple-400 text-black font-label text-xs font-bold uppercase tracking-widest shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Recommended
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3 mt-1">
                  <h3 className="font-display text-xl font-bold text-on-surface">
                    {tier.name}
                  </h3>
                  <div className={`p-2 rounded-lg bg-surface-container-high/60 ${tier.accentColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <p className="font-body text-sm text-on-surface-variant mb-6 min-h-[40px]">
                  {tier.description}
                </p>

                <div className="flex items-baseline gap-1 mb-8">
                  <span className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
                    ${tier.price.toLocaleString()}
                  </span>
                  <span className="font-label text-xs text-on-surface-variant font-medium">
                    {tier.period}
                  </span>
                  {isAnnual && (
                    <span className="ml-2 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                      Billed Annually
                    </span>
                  )}
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8 font-body text-sm text-on-surface">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${tier.accentColor}`} />
                      <span className="text-on-surface/90">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={onOpenDemo}
                className={`w-full py-3.5 rounded-xl font-label text-xs uppercase tracking-wider font-bold text-center transition-all ${tier.btnClass}`}
              >
                {tier.btnText}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
