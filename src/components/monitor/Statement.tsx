'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Zap, Layers } from 'lucide-react';

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

export function Statement() {
  return (
    <section id="features" className="bg-[#000000] text-[#ffffff]">
      {/*
        Outer wrapper: constrained to max-w-7xl, border-b.
        No horizontal padding so the grid cells touch the outer rails perfectly.
      */}
      <div className="relative mx-auto max-w-7xl border-b border-[#8A8A8A]/30">
        
        {/* Section Header - Indented to match grid alignment */}
        <div className="px-8 pt-24 pb-16 max-w-3xl space-y-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#ffffff] font-sans">
            Features That Empower Your Development
          </h2>
          <p className="text-sm sm:text-base text-[#8a8a8a] font-sans font-normal leading-relaxed">
            Our suite of features is designed to enhance every aspect of your authorization workflow. 
            From session keys to policy lifecycle management, Aegis provides you with the tools you need to succeed.
          </p>
        </div>

        {/* ── BENTO GRID LAYOUT (GAP-0, Shared Borders) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-t border-[#8A8A8A]/30">
          
          {/* 1. Large Statement Card (Left, Col Span 8) */}
          <div className="relative lg:col-span-8 border-b lg:border-r border-[#8A8A8A]/30 bg-[#080808]/40 p-8 flex flex-col justify-between min-h-[340px]">
            <CornerSq pos="tl" />
            <CornerSq pos="tr" />
            <CornerSq pos="bl" />
            <CornerSq pos="br" />

            {/* Traffic light dots */}
            <div className="flex gap-1.5 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>

            <div className="space-y-6">
              <p className="text-[18px] sm:text-[22px] md:text-[24px] font-medium leading-[1.4] tracking-tight font-sans">
                <span className="text-[#ffffff]">
                  Stellar Aegis is your developer-first authorization control plane,{' '}
                </span>
                <span className="text-[#8a8a8a] font-normal">
                  designed to secure smart account lifecycles. Whether you are using passkeys,
                  delegated signers, or rate-limited session policies, Aegis wraps your contracts in a robust off-chain management layer.
                </span>
              </p>
            </div>
            <div className="mt-8 text-[10px] font-mono text-[#8a8a8a]/40 tracking-wider">
              SYSTEM OPERATIONAL // MODULE 01
            </div>
          </div>

          {/* Right Column Stack (Col Span 4) — 2 Cells Stacked Vertically */}
          <div className="lg:col-span-4 flex flex-col">
            
            {/* 2. Granular Policy Engine Card */}
            <div className="relative flex-1 border-b border-[#8A8A8A]/30 bg-[#080808]/40 p-8 flex flex-col justify-between">
              <CornerSq pos="tl" />
              <CornerSq pos="tr" />
              <CornerSq pos="bl" />
              <CornerSq pos="br" />

              {/* Mini Graphic representation */}
              <div className="border border-[#8A8A8A]/15 bg-[#050505] p-3 mb-6 rounded-none space-y-1.5 font-mono text-[9px] text-[#8a8a8a]">
                <div className="flex justify-between border-b border-[#8A8A8A]/10 pb-1">
                  <span>POLICY_RULES</span>
                  <span className="text-emerald-400">ACTIVE</span>
                </div>
                <div className="text-white/60">limit_daily: 500 XLM</div>
                <div>whitelist: [swap_contract, transfer]</div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xs font-bold tracking-wider font-mono uppercase text-[#ffffff]">
                  Granular Policy Engine
                </h3>
                <p className="text-[11px] text-[#8a8a8a] leading-relaxed">
                  Enforce daily spending limits, whitelisted smart contracts, and custom constraints at the session level.
                </p>
              </div>
            </div>

            {/* 3. Multi-Credential Auth Card */}
            <div className="relative flex-1 border-b border-[#8A8A8A]/30 bg-[#080808]/40 p-8 flex flex-col justify-center min-h-[130px]">
              <CornerSq pos="tl" />
              <CornerSq pos="tr" />
              <CornerSq pos="bl" />
              <CornerSq pos="br" />

              {/* Animated double-row marquee of Stellar/Soroban features */}
              <div className="relative w-full overflow-hidden py-1">
                {/* Left fade mask */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
                {/* Right fade mask */}
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

                {/* Row 1: Left to Right */}
                <div className="overflow-hidden w-full mb-3 flex">
                  <motion.div
                    className="flex gap-3 flex-shrink-0"
                    animate={{ x: ['-50%', '0%'] }}
                    transition={{ ease: 'linear', duration: 65, repeat: Infinity }}
                    style={{ willChange: 'transform' }}
                  >
                    {[
                      'Passkeys', 'Soroban SDK', 'Ed25519 Signers', 'Ledger Key', 'Protocol 20', 'Host Vector', 'Multi-Sig',
                      'Passkeys', 'Soroban SDK', 'Ed25519 Signers', 'Ledger Key', 'Protocol 20', 'Host Vector', 'Multi-Sig',
                      'Passkeys', 'Soroban SDK', 'Ed25519 Signers', 'Ledger Key', 'Protocol 20', 'Host Vector', 'Multi-Sig',
                      'Passkeys', 'Soroban SDK', 'Ed25519 Signers', 'Ledger Key', 'Protocol 20', 'Host Vector', 'Multi-Sig',
                    ].map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-3 py-1 border border-[#8A8A8A]/20 bg-[#0d0d0d] text-[#8a8a8a] rounded-[661px] select-none whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* Row 2: Right to Left */}
                <div className="overflow-hidden w-full flex">
                  <motion.div
                    className="flex gap-3 flex-shrink-0"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ ease: 'linear', duration: 75, repeat: Infinity }}
                    style={{ willChange: 'transform' }}
                  >
                    {[
                      'check_auth', 'Fee-Bump Env', 'Session Keys', 'Spend Caps', 'Time-Bound', 'Intent Engine', 'Revocation',
                      'check_auth', 'Fee-Bump Env', 'Session Keys', 'Spend Caps', 'Time-Bound', 'Intent Engine', 'Revocation',
                      'check_auth', 'Fee-Bump Env', 'Session Keys', 'Spend Caps', 'Time-Bound', 'Intent Engine', 'Revocation',
                      'check_auth', 'Fee-Bump Env', 'Session Keys', 'Spend Caps', 'Time-Bound', 'Intent Engine', 'Revocation',
                    ].map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-mono px-3 py-1 border border-[#8A8A8A]/20 bg-[#0d0d0d] text-[#8a8a8a] rounded-[661px] select-none whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Row — 3 Cards of equal width */}
          
          {/* 4. Instant Revocation */}
          <div className="relative lg:col-span-4 border-b lg:border-b-0 border-[#8A8A8A]/30 lg:border-r border-[#8A8A8A]/30 bg-[#080808]/40 p-8 flex flex-col justify-between min-h-[200px]">
            <CornerSq pos="tl" />
            <CornerSq pos="tr" />
            <CornerSq pos="bl" />
            <CornerSq pos="br" />

            <div className="w-8 h-8 rounded-none border border-[#8A8A8A]/20 flex items-center justify-center text-[#8a8a8a] mb-6">
              <RefreshCw className="w-4 h-4" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xs font-bold tracking-wider font-mono uppercase text-[#ffffff]">
                Instant Revocation
              </h3>
              <p className="text-[11px] text-[#8a8a8a] leading-relaxed">
                Terminate compromised session keys off-chain instantly to block suspicious transaction propagation.
              </p>
            </div>
          </div>

          {/* 5. Gas Sponsorship */}
          <div className="relative lg:col-span-4 border-b lg:border-b-0 border-[#8A8A8A]/30 lg:border-r border-[#8A8A8A]/30 bg-[#080808]/40 p-8 flex flex-col justify-between min-h-[200px]">
            <CornerSq pos="tl" />
            <CornerSq pos="tr" />
            <CornerSq pos="bl" />
            <CornerSq pos="br" />

            <div className="w-8 h-8 rounded-none border border-[#8A8A8A]/20 flex items-center justify-center text-[#8a8a8a] mb-6">
              <Zap className="w-4 h-4" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xs font-bold tracking-wider font-mono uppercase text-[#ffffff]">
                Gas Sponsorship
              </h3>
              <p className="text-[11px] text-[#8a8a8a] leading-relaxed">
                Establish rate limits, fee budgets, and sponsor transaction gas fees based on custom security policies.
              </p>
            </div>
          </div>

          {/* 6. Zero-Dependency Integration */}
          <div className="relative lg:col-span-4 bg-[#080808]/40 p-8 flex flex-col justify-between min-h-[200px]">
            <CornerSq pos="tl" />
            <CornerSq pos="tr" />
            <CornerSq pos="bl" />
            <CornerSq pos="br" />

            <div className="w-8 h-8 rounded-none border border-[#8A8A8A]/20 flex items-center justify-center text-[#8a8a8a] mb-6">
              <Layers className="w-4 h-4" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xs font-bold tracking-wider font-mono uppercase text-[#ffffff]">
                Zero-Dependency
              </h3>
              <p className="text-[11px] text-[#8a8a8a] leading-relaxed">
                Integrate with any Smart Account contract via standard signature verification. No migration required.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
