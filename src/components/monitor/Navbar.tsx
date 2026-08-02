'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    /*
      Navbar: fixed, full-width, bottom border spans edge-to-edge.
      The vertical grid lines are positioned as absolute pseudo-columns
      that align with the max-w-7xl container on both sides.
    */
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#000000]/85 backdrop-blur-md' : 'bg-[#000000]'
      } border-b border-[#8A8A8A]/30`}
    >
      {/* Inner layout: constrained to max-w-7xl, with vertical rail lines */}
      <div className="relative mx-auto max-w-7xl">

        {/* Left vertical rail line */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-px bg-[#8A8A8A]/30" />
        {/* Right vertical rail line */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-px bg-[#8A8A8A]/30" />

        <div className="flex items-center justify-between px-8 py-5">
          {/* Left: Logo */}
          <Link
            href="/"
            className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
          >
            <Image
              src="/logo-aegis-2.png"
              alt="Stellar Aegis"
              width={110}
              height={28}
              className="object-contain select-none"
              priority
            />
          </Link>

          {/* Center: Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main Navigation"
          >
            {['Why', 'How it works', 'Features', 'Pricing'].map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[15px] font-medium text-[#8a8a8a] hover:text-[#ffffff] transition-colors duration-300 focus-visible:outline-none focus-visible:text-white"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Right: Open Docs CTA */}
          <Link
            href="/docs/simple-guide"
            className="px-5 py-2.5 rounded-[661px] bg-[#ffffff] text-[#000000] text-[14px] font-medium transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black shadow-lg whitespace-nowrap"
          >
            Open Docs
          </Link>
        </div>
      </div>
    </header>
  );
}
