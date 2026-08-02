'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { DitheredCanvas } from '@/components/DitheredCanvas';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CtaFinal() {
  return (
    <section className="py-24 bg-[#000000] text-[#ffffff] relative overflow-hidden">
      {/* Background: Full-bleed dithered grid canvas  */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <DitheredCanvas density={12} interactive={true} />
      </div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[661px] bg-[#1f1f1f] border border-[#0d0d0d] text-xs font-mono text-[#8a8a8a]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>FREE 14-DAY TRIAL · NO CREDIT CARD NEEDED</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#ffffff] font-sans leading-[1.1]">
            Start monitoring your<br />
            <span className="text-[#8a8a8a]">AI search presence today.</span>
          </h2>

          {/* Subtext */}
          <p className="text-base text-[#8a8a8a] max-w-xl mx-auto leading-relaxed font-sans font-medium">
            Join 500+ engineering teams already tracking LLM citations. Set up in under 5 minutes, no script installation required.
          </p>

          {/* CTA Buttons Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <button
              type="button"
              className="px-8 py-4 rounded-[661px] bg-[#ffffff] text-[#000000] text-[15px] font-medium transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black shadow-2xl flex items-center gap-2"
            >
              <span>Start for free</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              className="px-8 py-4 rounded-[661px] bg-[#000000] border border-[#1f1f1f] text-[#ffffff] text-[15px] font-medium transition-all duration-300 hover:border-[#8a8a8a] hover:bg-[#0d0d0d] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Talk to Sales
            </button>
          </div>

          {/* Social Micro-Proof */}
          <p className="text-xs text-[#8a8a8a] font-mono pt-2">
            Trusted by teams at Vercel, Supabase, Liveblocks, Resend, Stripe & more.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
