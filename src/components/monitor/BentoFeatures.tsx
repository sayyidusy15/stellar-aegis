'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DitheredCanvas } from '@/components/DitheredCanvas';
import { Eye, ShieldCheck, Zap, BarChart3, Search, RefreshCw, Cpu, Layers } from 'lucide-react';

export function BentoFeatures() {
  return (
    <section id="bento" className="py-24 bg-[#000000] text-[#ffffff] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-[661px] bg-[#1f1f1f] border border-[#0d0d0d] text-xs font-mono text-[#8a8a8a]">
            <span>BENTO ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#ffffff] font-sans">
            Complete Authorization Control for Stellar Developers
          </h2>
          <p className="text-base text-[#8a8a8a] font-sans font-medium">
            Aegis handles every layer of the authorization lifecycle — session management, policy enforcement, delegation, and revocation — so your Smart Account stays secure and flexible.
          </p>
        </div>

        {/* Asymmetric Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: 8 Columns - Real-Time Citation Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-8 rounded-[24px] bg-[#0d0d0d] border border-[#1f1f1f] p-8 md:p-10 hover:border-[#8a8a8a] transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute inset-0 pointer-events-none opacity-20">
              <DitheredCanvas density={18} interactive={false} />
            </div>

            <div className="relative z-10 space-y-4 mb-8">
              <div className="w-10 h-10 rounded-[661px] bg-[#1f1f1f] flex items-center justify-center text-[#ffffff]">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-[#ffffff] font-sans">
                Real-Time Citation Engine
              </h3>
              <p className="text-sm text-[#8a8a8a] max-w-xl leading-relaxed font-sans font-medium">
                Track how often ChatGPT, Perplexity, Claude, and Gemini recommend your product when users ask high-intent buying questions.
              </p>
            </div>

            {/* Visual Dashboard Snippet inside Card */}
            <div className="relative z-10 p-5 rounded-[16px] bg-[#000000] border border-[#1f1f1f] font-mono text-xs space-y-3">
              <div className="flex justify-between items-center text-[#8a8a8a] border-b border-[#1f1f1f] pb-2">
                <span>QUERY: "Best developer database for Next.js"</span>
                <span className="text-emerald-400">RANK #1 CITATION</span>
              </div>
              <div className="space-y-2 text-[#ffffff]">
                <div className="flex justify-between">
                  <span>ChatGPT 4o Recommendation:</span>
                  <span className="text-[#ffffff] font-bold">100% Mention</span>
                </div>
                <div className="flex justify-between text-[#8a8a8a]">
                  <span>Perplexity Pro Source Link:</span>
                  <span className="text-[#8a8a8a]">Cited from official docs</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2: 4 Columns - Sentiment Analysis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-4 rounded-[24px] bg-[#0d0d0d] border border-[#1f1f1f] p-8 hover:border-[#8a8a8a] transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4 mb-6">
              <div className="w-10 h-10 rounded-[661px] bg-[#1f1f1f] flex items-center justify-center text-[#ffffff]">
                <BarChart3 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#ffffff] font-sans">
                Sentiment & Tone Radar
              </h3>
              <p className="text-xs text-[#8a8a8a] leading-relaxed font-sans font-medium">
                Understand how LLMs portray your brand vs competitors in evaluation outputs.
              </p>
            </div>

            <div className="p-4 rounded-[16px] bg-[#000000] border border-[#1f1f1f] space-y-3 font-mono text-xs">
              <div className="flex justify-between text-[#8a8a8a]">
                <span>Brand Tone Rating</span>
                <span className="text-[#ffffff]">98.4 / 100</span>
              </div>
              <div className="w-full bg-[#1f1f1f] h-2 rounded-full overflow-hidden">
                <div className="bg-[#ffffff] h-full w-[98%]" />
              </div>
              <p className="text-[11px] text-[#8a8a8a]">
                Categorized as "Enterprise Reliable" by Claude 3.5.
              </p>
            </div>
          </motion.div>

          {/* Card 3: 4 Columns - Competitor Share of Voice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-4 rounded-[24px] bg-[#0d0d0d] border border-[#1f1f1f] p-8 hover:border-[#8a8a8a] transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-4 mb-6">
              <div className="w-10 h-10 rounded-[661px] bg-[#1f1f1f] flex items-center justify-center text-[#ffffff]">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-[#ffffff] font-sans">
                Competitor Share Benchmark
              </h3>
              <p className="text-xs text-[#8a8a8a] leading-relaxed font-sans font-medium">
                Direct head-to-head citation comparison across your category.
              </p>
            </div>

            <div className="p-4 rounded-[16px] bg-[#000000] border border-[#1f1f1f] space-y-2 font-mono text-xs">
              <div className="flex justify-between text-[#ffffff]">
                <span>Your Brand</span>
                <span>64% Share</span>
              </div>
              <div className="flex justify-between text-[#8a8a8a]">
                <span>Competitor A</span>
                <span>22% Share</span>
              </div>
              <div className="flex justify-between text-[#8a8a8a]">
                <span>Competitor B</span>
                <span>14% Share</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: 8 Columns - Generative Engine Optimization (GEO) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-8 rounded-[24px] bg-[#0d0d0d] border border-[#1f1f1f] p-8 md:p-10 hover:border-[#8a8a8a] transition-all duration-300 group relative overflow-hidden flex flex-col justify-between"
          >
            <div className="relative z-10 space-y-4 mb-8">
              <div className="w-10 h-10 rounded-[661px] bg-[#1f1f1f] flex items-center justify-center text-[#ffffff]">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold text-[#ffffff] font-sans">
                Generative Engine Optimization (GEO)
              </h3>
              <p className="text-sm text-[#8a8a8a] max-w-xl leading-relaxed font-sans font-medium">
                Automated recommendations to restructure documentation, schema, and press references so LLM crawlers prioritize your brand.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-4 rounded-[16px] bg-[#000000] border border-[#1f1f1f] space-y-2">
                <span className="text-[#ffffff] font-bold block">1. Schema Injection</span>
                <span className="text-[#8a8a8a] text-[11px]">Inject structured JSON-LD data for LLM scraper bots.</span>
              </div>
              <div className="p-4 rounded-[16px] bg-[#000000] border border-[#1f1f1f] space-y-2">
                <span className="text-[#ffffff] font-bold block">2. Citation Seeding</span>
                <span className="text-[#8a8a8a] text-[11px]">Publish authoritative reference articles on index domains.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
