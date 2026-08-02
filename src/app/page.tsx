import React from 'react';
import { Metadata } from 'next';
import { GridRails } from '@/components/monitor/GridRails';
import { Navbar } from '@/components/monitor/Navbar';
import { Hero } from '@/components/monitor/Hero';
import { Marquee } from '@/components/monitor/Marquee';
import { ProblemStatement } from '@/components/monitor/ProblemStatement';
import { SolutionThesis } from '@/components/monitor/SolutionThesis';
import { Capabilities } from '@/components/monitor/Capabilities';
import { ArchitectureDiagram } from '@/components/monitor/ArchitectureDiagram';
import { AuthLifecycle } from '@/components/monitor/AuthLifecycle';
import { DevExperience } from '@/components/monitor/DevExperience';
import { FirstPrinciples } from '@/components/monitor/FirstPrinciples';
import { CtaFinal } from '@/components/monitor/CtaFinal';
import { Footer } from '@/components/monitor/Footer';

export const metadata: Metadata = {
  title: 'Stellar Aegis — Authorization Control Plane for Smart Accounts',
  description:
    'Aegis is the Authorization Control Plane for Stellar Smart Accounts — providing session lifecycles, human-readable policies, emergency revocation, and observability on Soroban.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#ffffff] font-sans selection:bg-[#1f1f1f] selection:text-[#ffffff]">
      {/* Fixed vertical rail lines — continuous from top to bottom */}
      <GridRails />

      {/* Sticky Header Navbar */}
      <Navbar />

      {/* 01. HERO — Direct Positioning */}
      <Hero />

      {/* 02. MARQUEE — Ecosystem Primitives */}
      <Marquee />

      {/* 03. PROBLEM — Every Team Rebuilds The Same Infrastructure */}
      <ProblemStatement />

      {/* 04. SOLUTION — Separation of Enforcement & Lifecycle */}
      <SolutionThesis />

      {/* 05. CAPABILITIES — Categorized Protocol Subsystems */}
      <Capabilities />

      {/* 06. ARCHITECTURE — Ecosystem Stack Position */}
      <ArchitectureDiagram />

      {/* 07. LIFECYCLE — Operational Workflow */}
      <AuthLifecycle />

      {/* 08. DEV EXPERIENCE — SDK vs Control Console */}
      <DevExperience />

      {/* 09. FIRST PRINCIPLES — Technical Specifications & ADRs */}
      <FirstPrinciples />

      {/* 10. FINAL CTA — Stop Rebuilding Infrastructure */}
      <CtaFinal />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
