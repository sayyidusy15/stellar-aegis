'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Settings, KeyRound, Lock, Eye, AlertCircle, Clock } from 'lucide-react';

export function Lifecycle() {
  const [activeStep, setActiveStep] = useState(0);

  const stages = [
    {
      step: '01',
      title: 'Create',
      icon: <UserPlus className="w-5 h-5 text-cyan-400" />,
      summary: 'Identity registration (User, AI Agent, Organization, Backend Worker).',
      detail: 'The identity is created. No permissions are granted initially. Aegis establishes the identity anchor.',
    },
    {
      step: '02',
      title: 'Configure',
      icon: <Settings className="w-5 h-5 text-blue-400" />,
      summary: 'Policy authoring (Spend limits, contract allowlists, function selectors).',
      detail: 'Developers author human-readable policies defining boundaries for future transaction execution.',
    },
    {
      step: '03',
      title: 'Delegate',
      icon: <KeyRound className="w-5 h-5 text-indigo-400" />,
      summary: 'Scoped session grant creation with temporary keypair.',
      detail: 'Smart Account owner approves a restricted session key grant with explicit expiration TTL and spend caps.',
    },
    {
      step: '04',
      title: 'Authorize',
      icon: <Lock className="w-5 h-5 text-emerald-400" />,
      summary: 'On-chain check_auth host vector validation during transaction execution.',
      detail: 'Smart Account evaluates signature validity, session state, and policy constraints deterministically on-chain.',
    },
    {
      step: '05',
      title: 'Observe',
      icon: <Eye className="w-5 h-5 text-cyan-300" />,
      summary: 'Real-time event indexing, telemetry, and execution explainability.',
      detail: 'Aegis Control Plane logs session activity and provides human-readable explanations if auth fails.',
    },
    {
      step: '06',
      title: 'Revoke',
      icon: <AlertCircle className="w-5 h-5 text-rose-400" />,
      summary: 'Emergency on-chain invalidation when a device or key is lost.',
      detail: 'A single master call to revoke_session immediately invalidates compromised keys on-chain.',
    },
    {
      step: '07',
      title: 'Expire',
      icon: <Clock className="w-5 h-5 text-amber-400" />,
      summary: 'Automatic TTL decay in Soroban Temporary storage tier.',
      detail: 'Expired session grants automatically decay from storage without requiring manual cleanup gas.',
    },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white border-t border-slate-800/80 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
            Continuous Operations
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 font-mono">
            The Authorization Lifecycle
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Authorization is not a single transaction. It is an operational lifecycle from key creation to automatic decay.
          </p>
        </div>

        {/* Timeline Horizontal Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
          {stages.map((stage, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl border text-left font-mono transition-all ${
                activeStep === idx
                  ? 'bg-cyan-500/10 border-cyan-500 text-white shadow-lg shadow-cyan-500/10'
                  : 'bg-slate-900/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] text-slate-500">{stage.step}</span>
                {stage.icon}
              </div>
              <span className="text-xs font-bold block truncate">{stage.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Stage Detail Card */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-8 rounded-2xl bg-slate-900/80 border border-cyan-500/30 font-mono text-xs max-w-3xl mx-auto shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-400 font-bold">
                Stage {stages[activeStep].step}
              </span>
              <h3 className="text-base font-bold text-white">{stages[activeStep].title}</h3>
            </div>
            {stages[activeStep].icon}
          </div>
          <p className="text-slate-300 text-sm leading-relaxed mb-3 font-sans">
            {stages[activeStep].summary}
          </p>
          <p className="text-slate-400 text-xs leading-relaxed font-sans border-t border-slate-800/80 pt-3">
            {stages[activeStep].detail}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
