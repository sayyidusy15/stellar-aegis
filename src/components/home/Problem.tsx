'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, FileCode, AlertOctagon, Fuel, Eye, HelpCircle } from 'lucide-react';

export function Problem() {
  const problems = [
    {
      icon: <RefreshCw className="w-5 h-5 text-rose-400" />,
      title: 'Repetitive Session Systems',
      desc: 'Every dApp team writes custom, un-audited backend scripts to generate, store, and expire temporary session keys.',
    },
    {
      icon: <FileCode className="w-5 h-5 text-amber-400" />,
      title: 'Ad-Hoc Policy Authoring',
      desc: 'No shared format for defining spend caps or contract allowlists. Rules are hardcoded directly into smart contracts.',
    },
    {
      icon: <AlertOctagon className="w-5 h-5 text-rose-500" />,
      title: 'Fragile Revocation Workflows',
      desc: 'When a user loses their phone or leaks a key, apps lack immediate, deterministic revocation interfaces.',
    },
    {
      icon: <Fuel className="w-5 h-5 text-orange-400" />,
      title: 'Unchecked Sponsor Abuse',
      desc: 'Sponsoring XLM gas fees without on-chain rate limits or budget policies leaves relayer wallets vulnerable to spam.',
    },
    {
      icon: <Eye className="w-5 h-5 text-cyan-400" />,
      title: 'Zero Production Observability',
      desc: 'Operators have no visibility into active sessions, sponsor usage trends, or revoked credentials across ledgers.',
    },
    {
      icon: <HelpCircle className="w-5 h-5 text-indigo-400" />,
      title: 'Opaque Auth Rejections',
      desc: 'When check_auth fails, developers receive generic error bytes instead of clear explanations of which rule failed.',
    },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full">
            The Infrastructure Gap
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 font-mono">
            Stop Rebuilding Authorization Operations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Stellar provides secure Smart Account primitives. But every team ends up rebuilding the same operational layer surrounding them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800/80 hover:border-rose-500/40 transition-all hover:bg-slate-900/80 group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-base font-mono font-bold text-slate-200 mb-2">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
