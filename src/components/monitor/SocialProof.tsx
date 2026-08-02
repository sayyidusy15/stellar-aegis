'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function SocialProof() {
  const testimonials = [
    {
      quote: "Aegis completely changed how we think about Smart Account authorization. Building session policies used to take weeks — now it's hours.",
      author: "Cassandra Liu",
      role: "Lead Engineer · Stellar Wallet Team",
      score: "Session v2 Live",
    },
    {
      quote: "The policy model is genuinely flexible. We implemented spending limits with a custom intent policy and shipped it to production in one sprint.",
      author: "Marcus Park",
      role: "Senior Engineer · Soroban Labs",
      score: "99.8% Uptime",
    },
    {
      quote: "Other SDKs just wrap check_auth. Aegis gives you the full authorization lifecycle. For teams building on Stellar, that's the missing layer.",
      author: "Sofia Okonkwo",
      role: "CEO · Stellar DeFi Protocol",
      score: "Open Source",
    },
  ];

  return (
    <section className="py-24 bg-[#000000] border-t border-[#1f1f1f] text-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-[661px] bg-[#1f1f1f] border border-[#0d0d0d] text-xs font-mono text-[#8a8a8a]">
            <span>TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#ffffff] font-sans">
            Trusted by engineering teams
          </h2>
          <p className="text-base text-[#8a8a8a] font-sans font-medium">
            Teams building on Stellar and Soroban rely on Aegis to manage the full authorization lifecycle with confidence.
          </p>
        </div>

        {/* Testimonials 3-Col Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              className="rounded-[24px] bg-[#0d0d0d] border border-[#1f1f1f] p-8 flex flex-col justify-between hover:border-[#8a8a8a] transition-all duration-300"
            >
              {/* Quote */}
              <blockquote className="text-sm text-[#8a8a8a] leading-relaxed font-sans font-medium mb-8 flex-1">
                <span className="text-3xl text-[#1f1f1f] font-bold font-sans leading-none block mb-2">"</span>
                {t.quote}
              </blockquote>

              {/* Author Info */}
              <div className="border-t border-[#1f1f1f] pt-6 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-[#ffffff] font-sans">{t.author}</div>
                  <div className="text-xs text-[#8a8a8a] font-sans mt-0.5">{t.role}</div>
                </div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-[661px] bg-[#1f1f1f] text-[#8a8a8a] border border-[#0d0d0d]">
                  {t.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
