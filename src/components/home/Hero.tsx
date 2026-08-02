'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, BookOpen, Terminal, Sparkles, CheckCircle2, Code2, Lock, Cpu } from 'lucide-react';

export function Hero() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'code'>('architecture');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 text-white font-sans">
      {/* Background Subtle Grid & Glow Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/20 via-blue-600/20 to-indigo-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-mono text-cyan-400 mb-8 shadow-inner"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Soroban Native Authorization Infrastructure</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-5xl leading-[1.1] font-mono"
          >
            Authorization Control Plane <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">
              for Stellar Smart Accounts
            </span>
          </motion.h1>

          {/* Subheadline / Core Thesis */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-sans"
          >
            Managing the operational lifecycle of session keys, policy authoring, emergency revocation, gas sponsorship, and observability—without replacing Stellar native security model.
          </motion.p>

          {/* Core Immutable Positioning Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono text-xs sm:text-sm font-semibold shadow-inner"
          >
            Smart Account owns enforcement. Aegis owns lifecycle management.
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              href="/docs/simple-guide"
              className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 text-slate-950 font-mono font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore Documentation (19 Pages)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://github.com/stellar/stellar-aegis"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 hover:text-white font-mono font-semibold text-sm transition-all hover:border-slate-700"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub Repository</span>
            </a>
          </motion.div>

          {/* Key Value Checks */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400 font-mono"
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Zero-Wrapper Composability</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Native Soroban check_auth</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>No Vendor Lock-In</span>
            </div>
          </motion.div>
        </div>

        {/* Interactive Architecture / Terminal Preview Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-xl shadow-2xl overflow-hidden max-w-5xl mx-auto"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-slate-400 ml-2">aegis-control-plane // soroban-v1</span>
            </div>

            {/* Tab Switches */}
            <div className="flex items-center bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setActiveTab('architecture')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === 'architecture'
                    ? 'bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Control vs Data Plane
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-3 py-1 rounded-md transition-all ${
                  activeTab === 'code'
                    ? 'bg-cyan-500/20 text-cyan-400 font-bold border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                TypeScript SDK Call
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6 sm:p-8 font-mono text-xs">
            {activeTab === 'architecture' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Off-Chain Control Plane Box */}
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                        Operational Control Plane (Off-Chain)
                      </span>
                      <span className="px-2 py-0.5 text-[10px] rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        Aegis Middleware
                      </span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed mb-4">
                      Manages session issuance, policy authoring, telemetry indexing, gas sponsorship pools, and emergency revocation workflows.
                    </p>
                    <ul className="space-y-2 text-[11px] text-slate-300">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>Policy Compiler (YAML ➔ Soroban Binary)</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>Session Manager & TTL Extension</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        <span>Explainability & Real-Time Telemetry</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* On-Chain Trusted Enforcement Box */}
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800/80 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                        Security Enforcement (On-Chain)
                      </span>
                      <span className="px-2 py-0.5 text-[10px] rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Smart Account
                      </span>
                    </div>
                    <p className="text-slate-400 text-[11px] leading-relaxed mb-4">
                      Host vector `check_auth` evaluates signatures, session commitments, spend limits, and revocation flags deterministically.
                    </p>
                    <ul className="space-y-2 text-[11px] text-slate-300">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>check_auth Host Vector Enforcement</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>Deterministic Session Validation</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>Immutable On-Chain Source of Truth</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="overflow-x-auto text-slate-200">
                <pre className="leading-relaxed">
                  <code>{`import { AegisClient, SpendPolicy } from '@stellar-aegis/sdk';

// Initialize Aegis Client
const aegis = new AegisClient({ network: 'testnet' });

// Grant short-lived session with strict policy limits
const session = await aegis.grantSession({
  account: 'CAEGIS...SMART_ACCOUNT',
  validitySeconds: 7200, // 2 Hours
  policies: [
    SpendPolicy.maxSpend('USDC', '50.0000000'),
    SpendPolicy.allowedContracts(['C_GAME_CONTRACT'])
  ]
});

// Execute game transaction in background - Zero Popups!
await aegis.executeSessionCall({
  session,
  contractId: 'C_GAME_CONTRACT',
  method: 'play_round',
  args: []
});`}</code>
                </pre>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
