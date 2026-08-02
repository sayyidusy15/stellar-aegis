'use client';

import React, { useEffect, useState } from 'react';
import { SubHeading } from '@/data/docs';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/i18n';

interface TableOfContentsProps {
  subheadings: SubHeading[];
}

export function TableOfContents({ subheadings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const { lang } = useLanguage();

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
    <aside className="hidden xl:block w-56 shrink-0 py-6 px-4 border-l border-[#1a1a1a] h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto text-xs">
      {/* Header */}
      <div className="font-mono font-bold text-[#555] uppercase tracking-widest text-[10px] mb-4">
        {t(lang, 'toc.on_this_page')}
      </div>

      <nav className="space-y-1">
        {subheadings.map((heading) => {
          const isActive = activeId === heading.id;
          return (
            <a
              key={heading.id}
              href={`#${heading.id}`}
              className={`flex items-center gap-2 py-1.5 px-2 text-xs font-sans transition-all ${
                isActive
                  ? 'text-white border-l-2 border-[#FF4747] -ml-[1px] bg-[#FF4747]/5 font-medium'
                  : 'text-[#555] hover:text-[#ccc] border-l-2 border-transparent -ml-[1px]'
              }`}
            >
              <span className={`w-1 h-1 rounded-full shrink-0 ${isActive ? 'bg-[#FF4747]' : 'bg-[#333]'}`} />
              <span className="truncate">{heading.title}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
}
