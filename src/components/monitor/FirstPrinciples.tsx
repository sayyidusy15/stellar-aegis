'use client';

import React from 'react';
import Link from 'next/link';
import { GridFrame } from './GridFrame';
import { BookOpen, ShieldCheck, Database, FileCode, Clock, ArrowRight } from 'lucide-react';
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

export function FirstPrinciples() {
  const specs = [
    {
      slug: 'adr',
      title: 'Architectural Decision Records (ADR)',
      code: 'ADR-001 & ADR-002',
      desc: 'Formally documents the engineering rationale behind separating enforcement from lifecycle management and placing middleware outside the auth path.',
      icon: <BookOpen className="w-4 h-4 text-[#FF4747]" />,
    },
    {
      slug: 'threat-model',
      title: 'Threat Model & Security Guarantees',
      code: 'DOC-14 • THREAT MODEL',
      desc: 'Analyzes middleware breaches, session key theft, replay attacks, and defense-in-depth mitigations for Soroban Smart Accounts.',
      icon: <ShieldCheck className="w-4 h-4 text-[#FF4747]" />,
    },
    {
      slug: 'storage-model',
      title: 'Storage Minimization Model',
      code: 'DOC-13 • STORAGE SPEC',
      desc: 'Defines strictly minimal on-chain state footprints (Layer 1) versus off-chain operational data indexes (Layer 2).',
      icon: <Database className="w-4 h-4 text-[#FF4747]" />,
    },
    {
      slug: 'policy-model',
      title: 'Policy Compiler Specification',
      code: 'DOC-07 • POLICY SPEC',
      desc: 'Human-readable YAML policy definitions, velocity limits, contract allowlists, and deterministic binary serialization.',
      icon: <FileCode className="w-4 h-4 text-[#FF4747]" />,
    },
    {
      slug: 'session-model',
      title: 'Session State Machine Spec',
      code: 'DOC-08 • SESSION SPEC',
      desc: 'Bounded delegation scopes, Soroban Temporary storage TTL decay, and deterministic session state transitions.',
      icon: <Clock className="w-4 h-4 text-[#FF4747]" />,
    },
    {
      slug: 'security-checklist',
      title: 'Production Integration Checklist',
      code: 'DOC-16 • CHECKLIST',
      desc: 'Mandatory on-chain and off-chain security audit checklist for protocol engineers prior to mainnet deployment.',
      icon: <ShieldCheck className="w-4 h-4 text-[#FF4747]" />,
    },
  ];

  return (
    <section id="first-principles" className="bg-[#000000] text-[#ffffff] scroll-mt-20">
      <GridFrame borderClasses="border-b border-[#8A8A8A]/30">
        <div className="relative pt-24 pb-20 px-6 sm:px-8">
          
          {/* Header */}
          <div className="relative text-center max-w-3xl mx-auto space-y-4 mb-16 z-10">
            <SpotlightGlow />
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#0d0d0d] border border-[#8A8A8A]/25 text-xs font-mono text-[#8a8a8a] tracking-wider uppercase">
              TECHNICAL RIGOR
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white font-mono leading-tight">
              Built From First Principles
            </h2>
            <p className="text-sm sm:text-base text-[#8a8a8a] max-w-2xl mx-auto leading-relaxed font-sans">
              Stellar Aegis is architected from ground zero with comprehensive documentation, explicit threat models, and audited decision records.
            </p>
          </div>

          {/* 6 Grid Specification Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[#8A8A8A]/30">
            {specs.map((item, idx) => (
              <Link
                key={idx}
                href={`/docs/${item.slug}`}
                className="group relative bg-[#080808]/50 border-r border-b border-[#8A8A8A]/30 p-7 flex flex-col justify-between hover:bg-[#0d0d0d] transition-colors"
              >
                <CornerSq pos="tl" />
                <CornerSq pos="tr" />
                <CornerSq pos="bl" />
                <CornerSq pos="br" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-none border border-[#8A8A8A]/20 bg-[#0d0d0d] flex items-center justify-center group-hover:border-[#FF4747]/40 transition-colors">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-mono text-[#666] border border-[#222] px-2 py-0.5 bg-[#050505]">
                      {item.code}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold font-mono text-white mb-2 group-hover:text-[#FF4747] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#8a8a8a] leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#1a1a1a] flex items-center justify-between text-[11px] font-mono text-[#555] group-hover:text-white transition-colors">
                  <span>Read Specification</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#FF4747]" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </GridFrame>
    </section>
  );
}
