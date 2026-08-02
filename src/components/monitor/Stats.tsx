'use client';

import React from 'react';
import { Terminal, Layers, Cpu, Lock, ShieldCheck } from 'lucide-react';

// Corner square mark (matching the reference image style)
function CornerSq({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const SQ = 7;
  const OFF = -4;
  const style: React.CSSProperties = {
    position: 'absolute',
    width: SQ,
    height: SQ,
    background: '#000000',
    border: '1px solid rgba(138,138,138,0.45)',
    zIndex: 20,
    pointerEvents: 'none',
    top: pos === 'tl' || pos === 'tr' ? OFF : undefined,
    bottom: pos === 'bl' || pos === 'br' ? OFF : undefined,
    left: pos === 'tl' || pos === 'bl' ? OFF : undefined,
    right: pos === 'tr' || pos === 'br' ? OFF : undefined,
  };
  return <span aria-hidden="true" style={style} />;
}

import { SpotlightGlow } from './SpotlightGlow';

export function Stats() {
  const flowSteps = [
    {
      icon: <Terminal className="w-4 h-4 text-[#8a8a8a]" />,
      title: "1. Developer / App Client",
      description: "Formulates Intent payload and requests session grant with policy constraints via Aegis SDK."
    },
    {
      icon: <Layers className="w-4 h-4 text-[#8a8a8a]" />,
      title: "2. Aegis Control Plane",
      description: "Compiles policy YAML into compact binary structures and wraps intent in Protocol 15 Fee-Bump envelope."
    },
    {
      icon: <Cpu className="w-4 h-4 text-[#8a8a8a]" />,
      title: "3. Smart Account Contract",
      description: "Receives invocation request on-chain and triggers native host vector check_auth."
    },
    {
      icon: <Lock className="w-4 h-4 text-[#8a8a8a]" />,
      title: "4. check_auth Host Vector",
      description: "Evaluates signer signature, session commitment, spend caps, and revocation state deterministically."
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-[#8a8a8a]" />,
      title: "5. Soroban Target Contracts",
      description: "Executes verified state mutation (DEX swap, gaming action, vault deposit) with zero-wrapper composability."
    }
  ];

  return (
    <section className="bg-[#000000] text-[#ffffff]">
      {/*
        Outer wrapper: constrained to max-w-7xl, borders.
        Grid of 5 columns (desktop), stacked on mobile. Gap-0 and shared borders.
      */}
      <div className="relative mx-auto max-w-7xl border-b border-[#8A8A8A]/30">
        
        {/* Section Header */}
        <div className="relative text-center max-w-3xl mx-auto pt-24 pb-16 px-6 sm:px-8 space-y-5 overflow-visible z-10">
          <SpotlightGlow />
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[661px] bg-[#0d0d0d] border border-[#8A8A8A]/25 text-xs font-mono text-[#8a8a8a] tracking-wider uppercase">
            STELLAR-NATIVE ENGINEERING
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#ffffff] font-mono leading-tight">
            Trusted by Stellar Native Authorization
          </h2>
          <p className="text-sm sm:text-base text-[#8a8a8a] max-w-2xl mx-auto leading-relaxed">
            Aegis does not introduce non-native memory pools or out-of-protocol bundlers. 
            It extends Stellar primitives directly on-chain.
          </p>
        </div>

        {/* ── 5-COLUMN GAPLESS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0 border-t border-[#8A8A8A]/30">
          {flowSteps.map((step, idx) => {
            const isLast = idx === flowSteps.length - 1;

            return (
              <div
                key={idx}
                className={`relative bg-[#080808]/40 p-6 md:p-8 flex flex-col justify-between min-h-[200px] group transition-all duration-300 hover:bg-[#0c0c0c]/65 border-b md:border-b-0 border-[#8A8A8A]/30 ${
                  !isLast ? 'border-b md:border-r border-[#8A8A8A]/30' : ''
                }`}
              >
                {/* Intersection corners */}
                <CornerSq pos="tl" />
                <CornerSq pos="tr" />
                <CornerSq pos="bl" />
                <CornerSq pos="br" />

                <div className="space-y-6">
                  {/* Icon Box */}
                  <div className="w-8 h-8 rounded-none border border-[#8A8A8A]/20 flex items-center justify-center bg-[#0d0d0d] group-hover:border-[#8A8A8A]/45 transition-colors duration-300">
                    {step.icon}
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold font-mono tracking-wider text-[#ffffff] uppercase leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-[11px] text-[#8a8a8a] leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
