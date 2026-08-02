'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, BookOpen, ExternalLink, Menu, X, Terminal, ArrowRight } from 'lucide-react';

export function HomeNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform duration-300">
            <Shield className="w-5 h-5 fill-white/20" />
            <div className="absolute inset-0 rounded-xl bg-cyan-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl tracking-tight text-white font-mono">
                Stellar<span className="text-cyan-400">-Aegis</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full">
                Control Plane
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-sans tracking-wide">
              Authorization Infrastructure for Soroban
            </span>
          </div>
        </Link>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-cyan-400 transition-colors">
            Features
          </a>
          <a href="#architecture" className="hover:text-cyan-400 transition-colors">
            Architecture
          </a>
          <a href="#devex" className="hover:text-cyan-400 transition-colors">
            DevEx
          </a>
          <a href="#roadmap" className="hover:text-cyan-400 transition-colors">
            Roadmap
          </a>
          <Link href="/docs/simple-guide" className="hover:text-cyan-400 transition-colors">
            Docs
          </Link>
        </nav>

        {/* Right Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/stellar/stellar-aegis"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-semibold text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-800 rounded-lg transition-all"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>

          <Link
            href="/docs/simple-guide"
            className="group flex items-center gap-2 px-4 py-2 text-xs font-mono font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 hover:from-cyan-300 hover:to-blue-300 rounded-lg shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02]"
          >
            <BookOpen className="w-4 h-4" />
            <span>Open Docs</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900"
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-6 space-y-4">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-cyan-400"
          >
            Features
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-cyan-400"
          >
            Architecture
          </a>
          <a
            href="#devex"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-cyan-400"
          >
            DevEx
          </a>
          <a
            href="#roadmap"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-cyan-400"
          >
            Roadmap
          </a>
          <Link
            href="/docs/overview"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-cyan-400"
          >
            Documentation (19 Pages)
          </Link>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
            <Link
              href="/docs/overview"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-cyan-400 text-slate-950 font-mono font-bold text-xs"
            >
              Open Docs
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
