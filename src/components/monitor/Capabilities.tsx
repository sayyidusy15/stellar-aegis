'use client';

import React from 'react';
import { Key, FileText, Shield, Activity, Terminal, Code, Cpu, Zap } from 'lucide-react';
import { SpotlightGlow } from './SpotlightGlow';
import { GridFrame } from './GridFrame';

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

export function Capabilities() {
  const categories = [
    {
      category: "01. SESSION ENGINE",
      title: "Delegated Session Lifecycles",
      desc: "Manage temporary keys with automatic Soroban TTL expiration.",
      items: [
        { icon: <Key className="w-4 h-4 text-[#FF4747]" />, title: "Session Key Lifecycle", text: "Create, rotate, inspect, and expire temporary delegated keys stored in cheap Soroban Temporary state." },
        { icon: <Zap className="w-4 h-4 text-[#FF4747]" />, title: "Bounded Scopes", text: "Limit sessions by explicit expiration timestamps, allowed target contracts, and spending caps." },
      ]
    },
    {
      category: "02. POLICY COMPILER",
      title: "Human-Readable Policy Engine",
      desc: "Compile YAML policies into compact WASM binary rules.",
      items: [
        { icon: <FileText className="w-4 h-4 text-[#FF4747]" />, title: "Policy Authoring", text: "Define spending velocity caps, contract allowlists, and time-locks in human-readable YAML syntax." },
        { icon: <Cpu className="w-4 h-4 text-[#FF4747]" />, title: "Deterministic Rules", text: "Compile policies into lightweight binary data structures evaluated deterministically inside check_auth." },
      ]
    },
    {
      category: "03. EMERGENCY CIRCUIT BREAKER",
      title: "On-Chain Revocation Workflows",
      desc: "Instantly invalidate compromised sessions or rogue agents.",
      items: [
        { icon: <Shield className="w-4 h-4 text-[#FF4747]" />, title: "Instant Revocation", text: "Single-click emergency revocation flags written directly to Smart Account state." },
        { icon: <Terminal className="w-4 h-4 text-[#FF4747]" />, title: "Agent Off-Boarding", text: "Safely strip delegated capabilities from AI agents without re-keying the main Passkey owner." },
      ]
    },
    {
      category: "04. OBSERVABILITY",
      title: "Telemetry & Explainability",
      desc: "Full visibility into authorization metrics and failure reasons.",
      items: [
        { icon: <Activity className="w-4 h-4 text-[#FF4747]" />, title: "Real-Time Event Indexing", text: "Stream Soroban events to monitor active session count, sponsor balance, and transaction rate." },
        { icon: <Code className="w-4 h-4 text-[#FF4747]" />, title: "Authorization Simulator", text: "Simulate transactions off-chain to provide human-readable error reasons when check_auth fails." },
      ]
    },
  ];

  return (
    <section id="capabilities" className="bg-[#000000] text-[#ffffff] scroll-mt-20">
      <GridFrame borderClasses="border-b border-[#8A8A8A]/30">
        <div className="relative pt-24 pb-20 px-6 sm:px-8">
          
          {/* Header */}
          <div className="relative text-center max-w-3xl mx-auto space-y-4 mb-16 z-10">
            <SpotlightGlow />
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#0d0d0d] border border-[#8A8A8A]/25 text-xs font-mono text-[#8a8a8a] tracking-wider uppercase">
              MODULAR SUBSYSTEMS
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white font-mono leading-tight">
              Core Protocol Capabilities
            </h2>
            <p className="text-sm sm:text-base text-[#8a8a8a] max-w-2xl mx-auto leading-relaxed font-sans">
              Categorized modules designed to be adopted independently or together, scaling seamlessly with your application.
            </p>
          </div>

          {/* 4 Categorized Subsystem Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((cat, idx) => (
              <div key={idx} className="relative p-8 border border-[#1f1f1f] bg-[#070707] flex flex-col justify-between space-y-6">
                <CornerSq pos="tl" />
                <CornerSq pos="tr" />
                <CornerSq pos="bl" />
                <CornerSq pos="br" />

                <div>
                  <div className="flex items-center justify-between mb-3 font-mono">
                    <span className="text-xs text-[#FF4747] font-bold tracking-widest">{cat.category}</span>
                  </div>
                  <h3 className="text-xl font-bold font-mono text-white mb-2">{cat.title}</h3>
                  <p className="text-xs text-[#8a8a8a] font-sans mb-6">{cat.desc}</p>

                  <div className="space-y-4 pt-4 border-t border-[#1a1a1a]">
                    {cat.items.map((sub, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-none border border-[#2a2a2a] bg-[#0d0d0d] flex items-center justify-center shrink-0 mt-0.5">
                          {sub.icon}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold font-mono text-white mb-1">{sub.title}</h4>
                          <p className="text-[11px] text-[#777777] leading-relaxed font-sans">{sub.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </GridFrame>
    </section>
  );
}
