'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Layers, Cpu, Lock, ArrowDown, Database, Server, Terminal, CheckCircle2 } from 'lucide-react';

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 bg-slate-950 text-white relative overflow-hidden font-sans border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
            System Topology
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 font-mono">
            High-Level Architecture
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Aegis operates alongside the execution path. Security enforcement stays on-chain inside check_auth; operational tooling stays off-chain.
          </p>
        </div>

        {/* Big Architecture Visual Diagram Card */}
        <div className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800 shadow-2xl relative max-w-5xl mx-auto font-mono text-xs">
          {/* Top: Client Layer */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-center mb-6">
            <span className="text-xs font-bold text-cyan-400 block mb-1">CLIENT / APPLICATION LAYER</span>
            <span className="text-[11px] text-slate-400">Passkey Kit | Aegis TypeScript SDK | DApp Intent Formatter</span>
          </div>

          <div className="flex justify-center mb-6 text-cyan-500">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>

          {/* Grid: On-chain Execution vs Off-chain Control Plane */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* On-Chain Execution Path (8 cols) */}
            <div className="md:col-span-7 p-6 rounded-2xl bg-slate-950 border border-emerald-500/30 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="font-bold text-emerald-400 text-xs">TRUSTED DOMAIN (ON-CHAIN DATA PLANE)</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px]">Stellar Soroban</span>
              </div>

              {/* Execution Steps */}
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span>1. Smart Account Contract</span>
                  <span className="text-slate-500 text-[10px]">Entry Point</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-emerald-500/30 flex items-center justify-between text-emerald-300 font-bold">
                  <span>2. __check_auth() Host Vector</span>
                  <span className="text-emerald-400 text-[10px]">Native Vector</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span>3. On-Chain Policy Verification</span>
                  <span className="text-slate-500 text-[10px]">Deterministic Check</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span>4. Soroban Target Contracts</span>
                  <span className="text-slate-500 text-[10px]">Business Logic</span>
                </div>
              </div>
            </div>

            {/* Off-Chain Control Plane (5 cols) */}
            <div className="md:col-span-5 p-6 rounded-2xl bg-slate-950 border border-cyan-500/30 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="font-bold text-cyan-400 text-xs">AEGIS CONTROL PLANE (OFF-CHAIN)</span>
                <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 text-[10px]">Operational</span>
              </div>

              <div className="space-y-2 text-[11px] text-slate-300">
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                  <span className="font-bold text-cyan-400 block">Session Manager</span>
                  <span className="text-[10px] text-slate-400">Creation, rotation, renewal & revocation</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                  <span className="font-bold text-cyan-400 block">Policy Compiler</span>
                  <span className="text-[10px] text-slate-400">YAML ➔ Compact Soroban Binary</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                  <span className="font-bold text-cyan-400 block">Sponsor Manager</span>
                  <span className="text-[10px] text-slate-400">Fee-Bump wrapping & budget limits</span>
                </div>
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800">
                  <span className="font-bold text-cyan-400 block">Monitoring & Analytics</span>
                  <span className="text-[10px] text-slate-400">Event indexing & explainability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
