import React from 'react';
import { Metadata } from 'next';
import { Navbar } from '@/components/monitor/Navbar';
import { Hero } from '@/components/monitor/Hero';
import { Stats } from '@/components/monitor/Stats';
import { BentoFeatures } from '@/components/monitor/BentoFeatures';
import { EngineBreakdown } from '@/components/monitor/EngineBreakdown';
import { Integrations } from '@/components/monitor/Integrations';
import { SocialProof } from '@/components/monitor/SocialProof';
import { Pricing } from '@/components/monitor/Pricing';
import { CtaFinal } from '@/components/monitor/CtaFinal';
import { Footer } from '@/components/monitor/Footer';

export const metadata: Metadata = {
  title: 'MONITOR — Your brand, visible everywhere AI searches',
  description:
    'AI Search Visibility & Monitoring Platform. Track, analyze, and optimize your brand presence across ChatGPT, Perplexity, Claude, Gemini, and AI search engines in real time.',
};

export default function HomePage() {
  return (
    <main
      className="min-h-screen bg-[#000000] text-[#ffffff] font-sans selection:bg-[#1f1f1f] selection:text-[#ffffff]"
    >
      <Navbar />
      <Hero />
      <Stats />
      <BentoFeatures />
      <EngineBreakdown />
      <Integrations />
      <SocialProof />
      <Pricing />
      <CtaFinal />
      <Footer />
    </main>
  );
}
