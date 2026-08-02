'use client';

import React from 'react';
import { Info, Lightbulb, AlertTriangle, ShieldAlert } from 'lucide-react';

interface CalloutProps {
  type?: 'note' | 'tip' | 'warning' | 'important';
  title: string;
  text: string;
}

export function Callout({ type = 'note', title, text }: CalloutProps) {
  const styles = {
    note: {
      border: 'border-[#1f1f1f] bg-[#0a0a0a] text-[#cccccc]',
      icon: <Info className="w-5 h-5 text-[#8a8a8a] shrink-0 mt-0.5" />,
    },
    tip: {
      border: 'border-[#1f1f1f] bg-[#0a0a0a] text-[#cccccc]',
      icon: <Lightbulb className="w-5 h-5 text-[#FF4747] shrink-0 mt-0.5" />,
    },
    warning: {
      border: 'border-amber-500/20 bg-amber-500/5 text-amber-200/90',
      icon: <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />,
    },
    important: {
      border: 'border-[#FF4747]/30 bg-[#FF4747]/5 text-white',
      icon: <ShieldAlert className="w-5 h-5 text-[#FF4747] shrink-0 mt-0.5" />,
    },
  };

  const style = styles[type] || styles.note;

  return (
    <div className={`my-6 p-4 border ${style.border} flex items-start gap-3 text-xs leading-relaxed font-sans`}>
      {style.icon}
      <div>
        <h5 className="font-bold mb-1 text-sm tracking-tight text-white">{title}</h5>
        <p className="text-[#8a8a8a]">{text}</p>
      </div>
    </div>
  );
}
