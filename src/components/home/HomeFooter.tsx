'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, ExternalLink, Heart } from 'lucide-react';

export function HomeFooter() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          {/* Brand Column (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-mono font-bold text-sm shadow-md shadow-cyan-500/20">
                <Shield className="w-4 h-4 fill-white/20" />
              </div>
              <span className="font-bold text-lg text-white font-mono">
                Stellar<span className="text-cyan-400">-Aegis</span>
              </span>
            </Link>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-sans">
              Authorization Control Plane for Stellar Smart Accounts. Managing the operational lifecycle of sessions, policies, and revocation on Soroban.
            </p>
            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Stellar Testnet // Protocol 21 Ready</span>
            </div>
          </div>

          {/* Docs Links */}
          <div className="space-y-3 font-mono text-xs">
            <span className="font-bold text-white uppercase text-[11px] tracking-wider block mb-2">
              Documentation
            </span>
            <ul className="space-y-2">
              <li>
                <Link href="/docs/simple-guide" className="hover:text-cyan-400 transition-colors">
                  00. Simple Guide (Awam)
                </Link>
              </li>
              <li>
                <Link href="/docs/project-context" className="hover:text-cyan-400 transition-colors">
                  01. Project Context
                </Link>
              </li>
              <li>
                <Link href="/docs/authorization-lifecycle" className="hover:text-cyan-400 transition-colors">
                  06. Authorization Lifecycle
                </Link>
              </li>
              <li>
                <Link href="/docs/system-architecture" className="hover:text-cyan-400 transition-colors">
                  10. High-Level Architecture
                </Link>
              </li>
              <li>
                <Link href="/docs/smart-account-integration" className="hover:text-cyan-400 transition-colors">
                  15. Smart Account Integration
                </Link>
              </li>
            </ul>
          </div>

          {/* Subsystems Links */}
          <div className="space-y-3 font-mono text-xs">
            <span className="font-bold text-white uppercase text-[11px] tracking-wider block mb-2">
              Subsystems
            </span>
            <ul className="space-y-2">
              <li>
                <Link href="/docs/policy-model" className="hover:text-cyan-400 transition-colors">
                  Policy Model & Compiler
                </Link>
              </li>
              <li>
                <Link href="/docs/session-model" className="hover:text-cyan-400 transition-colors">
                  Session State Machine
                </Link>
              </li>
              <li>
                <Link href="/docs/intent-policies" className="hover:text-cyan-400 transition-colors">
                  Intent Outcome Validation
                </Link>
              </li>
              <li>
                <Link href="/docs/threat-model" className="hover:text-cyan-400 transition-colors">
                  Threat Model & Defense
                </Link>
              </li>
              <li>
                <Link href="/docs/storage-model" className="hover:text-cyan-400 transition-colors">
                  Storage Tiering Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="space-y-3 font-mono text-xs">
            <span className="font-bold text-white uppercase text-[11px] tracking-wider block mb-2">
              Resources
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/stellar/stellar-aegis"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <Link href="/docs/roadmap" className="hover:text-cyan-400 transition-colors">
                  18. Product Roadmap
                </Link>
              </li>
              <li>
                <Link href="/docs/adr" className="hover:text-cyan-400 transition-colors">
                  19. Architecture Decision Records
                </Link>
              </li>
              <li>
                <Link href="/docs/glossary" className="hover:text-cyan-400 transition-colors">
                  17. Glossary of Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <p>© 2026 Stellar Aegis Project. Open Source Software (Apache 2.0 / MIT).</p>
          <p className="flex items-center gap-1">
            <span>Built for the Stellar & Soroban ecosystem</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
