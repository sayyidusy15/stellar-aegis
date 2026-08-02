'use client';

import React from 'react';
import Link from 'next/link';
import { getSidebarNavigation } from '@/data/docs';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/i18n';

interface PaginationProps {
  currentSlug: string;
}

interface NavItem {
  slug: string;
  title: string;
}

export function Pagination({ currentSlug }: PaginationProps) {
  const { lang } = useLanguage();
  const sidebarNav = getSidebarNavigation(lang);

  // Flatten sidebar list to find prev/next items
  const flatItems: NavItem[] = [];

  sidebarNav.forEach((item) => {
    if (item.isFolder && item.children) {
      item.children.forEach((child) => {
        flatItems.push({ slug: child.slug, title: child.title });
      });
    } else if (item.slug) {
      flatItems.push({ slug: item.slug, title: item.title });
    }
  });

  const currentIndex = flatItems.findIndex((item) => item.slug === currentSlug);
  const prev = currentIndex > 0 ? flatItems[currentIndex - 1] : null;
  const next = currentIndex < flatItems.length - 1 ? flatItems[currentIndex + 1] : null;

  return (
    <div className="mt-16 pt-8 border-t border-[#1a1a1a] grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono">
      {prev ? (
        <Link
          href={`/docs/${prev.slug}`}
          className="group flex flex-col p-4 border border-[#1f1f1f] hover:border-[#FF4747]/50 bg-[#070707] hover:bg-[#FF4747]/5 transition-all"
        >
          <div className="flex items-center gap-2 text-xs text-[#555] group-hover:text-[#8a8a8a] mb-1">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-[#FF4747]" />
            <span>{t(lang, 'pagination.previous')}</span>
          </div>
          <span className="text-xs font-bold text-white group-hover:text-[#FF4747] truncate font-sans">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/docs/${next.slug}`}
          className="group flex flex-col items-end text-right p-4 border border-[#1f1f1f] hover:border-[#FF4747]/50 bg-[#070707] hover:bg-[#FF4747]/5 transition-all"
        >
          <div className="flex items-center gap-2 text-xs text-[#555] group-hover:text-[#8a8a8a] mb-1">
            <span>{t(lang, 'pagination.next')}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#FF4747]" />
          </div>
          <span className="text-xs font-bold text-white group-hover:text-[#FF4747] truncate font-sans">
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
