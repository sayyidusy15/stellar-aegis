'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#000000]/70 backdrop-blur-md border-b border-[#1f1f1f] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex items-center gap-2 group focus-visible:ring-2 focus-visible:ring-white rounded-md">
          <div className="w-5 h-5 rounded-sm bg-white flex items-center justify-center font-mono font-bold text-[#000000] text-xs">
            M
          </div>
          <span className="font-mono font-bold text-lg tracking-widest text-[#ffffff]">
            MONITOR
          </span>
        </Link>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[15.04px] font-medium text-[#8a8a8a]" aria-label="Main Navigation">
          <a
            href="#features"
            className="hover:text-[#ffffff] transition-colors duration-300 focus-visible:text-[#ffffff] focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1"
          >
            Engine
          </a>
          <a
            href="#visibility"
            className="hover:text-[#ffffff] transition-colors duration-300 focus-visible:text-[#ffffff] focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1"
          >
            Visibility
          </a>
          <a
            href="#bento"
            className="hover:text-[#ffffff] transition-colors duration-300 focus-visible:text-[#ffffff] focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1"
          >
            Capabilities
          </a>
          <a
            href="#pricing"
            className="hover:text-[#ffffff] transition-colors duration-300 focus-visible:text-[#ffffff] focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1"
          >
            Pricing
          </a>
          <Link
            href="/docs/simple-guide"
            className="hover:text-[#ffffff] transition-colors duration-300 focus-visible:text-[#ffffff] focus-visible:ring-2 focus-visible:ring-white rounded-sm px-1"
          >
            Aegis Docs
          </Link>
        </nav>

        {/* Right: Primary Pill CTA */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="px-5 py-2.5 rounded-[661px] bg-[#ffffff] text-[#000000] text-[15px] font-medium transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black shadow-lg"
          >
            Start for free
          </button>
        </div>
      </div>
    </header>
  );
}
