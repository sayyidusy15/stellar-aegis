import React from 'react';
import { Metadata } from 'next';
import { HomeNavbar } from '@/components/home/HomeNavbar';
import { Hero } from '@/components/home/Hero';
import { NativeAlignment } from '@/components/home/NativeAlignment';
import { Problem } from '@/components/home/Problem';
import { Solution } from '@/components/home/Solution';
import { Features } from '@/components/home/Features';
import { Lifecycle } from '@/components/home/Lifecycle';
import { ArchitectureSection } from '@/components/home/ArchitectureSection';
import { DeveloperExperience } from '@/components/home/DeveloperExperience';
import { RoadmapSection } from '@/components/home/RoadmapSection';
import { DocsSpotlight } from '@/components/home/DocsSpotlight';
import { OpenSourceCommunity } from '@/components/home/OpenSourceCommunity';
import { HomeFooter } from '@/components/home/HomeFooter';

export const metadata: Metadata = {
  title: 'Stellar Aegis — Authorization Control Plane for Stellar Smart Accounts',
  description:
    'Developer-first authorization control plane for Stellar Smart Accounts on Soroban. Managing session lifecycles, policy authoring, emergency revocation, gas sponsorship, and observability.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <HomeNavbar />
      <Hero />
      <NativeAlignment />
      <Problem />
      <Solution />
      <Features />
      <Lifecycle />
      <ArchitectureSection />
      <DeveloperExperience />
      <RoadmapSection />
      <DocsSpotlight />
      <OpenSourceCommunity />
      <HomeFooter />
    </main>
  );
}
