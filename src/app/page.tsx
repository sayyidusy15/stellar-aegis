import React from 'react';
import { Metadata } from 'next';
import { GridRails } from '@/components/monitor/GridRails';
import { Navbar } from '@/components/monitor/Navbar';
import { Hero } from '@/components/monitor/Hero';
import { Marquee } from '@/components/monitor/Marquee';
import { Statement } from '@/components/monitor/Statement';
import { Stats } from '@/components/monitor/Stats';
import { SolutionThesis } from '@/components/monitor/SolutionThesis';
import { Capabilities } from '@/components/monitor/Capabilities';
import { AuthLifecycle } from '@/components/monitor/AuthLifecycle';
import { BentoFeatures } from '@/components/monitor/BentoFeatures';
import { EngineBreakdown } from '@/components/monitor/EngineBreakdown';
import { Integrations } from '@/components/monitor/Integrations';
import { SocialProof } from '@/components/monitor/SocialProof';
import { Pricing } from '@/components/monitor/Pricing';
import { CtaFinal } from '@/components/monitor/CtaFinal';
import { Footer } from '@/components/monitor/Footer';

export const metadata: Metadata = {
  title: 'Stellar Aegis — Authorization Control Plane for Smart Accounts',
  description:
    'Aegis brings granular session policies, passkey-native authentication, and lifecycle-aware authorization to Stellar Smart Accounts — without replacing your existing setup.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#ffffff] font-sans selection:bg-[#1f1f1f] selection:text-[#ffffff]">
      {/* Fixed vertical rail lines — continuous from top to bottom */}
      <GridRails />
      <Navbar />
      <Hero />
      <Marquee />
      <Statement />
      <Stats />
      <SolutionThesis />
      <Capabilities />
      <AuthLifecycle />
      {/* <BentoFeatures /> */}
      {/* <EngineBreakdown /> */}
      {/* <Integrations /> */}
      {/* <SocialProof /> */}
      {/* <Pricing /> */}
      <CtaFinal />
      <Footer />
    </main>
  );
}
