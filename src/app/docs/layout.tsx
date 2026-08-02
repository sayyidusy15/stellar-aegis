'use client';

import React, { useState } from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { DocsNavbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { SearchModal } from '@/components/SearchModal';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-[#000000]">
        <DocsNavbar
          onOpenSearch={() => setSearchOpen(true)}
          onToggleMobileSidebar={() => setMobileSidebarOpen((prev) => !prev)}
        />

        <div className="flex-1 flex w-full">
          <Sidebar
            mobileOpen={mobileSidebarOpen}
            onCloseMobile={() => setMobileSidebarOpen(false)}
          />

          <main className="flex-1 min-w-0 px-6 lg:px-10 py-10">
            {children}
          </main>
        </div>

        <SearchModal
          isOpen={searchOpen}
          onClose={() => setSearchOpen(false)}
        />
      </div>
    </LanguageProvider>
  );
}
