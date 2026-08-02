'use client';

import React from 'react';
import { GridFrame } from './GridFrame';
import { Lock, Cpu } from 'lucide-react';
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
        <div className="relative pt-20 pb-0">
          
          {/* Section Header */}
          <div className="relative text-center max-w-3xl mx-auto space-y-4 mb-16 px-6 sm:px-8 z-10">
            <SpotlightGlow />
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#0d0d0d] border border-[#8A8A8A]/25 text-[11px] font-mono text-[#8a8a8a] tracking-wider uppercase">
              THE AEGIS ARCHITECTURE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white font-mono leading-tight">
              Separation of Enforcement &amp; Lifecycle
            </h2>
            <p className="text-sm sm:text-base text-[#8a8a8a] max-w-2xl mx-auto leading-relaxed font-sans">
              Aegis is not a wallet, not a new Smart Account contract, and not a Passkey SDK. Aegis is the operational control plane sitting above Smart Accounts.
            </p>
          </div>

          {/* ── TOP ROW: 2 Main Comparison Cards (Edge-to-Edge Gapless) ── */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 border-t border-[#8A8A8A]/30">

            {/* Desktop Center Pink/Magenta Link Node Icon */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-[#000000] border-2 border-[#FF4747] flex items-center justify-center shadow-[0_0_14px_rgba(255,71,71,0.7)]">
                <span className="w-2 h-2 rounded-full bg-[#FF4747]" />
              </div>
            </div>

            {/* Left Card — Smart Account (Trusted Domain) */}
            <div className="relative p-7 sm:p-9 bg-[#050505] lg:border-r border-[#8A8A8A]/30 flex flex-col justify-between space-y-6">
              <CornerSq pos="tl" />
              <CornerSq pos="tr" />

              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 border border-[#2a2a2a] bg-[#0d0d0d] flex items-center justify-center text-white shrink-0">
                      <Lock className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-mono text-white tracking-wide">Smart Account</h3>
                      <p className="text-[10px] font-mono text-[#555555] tracking-wider uppercase">ON-CHAIN ENFORCEMENT</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-mono font-semibold tracking-wider bg-[#032014] text-[#00E599] border border-[#00E599]/30 rounded-none shrink-0">
                    TRUSTED DOMAIN
                  </span>
                </div>

                <p className="text-xs text-[#8a8a8a] leading-relaxed font-sans mb-6">
                  Holds absolute, non-negotiable security enforcement on the Stellar network. Evaluates signatures, validates session IDs, and checks spending limits inside Soroban <strong className="text-white font-mono font-semibold">check_auth</strong>.
                </p>

                <ul className="space-y-2.5 text-xs font-mono text-[#cccccc]">
                  <li className="flex items-center gap-2.5">
                    <span className="text-[#00E599] font-bold">✓</span>
                    <span>Validates WebAuthn Passkeys &amp; Session keys</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-[#00E599] font-bold">✓</span>
                    <span>Enforces spending limits &amp; time-locks on-chain</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-[#00E599] font-bold">✓</span>
                    <span>Retains ultimate authority over all assets</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Card — Stellar Aegis (Lifecycle Domain) */}
            <div className="relative p-7 sm:p-9 bg-[#0d0404] border-t border-[#FF4747]/30 lg:border-t-0 flex flex-col justify-between space-y-6">
              <CornerSq pos="tl" />
              <CornerSq pos="tr" />

              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 border border-[#FF4747]/30 bg-[#120707] flex items-center justify-center text-[#FF4747] shrink-0">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-mono text-white tracking-wide">Stellar Aegis</h3>
                      <p className="text-[10px] font-mono text-[#FF4747] tracking-wider uppercase">OPERATIONAL CONTROL PLANE</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-[10px] font-mono font-semibold tracking-wider bg-[#2a0808] text-[#FF4747] border border-[#FF4747]/40 rounded-none shrink-0">
                    LIFECYCLE DOMAIN
                  </span>
                </div>

                <p className="text-xs text-[#8a8a8a] leading-relaxed font-sans mb-6">
                  Manages all operations surrounding Smart Accounts. Compiles human-readable policy YAML, issues temporary session tokens, monitors Soroban events, and triggers emergency revocation.
                </p>

                <ul className="space-y-2.5 text-xs font-mono text-[#cccccc]">
                  <li className="flex items-center gap-2.5">
                    <span className="text-[#FF4747]">★</span>
                    <span>Session Lifecycle &amp; Expiration Management</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-[#FF4747]">★</span>
                    <span>Policy Authoring &amp; WASM Compilation</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="text-[#FF4747]">★</span>
                    <span>Instant Revocation &amp; Real-Time Telemetry</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* ── BOTTOM ROW: 3 Feature Cards (Joined Directly Below, Edge-to-Edge) ── */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#8A8A8A]/30">
            
            <div className="relative p-7 md:p-8 border-r border-[#8A8A8A]/30 border-b md:border-b-0 bg-[#050505]">
              <CornerSq pos="tl" />
              <CornerSq pos="tr" />
              <CornerSq pos="bl" />
              <CornerSq pos="br" />
              <h4 className="text-sm font-bold font-mono text-white mb-2">Native First</h4>
              <p className="text-xs text-[#8a8a8a] leading-relaxed font-sans">
                Extends native Soroban primitives and custom accounts. Zero proprietary key formats or lock-in.
              </p>
            </div>

            <div className="relative p-7 md:p-8 border-r border-[#8A8A8A]/30 border-b md:border-b-0 bg-[#050505]">
              <CornerSq pos="tl" />
              <CornerSq pos="tr" />
              <CornerSq pos="bl" />
              <CornerSq pos="br" />
              <h4 className="text-sm font-bold font-mono text-white mb-2">Trust Minimized</h4>
              <p className="text-xs text-[#8a8a8a] leading-relaxed font-sans">
                If Aegis backend is offline, Smart Accounts continue operating safely on-chain without asset risk.
              </p>
            </div>

            <div className="relative p-7 md:p-8 bg-[#050505]">
              <CornerSq pos="tl" />
              <CornerSq pos="tr" />
              <CornerSq pos="bl" />
              <CornerSq pos="br" />
              <h4 className="text-sm font-bold font-mono text-white mb-2">Zero Execution Latency</h4>
              <p className="text-xs text-[#8a8a8a] leading-relaxed font-sans">
                Lives outside the direct execution path, eliminating extra network hops or middleware delays.
              </p>
            </div>

          </div>

        </div>
      </GridFrame>
    </section>
  );
}
