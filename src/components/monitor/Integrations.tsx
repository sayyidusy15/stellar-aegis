'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function Integrations() {
  const models = [
    { name: 'ChatGPT (GPT-4o)', status: 'Live Indexing' },
    { name: 'Perplexity Pro', status: 'Live Indexing' },
    { name: 'Claude 3.5 Sonnet', status: 'Live Indexing' },
    { name: 'Google Gemini 1.5', status: 'Live Indexing' },
    { name: 'Meta Llama 3.3', status: 'Live Indexing' },
    { name: 'Mistral Le Chat', status: 'Live Indexing' },
    { name: 'Microsoft Copilot', status: 'Live Indexing' },
    { name: 'DeepSeek R1', status: 'Live Indexing' },
  ];

  return (
    <section id="visibility" className="py-20 bg-[#000000] text-[#ffffff] border-b border-[#1f1f1f]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#8a8a8a] mb-2">
            AI ENGINE COVERAGE
          </h3>
          <p className="text-lg font-sans font-bold text-[#ffffff]">
            Native integration with the Stellar & Soroban ecosystem
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
          {models.map((model, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-4 rounded-[16px] bg-[#0d0d0d] border border-[#1f1f1f] flex items-center justify-between hover:border-[#8a8a8a] transition-all"
            >
              <span className="font-bold text-[#ffffff]">{model.name}</span>
              <span className="text-[10px] text-emerald-400 font-mono">● {model.status}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
