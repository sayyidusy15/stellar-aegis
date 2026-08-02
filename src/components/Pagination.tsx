'use client';

import React from 'react';
import Link from 'next/link';
import { SIDEBAR_NAVIGATION } from '@/data/docs';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface PaginationProps {
  currentSlug: string;
}

interface NavItem {
  slug: string;
  title: string;
}

export function Pagination({ currentSlug }: PaginationProps) {
  // Flatten sidebar list to find prev/next items
  const flatItems: NavItem[] = [];

  SIDEBAR_NAVIGATION.forEach((item) => {
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
    <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {prev ? (
        <Link
          href={`/docs/${prev.slug}`}
          className="group flex flex-col p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-cyan-500/5 dark:hover:bg-cyan-500/5 transition-all"
        >
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono mb-1">
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform text-cyan-500" />
            <span>Previous</span>
          </div>
          <span className="text-sm font-bold text-slate-900 dark:text-white truncate">
            {prev.title}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/docs/${next.slug}`}
          className="group flex flex-col items-end text-right p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-cyan-500/5 dark:hover:bg-cyan-500/5 transition-all"
        >
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 font-mono mb-1">
            <span>Next</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-cyan-500" />
          </div>
          <span className="text-sm font-bold text-slate-900 dark:text-white truncate">
            {next.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
