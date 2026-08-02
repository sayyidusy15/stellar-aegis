'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Menu, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/i18n';

interface DocsNavbarProps {
  onOpenSearch: () => void;
  onToggleMobileSidebar: () => void;
}

export function DocsNavbar({ onOpenSearch, onToggleMobileSidebar }: DocsNavbarProps) {
  const { lang, toggle } = useLanguage();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#1f1f1f] bg-[#000000]/90 backdrop-blur-md">
      {/* Inner container aligned with rail lines */}
      <div className="flex h-16 items-center justify-between px-6 lg:px-10">
        
        {/* Left: Mobile toggle + Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleMobileSidebar}
            className="md:hidden p-2 rounded-lg text-[#8a8a8a] hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle Navigation"
          >
            <Menu className="w-5 h-5" />
          </button>

          <Link href="/" className="flex items-center group">
            <Image
              src="/logo-aegis-2.png"
              alt="Stellar Aegis"
              width={110}
              height={32}
              className="object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </Link>

          {/* Divider */}
          <span className="hidden md:block text-[#2a2a2a] text-lg font-light ml-1 mr-1 select-none">
            /
          </span>

          {/* Top Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-mono font-medium text-[#8a8a8a]">
            <Link href="/docs/overview" className="hover:text-white transition-colors">
              {t(lang, 'nav.docs')}
            </Link>
            <Link href="/docs/architecture" className="hover:text-white transition-colors">
              {t(lang, 'nav.architecture')}
            </Link>
            <Link href="/docs/developer-guide" className="hover:text-white transition-colors">
              {t(lang, 'nav.developer_guide')}
            </Link>
            <Link href="/docs/security-model" className="hover:text-white transition-colors">
              {t(lang, 'nav.security')}
            </Link>
          </nav>
        </div>

        {/* Right: Search + GitHub + Language toggle */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 text-xs text-[#8a8a8a] bg-[#0d0d0d] hover:bg-[#141414] border border-[#2a2a2a] hover:border-[#3a3a3a] rounded-lg transition-all w-36 sm:w-52 justify-between font-mono"
          >
            <span className="flex items-center gap-2 truncate">
              <Search className="w-3.5 h-3.5 text-[#555]" />
              <span>{t(lang, 'nav.search_placeholder')}</span>
            </span>
            <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[10px] font-mono text-[#555] bg-[#1a1a1a] border border-[#2a2a2a] rounded">
              <span className="text-[9px]">⌘</span>K
            </kbd>
          </button>

          {/* GitHub */}
          <a
            href="https://github.com/stellar/stellar-aegis"
            target="_blank"
            rel="noreferrer"
            className="p-2 text-[#8a8a8a] hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            title="GitHub Repository"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          {/* Language Toggle — EN | ID pill */}
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="flex items-center gap-0 rounded-full border border-[#2a2a2a] overflow-hidden font-mono text-[11px] font-bold tracking-widest"
          >
            <span
              className={`px-3 py-1.5 transition-colors ${
                lang === 'en'
                  ? 'bg-[#FF4747] text-white'
                  : 'bg-transparent text-[#555] hover:text-[#8a8a8a]'
              }`}
            >
              EN
            </span>
            <span className="text-[#2a2a2a] text-xs select-none">|</span>
            <span
              className={`px-3 py-1.5 transition-colors ${
                lang === 'id'
                  ? 'bg-[#FF4747] text-white'
                  : 'bg-transparent text-[#555] hover:text-[#8a8a8a]'
              }`}
            >
              ID
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
