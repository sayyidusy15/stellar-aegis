'use client';

import React from 'react';
import { GridFrame } from './GridFrame';
import { ArrowDown, Layers, Server, ShieldCheck, Database } from 'lucide-react';
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

export function ArchitectureDiagram() {
  const layers = [
    {
      step: "01",
      name: "Callers & Intent Originators",
      tech: "dApps • Mobile Wallets • AI Agents • Backend Relayers",
      icon: <Layers className="w-5 h-5 text-[#8a8a8a]" />,
      desc: "Users or autonomous agents initiate signed intent payloads using WebAuthn Passkeys or Session Keys.",
      borderColor: "border-[#1f1f1f]",
      badge: "ORIGINATION LAYER",
    },
    {
      step: "02",
      name: "Stellar Aegis Control Plane",
      tech: "Session Manager • Policy Compiler • Circuit Breaker • Telemetry Indexer",
      icon: <Server className="w-5 h-5 text-[#FF4747]" />,
      desc: "Off-chain operational layer that issues temporary session grants, validates policy syntax, monitors Soroban events, and manages revocation.",
      borderColor: "border-[#FF4747]/40 bg-[#FF4747]/5",
      badge: "CONTROL PLANE (AEGIS)",
      highlight: true,
    },
    {
      step: "03",
      name: "Soroban Smart Account",
      tech: "check_auth Host Vector • Custom Account Trait • Temporary Storage",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      desc: "On-chain contract account that executes absolute authorization checks. Aegis never replaces check_auth — it relies on it.",
      borderColor: "border-emerald-500/30 bg-emerald-500/5",
      badge: "ON-CHAIN ENFORCEMENT",
    },
    {
      step: "04",
      name: "Stellar Network Protocol 15+",
      tech: "Soroban Ledger • Fee-Bump Transactions • State Storage",
      icon: <Database className="w-5 h-5 text-blue-400" />,
      desc: "Finality and execution state layer of the Stellar blockchain network.",
      borderColor: "border-blue-500/30 bg-blue-500/5",
      badge: "SETTLEMENT LAYER",
    },
  ];

  return (
    <section id="architecture" className="bg-[#000000] text-[#ffffff] scroll-mt-20">
      <GridFrame borderClasses="border-b border-[#8A8A8A]/30">
        <div className="relative pt-24 pb-20 px-6 sm:px-8">
          
          {/* Header */}
          <div className="relative text-center max-w-3xl mx-auto space-y-4 mb-16 z-10">
            <SpotlightGlow />
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#0d0d0d] border border-[#8A8A8A]/25 text-xs font-mono text-[#8a8a8a] tracking-wider uppercase">
              ECOSYSTEM POSITION
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white font-mono leading-tight">
              Where Aegis Fits in the Stellar Stack
            </h2>
            <p className="text-sm sm:text-base text-[#8a8a8a] max-w-2xl mx-auto leading-relaxed font-sans">
              Aegis sits around the Smart Account to operate permissions across their lifecycle. Aegis never replaces Smart Account contracts.
            </p>
          </div>

          {/* Vertical Stack Flow Diagram */}
          <div className="max-w-3xl mx-auto space-y-4">
            {layers.map((layer, idx) => (
              <React.Fragment key={idx}>
                <div className={`relative p-6 sm:p-7 border ${layer.borderColor} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6`}>
                  <CornerSq pos="tl" />
                  <CornerSq pos="tr" />
                  <CornerSq pos="bl" />
                  <CornerSq pos="br" />

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-[#2a2a2a] bg-[#0d0d0d] flex items-center justify-center shrink-0">
                      {layer.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono px-2 py-0.5 border border-[#333] bg-[#111] text-[#8a8a8a]">
                          {layer.badge}
                        </span>
                      </div>
                      <h3 className="text-base font-bold font-mono text-white">{layer.name}</h3>
                      <p className="text-xs text-[#8a8a8a] leading-relaxed mt-1 font-sans">{layer.desc}</p>
                      <p className="text-[11px] font-mono text-[#555] mt-2">{layer.tech}</p>
                    </div>
                  </div>
                </div>

                {/* Connector Arrow */}
                {idx < layers.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div className="w-8 h-8 rounded-full border border-[#2a2a2a] bg-[#0d0d0d] flex items-center justify-center text-[#555]">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </GridFrame>
    </section>
  );
}
