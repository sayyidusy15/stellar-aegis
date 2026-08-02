'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SpotlightGlow } from './SpotlightGlow';

export function Pricing() {
  const plans = [
    {
      name: 'Community',
      price: 'Free',
      desc: 'For individual developers and open-source projects.',
      features: [
        'Core Session Key Management',
        'Basic Policy YAML Engine',
        'Ed25519 & Passkey Auth',
        'Soroban Testnet Support',
        'Community Discord Support',
      ],
      cta: 'Start Building',
      highlighted: false,
    },
    {
      name: 'Professional',
      price: 'Open Source',
      desc: 'For production teams shipping Stellar smart accounts.',
      features: [
        'Full Authorization Lifecycle',
        'Advanced Intent Policy Engine',
        'Gas Sponsorship & Fee-Bump',
        'Emergency Revocation API',
        'Real-Time Session Monitoring',
        'Mainnet SLA + Priority Issues',
      ],
      cta: 'View on GitHub',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      desc: 'For regulated fintech and large-scale Stellar deployments.',
      features: [
        'Custom Policy Compliance Layer',
        'Dedicated Relayer Infrastructure',
        'On-Premise Deployment Option',
        'Audit Logs & Reporting',
        'SLA & Priority Engineering Support',
      ],
      cta: 'Contact Us',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#000000] text-[#ffffff] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="relative text-center max-w-3xl mx-auto mb-16 space-y-4 overflow-visible z-10">
          <SpotlightGlow />
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-[661px] bg-[#1f1f1f] border border-[#0d0d0d] text-xs font-mono text-[#8a8a8a]">
            <span>TRANSPARENT PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#ffffff] font-sans">
            Simple, Predictable Plans
          </h2>
          <p className="text-base text-[#8a8a8a] font-sans font-medium">
            Aegis is open-source at its core. Start free, scale with confidence.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-[24px] bg-[#0d0d0d] border p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                plan.highlighted
                  ? 'border-[#ffffff] shadow-2xl relative'
                  : 'border-[#1f1f1f] hover:border-[#8a8a8a]'
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold font-sans text-[#ffffff]">{plan.name}</h3>
                  {plan.highlighted && (
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-[661px] bg-[#ffffff] text-[#000000]">
                      RECOMMENDED
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold font-sans text-[#ffffff]">{plan.price}</span>
                </div>
                <p className="text-xs text-[#8a8a8a] font-sans mb-8 leading-relaxed font-medium">
                  {plan.desc}
                </p>

                <div className="space-y-3 border-t border-[#1f1f1f] pt-6 mb-8 font-sans text-xs text-[#ffffff]">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className={`w-full py-3.5 rounded-[661px] text-[15px] font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                  plan.highlighted
                    ? 'bg-[#ffffff] text-[#000000] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]'
                    : 'bg-[#000000] border border-[#1f1f1f] text-[#ffffff] hover:border-[#8a8a8a] hover:bg-[#0d0d0d] active:scale-[0.98]'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
