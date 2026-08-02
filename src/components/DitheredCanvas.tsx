'use client';

import React, { useEffect, useRef } from 'react';

interface DitheredCanvasProps {
  className?: string;
  density?: number;
  interactive?: boolean;
}

export function DitheredCanvas({ className = '', density = 16, interactive = true }: DitheredCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let mouseX = -1000;
    let mouseY = -1000;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      const step = density;
      const rows = Math.ceil(height / step);
      const cols = Math.ceil(width / step);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * step;
          const y = r * step;

          // Wave math simulating AI Search monitoring matrix
          const distToMouse = Math.hypot(x - mouseX, y - mouseY);
          const mouseEffect = Math.max(0, 1 - distToMouse / 150) * 0.8;
          
          const noise = Math.sin(c * 0.15 + time) * Math.cos(r * 0.15 + time * 0.8);
          const scanline = Math.sin(y * 0.05 - time * 2);
          
          const intensity = Math.min(1, Math.max(0, (noise * 0.3 + scanline * 0.2 + mouseEffect + 0.1)));

          if (intensity > 0.15) {
            const size = intensity > 0.6 ? 2.5 : 1.5;
            const alpha = Math.min(0.7, intensity);
            
            // Dithered monochromatic pixels (#ffffff & #1f1f1f)
            ctx.fillStyle = intensity > 0.75 ? '#ffffff' : `rgba(138, 138, 138, ${alpha})`;
            ctx.fillRect(x, y, size, size);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full pointer-events-none opacity-40 mix-blend-screen ${className}`}
    />
  );
}
