'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const LOGOS = [
  { src: '/images/hero-section/marquee/stellar.png',       alt: 'Stellar' },
  { src: '/images/hero-section/marquee/soroban.png',       alt: 'Soroban' },
  { src: '/images/hero-section/marquee/freighter.png',     alt: 'Freighter' },
  { src: '/images/hero-section/marquee/albedo.png',        alt: 'Albedo' },
  { src: '/images/hero-section/marquee/moneygram.png',     alt: 'MoneyGram' },
  { src: '/images/hero-section/marquee/settle.png',        alt: 'Settle' },
  { src: '/images/hero-section/marquee/rust.png',          alt: 'Rust' },
  { src: '/images/hero-section/marquee/usdc.png',          alt: 'USDC' },
  { src: '/images/hero-section/marquee/walletconnect.png', alt: 'WalletConnect' },
];

// Triple the list so the -50% translate still looks infinite
const tripled = [...LOGOS, ...LOGOS, ...LOGOS];

// Corner square mark (no overflow-visible, purely visual)
function CornerSq({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const SQ = 7;
  const OFF = -4;
  const style: React.CSSProperties = {
    position: 'absolute',
    width: SQ,
    height: SQ,
    background: '#000000',
    border: '1px solid rgba(138,138,138,0.45)',
    zIndex: 20,
    pointerEvents: 'none',
    top:    pos === 'tl' || pos === 'tr' ? OFF : undefined,
    bottom: pos === 'bl' || pos === 'br' ? OFF : undefined,
    left:   pos === 'tl' || pos === 'bl' ? OFF : undefined,
    right:  pos === 'tr' || pos === 'br' ? OFF : undefined,
  };
  return <span aria-hidden="true" style={style} />;
}

export function Marquee() {
  return (
    <section className="bg-[#000000] text-[#ffffff]">
      {/*
        Outer wrapper: constrained to max-w-7xl, top+bottom borders.
        overflow:hidden here is CRITICAL — it clips the ticker to stay
        inside the container. The fixed GridRails overlay handles the
        left + right vertical rail lines, so we don't render them here.
      */}
      <div
        className="relative mx-auto max-w-7xl border-t border-b border-r border-[#8A8A8A]/30"
        style={{ overflow: 'hidden' }}
      >
        <div className="flex" style={{ minHeight: 68 }}>

          {/* ── LEFT: label — exactly 25% wide ────────────────── */}
          <div
            className="relative flex-shrink-0 flex items-center border-r border-[#8A8A8A]/30"
            style={{ width: '25%' }}
          >
            <CornerSq pos="bl" />
            <CornerSq pos="br" />

            <p className="px-8 text-[11px] font-mono text-[#8a8a8a] tracking-wider uppercase leading-snug select-none">
              Trusted by teams<br />building the future
            </p>
          </div>

          {/* ── RIGHT: infinite ticker — remaining 75% ─────────── */}
          <div
            className="relative flex items-center"
            style={{ width: '75%', overflow: 'hidden' }}
          >
            <CornerSq pos="bl" />
            <CornerSq pos="br" />

            {/* Left fade mask */}
            <div
              className="absolute left-0 top-0 bottom-0 z-10 pointer-events-none"
              style={{
                width: 56,
                background: 'linear-gradient(to right, #000000, transparent)',
              }}
            />
            {/* Right fade mask */}
            <div
              className="absolute right-0 top-0 bottom-0 z-10 pointer-events-none"
              style={{
                width: 56,
                background: 'linear-gradient(to left, #000000, transparent)',
              }}
            />

            {/* Ticker track */}
            <div className="flex items-center" style={{ width: '100%', overflow: 'hidden' }}>
              <motion.div
                className="flex items-center flex-shrink-0"
                animate={{ x: ['0%', '-33.33%'] }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                style={{ willChange: 'transform' }}
              >
                {tripled.map((logo, i) => (
                  <span
                    key={i}
                    className="flex-shrink-0 flex items-center justify-center border-r border-[#8A8A8A]/15 select-none"
                    style={{ padding: '22px 36px' }}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={80}
                      height={28}
                      className="object-contain"
                      style={{
                        filter: 'brightness(0) invert(1)',
                        opacity: 0.6,
                        height: '20px',
                        width: 'auto',
                        display: 'block',
                      }}
                      draggable={false}
                    />
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
