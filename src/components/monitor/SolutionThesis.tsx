'use client';

import React from 'react';
import { GridFrame } from './GridFrame';
import { ShieldCheck, Cpu, Lock, Zap } from 'lucide-react';
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

export function SolutionThesis() {
  return (
    <section id="solution" className="bg-[#000000] text-[#ffffff] scroll-mt-20">
      <GridFrame borderClasses="border-b border-[#8A8A8A]/30">
        <div className="relative pt-24 pb-20 px-6 sm:px-8">
          
          {/* Header */}
          <div className="relative text-center max-w-3xl mx-auto space-y-4 mb-16 z-10">
            <SpotlightGlow />
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-white tracking-wider uppercase">
              THE AEGIS ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white font-mono leading-tight">
              Separation of Enforcement & Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-[#8a8a8a] max-w-2xl mx-auto leading-relaxed font-sans">
              Aegis is not a wallet, not a new Smart Account contract, and not a Passkey SDK. Aegis is the operational control plane sitting above Smart Accounts.
            </p>
          </div>

          {/* 2-Column Comparison Analogy Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Card 1: Smart Account (On-Chain) */}
            <div className="relative p-8 border border-[#1f1f1f] bg-[#070707] space-y-6">
              <CornerSq pos="tl" />
              <CornerSq pos="tr" />
              <CornerSq pos="bl" />
              <CornerSq pos="br" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-[#2a2a2a] bg-[#0d0d0d] flex items-center justify-center text-white">
                    <Lock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-mono text-white">Smart Account</h3>
                    <p className="text-xs font-mono text-[#666]">ON-CHAIN ENFORCEMENT</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  TRUSTED DOMAIN
                </span>
              </div>

              <p className="text-xs text-[#8a8a8a] leading-relaxed font-sans">
                Holds absolute, non-negotiable security enforcement on the Stellar network. Evaluates signatures, validates session IDs, and checks spending limits inside Soroban <code className="text-white font-mono">check_auth</code>.
              </p>

              <ul className="space-y-2 text-xs font-mono text-[#aaaaaa]">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Validates WebAuthn Passkeys & Session keys
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Enforces spending limits & time-locks on-chain
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span> Retains ultimate authority over all assets
                </li>
              </ul>
            </div>

            {/* Card 2: Aegis Control Plane (Off-Chain) */}
            <div className="relative p-8 border border-[#FF4747]/40 bg-[#FF4747]/5 space-y-6">
              <CornerSq pos="tl" />
              <CornerSq pos="tr" />
              <CornerSq pos="bl" />
              <CornerSq pos="br" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-[#FF4747]/30 bg-[#0d0d0d] flex items-center justify-center text-[#FF4747]">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-mono text-white">Stellar Aegis</h3>
                    <p className="text-xs font-mono text-[#FF4747]">OPERATIONAL CONTROL PLANE</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-[10px] font-mono bg-[#FF4747]/20 text-[#FF4747] border border-[#FF4747]/30">
                  LIFECYCLE DOMAIN
                </span>
              </div>

              <p className="text-xs text-[#8a8a8a] leading-relaxed font-sans">
                Manages all operations surrounding Smart Accounts. Compiles human-readable policy YAML, issues temporary session tokens, monitors Soroban events, and triggers emergency revocation.
              </p>

              <ul className="space-y-2 text-xs font-mono text-[#cccccc]">
                <li className="flex items-center gap-2">
                  <span className="text-[#FF4747]">★</span> Session Lifecycle & Expiration Management
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FF4747]">★</span> Policy Authoring & WASM Compilation
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#FF4747]">★</span> Instant Revocation & Real-Time Telemetry
                </li>
              </ul>
            </div>

          </div>

          {/* 3 Core Guarantee Pills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
            <div className="p-6 border border-[#1f1f1f] bg-[#070707]">
              <h4 className="text-sm font-bold font-mono text-white mb-2">Native First</h4>
              <p className="text-xs text-[#8a8a8a] leading-relaxed">
                Extends native Soroban primitives and custom accounts. Zero proprietary key formats or lock-in.
              </p>
            </div>
            <div className="p-6 border border-[#1f1f1f] bg-[#070707]">
              <h4 className="text-sm font-bold font-mono text-white mb-2">Trust Minimized</h4>
              <p className="text-xs text-[#8a8a8a] leading-relaxed">
                If Aegis backend is offline, Smart Accounts continue operating safely on-chain without asset risk.
              </p>
            </div>
            <div className="p-6 border border-[#1f1f1f] bg-[#070707]">
              <h4 className="text-sm font-bold font-mono text-white mb-2">Zero Execution Latency</h4>
              <p className="text-xs text-[#8a8a8a] leading-relaxed">
                Lives outside the direct execution path, eliminating extra network hops or middleware delays.
              </p>
            </div>
          </div>

        </div>
      </GridFrame>
    </section>
  );
}
