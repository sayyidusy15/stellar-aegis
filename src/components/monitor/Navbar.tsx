'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Docs', href: '/docs/simple-guide' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#000000]/90 backdrop-blur-md' : 'bg-[#000000]'
      } border-b border-[#8A8A8A]/30`}
    >
      {/* Inner layout: constrained to max-w-7xl, with vertical rail lines */}
      <div className="relative mx-auto max-w-7xl">

        {/* Left vertical rail line */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-px bg-[#8A8A8A]/30" />
        {/* Right vertical rail line */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-px bg-[#8A8A8A]/30" />

        <div className="flex items-center justify-between px-6 sm:px-8 py-5">
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

          {/* Center: Navigation Links (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-8 font-mono text-[14px]"
            aria-label="Main Navigation"
          >
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#8a8a8a] hover:text-[#ffffff] transition-colors duration-300 focus-visible:outline-none focus-visible:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: Open Docs CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/docs/simple-guide"
              className="hidden sm:inline-flex px-5 py-2 rounded-full bg-[#ffffff] text-[#000000] text-[13px] font-mono font-medium transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
            >
              Open Docs
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 rounded-lg text-[#8a8a8a] hover:text-white hover:bg-[#1a1a1a] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#1f1f1f] bg-[#050505] px-6 py-6 space-y-4 font-mono">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm text-[#8a8a8a] hover:text-white transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="pt-3 border-t border-[#1a1a1a]">
              <Link
                href="/docs/simple-guide"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full py-2.5 rounded-full bg-white text-black text-xs font-mono font-bold"
              >
                Open Docs
              </Link>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}
