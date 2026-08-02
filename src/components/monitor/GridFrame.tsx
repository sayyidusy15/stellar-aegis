/**
 * GridFrame — layout wrapper that aligns with the global GridRails.
 * Provides horizontal border lines between sections.
 * Does NOT render its own vertical rails (those come from GridRails fixed overlay).
 *
 * GridCell — renders small square corner marks at each cell corner.
 * The squares sit on the grid line intersections like bracket joints.
 */

import React from 'react';

// ── Square corner mark ─────────────────────────────────────────────────────
const SQ = 7; // px — side length of the corner square
const OFF = -4; // px — offset to center the square on the corner point

function CornerSquare({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const isTop  = position === 'tl' || position === 'tr';
  const isLeft = position === 'tl' || position === 'bl';

  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute z-20"
      style={{
        width:  SQ,
        height: SQ,
        top:    isTop  ? OFF  : undefined,
        bottom: !isTop  ? OFF  : undefined,
        left:   isLeft ? OFF  : undefined,
        right:  !isLeft ? OFF : undefined,
        background: '#000000',
        border: '1px solid rgba(138,138,138,0.45)',
      }}
    />
  );
}

// ── GridFrame ──────────────────────────────────────────────────────────────
interface GridFrameProps {
  children: React.ReactNode;
  className?: string;
  corners?: boolean;
  /** Tailwind border classes e.g. "border-b" */
  borderClasses?: string;
}

export function GridFrame({
  children,
  className = '',
  corners = false,
  borderClasses = '',
}: GridFrameProps) {
  return (
    <div
      className={`relative mx-auto max-w-7xl ${borderClasses} ${className}`}
    >
      {corners && (
        <>
          <CornerSquare position="tl" />
          <CornerSquare position="tr" />
          <CornerSquare position="bl" />
          <CornerSquare position="br" />
        </>
      )}
      {children}
    </div>
  );
}

// ── GridCell ───────────────────────────────────────────────────────────────
/**
 * Wrap each cell of a grid/flex layout in GridCell to get corner squares
 * at the four intersection points.
 */
export function GridCell({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <CornerSquare position="tl" />
      <CornerSquare position="tr" />
      <CornerSquare position="bl" />
      <CornerSquare position="br" />
      {children}
    </div>
  );
}
