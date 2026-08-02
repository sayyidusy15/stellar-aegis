'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-[#000000] text-[#8a8a8a] border-t border-[#1f1f1f] py-12 font-sans">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1f1f1f]">
          {/* Left: Minimalist Logo Link */}
          <Link href="/" className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm">
            <Image
              src="/logo-aegis-2.png"
              alt="Stellar Aegis Logo"
              width={100}
              height={26}
              className="object-contain"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </Link>

          {/* Center/Right: Simple navigation links */}
          <div className="flex flex-wrap items-center gap-6 text-xs text-[#8a8a8a]">
            <a href="#why" className="hover:text-white transition-colors">Why</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <Link href="/docs/simple-guide" className="hover:text-white transition-colors">Docs</Link>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Stellar branding */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] text-[#555555]">
          <p>© 2026 Stellar Aegis. Open source project built on Stellar &amp; Soroban.</p>
          
          {/* Stellar Logo integrated here */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-wider uppercase text-[#555555]/80">POWERED BY</span>
            <Image
              src="/images/hero-section/marquee/stellar.png"
              alt="Stellar Logo"
              width={70}
              height={20}
              className="object-contain opacity-60 hover:opacity-100 transition-opacity"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
