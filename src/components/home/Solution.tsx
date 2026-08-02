'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Layers, Lock, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

export function Solution() {
  const [activeLayer, setActiveLayer] = useState<'control' | 'data'>('control');

  return (
    <section className="py-24 bg-slate-950 text-white border-t border-slate-800/80 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
            The Aegis Solution
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 font-mono">
            A Clean Separation of Responsibilities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Aegis introduces an Authorization Control Plane while leaving security enforcement where it belongs: inside the Smart Account on-chain.
          </p>
        </div>

        {/* Interactive Architecture Thesis Box */}
        <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900/90 via-slate-950 to-slate-900/90 border border-slate-800 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Description Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold">
                <Shield className="w-4 h-4" />
                <span>Fundamental Principle</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-mono text-white leading-tight">
                Smart Account owns enforcement. <br />
                <span className="text-cyan-400">Aegis owns lifecycle management.</span>
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                The Smart Account contract evaluates `check_auth` directly on-chain during execution. Aegis surrounds that execution by managing policy authoring, session creation, monitoring, and revocation off-chain.
              </p>

              <div className="space-y-3 font-mono text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Immutable security on-chain</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Resilient failure model (Works even if Aegis is offline)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero vendor lock-in for dApp teams</span>
                </div>
              </div>
            </div>

            {/* Right Visual Interactive Layer Comparison */}
            <div className="lg:col-span-7">
              <div className="flex gap-2 mb-4 bg-slate-950 p-1.5 rounded-xl border border-slate-800 text-xs font-mono">
                <button
                  onClick={() => setActiveLayer('control')}
                  className={`flex-1 py-2 rounded-lg font-bold transition-all ${
                    activeLayer === 'control'
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Control Plane (Off-Chain)
                </button>
                <button
                  onClick={() => setActiveLayer('data')}
                  className={`flex-1 py-2 rounded-lg font-bold transition-all ${
                    activeLayer === 'data'
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Data Plane (On-Chain)
                </button>
              </div>

              {activeLayer === 'control' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-slate-950 border border-cyan-500/30 space-y-4 font-mono text-xs"
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="font-bold text-cyan-400">AEGIS CONTROL PLANE SERVICES</span>
                    <span className="text-[10px] text-slate-500">OFF-CHAIN WORKFLOWS</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-cyan-400 font-bold block mb-1">Session Manager</span>
                      <span className="text-[11px] text-slate-400">Issues, renews, & rotates scoped session keys</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-cyan-400 font-bold block mb-1">Policy Compiler</span>
                      <span className="text-[11px] text-slate-400">Compiles YAML into compact Soroban binary structures</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-cyan-400 font-bold block mb-1">Sponsor Orchestrator</span>
                      <span className="text-[11px] text-slate-400">Manages gas quotas & Protocol 15 Fee-Bumps</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-cyan-400 font-bold block mb-1">Explainability Engine</span>
                      <span className="text-[11px] text-slate-400">Provides human-readable reasons for failed auth</span>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-4 font-mono text-xs"
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <span className="font-bold text-emerald-400">STELLAR ON-CHAIN DATA PLANE</span>
                    <span className="text-[10px] text-slate-500">TRUSTED ENFORCEMENT</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300">
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-emerald-400 font-bold block mb-1">Smart Account</span>
                      <span className="text-[11px] text-slate-400">Owns canonical account state & key grants</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-emerald-400 font-bold block mb-1">check_auth Host Vector</span>
                      <span className="text-[11px] text-slate-400">Evaluates signature & policy deterministically</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-emerald-400 font-bold block mb-1">On-Chain Revocation</span>
                      <span className="text-[11px] text-slate-400">Immediately invalidates compromised nonces</span>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-emerald-400 font-bold block mb-1">Soroban Target Contracts</span>
                      <span className="text-[11px] text-slate-400">Executes business logic upon auth success</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
