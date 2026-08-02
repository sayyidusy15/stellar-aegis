'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, Sun, Moon, Shield, Menu, X, Terminal, ExternalLink } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onToggleMobileSidebar: () => void;
}

export function Navbar({ onOpenSearch, onToggleMobileSidebar }: NavbarProps) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark') || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md transition-colors">
      <div className="flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left: Mobile Menu Toggle & Brand */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMobileSidebar}
            className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Toggle Navigation"
          >
            <Menu className="w-5 h-5" />
          </button>

          <Link href="/docs/overview" className="flex items-center gap-2.5 group">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Shield className="w-5 h-5 fill-white/20" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg tracking-tight text-slate-900 dark:text-white font-mono">
                  Stellar<span className="text-cyan-500 dark:text-cyan-400">-Aegis</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 rounded">
                  v1.0
                </span>
              </div>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-sans tracking-wide">
                Account Abstraction & Policy Engine
              </span>
            </div>
          </Link>

          {/* Top Header Links */}
          <nav className="hidden lg:flex items-center gap-6 ml-8 text-sm font-medium text-slate-600 dark:text-slate-400">
            <Link href="/docs/overview" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              Docs
            </Link>
            <Link href="/docs/architecture" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              Architecture
            </Link>
            <Link href="/docs/developer-guide" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              Developer Guide
            </Link>
            <Link href="/docs/security-model" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              Security
            </Link>
          </nav>
        </div>

        {/* Right: Search & External Utilities */}
        <div className="flex items-center gap-3">
          {/* Quick Search Button */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg transition-all w-36 sm:w-56 justify-between shadow-xs"
          >
            <span className="flex items-center gap-2 truncate">
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span>Search docs...</span>
            </span>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono font-medium text-slate-400 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded shadow-2xs">
              <span className="text-[9px]">⌘</span>K
            </kbd>
          </button>

          {/* GitHub SVG Link */}
          <a
            href="https://github.com/stellar/stellar-aegis"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="GitHub Repository"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Toggle Light/Dark Theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-600" />}
          </button>
        </div>
      </div>
    </header>
  );
}
