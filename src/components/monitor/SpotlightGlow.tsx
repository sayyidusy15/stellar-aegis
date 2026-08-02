'use client';

import React from 'react';

export function SpotlightGlow() {
  return (
    <div 
      className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[240px] pointer-events-none select-none -z-10 opacity-35"
      aria-hidden="true"
    >
      {/* Outer soft halo */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-indigo-600/10 via-purple-700/5 to-transparent blur-3xl"
        style={{ clipPath: 'polygon(44% 0, 56% 0, 100% 100%, 0 100%)' }}
      />
      {/* Middle volumetric cone */}
      <div 
        className="absolute inset-x-8 inset-y-0 bg-gradient-to-b from-indigo-500/15 via-purple-500/5 to-transparent blur-2xl"
        style={{ clipPath: 'polygon(42% 0, 58% 0, 100% 100%, 0 100%)' }}
      />
      {/* Inner bright core */}
      <div 
        className="absolute inset-x-16 inset-y-0 bg-gradient-to-b from-cyan-400/20 via-indigo-500/5 to-transparent blur-xl"
        style={{ clipPath: 'polygon(40% 0, 60% 0, 100% 100%, 0 100%)' }}
      />
    </div>
  );
}
