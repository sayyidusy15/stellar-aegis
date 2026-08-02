'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SIDEBAR_NAVIGATION, SidebarGroup } from '@/data/docs';
import { ChevronDown, ChevronRight, Folder, FolderOpen, FileText, Shield } from 'lucide-react';

interface SidebarProps {
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export function Sidebar({ mobileOpen, onCloseMobile }: SidebarProps) {
  const pathname = usePathname();
  
  // Track open folders (default components and features open)
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({
    '06': true,
    '07': true,
  });

  const toggleFolder = (id: string) => {
    setOpenFolders((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const isActive = (slug?: string) => {
    if (!slug) return false;
    return pathname === `/docs/${slug}`;
  };

  const isFolderActive = (group: SidebarGroup) => {
    if (group.children) {
      return group.children.some((child) => pathname === `/docs/${child.slug}`);
    }
    return false;
  };

  const content = (
    <div className="flex flex-col h-full py-4 overflow-y-auto font-sans">
      {/* Root Header */}
      <div className="px-4 mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-cyan-600 dark:text-cyan-400">
          <Folder className="w-4 h-4 text-cyan-500" />
          <span>Stellar-Aegis</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
          v1.0.0
        </span>
      </div>

      {/* Sidebar Tree Navigation */}
      <nav className="space-y-0.5 px-2">
        {SIDEBAR_NAVIGATION.map((group) => {
          if (group.isFolder && group.children) {
            const isOpen = !!openFolders[group.id];
            const folderActive = isFolderActive(group);

            return (
              <div key={group.id} className="mb-1">
                {/* Folder Header */}
                <button
                  onClick={() => toggleFolder(group.id)}
                  className={`w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    folderActive
                      ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 dark:bg-cyan-500/10 font-semibold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    {isOpen ? (
                      <FolderOpen className="w-4 h-4 text-cyan-500 shrink-0" />
                    ) : (
                      <Folder className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                    <span className="truncate">{group.title}</span>
                  </div>
                  {isOpen ? (
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  )}
                </button>

                {/* Folder Children Tree */}
                {isOpen && (
                  <div className="mt-1 ml-4 pl-2 border-l border-slate-200 dark:border-slate-800 space-y-0.5">
                    {group.children.map((child) => {
                      const active = isActive(child.slug);
                      return (
                        <Link
                          key={child.slug}
                          href={`/docs/${child.slug}`}
                          onClick={onCloseMobile}
                          className={`flex items-center gap-2 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                            active
                              ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/15 dark:bg-cyan-400/10 font-semibold border-l-2 border-cyan-500'
                              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900'
                          }`}
                        >
                          <FileText className={`w-3.5 h-3.5 shrink-0 ${active ? 'text-cyan-500' : 'text-slate-400'}`} />
                          <span className="truncate">{child.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          // Single Item
          const active = isActive(group.slug);
          return (
            <Link
              key={group.id}
              href={`/docs/${group.slug}`}
              onClick={onCloseMobile}
              className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                active
                  ? 'text-cyan-600 dark:text-cyan-400 bg-cyan-500/15 dark:bg-cyan-400/10 font-semibold border-l-2 border-cyan-500 shadow-2xs'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900'
              }`}
            >
              <FileText className={`w-4 h-4 shrink-0 ${active ? 'text-cyan-500' : 'text-slate-400'}`} />
              <span className="truncate">{group.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer Info inside Sidebar */}
      <div className="mt-auto px-4 pt-6 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 space-y-1">
        <p className="font-semibold text-slate-700 dark:text-slate-300">Soroban Smart Contracts</p>
        <p>Built for Protocol 15 & Soroban Check Auth Host Vector</p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Fixed Left) */}
      <aside className="hidden md:block w-64 lg:w-72 shrink-0 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 h-[calc(100vh-4rem)] sticky top-16 transition-colors">
        {content}
      </aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={onCloseMobile}
          />
          <div className="relative w-72 max-w-full bg-white dark:bg-slate-950 h-full shadow-2xl z-10">
            {content}
          </div>
        </div>
      )}
    </>
  );
}
