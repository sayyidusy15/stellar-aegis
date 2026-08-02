'use client';

import React from 'react';
import { GridFrame } from './GridFrame';
import { Key, FileCode, ShieldAlert, Fuel, Eye, HelpCircle } from 'lucide-react';
import { SpotlightGlow } from './SpotlightGlow';

function CornerSq({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const SQ = 7, OFF = -4;
  const style: React.CSSProperties = {
    position: 'absolute', width: SQ, height: SQ,
    background: '#000000', border: '1px solid rgba(138,138,138,0.45)',
    zIndex: 20, pointerEvents: 'none',
    top: pos === 'tl' || pos === 'tr' ? OFF : undefined,
    bottom: pos === 'bl' || pos === 'br' ? OFF : undefined,
    left: pos === 'tl' || pos === 'bl' ? OFF : undefined,
    right: pos === 'tr' || pos === 'br' ? OFF : undefined,
  };
  return <span aria-hidden="true" style={style} />;
}

export function ProblemStatement() {
  const problems = [
    {
      icon: <Key className="w-4 h-4 text-[#FF4747]" />,
      title: "Session Key Management",
      desc: "Creating temporary delegated keys, setting expiration TTLs, and managing session state transitions across devices.",
    },
    {
      icon: <FileCode className="w-4 h-4 text-[#FF4747]" />,
      title: "Policy Logic & Compilers",
      desc: "Authoring velocity spend caps, contract allowlists, and time-locks, then serializing them to Soroban binary formats.",
    },
    {
      icon: <ShieldAlert className="w-4 h-4 text-[#FF4747]" />,
      title: "Emergency Revocation",
      desc: "Building circuit breakers to instantly kill compromised keys or revoked AI agents without draining user balances.",
    },
    {
      icon: <Fuel className="w-4 h-4 text-[#FF4747]" />,
      title: "Gas Sponsorship Budgets",
      desc: "Orchestrating Fee-Bump transactions, setting rate limits, and guarding sponsor accounts against abuse.",
    },
    {
      icon: <Eye className="w-4 h-4 text-[#FF4747]" />,
      title: "Real-Time Telemetry",
      desc: "Indexing Soroban events, tracking active session counts, and monitoring authorization usage in production.",
    },
    {
      icon: <HelpCircle className="w-4 h-4 text-[#FF4747]" />,
      title: "Authorization Explainability",
      desc: "Simulating failed transactions off-chain to give human-readable explanations when check_auth rejects an intent.",
    },
  ];

  return (
    <section id="problem" className="bg-[#000000] text-[#ffffff] scroll-mt-20">
      <GridFrame borderClasses="border-b border-[#8A8A8A]/30">
        <div className="relative pt-24 pb-20 px-6 sm:px-8">
          
          {/* Header */}
          <div className="relative text-center max-w-3xl mx-auto space-y-4 mb-16 z-10">
            <SpotlightGlow />
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FF4747]/10 border border-[#FF4747]/25 text-xs font-mono text-[#FF4747] tracking-wider uppercase">
              THE ECOSYSTEM PROBLEM
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white font-mono leading-tight">
              Every Smart Account Team Rebuilds The Same Infrastructure
            </h2>
            <p className="text-sm sm:text-base text-[#8a8a8a] max-w-2xl mx-auto leading-relaxed font-sans">
              Soroban provides powerful execution primitives. But operating authorizations at scale forces every engineering team to waste months building custom off-chain glue code.
            </p>
          </div>

          {/* 6 Grid Problem Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#8A8A8A]/30 mb-16">
            {problems.map((item, idx) => (
              <div
                key={idx}
                className="relative bg-[#080808]/50 border-r border-b border-[#8A8A8A]/30 p-7 flex flex-col justify-between group hover:bg-[#0d0d0d] transition-colors"
              >
                <CornerSq pos="tl" />
                <CornerSq pos="tr" />
                <CornerSq pos="bl" />
                <CornerSq pos="br" />

                <div>
                  <div className="w-8 h-8 rounded-none border border-[#8A8A8A]/20 bg-[#0d0d0d] flex items-center justify-center mb-5 group-hover:border-[#FF4747]/40 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-semibold text-white font-mono mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#8a8a8a] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#1a1a1a] flex items-center justify-between text-[10px] font-mono text-[#555]">
                  <span>REBUILT FROM SCRATCH</span>
                  <span className="text-[#FF4747]/80">DUPLICATED EFFORT</span>
                </div>
              </div>
            ))}
          </div>

          {/* Core Thesis Statement Box */}
          <div className="relative max-w-3xl mx-auto p-8 border border-[#FF4747]/30 bg-[#FF4747]/5 text-center space-y-3">
            <CornerSq pos="tl" />
            <CornerSq pos="tr" />
            <CornerSq pos="bl" />
            <CornerSq pos="br" />

            <p className="text-xs font-mono uppercase tracking-widest text-[#FF4747]">
              The Aegis Principle
            </p>
            <h3 className="text-xl sm:text-2xl font-bold font-mono text-white leading-snug">
              Every team rebuilds this infrastructure. <br className="hidden sm:block" />
              <span className="text-[#FF4747]">Stellar Aegis standardizes it into a reusable control plane.</span>
            </h3>
          </div>

        </div>
      </GridFrame>
    </section>
  );
}
