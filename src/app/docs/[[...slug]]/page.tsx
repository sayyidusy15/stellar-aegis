import React from 'react';
import { notFound, redirect } from 'next/navigation';
import { DOCS_DATA } from '@/data/docs';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { TableOfContents } from '@/components/TableOfContents';
import { CodeBlock } from '@/components/CodeBlock';
import { Callout } from '@/components/Callout';
import { Pagination } from '@/components/Pagination';
import { Clock, Shield, Sparkles } from 'lucide-react';

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug || ['overview'];
  const slugKey = slugArray.join('/');
  const doc = DOCS_DATA[slugKey];

  if (!doc) {
    return {
      title: 'Doc Not Found | Stellar-Aegis',
    };
  }

  return {
    title: `${doc.title} | Stellar-Aegis Documentation`,
    description: doc.description,
  };
}

export default async function DocPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slugArray = resolvedParams.slug || ['overview'];
  const slugKey = slugArray.join('/');

  const doc = DOCS_DATA[slugKey];

  if (!doc) {
    // Fallback to overview if slug is invalid or root /docs
    if (slugKey === 'overview' || !resolvedParams.slug) {
      redirect('/docs/overview');
    } else {
      notFound();
    }
  }

  return (
    <div className="flex gap-8 items-start">
      {/* Main Document Content */}
      <div className="flex-1 min-w-0 max-w-4xl">
        <Breadcrumbs title={doc.title} category={doc.category} />

        {/* Article Title & Metadata Header */}
        <div className="border-b border-slate-200 dark:border-slate-800 pb-6 mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-2 py-0.5 text-xs font-mono font-bold rounded-md bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
              {doc.order}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
              <Clock className="w-3.5 h-3.5" />
              <span>{doc.readTime}</span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3 font-sans">
            {doc.title}
          </h1>

          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
            {doc.description}
          </p>
        </div>

        {/* Lead Paragraph */}
        {doc.content.lead && (
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800/80 text-sm leading-relaxed text-slate-700 dark:text-slate-200 mb-8 font-sans shadow-2xs">
            {doc.content.lead}
          </div>
        )}

        {/* Sections */}
        <div className="space-y-10">
          {doc.content.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-20">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-3 flex items-center gap-2 group">
                <span className="text-cyan-500 font-mono text-sm opacity-60 group-hover:opacity-100 transition-opacity">#</span>
                <span>{section.title}</span>
              </h2>

              <div className="prose prose-slate dark:prose-invert max-w-none text-sm leading-relaxed text-slate-700 dark:text-slate-300 space-y-4">
                {section.body.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="whitespace-pre-line">
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
