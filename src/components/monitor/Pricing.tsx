'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      name: 'Developer',
      price: billingCycle === 'annual' ? '$49' : '$59',
      desc: 'For individual products & startup growth teams.',
      features: [
        '500 Tracked AI Prompts',
        'Hourly Citation Refresh',
        'ChatGPT, Perplexity & Claude Coverage',
        'Slack & Email Realtime Alerts',
        '1 Team Seat',
      ],
      cta: 'Start 14-day trial',
      highlighted: false,
    },
    {
      name: 'Growth Engine',
      price: billingCycle === 'annual' ? '$149' : '$179',
      desc: 'For scaling SaaS & developer infrastructure teams.',
      features: [
        '5,000 Tracked AI Prompts',
        'Realtime Continuous Indexing',
        'All 8 Major LLM Search Networks',
        'Generative Engine Optimization (GEO) Recommendations',
        'Competitor Benchmark Matrix',
        '5 Team Seats',
      ],
      cta: 'Start 14-day trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      desc: 'For multi-brand portfolios & large engineering orgs.',
      features: [
        'Unlimited Prompt Indexing',
        'Custom Fine-Tuned Model Benchmarks',
        'Dedicated LLM Scraper Network Nodes',
        'SLA & Priority Support',
        'Unlimited Seats & Custom SSO',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#000000] text-[#ffffff] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-[661px] bg-[#1f1f1f] border border-[#0d0d0d] text-xs font-mono text-[#8a8a8a]">
            <span>TRANSPARENT PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#ffffff] font-sans">
            Simple, Predictable Plans
          </h2>
          <p className="text-base text-[#8a8a8a] font-sans font-medium">
            Start tracking your AI search visibility today. Upgrade or cancel anytime.
          </p>

          {/* Billing Cycle Pill Toggle */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1 rounded-[661px] bg-[#0d0d0d] border border-[#1f1f1f] text-xs font-mono">
              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-4 py-2 rounded-[661px] transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-[#ffffff] text-[#000000] font-bold'
                    : 'text-[#8a8a8a] hover:text-[#ffffff]'
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingCycle('annual')}
                className={`px-4 py-2 rounded-[661px] transition-all ${
                  billingCycle === 'annual'
                    ? 'bg-[#ffffff] text-[#000000] font-bold'
                    : 'text-[#8a8a8a] hover:text-[#ffffff]'
                }`}
              >
                Annual (Save 20%)
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-[24px] bg-[#0d0d0d] border p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                plan.highlighted
                  ? 'border-[#ffffff] shadow-2xl relative'
                  : 'border-[#1f1f1f] hover:border-[#8a8a8a]'
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold font-sans text-[#ffffff]">{plan.name}</h3>
                  {plan.highlighted && (
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-[661px] bg-[#ffffff] text-[#000000]">
                      MOST POPULAR
                    </span>
                  )}
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold font-sans text-[#ffffff]">{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="text-xs text-[#8a8a8a] font-sans ml-1">/ month</span>
                  )}
                </div>
                <p className="text-xs text-[#8a8a8a] font-sans mb-8 leading-relaxed font-medium">
                  {plan.desc}
                </p>

                <div className="space-y-3 border-t border-[#1f1f1f] pt-6 mb-8 font-sans text-xs text-[#ffffff]">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                className={`w-full py-3.5 rounded-[661px] text-[15px] font-medium transition-all duration-300 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                  plan.highlighted
                    ? 'bg-[#ffffff] text-[#000000] hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]'
                    : 'bg-[#000000] border border-[#1f1f1f] text-[#ffffff] hover:border-[#8a8a8a] hover:bg-[#0d0d0d] active:scale-[0.98]'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
