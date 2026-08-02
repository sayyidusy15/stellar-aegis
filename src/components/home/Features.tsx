'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Key, ShieldAlert, Cpu, Activity, Zap, FileCode2, Terminal, Code } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Key className="w-5 h-5 text-cyan-400" />,
      title: 'Session Lifecycle',
      desc: 'Create, rotate, inspect, and expire temporary delegated session keys stored in cheap Soroban Temporary state.',
      badge: 'Core Primitive',
    },
    {
      icon: <FileCode2 className="w-5 h-5 text-blue-400" />,
      title: 'Policy Management',
      desc: 'Define spending velocity limits, contract allowlists, and time locks in human-readable YAML compiled to Soroban binary.',
      badge: 'Policy Engine',
    },
    {
      icon: <Zap className="w-5 h-5 text-indigo-400" />,
      title: 'Intent Policies',
      desc: 'Authorize complete multi-operation transaction outcomes instead of isolated contract function calls.',
      badge: 'Outcome Auth',
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-rose-400" />,
      title: 'Emergency Revocation',
      desc: 'Instantly invalidate compromised sessions or delegated signers on-chain with deterministic circuit breakers.',
      badge: 'Security',
    },
    {
      icon: <Activity className="w-5 h-5 text-emerald-400" />,
      title: 'Real-Time Monitoring',
      desc: 'Index Soroban Events to track active sessions, sponsor budget consumption, and authorization trends.',
      badge: 'Observability',
    },
    {
      icon: <Terminal className="w-5 h-5 text-cyan-300" />,
      title: 'Authorization Explainability',
      desc: 'Simulate transactions off-chain to get human-readable explanations when check_auth rejects an intent.',
      badge: 'DevEx',
    },
    {
      icon: <Code className="w-5 h-5 text-purple-400" />,
      title: 'Developer SDK & APIs',
      desc: 'High-level TypeScript and Rust SDKs providing clean abstractions for dApps, wallets, and relayer networks.',
      badge: 'SDK Tooling',
    },
    {
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      title: 'Reference Smart Account',
      desc: 'Production-ready Soroban Smart Account reference contract implementing Passkey WebAuthn & Aegis custom auth.',
      badge: 'Reference Implementation',
    },
  ];

  return (
    <section id="features" className="py-24 bg-slate-950 text-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
            Modular Subsystems
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 font-mono">
            Core Protocol Capabilities
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Modular components designed to be adopted independently or together, scaling seamlessly with your application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-cyan-500/40 transition-all hover:bg-slate-900 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-base font-mono font-bold text-slate-200 mb-2">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
