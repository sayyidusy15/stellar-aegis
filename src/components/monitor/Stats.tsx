'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function Stats() {
  const stats = [
    { value: '14.2M+', label: 'AI Prompts Indexed Daily' },
    { value: '99.8%', label: 'Citation Accuracy Rate' },
    { value: '< 50ms', label: 'Realtime Alert Latency' },
    { value: '500+', label: 'Enterprise Brands Monitored' },
  ];

  return (
    <section className="py-16 bg-[#000000] border-t border-b border-[#1f1f1f] text-[#ffffff]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="space-y-1"
            >
              <div className="text-3xl sm:text-5xl font-bold font-sans text-[#ffffff] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-sans font-medium text-[#8a8a8a]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
