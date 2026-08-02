'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GitPullRequest, ShieldCheck, Heart, ExternalLink, Code2 } from 'lucide-react';

export function OpenSourceCommunity() {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden font-sans border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
            Public Good Infrastructure
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 font-mono">
            Open Source & Community Driven
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Stellar Aegis is built openly for the Stellar developer ecosystem. No proprietary lock-in, fully inspectable code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4">
                <Code2 className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-base font-mono font-bold text-white mb-2">Apache 2.0 / MIT Licensed</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Free for commercial and non-commercial dApps. Integrate into your smart account projects without restrictive licenses.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80 text-xs font-mono text-cyan-400">
              <span>Open Infrastructure</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4">
                <GitPullRequest className="w-5 h-5 text-blue-400" />
              </div>
              <h3 className="text-base font-mono font-bold text-white mb-2">Open Contributions</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                We welcome Pull Requests for Policy Compilers, Soroban custom account traits, indexer connectors, and documentation translations.
              </p>
            </div>
            <a
              href="https://github.com/stellar/stellar-aegis"
              target="_blank"
              rel="noreferrer"
              className="pt-4 mt-4 border-t border-slate-800/80 text-xs font-mono text-cyan-400 flex items-center justify-between hover:underline"
            >
              <span>Contribute on GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-all">
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mb-4">
                <Heart className="w-5 h-5 text-rose-400" />
              </div>
              <h3 className="text-base font-mono font-bold text-white mb-2">Stellar Ecosystem Grant</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Designed specifically for the Stellar Builder Challenge, Instawards, and Stellar Community Fund (SCF) ecosystem tracks.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-slate-800/80 text-xs font-mono text-cyan-400">
              <span>Stellar Community</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
