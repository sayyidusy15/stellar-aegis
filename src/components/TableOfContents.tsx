'use client';

import React, { useEffect, useState } from 'react';
import { SubHeading } from '@/data/docs';
import { AlignLeft, Hash } from 'lucide-react';

interface TableOfContentsProps {
  subheadings: SubHeading[];
}

export function TableOfContents({ subheadings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (!subheadings || subheadings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );

    subheadings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [subheadings]);

  if (!subheadings || subheadings.length === 0) return null;

  return (
    <aside className="hidden xl:block w-64 shrink-0 py-6 px-4 border-l border-slate-200 dark:border-slate-800 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto text-xs">
      <div className="flex items-center gap-2 font-mono font-bold text-slate-900 dark:text-slate-200 uppercase tracking-wider mb-4">
        <AlignLeft className="w-3.5 h-3.5 text-cyan-500" />
        <span>On This Page</span>
      </div>

      <nav className="space-y-2 font-medium">
        {subheadings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`flex items-center gap-1.5 py-1 px-2 rounded transition-colors ${
                isActive
                  ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-500/10 font-semibold border-l-2 border-cyan-500'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Hash className={`w-3 h-3 shrink-0 ${isActive ? 'text-cyan-500' : 'text-slate-400'}`} />
              <span className="truncate">{heading.title}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
