'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SpotlightGlow } from './SpotlightGlow';

export function Integrations() {
  const integrations = [
    { name: 'Stellar Horizon API', status: 'Connected' },
    { name: 'Soroban RPC', status: 'Connected' },
    { name: 'Freighter Wallet', status: 'Connected' },
    { name: 'Lobstr Wallet', status: 'Connected' },
    { name: 'Stellar Expert', status: 'Connected' },
    { name: 'StellarBeat DEX', status: 'Connected' },
    { name: 'XBULL Wallet', status: 'Connected' },
    { name: 'Albedo Signer', status: 'Connected' },
  ];

  return (
    <section id="integrations" className="py-20 bg-[#000000] text-[#ffffff] border-b border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="relative text-center max-w-2xl mx-auto mb-12 overflow-visible z-10">
          <SpotlightGlow />
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#8a8a8a] mb-2">
            ECOSYSTEM COVERAGE
          </h3>
          <p className="text-lg font-sans font-bold text-[#ffffff]">
            Native integration with the Stellar &amp; Soroban ecosystem
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
          {integrations.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-4 rounded-[16px] bg-[#0d0d0d] border border-[#1f1f1f] flex items-center justify-between hover:border-[#8a8a8a] transition-all"
            >
              <span className="font-bold text-[#ffffff]">{item.name}</span>
              <span className="text-[10px] text-emerald-400 font-mono">● {item.status}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
