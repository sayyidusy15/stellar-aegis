'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SidebarGroup, getSidebarNavigation } from '@/data/docs';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/i18n';

interface SidebarProps {
  mobileOpen: boolean;
  onCloseMobile: () => void;
}

export function Sidebar({ mobileOpen, onCloseMobile }: SidebarProps) {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const navItems = getSidebarNavigation(lang);

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
    <div className="flex flex-col h-full py-5 overflow-y-auto">
      {/* Logo / Root Header */}
      <div className="px-5 mb-6 flex items-center justify-between border-b border-[#1a1a1a] pb-4">
        <Link href="/" className="flex items-center group">
          <Image
            src="/logo-aegis-2.png"
            alt="Stellar Aegis"
            width={90}
            height={28}
            className="object-contain brightness-0 invert opacity-75 group-hover:opacity-100 transition-opacity"
          />
        </Link>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-[#2a2a2a] text-[#555] bg-[#0d0d0d]">
          {t(lang, 'sidebar.version')}
        </span>
      </div>

      {/* Sidebar Nav Tree */}
      <nav className="space-y-0.5 px-3 flex-1">
        {navItems.map((group) => {
          if (group.isFolder && group.children) {
            const isOpen = !!openFolders[group.id];
            const folderActive = isFolderActive(group);

            return (
              <div key={group.id} className="mb-1">
                {/* Folder Header */}
                <button
                  onClick={() => toggleFolder(group.id)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs font-mono font-semibold uppercase tracking-widest transition-colors ${
                    folderActive
                      ? 'text-[#FF4747]'
                      : 'text-[#555] hover:text-[#8a8a8a]'
                  }`}
                >
                  <span className="truncate">{group.title}</span>
                  {isOpen ? (
                    <ChevronDown className="w-3 h-3 shrink-0" />
                  ) : (
                    <ChevronRight className="w-3 h-3 shrink-0" />
                  )}
                </button>

                {/* Children */}
                {isOpen && (
                  <div className="mt-1 ml-3 pl-3 border-l border-[#1f1f1f] space-y-0.5">
                    {group.children.map((child) => {
                      const active = isActive(child.slug);
                      return (
                        <Link
                          key={child.slug}
                          href={`/docs/${child.slug}`}
                          onClick={onCloseMobile}
                          className={`flex items-center gap-2 px-3 py-2 text-xs font-sans font-medium transition-all ${
                            active
                              ? 'text-white border-l-2 border-[#FF4747] -ml-[1px] bg-[#FF4747]/5'
                              : 'text-[#666] hover:text-[#ccc] hover:bg-white/[0.02]'
                          }`}
                        >
                          <span
                            className={`w-1 h-1 rounded-full shrink-0 ${
                              active ? 'bg-[#FF4747]' : 'bg-[#333]'
                            }`}
                          />
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
              className={`flex items-center gap-2.5 px-3 py-2 text-xs font-sans font-medium transition-all ${
                active
                  ? 'text-white border-l-2 border-[#FF4747] bg-[#FF4747]/5'
                  : 'text-[#666] hover:text-[#ccc] hover:bg-white/[0.02]'
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                  active ? 'bg-[#FF4747]' : 'bg-[#2a2a2a]'
                }`}
              />
              <span className="truncate">{group.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer */}
      <div className="mt-auto px-5 pt-5 border-t border-[#1a1a1a] text-[11px] text-[#444] font-mono space-y-1">
        <p className="text-[#666] font-semibold">{t(lang, 'sidebar.footer_title')}</p>
        <p>{t(lang, 'sidebar.footer_subtitle')}</p>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-60 lg:w-64 shrink-0 border-r border-[#1a1a1a] bg-[#000000] h-[calc(100vh-4rem)] sticky top-16">
        {content}
      </aside>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-xs"
            onClick={onCloseMobile}
          />
          <div className="relative w-64 max-w-full bg-[#000000] border-r border-[#1a1a1a] h-full shadow-2xl z-10">
            {content}
          </div>
        </div>
      )}
    </>
  );
}
