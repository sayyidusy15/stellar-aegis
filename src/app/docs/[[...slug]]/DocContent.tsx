'use client';

import React from 'react';
import { getDocData } from '@/data/docs';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TableOfContents } from '@/components/TableOfContents';
import { CodeBlock } from '@/components/CodeBlock';
import { Callout } from '@/components/Callout';
import { Pagination } from '@/components/Pagination';
import { Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface DocContentProps {
  slugKey: string;
}

export function DocContent({ slugKey }: DocContentProps) {
  const { lang } = useLanguage();
  const doc = getDocData(slugKey, lang) || getDocData('simple-guide', lang);

  if (!doc) return null;

  return (
    <div className="flex gap-10 items-start">
      {/* Main Document Content */}
      <div className="flex-1 min-w-0 max-w-4xl">
        <Breadcrumbs title={doc.title} category={doc.category} />

        {/* Article Title & Metadata Header */}
        <div className="relative border-b border-[#1f1f1f] pb-8 mb-10 overflow-hidden">
          {/* Blueprint dot pattern overlay */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
              backgroundSize: '16px 16px',
            }}
          />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2.5 py-0.5 text-xs font-mono font-bold bg-[#FF4747]/10 text-[#FF4747] border border-[#FF4747]/30">
                {doc.order}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-[#666] font-mono">
                <Clock className="w-3.5 h-3.5 text-[#555]" />
                <span>{doc.readTime}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-sans">
              {doc.title}
            </h1>

            <p className="text-base text-[#8a8a8a] leading-relaxed font-sans">
              {doc.description}
            </p>
          </div>
        </div>

        {/* Lead Paragraph */}
        {doc.content.lead && (
          <div className="p-5 border border-[#1f1f1f] bg-[#070707] text-sm leading-relaxed text-[#cccccc] mb-10 font-sans">
            {doc.content.lead}
          </div>
        )}

        {/* Sections */}
        <div className="space-y-12">
          {doc.content.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-4 flex items-center gap-2 group font-sans">
                <span className="text-[#FF4747] font-mono text-sm opacity-60 group-hover:opacity-100 transition-opacity">#</span>
                <span>{section.title}</span>
              </h2>

              <div className="prose prose-invert max-w-none text-sm leading-relaxed text-[#8a8a8a] space-y-4 font-sans">
                {section.body.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="whitespace-pre-line text-[#a0a0a0]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {section.callout && (
                <Callout
                  type={section.callout.type}
                  title={section.callout.title}
                  text={section.callout.text}
                />
              )}

              {section.code && (
                <CodeBlock
                  code={section.code.code}
                  language={section.code.language}
                  filename={section.code.filename}
                />
              )}
            </section>
          ))}
        </div>

        {/* Footer Pagination */}
        <Pagination currentSlug={doc.slug} />
      </div>

      {/* On This Page (Right Table of Contents) */}
      <TableOfContents subheadings={doc.subheadings} />
    </div>
  );
}
