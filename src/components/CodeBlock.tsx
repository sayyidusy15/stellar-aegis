'use client';

import React, { useState } from 'react';
import { Check, Copy, Terminal, Code2 } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ code, language = 'rust', filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split('\n');

  return (
    <div className="my-6 rounded-xl border border-slate-800 bg-slate-950 text-slate-100 shadow-xl overflow-hidden font-mono text-xs">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-slate-400">
        <div className="flex items-center gap-2">
          {language === 'bash' || language === 'terminal' ? (
            <Terminal className="w-4 h-4 text-emerald-400" />
          ) : (
            <Code2 className="w-4 h-4 text-cyan-400" />
          )}
          <span className="font-semibold text-slate-200">{filename || language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] rounded-md bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          title="Copy code snippet"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-semibold">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-slate-400" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content Container */}
      <div className="p-4 overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, idx) => (
              <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                <td className="pr-4 text-right text-slate-600 select-none text-[11px] w-8">
                  {idx + 1}
                </td>
                <td className="pl-2 whitespace-pre text-slate-200">
                  {line}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
