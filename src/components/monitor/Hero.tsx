'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { GridFrame } from './GridFrame';

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function Hero() {
  const words = 'The Authorization Control Plane for Stellar Smart Accounts.'.split(' ');

  return (
    /*
      overflow-hidden is CRITICAL: keeps all gradient orbs strictly
      inside the hero section boundary, no spill into sections below.
    */
    <section className="relative pt-20 overflow-hidden bg-[#000000] text-[#ffffff]">

      {/* ─────────────────────────────────────────────────── */}
      {/* ANIMATED WAVE GRADIENT — CSS @keyframes            */}
      {/* Orbs move in wide elliptical (wave-like) paths.    */}
      {/* ─────────────────────────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Orb 1 — Indigo / Blue wave, anchored top-left */}
        <div
          className="absolute rounded-full bg-indigo-600/55 blur-[140px]"
          style={{
            width: 560,
            height: 320,
            top: '0%',
            left: '5%',
            animation: 'waveA 14s ease-in-out infinite',
          }}
        />
        {/* Orb 2 — Amber / Gold wave, top-right */}
        <div
          className="absolute rounded-full bg-amber-500/40 blur-[120px]"
          style={{
            width: 460,
            height: 280,
            top: '10%',
            right: '0%',
            animation: 'waveB 18s ease-in-out infinite',
          }}
        />
        {/* Orb 3 — Violet, center */}
        <div
          className="absolute rounded-full bg-violet-700/45 blur-[130px]"
          style={{
            width: 420,
            height: 260,
            top: '15%',
            left: '35%',
            animation: 'waveC 22s ease-in-out infinite',
          }}
        />
        {/* Orb 4 — Cyan accent, bottom */}
        <div
          className="absolute rounded-full bg-cyan-600/30 blur-[100px]"
          style={{
            width: 300,
            height: 200,
            bottom: '5%',
            left: '20%',
            animation: 'waveD 16s ease-in-out infinite',
          }}
        />

        {/* Top vignette — darkens so navbar text is readable */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#000000] to-transparent" />
        {/* Bottom vignette — fades gradient into next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#000000] to-transparent" />

        {/* Wave keyframe definitions */}
        <style>{`
          @keyframes waveA {
            0%,100% { transform: translate(0px,   0px)  scaleX(1);    }
            30%      { transform: translate(120px, -30px) scaleX(1.1);  }
            60%      { transform: translate(60px,   20px) scaleX(0.95); }
          }
          @keyframes waveB {
            0%,100% { transform: translate(0px,   0px)  scaleX(1);    }
            35%      { transform: translate(-100px, 25px) scaleX(1.08); }
            70%      { transform: translate(-40px, -20px) scaleX(0.92);}
          }
          @keyframes waveC {
            0%,100% { transform: translate(0px,   0px)  scaleY(1);    }
            25%      { transform: translate(80px, -25px) scaleY(1.1);  }
            75%      { transform: translate(-80px, 25px) scaleY(0.9);  }
          }
          @keyframes waveD {
            0%,100% { transform: translate(0px,  0px)  scale(1);    }
            50%      { transform: translate(100px,-15px) scale(1.15); }
          }
        `}</style>
      </div>

      {/* Blueprint grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(138,138,138,0.045) 1px, transparent 1px),' +
            'linear-gradient(90deg, rgba(138,138,138,0.045) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Grid frame: section bottom border */}
      <GridFrame borderClasses="border-b border-[#8A8A8A]/30">
        <div className="relative z-10 flex flex-col items-center text-center px-8 pt-24 md:pt-32 pb-0">

          {/* ── Badge ── */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-[661px] bg-[#0d0d0d]/90 backdrop-blur-sm border border-[#8A8A8A]/25 text-[11px] font-mono text-[#8a8a8a] mb-8 tracking-wider"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <span className="text-[#ffffff] font-medium tracking-normal">STELLAR AEGIS</span>
            <span className="text-[#8A8A8A]/40">·</span>
            <span>Authorization Control Plane for Soroban</span>
          </motion.div>

          {/* ── H1 — lighter weight ── */}
          <h1 className="text-[32px] sm:text-[48px] md:text-[54px] font-semibold tracking-tight text-[#ffffff] max-w-3xl leading-[1.1] font-sans mb-5">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.055 }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* ── Description ── */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.52 }}
            className="text-[15px] text-[#8a8a8a] max-w-lg leading-relaxed font-sans font-normal mb-10"
          >
            Granular session policies, passkey-native auth, and lifecycle-aware
            authorization — without replacing your Smart Account.
          </motion.p>

          {/* ── Joined Pill Button ── */}
          {/*
            Style: one unified glass pill.
            Left half = "View Source" (transparent / glass feel).
            Right half = "Get Started" (solid white pill inset).
            Separated by a thin vertical line. Mirror of the reference image.
          */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.62 }}
            className="mb-20"
          >
            <div className="flex items-center rounded-[661px] bg-white/8 backdrop-blur-md border border-[#8A8A8A]/30 p-1 gap-0">
              {/* Left: View Source */}
              <a
                href="https://github.com/sayyidusy15/stellar-aegis"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 pl-5 pr-4 py-2 text-[14px] text-[#8a8a8a] hover:text-[#ffffff] transition-colors duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:text-white"
              >
                <GitHubIcon className="w-4 h-4 flex-shrink-0" />
                <span>View Source</span>
              </a>

              {/* Vertical divider */}
              {/* <span className="w-px self-stretch bg-[#8A8A8A]/25 mx-1" /> */}

              {/* Right: Get Started — solid inset pill */}
              <button
                type="button"
                className="flex items-center gap-2 px-5 py-2.5 rounded-[661px] bg-[#ffffff] text-[#000000] text-[14px] font-medium whitespace-nowrap transition-all duration-200 hover:opacity-90 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-transparent"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </div>
      </GridFrame>
    </section>
  );
}
