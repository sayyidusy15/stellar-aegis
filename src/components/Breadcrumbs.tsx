'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home, Folder } from 'lucide-react';

interface BreadcrumbsProps {
  title: string;
  category?: string;
}

export function Breadcrumbs({ title, category }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6 font-mono">
      <Link
        href="/docs/overview"
        className="flex items-center gap-1 hover:text-cyan-500 transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Docs</span>
      </Link>

      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />

      {category && (
        <>
          <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-semibold">
            <Folder className="w-3.5 h-3.5 text-cyan-500" />
            <span>{category}</span>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        </>
      )}

      <span className="text-slate-900 dark:text-white font-bold truncate">{title}</span>
    </nav>
  );
}
