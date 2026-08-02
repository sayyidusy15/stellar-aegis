'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

/* ── Blueprint dot grid overlay ── */
function BlueprintGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-[2]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(138,138,138,0.045) 1px, transparent 1px),' +
          'linear-gradient(90deg, rgba(138,138,138,0.045) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    />
  );
}

/* ── Faint concentric circles centered ── */
function CircularRadar() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50%"
        cy="50%"
        r="280"
        fill="none"
        stroke="#8A8A8A"
        strokeWidth="0.5"
        strokeOpacity="0.08"
        strokeDasharray="4 6"
      />
      <circle
        cx="50%"
        cy="50%"
        r="380"
        fill="none"
        stroke="#8A8A8A"
        strokeWidth="0.5"
        strokeOpacity="0.05"
        strokeDasharray="4 6"
      />
    </svg>
  );
}

export function CtaFinal() {
  return (
    <section id="cta" className="bg-[#000000] text-[#ffffff]">
      {/* 
        Container limits the background image & mask to stay strictly within 
        the max-w-7xl vertical rail borders.
      */}
      <div className="relative mx-auto max-w-7xl border-l border-r border-[#8A8A8A]/30 overflow-hidden h-[460px] sm:h-[480px] flex items-center justify-center">
        
        {/* LAYER 1 — Static Background Mesh Gradient Image */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src="/mesh-gradient/gradient_CTA.png"
            alt="Mesh Gradient Background"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
            priority
          />
        </div>

        {/* 
          LAYER 2 — Perfect Circular Vignette Mask.
          This creates a solid black circle in the absolute center for text readability,
          and fades out to transparent on the sides to reveal the colorful mesh gradient.
        */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              'radial-gradient(circle 450px at 50% 50%, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 50%, rgba(0,0,0,0.7) 80%, rgba(0,0,0,0) 100%)',
          }}
        />

        {/* LAYER 3 — Concentric circular radar lines */}
        <CircularRadar />

        {/* LAYER 4 — Blueprint Grid */}
        <BlueprintGrid />

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto space-y-6">

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#ffffff] leading-[1.15] font-sans">
            Start improving your Smart Account security today
          </h2>

          {/* Subheading / Description */}
          <p className="text-[14px] text-[#8a8a8a] max-w-md leading-relaxed font-sans font-medium">
            Join teams using Aegis to manage granular session policies, hardware passkeys, and on-chain authorization lifecycles.
          </p>

          {/* 1 Single Button — Rounded Pill */}
          <div className="pt-2">
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-full bg-[#ffffff] text-[#000000] text-[14px] font-semibold transition-all hover:opacity-95 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Start for free
            </motion.button>
          </div>

        </div>

      </div>
    </section>
  );
}
