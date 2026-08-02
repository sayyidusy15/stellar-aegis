'use client';

import React, { useState } from 'react';
import { Check, Copy, Terminal, Code2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { t } from '@/data/i18n';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ code, language = 'rust', filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const { lang } = useLanguage();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split('\n');

  return (
    <div className="my-6 border border-[#1f1f1f] bg-[#050505] text-[#d4d4d4] overflow-hidden font-mono text-xs">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0a0a0a] border-b border-[#1f1f1f] text-[#666]">
        <div className="flex items-center gap-2">
          {language === 'bash' || language === 'terminal' ? (
            <Terminal className="w-4 h-4 text-[#FF4747]" />
          ) : (
            <Code2 className="w-4 h-4 text-[#FF4747]" />
          )}
          <span className="font-semibold text-[#8a8a8a] text-[11px] tracking-wide">
            {filename || language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-2.5 py-1 text-[11px] rounded-md bg-[#141414] hover:bg-[#1f1f1f] text-[#8a8a8a] hover:text-white transition-colors border border-[#262626]"
          title="Copy code snippet"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-[#FF4747]" />
              <span className="text-[#FF4747] font-semibold">{t(lang, 'code.copied')}</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5 text-[#666]" />
              <span>{t(lang, 'code.copy')}</span>
            </>
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="p-4 overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                <td className="pr-4 text-right text-[#444] select-none text-[11px] w-8">
                  {idx + 1}
                </td>
                <td className="pl-2 whitespace-pre text-[#cccccc]">
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
