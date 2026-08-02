'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { DocItem, getAllDocsData } from '@/data/docs';
import { Search, X, FileText, ChevronRight, Hash } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/i18n';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  doc: DocItem;
  headingMatch?: string;
  snippet?: string;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const { lang } = useLanguage();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const q = query.toLowerCase();
    const matches: SearchResult[] = [];
    const docs = getAllDocsData(lang);

    Object.values(docs).forEach((doc) => {
      // Check title or description
      if (doc.title.toLowerCase().includes(q) || doc.description.toLowerCase().includes(q)) {
        matches.push({ doc });
      } else {
        // Check subheadings or section content
        let foundHeading = false;
        doc.subheadings.forEach((sh) => {
          if (sh.title.toLowerCase().includes(q)) {
            matches.push({ doc, headingMatch: sh.title });
            foundHeading = true;
          }
        });

        if (!foundHeading) {
          for (const sec of doc.content.sections) {
            if (sec.title.toLowerCase().includes(q) || sec.body.toLowerCase().includes(q)) {
              matches.push({ doc, headingMatch: sec.title, snippet: sec.body.slice(0, 100) });
              break;
            }
          }
        }
      }
    });

    setResults(matches.slice(0, 8));
    setSelectedIndex(0);
  }, [query]);

  const handleSelect = (item: SearchResult) => {
    onClose();
    router.push(`/docs/${item.doc.slug}`);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      handleSelect(results[selectedIndex]);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-xs transition-opacity">
      <div
        className="fixed inset-0"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl bg-[#0a0a0a] border border-[#1f1f1f] shadow-2xl overflow-hidden z-10 font-sans">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 border-b border-[#1f1f1f]">
          <Search className="w-5 h-5 text-[#555] shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={t(lang, 'search.placeholder')}
            className="w-full py-4 text-sm text-white bg-transparent border-none outline-none placeholder:text-[#555] font-mono"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-[#555] hover:text-[#8a8a8a]">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-xs text-[#555] font-mono">
              {t(lang, 'search.empty_hint')}
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#555] font-mono">
              {t(lang, 'search.no_results')} &quot;<span className="text-[#8a8a8a]">{query}</span>&quot;
            </div>
          ) : (
            <div className="space-y-1">
              {results.map((item, index) => {
                const isSelected = index === selectedIndex;
                return (
                  <button
                    key={`${item.doc.slug}-${index}`}
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setSelectedIndex(index)}
                    className={`w-full text-left flex items-start gap-3 p-3 text-xs transition-colors ${
                      isSelected
                        ? 'bg-[#FF4747]/10 border-l-2 border-[#FF4747] text-white'
                        : 'hover:bg-[#141414] text-[#8a8a8a]'
                    }`}
                  >
                    <FileText className={`w-4 h-4 shrink-0 mt-0.5 ${isSelected ? 'text-[#FF4747]' : 'text-[#555]'}`} />
                    <div className="flex-1 truncate">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-white">{item.doc.title}</span>
                        {item.doc.category && (
                          <span className="px-1.5 py-0.5 text-[10px] font-mono bg-[#1a1a1a] text-[#666] border border-[#2a2a2a]">
                            {item.doc.category}
                          </span>
                        )}
                      </div>
                      {item.headingMatch && (
                        <div className="flex items-center gap-1 mt-1 text-[11px] text-[#FF4747] font-mono">
                          <Hash className="w-3 h-3" />
                          <span>{item.headingMatch}</span>
                        </div>
                      )}
                      <p className="text-[11px] text-[#666] truncate mt-0.5">
                        {item.snippet || item.doc.description}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#444] shrink-0 self-center" />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-[#050505] border-t border-[#1f1f1f] flex items-center justify-between text-[10px] text-[#555] font-mono">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1 py-0.5 bg-[#1a1a1a] border border-[#2a2a2a] text-[#8a8a8a]">↑↓</kbd> {t(lang, 'search.navigate')}</span>
            <span><kbd className="px-1 py-0.5 bg-[#1a1a1a] border border-[#2a2a2a] text-[#8a8a8a]">↵</kbd> {t(lang, 'search.select')}</span>
          </div>
          <span><kbd className="px-1 py-0.5 bg-[#1a1a1a] border border-[#2a2a2a] text-[#8a8a8a]">ESC</kbd> {t(lang, 'search.close')}</span>
        </div>
      </div>
    </div>
  );
}
