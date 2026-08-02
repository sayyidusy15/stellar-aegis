'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
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
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 transition-colors">
      <Navbar
        onOpenSearch={() => setSearchOpen(true)}
        onToggleMobileSidebar={() => setMobileSidebarOpen((prev) => !prev)}
      />

      <div className="flex-1 flex max-w-8xl w-full mx-auto">
        <Sidebar
          mobileOpen={mobileSidebarOpen}
          onCloseMobile={() => setMobileSidebarOpen(false)}
        />

        <main className="flex-1 min-w-0 px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>

      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
    </div>
  );
}
