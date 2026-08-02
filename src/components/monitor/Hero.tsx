'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DitheredCanvas } from '@/components/DitheredCanvas';
import { ArrowRight, Search, Activity, Sparkles, Check } from 'lucide-react';

export function Hero() {
  const words = "Your brand, visible everywhere AI searches.".split(" ");

  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-[#000000] text-[#ffffff]">
      {/* Background Dithered Matrix Layer */}
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <DitheredCanvas density={14} interactive={true} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Badge: Pill-shaped radius.xl */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[661px] bg-[#1f1f1f] border border-[#0d0d0d] text-xs font-mono text-[#8a8a8a] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[#ffffff] font-medium">NEW v1.4</span>
            <span className="text-[#8a8a8a]">— Engine Breakdown</span>
          </motion.div>

          {/* Staggered Word Reveal H1 */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#ffffff] max-w-5xl leading-[1.08] font-sans">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-base sm:text-lg text-[#8a8a8a] max-w-2xl leading-relaxed font-sans font-medium"
          >
            Track, analyze, and optimize your brand presence across ChatGPT, Perplexity, Claude, Gemini, and AI search engines in real time.
          </motion.p>

          {/* CTAs: Primary Pill & Secondary Outline Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              type="button"
              className="px-6 py-3.5 rounded-[661px] bg-[#ffffff] text-[#000000] text-[15px] font-medium transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black shadow-xl flex items-center gap-2"
            >
              <span>Start for free</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              className="px-6 py-3.5 rounded-[661px] bg-[#000000] border border-[#1f1f1f] text-[#ffffff] text-[15px] font-medium transition-all duration-300 hover:border-[#8a8a8a] hover:bg-[#0d0d0d] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Talk to Sales
            </button>
          </motion.div>
        </div>

        {/* Dashboard Visual Container (Grayscale Dithered Aesthetic) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 rounded-[24px] border border-[#1f1f1f] bg-[#0d0d0d] p-6 sm:p-8 shadow-2xl relative overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-[#1f1f1f] pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#1f1f1f]" />
              <div className="w-3 h-3 rounded-full bg-[#1f1f1f]" />
              <div className="w-3 h-3 rounded-full bg-[#1f1f1f]" />
              <span className="text-xs font-mono text-[#8a8a8a] ml-2">monitor.ai/live-search-matrix</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#8a8a8a]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE INDEXING</span>
            </div>
          </div>

          {/* Matrix Visual Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-mono text-xs">
            {/* Engine 1: ChatGPT */}
            <div className="p-5 rounded-[16px] bg-[#000000] border border-[#1f1f1f] space-y-3">
              <div className="flex justify-between text-[#8a8a8a]">
                <span>ChatGPT (GPT-4o)</span>
                <span className="text-emerald-400">94% Rank #1</span>
              </div>
              <div className="text-2xl font-bold text-[#ffffff]">
                Top Mention
              </div>
              <div className="h-1.5 w-full bg-[#1f1f1f] rounded-full overflow-hidden">
                <div className="h-full bg-[#ffffff] w-[94%]" />
              </div>
              <p className="text-[11px] text-[#8a8a8a] font-sans">
                Cited in 94 of 100 developer infrastructure queries.
              </p>
            </div>

            {/* Engine 2: Perplexity */}
            <div className="p-5 rounded-[16px] bg-[#000000] border border-[#1f1f1f] space-y-3">
              <div className="flex justify-between text-[#8a8a8a]">
                <span>Perplexity Pro</span>
                <span className="text-emerald-400">98% Authority</span>
              </div>
              <div className="text-2xl font-bold text-[#ffffff]">
                Primary Rec
              </div>
              <div className="h-1.5 w-full bg-[#1f1f1f] rounded-full overflow-hidden">
                <div className="h-full bg-[#ffffff] w-[98%]" />
              </div>
              <p className="text-[11px] text-[#8a8a8a] font-sans">
                Ranked #1 for "Best AI Search Monitoring Tool 2026".
              </p>
            </div>

            {/* Engine 3: Claude */}
            <div className="p-5 rounded-[16px] bg-[#000000] border border-[#1f1f1f] space-y-3">
              <div className="flex justify-between text-[#8a8a8a]">
                <span>Claude 3.5 Sonnet</span>
                <span className="text-emerald-400">91% Sentiment</span>
              </div>
              <div className="text-2xl font-bold text-[#ffffff]">
                Recommended
              </div>
              <div className="h-1.5 w-full bg-[#1f1f1f] rounded-full overflow-hidden">
                <div className="h-full bg-[#ffffff] w-[91%]" />
              </div>
              <p className="text-[11px] text-[#8a8a8a] font-sans">
                Strong positive sentiment in code architecture advice.
              </p>
            </div>

            {/* Engine 4: Gemini */}
            <div className="p-5 rounded-[16px] bg-[#000000] border border-[#1f1f1f] space-y-3">
              <div className="flex justify-between text-[#8a8a8a]">
                <span>Google Gemini 1.5</span>
                <span className="text-emerald-400">89% Share</span>
              </div>
              <div className="text-2xl font-bold text-[#ffffff]">
                Featured Card
              </div>
              <div className="h-1.5 w-full bg-[#1f1f1f] rounded-full overflow-hidden">
                <div className="h-full bg-[#ffffff] w-[89%]" />
              </div>
              <p className="text-[11px] text-[#8a8a8a] font-sans">
                Included in Google Search AI Overviews summary card.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
