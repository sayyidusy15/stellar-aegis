'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Search, ArrowRight, ShieldCheck, FileText, Lock, Cpu } from 'lucide-react';

export function DocsSpotlight() {
  const docCategories = [
    { title: '00. Simple Guide', desc: 'Penjelasan sederhana dalam bahasa Indonesia dengan analogi kehidupan nyata.' },
    { title: '01. Project Context', desc: 'Visi, filosofi, dan positioning Aegis sebagai Authorization Control Plane.' },
    { title: '06. Authorization Lifecycle', desc: '8 tahapan siklus hidup otorisasi dari registrasi hingga peluruhan TTL.' },
    { title: '07. Policy Model', desc: 'Format YAML kebijakan, Policy Compiler, dan penegakan deterministik.' },
    { title: '10. High-Level Architecture', desc: 'Model arsitektur hibrida on-chain vs off-chain control plane.' },
    { title: '15. Smart Account Integration', desc: 'Panduan teknis dan contoh kode Rust Soroban untuk check_auth.' },
  ];

  return (
    <section className="py-24 bg-slate-950 text-white border-t border-slate-800/80 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left CTA Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-bold">
                <BookOpen className="w-4 h-4" />
                <span>19 Comprehensive Pages</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight leading-tight">
                Official Developer Documentation
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                Explore in-depth specifications, architectural models, security threat vectors, Rust code samples, and decision records.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/docs/simple-guide"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-mono font-bold text-xs shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-all"
                >
                  <span>Explore Documentation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/docs/simple-guide"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 text-xs font-mono font-semibold transition-all"
                >
                  <span>Simple Guide (Awam)</span>
                </Link>
              </div>
            </div>

            {/* Right Preview Grid of Doc Pages */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              {docCategories.map((doc, idx) => (
                <Link
                  key={idx}
                  href="/docs/overview"
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-cyan-500/40 transition-all hover:bg-slate-900/90 group"
                >
                  <span className="font-bold text-cyan-400 block mb-1 group-hover:underline">{doc.title}</span>
                  <span className="text-[11px] text-slate-400 font-sans leading-relaxed block">{doc.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
