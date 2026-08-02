'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, ArrowRight, Flag } from 'lucide-react';

export function RoadmapSection() {
  const phases = [
    {
      phase: 'Phase 01',
      title: 'Foundation',
      status: 'Active / In Progress',
      statusColor: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10',
      items: [
        'Smart Account reference integration with check_auth',
        'TypeScript Policy Compiler & Session SDK',
        'Official 19-Page Developer Documentation',
        'Testnet deployment & integration tests',
      ],
    },
    {
      phase: 'Phase 02',
      title: 'Developer Platform',
      status: 'Planned Q4 2026',
      statusColor: 'text-blue-400 border-blue-500/30 bg-blue-500/10',
      items: [
        'Developer Control Panel Dashboard',
        'Visual Policy Builder & Syntax Validator',
        'Session Inspector & Invocation Simulator',
        'Soroban Event Explorer & Indexer',
      ],
    },
    {
      phase: 'Phase 03',
      title: 'Shared Infrastructure',
      status: 'Planned Q1 2027',
      statusColor: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10',
      items: [
        'Production monitoring & real-time alerts',
        'Emergency Revocation Console & Circuit Breaker',
        'Sponsorship Rate-Limiting & Budget Pool Manager',
        'REST & GraphQL Operational APIs',
      ],
    },
    {
      phase: 'Phase 04',
      title: 'Ecosystem Standard',
      status: 'Planned Q2 2027',
      statusColor: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10',
      items: [
        'Stellar Ecosystem Proposal (SEP) submission',
        'Shared Revocation Propagation Network',
        'Portable Cross-Application Policy Specs',
        'Multi-Chain Passkey Bridge Research',
      ],
    },
  ];

  return (
    <section id="roadmap" className="py-24 bg-slate-950 text-white border-t border-slate-800/80 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
            Product Roadmap
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 font-mono">
            Incremental Protocol Evolution
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            A milestone-driven roadmap prioritizing developer utility, security audits, and ecosystem standardization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/30 transition-all hover:bg-slate-900/80"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-500">{item.phase}</span>
                  <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded border ${item.statusColor}`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="text-lg font-mono font-bold text-white mb-4">{item.title}</h3>
                <ul className="space-y-2.5 text-xs text-slate-300 font-sans">
                  {item.items.map((sub, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{sub}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
