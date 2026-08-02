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
      border: 'border-blue-500/30 bg-blue-500/10 text-blue-900 dark:text-blue-200',
      icon: <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />,
    },
    tip: {
      border: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200',
      icon: <Lightbulb className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />,
    },
    warning: {
      border: 'border-amber-500/30 bg-amber-500/10 text-amber-900 dark:text-amber-200',
      icon: <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />,
    },
    important: {
      border: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-900 dark:text-cyan-200',
      icon: <ShieldAlert className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />,
    },
  };

  const style = styles[type] || styles.note;

  return (
    <div className={`my-6 p-4 rounded-xl border ${style.border} flex items-start gap-3 text-xs leading-relaxed shadow-2xs font-sans`}>
      {style.icon}
      <div>
        <h5 className="font-bold mb-1 text-sm tracking-tight">{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
}
