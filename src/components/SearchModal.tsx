'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { DOCS_DATA, DocItem } from '@/data/docs';
import { Search, X, FileText, ChevronRight, Hash } from 'lucide-react';

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
        else {
          // Open search modal
        }
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

    Object.values(DOCS_DATA).forEach((doc) => {
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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/60 backdrop-blur-xs transition-opacity">
      <div
        className="fixed inset-0"
        onClick={onClose}
      />
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-2xl overflow-hidden z-10 font-sans">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 border-b border-slate-200 dark:border-slate-800">
          <Search className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search Stellar-Aegis documentation..."
            className="w-full py-4 text-sm text-slate-900 dark:text-white bg-transparent border-none outline-none placeholder:text-slate-400"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Results List */}
        <div className="max-h-96 overflow-y-auto p-2">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-xs text-slate-400">
              Type to search components, features, SDK methods, and security specs...
            </div>
          ) : results.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-400">
              No documentation matches found for &quot;<span className="text-slate-600 dark:text-slate-200">{query}</span>&quot;
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
                    className={`w-full text-left flex items-start gap-3 p-3 rounded-lg text-xs transition-colors ${
                      isSelected
                        ? 'bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-slate-900 dark:text-white'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <FileText className={`w-4 h-4 shrink-0 mt-0.5 ${isSelected ? 'text-cyan-500' : 'text-slate-400'}`} />
                    <div className="flex-1 truncate">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-900 dark:text-white">{item.doc.title}</span>
                        {item.doc.category && (
                          <span className="px-1.5 py-0.5 text-[10px] rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                            {item.doc.category}
                          </span>
                        )}
                      </div>
                      {item.headingMatch && (
                        <div className="flex items-center gap-1 mt-1 text-[11px] text-cyan-600 dark:text-cyan-400 font-medium">
                          <Hash className="w-3 h-3" />
                          <span>{item.headingMatch}</span>
                        </div>
                      )}
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate mt-0.5">
                        {item.snippet || item.doc.description}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 self-center" />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[10px] text-slate-400 font-mono">
          <div className="flex items-center gap-3">
            <span><kbd className="px-1 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">↑↓</kbd> Navigate</span>
            <span><kbd className="px-1 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">↵</kbd> Select</span>
          </div>
          <span><kbd className="px-1 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300">ESC</kbd> Close</span>
        </div>
      </div>
    </div>
  );
}
