'use client';

import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[#000000] text-[#8a8a8a] border-t border-[#1f1f1f] pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand Column (2 cols) */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-sm bg-white flex items-center justify-center font-mono font-bold text-[#000000] text-xs">
                M
              </div>
              <span className="font-mono font-bold text-lg tracking-widest text-[#ffffff]">
                MONITOR
              </span>
            </Link>
            <p className="text-xs text-[#8a8a8a] max-w-sm leading-relaxed font-sans font-medium">
              AI Search Visibility & Brand Citation Intelligence Platform. Track, measure, and optimize your presence across generative search engines.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-[#8a8a8a]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>All Systems Operational // Engine v1.4</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3 font-sans text-xs">
            <span className="font-bold text-[#ffffff] uppercase tracking-wider block text-[11px] mb-2 font-mono">
              Product
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="hover:text-[#ffffff] transition-colors">
                  Engine v1.4
                </a>
              </li>
              <li>
                <a href="#visibility" className="hover:text-[#ffffff] transition-colors">
                  LLM Coverage
                </a>
              </li>
              <li>
                <a href="#bento" className="hover:text-[#ffffff] transition-colors">
                  Citation Radar
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#ffffff] transition-colors">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-3 font-sans text-xs">
            <span className="font-bold text-[#ffffff] uppercase tracking-wider block text-[11px] mb-2 font-mono">
              Resources
            </span>
            <ul className="space-y-2">
              <li>
                <Link href="/docs/simple-guide" className="hover:text-[#ffffff] transition-colors">
                  Aegis Documentation
                </Link>
              </li>
              <li>
                <a href="#features" className="hover:text-[#ffffff] transition-colors">
                  GEO Playbook
                </a>
              </li>
              <li>
                <a href="#bento" className="hover:text-[#ffffff] transition-colors">
                  LLM Benchmarks
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#ffffff] transition-colors">
                  API Reference
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3 font-sans text-xs">
            <span className="font-bold text-[#ffffff] uppercase tracking-wider block text-[11px] mb-2 font-mono">
              Company
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-[#ffffff] transition-colors">
                  About Monitor
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-[#ffffff] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-[#ffffff] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-[#ffffff] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar (Legal text scaled down to 11px font.size.md) */}
        <div className="pt-8 border-t border-[#1f1f1f] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#8a8a8a] font-sans gap-4">
          <p>© 2026 Monitor Technologies Inc. All rights reserved.</p>
          <p className="font-mono">
            Designed for AI Search Visibility & Brand Intelligence.
          </p>
        </div>
      </div>
    </footer>
  );
}
