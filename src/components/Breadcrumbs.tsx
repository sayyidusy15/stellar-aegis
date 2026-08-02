'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/i18n';

interface BreadcrumbsProps {
  title: string;
  category?: string;
}

export function Breadcrumbs({ title, category }: BreadcrumbsProps) {
  const { lang } = useLanguage();

  return (
    <nav className="flex items-center gap-2 text-xs text-[#555] mb-6 font-mono">
      <Link
        href="/docs/overview"
        className="flex items-center gap-1 hover:text-[#FF4747] transition-colors"
      >
        <span>{t(lang, 'breadcrumbs.docs')}</span>
      </Link>

      <ChevronRight className="w-3 h-3 text-[#333]" />

      {category && (
        <>
          <span className="text-[#666] font-semibold uppercase tracking-widest text-[10px]">
            {category}
          </span>
          <ChevronRight className="w-3 h-3 text-[#333]" />
        </>
      )}

      <span className="text-[#8a8a8a] truncate">{title}</span>
    </nav>
  );
}
