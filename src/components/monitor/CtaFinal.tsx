'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

/* ── Blueprint dot grid overlay ── */
function BlueprintGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-[1]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(138,138,138,0.05) 1px, transparent 1px),' +
          'linear-gradient(90deg, rgba(138,138,138,0.05) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />
  );
}

/* ── Concentric Radar Circles Overlay ── */
function RadarOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-[2] flex items-center justify-center overflow-hidden">
      <svg
        className="w-[700px] h-[700px] text-white opacity-20"
        viewBox="0 0 700 700"
        fill="none"
      >
        <circle cx="350" cy="350" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.12" />
        <circle cx="350" cy="350" r="260" stroke="currentColor" strokeWidth="1" strokeOpacity="0.08" />
        <circle cx="350" cy="350" r="340" stroke="currentColor" strokeWidth="1" strokeDasharray="8 8" strokeOpacity="0.05" />
      </svg>
    </div>
  );
}

export function CtaFinal() {
  return (
    <section id="cta" className="bg-[#000000] text-[#ffffff] scroll-mt-20">
      <div className="relative mx-auto max-w-7xl border-l border-r border-[#8A8A8A]/30 overflow-hidden">

        <div className="relative h-[460px] sm:h-[480px] flex items-center justify-center border-b border-[#8A8A8A]/30 overflow-hidden">

          {/* LAYER 0 — Static Mesh Gradient Image Background */}
          <div className="absolute inset-0 select-none pointer-events-none z-0">
            <Image
              src="/mesh-gradient/gradient_CTA.png"
              alt="CTA Mesh Background"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* LAYER 1 — Blueprint Grid */}
          <BlueprintGrid />

          {/* LAYER 2 — Perfect Circular Vignette Mask */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none z-[2]"
            style={{
              background:
                'radial-gradient(circle 450px at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.92) 50%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0) 100%)',
            }}
          />

          {/* LAYER 3 — Concentric Radar Lines */}
          <RadarOverlay />

          {/* LAYER 4 — Content Container */}
          <div className="relative z-10 text-center max-w-2xl px-6 flex flex-col items-center">

            {/* Title — Clean font-mono */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-4xl md:text-[42px] font-semibold text-[#ffffff] tracking-tight font-mono leading-tight mb-4"
            >
              Stop Rebuilding Authorization Infrastructure.
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-[#8a8a8a] leading-relaxed font-sans font-normal mb-8 max-w-xl"
            >
              Deploy production-ready Smart Accounts on Stellar with a standardized operational control plane for session keys, policies, and revocation.
            </motion.p>

            {/* Single Solid White Button */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/docs/simple-guide"
                className="px-7 py-3 rounded-full bg-[#ffffff] text-[#000000] text-sm font-mono font-bold transition-all duration-300 hover:bg-[#e0e0e0] hover:scale-[1.02] active:scale-[0.98] shadow-lg inline-block"
              >
                Read Developer Guide →
              </Link>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
