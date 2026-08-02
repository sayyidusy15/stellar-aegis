'use client';

import React, { useState } from 'react';
import { GridFrame } from './GridFrame';
import { Terminal, Shield, Play, CheckCircle2, AlertTriangle, Cpu } from 'lucide-react';
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

export function DevExperience() {
  const [revoked, setRevoked] = useState(false);

  return (
    <section id="devex" className="bg-[#000000] text-[#ffffff] scroll-mt-20">
      <GridFrame borderClasses="border-b border-[#8A8A8A]/30">
        <div className="relative pt-24 pb-20 px-6 sm:px-8">
          
          {/* Header */}
          <div className="relative text-center max-w-3xl mx-auto space-y-4 mb-16 z-10">
            <SpotlightGlow />
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#0d0d0d] border border-[#8A8A8A]/25 text-xs font-mono text-[#8a8a8a] tracking-wider uppercase">
              DEVELOPER EXPERIENCE
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white font-mono leading-tight">
              Simple SDK. Full Operational Control.
            </h2>
            <p className="text-sm sm:text-base text-[#8a8a8a] max-w-2xl mx-auto leading-relaxed font-sans">
              Issue session keys in 3 lines of code. Inspect, monitor, and revoke permissions from an intuitive control console.
            </p>
          </div>

          {/* Side-by-Side: Code vs Dashboard Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* Left: Code Snippet */}
            <div className="relative border border-[#1f1f1f] bg-[#050505] font-mono text-xs flex flex-col justify-between">
              <CornerSq pos="tl" />
              <CornerSq pos="tr" />
              <CornerSq pos="bl" />
              <CornerSq pos="br" />

              <div className="flex items-center justify-between px-4 py-3 bg-[#0a0a0a] border-b border-[#1f1f1f] text-[#666]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#FF4747]" />
                  <span className="text-white font-bold">aegis-integration.ts</span>
                </div>
                <span className="text-[10px] text-[#555]">TypeScript SDK</span>
              </div>

              <div className="p-5 text-[#cccccc] leading-relaxed overflow-x-auto space-y-4 font-mono text-[11px]">
                <div>
                  <span className="text-[#666]">// 1. Create a scoped session grant</span>
                  <br />
                  <span className="text-[#FF4747]">const</span> session = <span className="text-[#FF4747]">await</span> aegis.<span className="text-blue-400">createSession</span>(&#123;
                  <br />
                  &nbsp;&nbsp;identityId: <span className="text-emerald-400">&apos;usr_88Xq...&apos;</span>,
                  <br />
                  &nbsp;&nbsp;policyYaml: <span className="text-emerald-400">&apos;limit: 500 XLM / 24h&apos;</span>,
                  <br />
                  &nbsp;&nbsp;ttlSeconds: <span className="text-purple-400">7200</span>,
                  <br />
                  &#125;);
                </div>

                <div>
                  <span className="text-[#666]">// 2. Authorize intent payload on-chain</span>
                  <br />
                  <span className="text-[#FF4747]">const</span> auth = <span className="text-[#FF4747]">await</span> aegis.<span className="text-blue-400">authorize</span>(&#123;
                  <br />
                  &nbsp;&nbsp;sessionId: session.id,
                  <br />
                  &nbsp;&nbsp;intentPayload: payload,
                  <br />
                  &#125;);
                </div>

                <div>
                  <span className="text-[#666]">// 3. Emergency revocation in 1 call</span>
                  <br />
                  <span className="text-[#FF4747]">await</span> aegis.<span className="text-blue-400">revokeSession</span>(&#123;
                  <br />
                  &nbsp;&nbsp;sessionId: session.id,
                  <br />
                  &#125;);
                </div>
              </div>

              <div className="px-4 py-2 bg-[#0a0a0a] border-t border-[#1f1f1f] text-[10px] text-[#555] flex justify-between">
                <span>Soroban Protocol 15</span>
                <span className="text-emerald-400">Zero Execution Overhead</span>
              </div>
            </div>

            {/* Right: Interactive Dashboard Widget Preview */}
            <div className="relative border border-[#1f1f1f] bg-[#080808] p-6 flex flex-col justify-between space-y-6">
              <CornerSq pos="tl" />
              <CornerSq pos="tr" />
              <CornerSq pos="bl" />
              <CornerSq pos="br" />

              {/* Console Header */}
              <div className="flex items-center justify-between border-b border-[#1a1a1a] pb-4">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#FF4747]" />
                  <span className="text-xs font-mono font-bold text-white">AEGIS OPERATIONAL CONSOLE</span>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  LIVE TELEMETRY
                </span>
              </div>

              {/* Live Session Status */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-[#1a1a1a] bg-[#0c0c0c]">
                  <p className="text-[10px] font-mono text-[#555]">ACTIVE SESSIONS</p>
                  <p className="text-2xl font-bold font-mono text-white mt-1">24</p>
                  <p className="text-[10px] text-emerald-400 font-mono mt-1">● 100% Soroban TTL Valid</p>
                </div>
                <div className="p-4 border border-[#1a1a1a] bg-[#0c0c0c]">
                  <p className="text-[10px] font-mono text-[#555]">SPENDING VELOCITY CAP</p>
                  <p className="text-2xl font-bold font-mono text-white mt-1">500 XLM</p>
                  <p className="text-[10px] text-[#8a8a8a] font-mono mt-1">120 XLM consumed (24h)</p>
                </div>
              </div>

              {/* Emergency Revoke Toggle Simulator */}
              <div className="p-4 border border-[#1a1a1a] bg-[#0a0a0a] space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold font-mono text-white">Emergency Session Circuit Breaker</p>
                    <p className="text-[10px] text-[#666]">Session Key: sess_AKm99...21Xq</p>
                  </div>
                  <button
                    onClick={() => setRevoked((prev) => !prev)}
                    className={`px-3 py-1.5 text-xs font-mono font-bold transition-colors ${
                      revoked
                        ? 'bg-emerald-500 text-black'
                        : 'bg-[#FF4747] text-white hover:bg-[#ff3333]'
                    }`}
                  >
                    {revoked ? 'REVOKED (ACTIVE)' : 'KILL SESSION'}
                  </button>
                </div>

                {revoked && (
                  <div className="p-2 border border-emerald-500/30 bg-emerald-500/10 text-[11px] font-mono text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>On-Chain Revocation Flag Written to Soroban Storage!</span>
                  </div>
                )}
              </div>

              {/* Event Stream */}
              <div className="p-3 border border-[#1a1a1a] bg-[#050505] text-[10px] font-mono space-y-1 text-[#666]">
                <p><span className="text-[#8a8a8a]">[18:55:01]</span> <span className="text-blue-400">SessionCreated</span>: sess_AKm99 (TTL: 7200 ledgers)</p>
                <p><span className="text-[#8a8a8a]">[18:55:04]</span> <span className="text-emerald-400">AuthVerified</span>: check_auth PASS (Payment: 10 XLM)</p>
                {revoked && (
                  <p><span className="text-[#8a8a8a]">[18:55:10]</span> <span className="text-[#FF4747]">SessionRevoked</span>: sess_AKm99 invalidated on-chain</p>
                )}
              </div>

            </div>

          </div>

        </div>
      </GridFrame>
    </section>
  );
}
