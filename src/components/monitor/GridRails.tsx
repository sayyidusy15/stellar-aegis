/**
 * GridRails — Fixed full-height vertical rail lines.
 *
 * Renders two absolute vertical lines that align exactly with the
 * left and right edges of a max-w-7xl (1280px) container, centered.
 * These lines are fixed so they are continuous across ALL sections
 * from top to bottom.
 *
 * Place this as a direct child of <body> / root layout, z-index above
 * backgrounds but below interactive content.
 */

'use client';

import React from 'react';

export function GridRails() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-[6]"
      aria-hidden="true"
    >
      {/* Left rail — at left edge of max-w-7xl */}
      <div
        className="absolute top-0 bottom-0 w-px bg-[#8A8A8A]/25"
        style={{ left: 'max(0px, calc(50% - 640px))' }}
      />
      {/* Right rail — at right edge of max-w-7xl */}
      <div
        className="absolute top-0 bottom-0 w-px bg-[#8A8A8A]/25"
        style={{ right: 'max(0px, calc(50% - 640px))' }}
      />
    </div>
  );
}
