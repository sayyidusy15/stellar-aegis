'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { SpotlightGlow } from './SpotlightGlow';

export function EngineBreakdown() {
  const [activeTab, setActiveTab] = useState<'compile' | 'validate' | 'execute'>('compile');

  return (
    <section id="how-it-works" className="py-24 bg-[#000000] border-t border-b border-[#1f1f1f] text-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="relative text-center max-w-3xl mx-auto mb-16 space-y-4 overflow-visible z-10">
          <SpotlightGlow />
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-[661px] bg-[#1f1f1f] border border-[#0d0d0d] text-xs font-mono text-[#8a8a8a]">
            <span>ENGINE DEEP DIVE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#ffffff] font-sans">
            How the Aegis Protocol Works
          </h2>
          <p className="text-base text-[#8a8a8a] font-sans font-medium">
            From policy compilation to on-chain execution, trace the three-stage authorization loop.
          </p>
        </div>

        {/* Tabbed Engine Interactive Visual Box */}
        <div className="max-w-4xl mx-auto rounded-[24px] bg-[#0d0d0d] border border-[#1f1f1f] p-6 sm:p-8 font-mono text-xs shadow-2xl">
          {/* Tabs */}
          <div className="flex gap-2 mb-6 bg-[#000000] p-1.5 rounded-[16px] border border-[#1f1f1f]">
            <button
              type="button"
              onClick={() => setActiveTab('compile')}
              className={`flex-1 py-2.5 rounded-[12px] font-bold transition-all ${
                activeTab === 'compile'
                  ? 'bg-[#ffffff] text-[#000000]'
                  : 'text-[#8a8a8a] hover:text-[#ffffff]'
              }`}
            >
              1. Policy Compilation
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('validate')}
              className={`flex-1 py-2.5 rounded-[12px] font-bold transition-all ${
                activeTab === 'validate'
                  ? 'bg-[#ffffff] text-[#000000]'
                  : 'text-[#8a8a8a] hover:text-[#ffffff]'
              }`}
            >
              2. Host Validation
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('execute')}
              className={`flex-1 py-2.5 rounded-[12px] font-bold transition-all ${
                activeTab === 'execute'
                  ? 'bg-[#ffffff] text-[#000000]'
                  : 'text-[#8a8a8a] hover:text-[#ffffff]'
              }`}
            >
              3. Gas Sponsorship
            </button>
          </div>

          {/* Tab 1: Policy Compilation */}
          {activeTab === 'compile' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex justify-between text-[#8a8a8a]">
                <span>POLICY_COMPILATION_ENGINE</span>
                <span className="text-emerald-400">BINARY READY</span>
              </div>
              <div className="p-4 rounded-[16px] bg-[#000000] border border-[#1f1f1f] text-[#ffffff] leading-relaxed space-y-1">
                <code>
                  {`> Parsing session policy YAML constraints...
> session_key: ed25519:AKm...7Xq (TTL: 3600s)
> limit_daily: 500 XLM
> whitelist: [swap_contract, vault_contract]
> time_lock: 09:00–23:00 UTC
> Compiling to Soroban-optimized binary payload...
> ✓ Policy compiled (104 bytes) — ready for Fee-Bump wrap`}
                </code>
              </div>
              <p className="text-xs text-[#8a8a8a] font-sans">
                Aegis SDK transforms human-readable YAML policy constraints into compact Soroban binary structures — wired into a Protocol 15 Fee-Bump envelope for seamless on-chain submission.
              </p>
            </motion.div>
          )}

          {/* Tab 2: Host Validation (check_auth) */}
          {activeTab === 'validate' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex justify-between text-[#8a8a8a]">
                <span>CHECK_AUTH HOST VECTOR</span>
                <span className="text-[#ffffff]">REALTIME EVALUATION</span>
              </div>
              <div className="p-4 rounded-[16px] bg-[#000000] border border-[#1f1f1f] space-y-2 text-[#ffffff]">
                <div className="flex justify-between">
                  <span>Signature Verification:</span>
                  <span className="text-emerald-400 font-bold">VALID ✓</span>
                </div>
                <div className="flex justify-between text-[#8a8a8a]">
                  <span>Daily Spend Used:</span>
                  <span>120 / 500 XLM (24%)</span>
                </div>
                <div className="flex justify-between text-[#8a8a8a]">
                  <span>Session Commitment:</span>
                  <span>MATCHES ON-CHAIN STATE</span>
                </div>
                <div className="flex justify-between text-[#8a8a8a]">
                  <span>Revocation Status:</span>
                  <span className="text-emerald-400">ACTIVE (Not revoked)</span>
                </div>
              </div>
              <p className="text-xs text-[#8a8a8a] font-sans">
                The smart account contract's native <code className="text-white">check_auth</code> host vector evaluates the session commitment, spend caps, whitelist rules, and revocation state — deterministically and without oracles.
              </p>
            </motion.div>
          )}

          {/* Tab 3: Gas Sponsorship */}
          {activeTab === 'execute' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex justify-between text-[#8a8a8a]">
                <span>FEE-BUMP SPONSORSHIP ENGINE</span>
                <span className="text-emerald-400">TRANSACTION SUBMITTED</span>
              </div>
              <div className="p-4 rounded-[16px] bg-[#000000] border border-[#1f1f1f] space-y-2 text-[#ffffff]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Session key validated — policy constraints passed.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Fee-Bump envelope wraps inner tx — relayer sponsors gas.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>DEX swap executed on Soroban target contract.</span>
                </div>
              </div>
              <p className="text-xs text-[#8a8a8a] font-sans">
                Aegis wraps the authorized transaction in a Protocol 15 Fee-Bump envelope — enabling the relayer to sponsor gas while preserving zero-wrapper composability with Soroban target contracts.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
