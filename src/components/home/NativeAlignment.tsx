'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, ArrowRight, Lock, Terminal, Layers } from 'lucide-react';

export function NativeAlignment() {
  const steps = [
    {
      title: '1. Developer / App Client',
      desc: 'Formulates Intent payload and requests session grant with policy constraints via Aegis SDK.',
      icon: <Terminal className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: '2. Aegis Control Plane',
      desc: 'Compiles policy YAML into compact binary structures and wraps intent in Protocol 15 Fee-Bump envelope.',
      icon: <Layers className="w-5 h-5 text-blue-400" />,
    },
    {
      title: '3. Smart Account Contract',
      desc: 'Receives invocation request on-chain and triggers native host vector check_auth.',
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
    },
    {
      title: '4. check_auth Host Vector',
      desc: 'Evaluates signer signature, session commitment, spend caps, and revocation state deterministically.',
      icon: <Lock className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: '5. Soroban Target Contracts',
      desc: 'Executes verified state mutation (DEX swap, gaming action, vault deposit) with zero-wrapper composability.',
      icon: <ShieldCheck className="w-5 h-5 text-cyan-300" />,
    },
  ];

  return (
    <section className="py-20 bg-slate-950 text-white border-t border-b border-slate-800/80 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
            Stellar-Native Engineering
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 font-mono">
            Trusted by Stellar Native Authorization
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Aegis does not introduce non-native memory pools or out-of-protocol bundlers. It extends Stellar primitives directly on-chain.
          </p>
        </div>

        {/* Visual Flow Diagram Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between group hover:bg-slate-900"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xs font-mono font-bold text-slate-200 mb-2">{step.title}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed font-sans">{step.desc}</p>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:flex justify-end mt-4 text-slate-600 group-hover:text-cyan-400 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
