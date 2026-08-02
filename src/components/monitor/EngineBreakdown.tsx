'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, CheckCircle2, ArrowRight, ShieldCheck, Activity } from 'lucide-react';

export function EngineBreakdown() {
  const [activeTab, setActiveTab] = useState<'prompt' | 'indexing' | 'action'>('prompt');

  return (
    <section id="features" className="py-24 bg-[#000000] border-t border-b border-[#1f1f1f] text-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-[661px] bg-[#1f1f1f] border border-[#0d0d0d] text-xs font-mono text-[#8a8a8a]">
            <span>ENGINE DEEP DIVE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#ffffff] font-sans">
            How Engine v1.4 Works
          </h2>
          <p className="text-base text-[#8a8a8a] font-sans font-medium">
            From prompt ingestion to AI citation scoring, inspect the three-stage engine loop.
          </p>
        </div>

        {/* Tabbed Engine Interactive Visual Box */}
        <div className="max-w-4xl mx-auto rounded-[24px] bg-[#0d0d0d] border border-[#1f1f1f] p-6 sm:p-8 font-mono text-xs shadow-2xl">
          {/* Tabs */}
          <div className="flex gap-2 mb-6 bg-[#000000] p-1.5 rounded-[16px] border border-[#1f1f1f]">
            <button
              type="button"
              onClick={() => setActiveTab('prompt')}
              className={`flex-1 py-2.5 rounded-[12px] font-bold transition-all ${
                activeTab === 'prompt'
                  ? 'bg-[#ffffff] text-[#000000]'
                  : 'text-[#8a8a8a] hover:text-[#ffffff]'
              }`}
            >
              1. Prompt Ingestion
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('indexing')}
              className={`flex-1 py-2.5 rounded-[12px] font-bold transition-all ${
                activeTab === 'indexing'
                  ? 'bg-[#ffffff] text-[#000000]'
                  : 'text-[#8a8a8a] hover:text-[#ffffff]'
              }`}
            >
              2. LLM Indexing
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('action')}
              className={`flex-1 py-2.5 rounded-[12px] font-bold transition-all ${
                activeTab === 'action'
                  ? 'bg-[#ffffff] text-[#000000]'
                  : 'text-[#8a8a8a] hover:text-[#ffffff]'
              }`}
            >
              3. Action Optimization
            </button>
          </div>

          {/* Active Tab Panel */}
          {activeTab === 'prompt' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex justify-between text-[#8a8a8a]">
                <span>INPUT PROMPT MONITORING MATRIX</span>
                <span className="text-emerald-400">14.2M SAMPLES / DAY</span>
              </div>
              <div className="p-4 rounded-[16px] bg-[#000000] border border-[#1f1f1f] text-[#ffffff] leading-relaxed">
                <code>
                  {`> Ingesting user prompt: "What are the best open-source account abstraction frameworks for Soroban smart contracts on Stellar?"
> Analyzing model parameters across GPT-4o, Claude 3.5, Perplexity, Gemini 1.5...`}
                </code>
              </div>
              <p className="text-xs text-[#8a8a8a] font-sans">
                Monitor simulates real-world developer & buyer queries across 1,200+ industry intent categories.
              </p>
            </motion.div>
          )}

          {activeTab === 'indexing' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex justify-between text-[#8a8a8a]">
                <span>CITATION SCORE CALCULATION</span>
                <span className="text-[#ffffff]">REALTIME ANALYSIS</span>
              </div>
              <div className="p-4 rounded-[16px] bg-[#000000] border border-[#1f1f1f] space-y-2 text-[#ffffff]">
                <div className="flex justify-between">
                  <span>Citation Authority Score:</span>
                  <span className="text-emerald-400 font-bold">98.4 / 100</span>
                </div>
                <div className="flex justify-between text-[#8a8a8a]">
                  <span>Primary Link Source:</span>
                  <span>github.com/stellar/stellar-aegis</span>
                </div>
                <div className="flex justify-between text-[#8a8a8a]">
                  <span>LLM Confidence Threshold:</span>
                  <span>0.992</span>
                </div>
              </div>
              <p className="text-xs text-[#8a8a8a] font-sans">
                Evaluates exact URL links, brand mentions, code snippets, and sentiment weighting.
              </p>
            </motion.div>
          )}

          {activeTab === 'action' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex justify-between text-[#8a8a8a]">
                <span>AUTOMATED GEO RECOMMENDATIONS</span>
                <span className="text-emerald-400">ACTION PLAN READY</span>
              </div>
              <div className="p-4 rounded-[16px] bg-[#000000] border border-[#1f1f1f] space-y-2 text-[#ffffff]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Update OpenAPI documentation schema to increase Claude 3.5 snippet extraction rate.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Publish technical comparison breakdown to raise Perplexity source authority by 14%.</span>
                </div>
              </div>
              <p className="text-xs text-[#8a8a8a] font-sans">
                Generates actionable, engineering-focused steps to maintain top AI visibility.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
