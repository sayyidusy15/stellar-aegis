'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GridFrame, GridCell } from './GridFrame';

export function Stats() {
  const stats = [
    { value: '2.4M', label: 'Queries tracked monthly', icon: '⌕' },
    { value: '8+',   label: 'AI engines monitored',    icon: '⊡' },
    { value: '99.8%', label: 'Citation accuracy rate', icon: '◎' },
    { value: '<50ms', label: 'Realtime alert latency', icon: '⟳' },
  ];

  return (
    <section className="bg-[#000000] text-[#ffffff]">
      <GridFrame borderClasses="border-b border-[#8A8A8A]/30">
        {/*
          4-col grid. Each cell shares the GridCell corner crosshair marks.
          Cells divided by right-border lines except the last.
        */}
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, idx) => (
            <GridCell key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`flex flex-col gap-3 px-8 py-10 ${
                  idx < stats.length - 1 ? 'border-r border-[#8A8A8A]/20' : ''
                }`}
              >
                <span className="text-[#8a8a8a] text-base font-mono leading-none">
                  {stat.icon}
                </span>
                <div className="text-3xl sm:text-4xl font-semibold font-sans text-[#ffffff] tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[13px] font-sans font-normal text-[#8a8a8a] leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            </GridCell>
          ))}
        </div>
      </GridFrame>
    </section>
  );
}
